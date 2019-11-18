const express = require("express");
const app = express();
const mongoose = require("mongoose")
const parser = require("body-parser");
const cors = require("cors");

mongoose.set('useFindAndModify', false);
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(cors());