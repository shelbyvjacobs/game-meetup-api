const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema

const meetupSchema = new mongoose.Schema({
    "location": String,
    "time": String,
    "date": Date,
    "creator": String,
    "description": String,
    "players": [Number]
});

const meetups = mongoose.model("meetups", meetupSchema);
module.exports = meetups;