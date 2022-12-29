const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Schema = mongoose.Schema;

const RegionSchema = new Schema({
  name: String,
});

const region = mongoose.model("Region", RegionSchema);

module.exports = region;
