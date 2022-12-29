const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: String,
});

const genre = mongoose.model("Genre", genreSchema);

module.exports = genre;
