const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema

const gameSchema = new mongoose.Schema({
    "image": String,
    "name": String,
    "directions": String,
    "min_players": Number,
    "max_players": Number,
    "game_url": String,
    "description": String
});

const games = mongoose.model("games", gameSchema);
module.exports = games;
