const mongoose = require("mongoose");

const minionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    profilePic: String,
});

module.exports = mongoose.model('Minion', minionSchema);