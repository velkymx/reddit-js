const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subredditSchema = new Schema({
    subject: String,
    description: String,
    account_id: String,
}, { timestamps: true });

module.exports = Subreddit = mongoose.model('subreddit', subredditSchema);
