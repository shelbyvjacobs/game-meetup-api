const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    "name": String,
    "password": String,
    "email": String,
    "your_meetups": [String],
    "fav_games": [String]
});

const users = mongoose.model("users", userSchema);
module.exports = users;
