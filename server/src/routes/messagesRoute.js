const express = require("express");
const mongoose = require("mongoose");
const Message = require("../models/Message")

const router = express.Router();

router.post("/conversation", (req, res, next)=>{
    const query = {
        $or: [
            {$and: [{sender: req.senderId}, {receiver: req.body.with}]},
            {$and: [{sender: req.body.with}, {receiver: req.senderId}]}
        ]
    }
    Message.find(query)
        .then(messages=>res.status(200).json(messages))
        .catch(error => next(error))
})

router.post("/send", (req, res, next)=>{
    const newMessage = new Message({
        _id: new mongoose.Types.ObjectId(),
        sender: req.senderId,
        receiver: req.body.receiver,
        content: req.body.content,
        timeStamp: Date.now()
    });

    newMessage.save()
    .then(message => res.json(message))
    .catch(error=>next(error))
});

module.exports = router;