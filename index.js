const express = require("express");
const app = express();
const mongoose = require("mongoose")
const parser = require("body-parser");
const cors = require("cors");
const Meetup = require("./models/meetup.js");
const Game = require("./models/game.js")

mongoose.set('useFindAndModify', false);
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(cors());

//Create Meetup
app.post("/meetup", function (req, res) {
    Meetup.create(req.body).then(meetup => {
        res.json(meetup);
    })
})

//Find Meetups
app.get("/", function (req, res) {
    Meetup.find({}).then(meetup => {
        res.json(meetup);
    })
})

//Find Games
app.get("/games", function (req, res) {
    Game.find({}).then(game => {
        res.json(game);
    })
})

//Edit Meetups
app.put("/meetup/id/:id", function(req, res){
    Meetup.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true
    }).then(meetup => {
        res.json(meetup);
    });
});

app.put('/meetup/id/:id', (req, res) => {
    Meetup.findOneAndUpdate({ _id: req.params.id }, 
    { $addToSet: { attendees: req.body }}, { new: true })
    .then(meetup => {
        res.json(meetup)
    })
    .catch(err => {
        res.send(err)
    });
})




// app.put("/meetup/attendees/:id", function(req, res){
//    Meetup.findOneAndUpdate({ attendees: req.params.attendees },
//     req.body, {
//         new: true
//     }).then(meetup => {
//         res.json(meetup);
//     }) 
// })

//Delete Meetups
app.delete("/meetup/id/:id", function(req, res) {
    Meetup.findOneAndDelete({ _id: req.params.id }).then(meetup => {
        res.json(meetup);
    })
})

app.set("port", process.env.PORT || 6080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

//Edit and Delete Work 