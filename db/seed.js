const Meetup = require("../models/meetup")
const meetupJSON = require("./meetup");

const meetupData = meetupJSON.map(item => {
    const meetups = {}
    meetups.location = item.location
    meetups.time = item.time
    meetups.date = item.date
    meetups.creator = item.creator
    meetups.description = item.description
    meetups.players = item.players
    meetups.game = item.game
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


