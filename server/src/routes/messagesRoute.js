const express = require("express");
const mongoose = require("mongoose");
const Message = require("../models/Message")

const router = express.Router();

router.post("/retrieve", (req, res, next)=>{
    const query = {
        $or: [
            {$and: [{sender: req.senderId}, {receiver: req.body.with}]},
            {$and: [{receiver: req.senderId}, {sender: req.body.with}]}
        ]
    }
    Message.find(query)
        .then(messages=>res.json(messages))
        .catch(error => console.log(error))
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
    .catch(err=>console.log(err))
});

module.exports = router;