const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema

const meetupSchema = new mongoose.Schema({
    "id": String,
    "location": String,
    "time": String,
    "date": String,
    "creator": String,
    "description": String,
    "players": [Number]
});

const meetups = mongoose.model("meetups", meetupSchema);
module.exports = meetups;