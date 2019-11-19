const mongoose = require('../db/connection.js');
const Games = require('./game');
const Schema = mongoose.Schema

const meetupSchema = new Schema({
   "title": String,
   "_id": {
       type: Schema.ObjectId,
       trim: true,
       auto: true
   },
    "location": String,
    "time": String,
    "date": String,
    "creator": String,
    "description": String,
    "players": [Number],
    "game": String
});

const meetup = mongoose.model("meetup", meetupSchema);
module.exports = meetup;