const express = require("express");
const app = express();
const mongoose = require("mongoose")
const parser = require("body-parser");
const cors = require("cors");
const Meetups = require("./models/meetup.js");

mongoose.set('useFindAndModify', false);
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(cors());

app.post("/meetups", function (req, res) {
    Meetups.create(req.body).then(meetups => {
        res.json(meetups);
    })
})

app.get("/", function (req, res) {
    Meetups.find({}).then(meetups => {
        res.json(meetups);
    })
})







app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});