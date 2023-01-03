const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

const MovieSchema = new Schema({
  url: String,
  title: String,
  overview: String,
  firstAiredDate: Date,
  genres: [{ type: refType, ref: "Genre" }],
  region: { type: refType, ref: "Region" },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
