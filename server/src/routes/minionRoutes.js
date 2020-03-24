const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const Minion = require("../models/Minion");

const router = express.Router();

router.post("/createMinion", (req, res, next)=>{
    const newMinion = new Minion({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        password: req.body.password,
        profilePic: req.body.profilePic,
    });
    newMinion.save()
            .then((minion) => {
                res.json(minion)
            })
            .catch(
                (err)=>console.log({Error: err})
                );
})

router.post("/signIn", (req, res, next)=>{
    Minion.findOne({
        name: req.body.name
        })
        .then((minion)=>{
                if (minion.password === req.body.password){
                    res.json({
                        token: null,
                        minion
                    })
                }
            })
        .catch((err)=>console.log({Error:err}))
});

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null, 'profilePics/');
        },
        filename: function(req, file, cb) {
          cb(null, file.originalname);
        }
      })
})

router.post("/uploadProfilePic", upload.single('profilePic'),(req, res, next)=>{
    res.json({});
})

module.exports = router;