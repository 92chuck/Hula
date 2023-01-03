const Genre = require("../models/Genre");

const shuffle = (data) => {
  for (let i = data.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
};

exports.getGenres = async (req, res) => {
  try {
    const allGenres = await Genre.find();
    shuffle(allGenres);
    const randomGenres = allGenres.slice(0, 6);
    res.json(randomGenres);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
};
