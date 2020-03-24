const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sender: String,
    receiver: String,
    content: String,
    timeStamp: Date
});

module.exports = mongoose.model('Message', messageSchema);