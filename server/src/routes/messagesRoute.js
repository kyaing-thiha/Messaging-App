const express = require("express");

const router = express.Router();

const messageController = require("../controllers/messageController")

router.post("/conversation", messageController.retrieveConversations)
router.post("/send", messageController.sendMessages);

module.exports = router;