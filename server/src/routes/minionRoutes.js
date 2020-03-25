require('dotenv').config();
const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Minion = require("../models/Minion");

const router = express.Router();
const minionController = require("../controllers/minionController")

router.post("/createMinion", minionController.createMinion)
router.post("/signIn", minionController.signIn);
router.get("/getAllMinions", minionController.getAllMinions)

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