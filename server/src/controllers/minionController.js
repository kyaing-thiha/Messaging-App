const mongoose = require("mongoose");
const Minion = require("../models/Minion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function hashPassword(itemToHash, success, failure){
    bcrypt.hash(
        itemToHash,
        bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT)),
        function (error, hash) {
            if (error) { failure(error) }
            if (hash) { success(hash) }
        }
    )
}

exports.createMinion = (req, res, next) => {
    function saveNewMinion(hashedPassword) {
        const newMinion = new Minion({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            password: hashedPassword,
            profilePic: req.body.profilePic || null,
        });
        newMinion.save()
            .then((minion) => {
                res.status(200).json(minion)
            })
            .catch(
                (error) => next(error)
            );
    }

    hashPassword(req.body.password, saveNewMinion, next);
}

exports.signIn = (req, res, next) => {
    Minion.findOne({ name: req.body.name })
        .then((minion) => {
            if (bcrypt.compareSync(req.body.password, minion.password)) {
                const token = jwt.sign({
                    _id: minion._id,
                    name: minion.name
                    },
                    process.env.JWT_KEY,
                    { expiresIn: "1h" }
                );
                res.status(200).json({ token })
            } else{
                const error = new Error("Authentication Failed");
                error.status = 404;
                next(error);
            }
        })
        .catch((error) => next(error))
}

exports.getMinionData = async (req, res, next) => {
    try{
        const filterFields = {_id: 1, name: 1, profilePic: 1};
        const minionData =  await Minion.findOne(
                                    { _id: req.senderId },
                                    filterFields);

        const minionPals = await Minion.find(
                                        {_id: {$ne: req.senderId}}, 
                                        filterFields)
        res.status(200).json({
            _id: minionData._id,
            name: minionData.name,
            profilePic: minionData.profilePic,
            minionPals: minionPals
        });
    } 
    catch(error){
        next(error)
    }
}

exports.uploadMinionPhoto =  (req, res, next) => {
    const imagePath = "http://localhost:8080/profilePics/" + req.file.filename;
    Minion.updateOne(
        { name: req.body.name },
        {
            $set: {
            profilePic: imagePath
            }
        }
    ).then(minon => 
        res.status(200).json({
            imagePath: imagePath
        })
    )
}