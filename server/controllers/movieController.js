const Movie = require("../models/Movie");
const Genre = require("../models/Genre");
const Region = require("../models/Region");
const User = require("../models/User");

exports.getMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find().populate("genres").populate("region");
    res.json(allMovies);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
};
