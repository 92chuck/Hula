const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

const MovieSchema = new Schema({
  title: String,
  overview: String,
  releaseDate: Date,
  genres: [{ type: refType, ref: "Genre" }],
  region: { type: refType, ref: "Region" },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
