const gamesJSON = require("./games");
const Games = require("../models/game");
const Meetup = require("../models/meetup")
const meetupJSON = require("./meetup");

function gameMeet(gameMeetups, games){
    let gameAndMeet = [];
    gameMeetups.map(meetUpId => {
        games.map(games => {
            if (meetUpId === meetups._id){
                gameAndMeet.push(games)
            }
        })
    })
    return gameAndMeet;
}

const gamesData = gamesJSON.map(item => {
    const games = {}
    games.name = item.name
    games.id = item.id
    games.image_url = item.image_url
    games.year_published = item.year_published
    games.min_players = item.min_players
    games.max_players = item.max_players
    games.game_url = item.game_url
    games.description = item.description
    return games
})

    const meetupData = meetupJSON.map(item => {
    const meetups = {}
    meetups.location = item.location
    meetups.time = item.time
    meetups.date = item.date
    meetups.creator = item.creator
    meetups.description = item.description
    meetups.players = item.players
    meetups.game = gameMeet(item.game, gamesData)
    return meetups
})

Meetup.deleteMany({})
.then(() => {
    Meetup.create(meetupData)
    .then(meetup => {
        console.log(meetup)
        process.exit();
    })
    .catch(err => {
        console.log(err)
        process.exit();
    })
})

Games.deleteMany({})
    .then(() => {
        Games.create(gamesData)
        .then(games => {
            console.log(games)
        })
        .catch(err => {
            console.log(err)
        })
    })

