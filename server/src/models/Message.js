const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Minion',
        require: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Minion',
        require: true
    },
    content: {
        type: String,
        require: true
    },
    timeStamp: {
        type: Date,
        require: true
    }
});

module.exports = mongoose.model('Message', messageSchema);