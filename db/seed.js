const Meetup = require("../models/meetup")
const meetupJSON = require("./meetup");
const gamesJSON = require("./games");
const Games = require("../models/game");

const meetupData = meetupJSON.map(item => {
    const meetups = {}
    meetups.title = item.title,
    meetups.location = item.location
    meetups.time = item.time
    meetups.date = item.date
    meetups.creator = item.creator
    meetups.description = item.description
    meetups.players = item.players
    meetups.game = item.game
    meetups.attendees = item.attendees
    return meetups
})

const gamesData = gamesJSON.map(item => {
    const games = {}
    games.name = item.name
    games.id = item.id
    games.image_url = item.image_url
    games.year_published = item.year_published
    games.min_players = item.min_players
    games.max_players = item.max_players
    games.official_url = item.official_url
    games.description = item.description
    return games
})

Games.deleteMany({})
    .then(() => {
        Games.create(gamesData)
        .then(games => {
            console.log(games)
            process.exit();
        })
        .catch(err => {
            console.log(err)
            process.exit();
        })
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


