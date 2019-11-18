const gamesJSON = require("./games");
const Games = require("../models/game");
const meetupJSON = require("./meetup");

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
    const meetupsArray = []
    for(let i = 0; i < item.meetups.length; i++) {
        for(let j = 0; j < gamesJSON.length; j++) {
            if(item.meetups[i] === gamesJSON[j]._id) {
                meetupsArray.push(gamesJSON[j]);
            }
        }
    }
const meetups = {}
meetups.location = item.location
meetups.time = item.time
meetups.date = item.date
meetups.creator = item.creator
meetups.description = item.description
meetups.players = item.players
return meetups
});

BuildTogether();

function BuildTogether() {
    Meetups.deleteMany({}).then(() => {
        Meetups.create(meetupJSON)
        .then(data => {
            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
    });
}