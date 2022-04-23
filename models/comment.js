const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    body: String,
    time: {
        type: Date,
        default: Date.now()
    },
    username: String,
    ref: mongoose.Schema.Types.ObjectId,
    votes: {
        type: Number,
        default: 0
    }
});

module.exports = Comment = mongoose.model('comment', commentSchema);