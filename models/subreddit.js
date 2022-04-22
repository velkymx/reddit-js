const mongoose = require('mongoose');

const subredditSchema = new Schema({
    subject: String,
    description: String,
    account_id: String,
}, { timestamps: true });

module.exports = mongoose.model('Subreddit', subredditSchema);