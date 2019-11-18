const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/", { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose;