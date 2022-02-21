const mongo = require('mongoose');
const Schema = mongo.Schema;

const UserScheme = new Schema({
    username: String,
});

module.exports = mongo.model('User', UserScheme);
