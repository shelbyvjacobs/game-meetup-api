const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema

const gameSchema = new Schema({
    "_id": {
        type: Schema.ObjectId,
        trim: true,
        auto: true
    },
    "year_published": Number,
    "image_url": String,
    "name": String,
    "min_players": Number,
    "max_players": Number,
    "url": String,
    "description": String
});

const games = mongoose.model("games", gameSchema);
module.exports = games;
