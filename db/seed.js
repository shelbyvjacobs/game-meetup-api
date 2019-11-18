const gamesJSON = require("./games");
const Games = require("../models/Games");

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

Games.deleteMany({})
    .then(() => {
        Games.create(gamesData)
            .then(games => {
                console.log(games)
                process.exit();
            })
            .catch(err => {
                console.log(err)
                process.exit()
            })
    })