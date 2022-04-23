const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    created: Date
});

module.exports = Account = mongoose.model('account', accountSchema);