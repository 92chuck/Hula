const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

const SeriesSchema = new Schema({
  title: String,
  overview: String,
  firstAiredDate: Date,
  genres: [{ type: refType, ref: "Genre" }],
  region: { type: refType, ref: "Region" },
});

const Series = mongoose.model("Series", SeriesSchema);

module.exports = Series;
