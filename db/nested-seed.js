const gamesJSON = require("./games");
const Game = require("../models/game");
const Meetup = require("../models/meetup")
const meetupJSON = require("./meetup");

Meetup.find({})
    .then(meetups => {
        console.log(meetups)
        meetups.forEach(meetup => {
            let meetupData = meetupJSON.find( meetupData => meetupData.title === meetup.name)
            Game.findOne({ title: meetupData.members })
                .then(game => {
                    meetup.game = game._id
                    meetup.save()
                })
        })
    })