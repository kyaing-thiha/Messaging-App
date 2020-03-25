const mongoose = require("mongoose");
const Minion = require("../models/Minion");
const bcrypt = require("bcrypt");

function hashPassword(itemToHash, callback){
    bcrypt.hash(
        itemToHash,
        bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT)),
        function (error, hash) {
            if (error) { next(error) }
            if (hash) { callback(hash) }
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

    hashPassword(req.body.password, saveNewMinion);
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
                res.status(200).json({
                    token,
                    minion
                })
            } else{
                const error = new Error("Authentication Failed");
                error.status = 404;
                next(error);
            }
        })
        .catch((error) => next(error))
}

exports.getAllMinions = (req, res, next) => {
    Minion.find()
            .then(minions => {
                return minions.map(minion => ({
                        _id: minion._id,
                        name: minion.name
                    })
                )})
            .then(minionList => res.status(200).json(minionList))
            .catch(error => next(error))
}