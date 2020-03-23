const express = require("express");
const router = express.Router();

const mockMessages = require("../mocks/mockMessages")

/*
* Return all messages between user1 and user2
*/
router.get("/:user1/:user2", (req, res, next) => {
    const user1 = req.params.user1;
    const user2 = req.params.user2;

    const filteredMessages = mockMessages.filter(message => {
        return (
            (message.sender == user1 && message.receiver == user2) ||
            (message.sender == user2 && message.receiver == user1)
        )
    })

    res.json(filteredMessages);
})

module.exports = router;