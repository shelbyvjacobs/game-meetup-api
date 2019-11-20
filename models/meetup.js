const mongoose = require('../db/connection.js');
const Games = require('./game');
const Schema = mongoose.Schema

const meetupSchema = new Schema({
   "_id": {
       type: Schema.ObjectId,
       trim: true,
       auto: true
   },
    "title": String,
    "location": String,
    "time": String,
    "date": String,
    "creator": String,
    "description": String,
    "players": [Number],
    "game": String,
    "attendees": [{
        type: String
    }]
});

const meetup = mongoose.model("meetup", meetupSchema);
module.exports = meetup;