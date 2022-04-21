const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postStateSchema = new Schema({
    username: String,
    ref: mongoose.Schema.Types.ObjectId,
    vote: {
        type: String,
        default: "neutral"
    },
    saved: {
        type: Boolean,
        default: false
    }
});

module.exports = PostState = mongoose.model('PostState', postStateSchema, "PostStates");