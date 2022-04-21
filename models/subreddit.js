const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subredditSchema = new Schema({
    name: String,
    description: String
});

module.exports = Subreddit = mongoose.model('subreddit', subredditSchema);