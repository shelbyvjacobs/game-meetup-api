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

app.post("/meetup", function (req, res) {
    Meetup.create(req.body).then(meetup => {
        res.json(meetup);
    })
})

app.get("/", function (req, res) {
    Meetup.find({}).then(meetup => {
        res.json(meetup);
    })
})







app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});