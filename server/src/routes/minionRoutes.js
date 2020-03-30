require('dotenv').config();
const express = require("express");
const multer = require("multer");

const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const minionController = require("../controllers/minionController")

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

router.post("/createMinion", minionController.createMinion)
router.post("/signIn", minionController.signIn);
router.post("/signOut", minionController.signOut);
router.post("/getMinionData", authenticate, minionController.getMinionData);
router.post("/uploadProfilePic", upload.single('profilePic'), minionController.uploadMinionPhoto);

module.exports = router;