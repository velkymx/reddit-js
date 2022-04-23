const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentStateSchema = new Schema({
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


module.exports = CommentState = mongoose.model('CommentState', commentStateSchema, "CommentStates");