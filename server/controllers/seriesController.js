const Series = require("../models/Series");
const Genre = require("../models/Genre");
const Region = require("../models/Region");

exports.getSeries = async (req, res) => {
  try {
    const allSeries = await Series.find().populate("genres").populate("region");
    res.json(allSeries);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
};
