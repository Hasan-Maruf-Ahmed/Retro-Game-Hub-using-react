const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true 
    },
    email: {
        type: String,
        required: true,
    },
    score:{
        type: Number,

    },
    date:{
        type: String,
        default: Date.now()
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;   