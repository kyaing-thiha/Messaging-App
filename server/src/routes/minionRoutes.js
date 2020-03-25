const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Minion = require("../models/Minion");

const router = express.Router();

router.post("/createMinion", (req, res, next) => {
    function saveNewMinion(hashedPassword) {
        const newMinion = new Minion({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            password: hashedPassword,
            profilePic: req.body.profilePic,
        });
        newMinion.save()
            .then((minion) => {
                res.json(minion)
            })
            .catch(
                (error) => next(error)
            );
    }

    bcrypt.hash(
        req.body.password,
        bcrypt.genSaltSync(process.env.BCRYPT_SALT),
        function (err, hash) {
            if (error) { next(error) }
            if (hash) { saveNewMinion(hash) }
        }
    )
}

)

router.post("/signIn", (req, res, next) => {
    Minion.findOne({
        name: req.body.name
    })
        .then((minion) => {
            if (bcrypt.compareSync(req.body.password, minion.password)) {
                const token = jwt.sign({
                    _id: minion._id,
                    name: minion.name
                },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
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
});

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'profilePics/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
})

router.post("/uploadProfilePic", upload.single('profilePic'), (req, res, next) => {
    res.json({});
})

module.exports = router;