const Genre = require("../models/Genre");
const Region = require("../models/Region");
const Movie = require("../models/Movie");
const Series = require("../models/Series");

const shuffle = (data) => {
  for (let i = data.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
};

exports.getContents = async (req, res) => {
  try {
    const allMovies = await Movie.find().populate("genres").populate("region");
    const allSeries = await Series.find().populate("genres").populate("region");
    const allContents = allMovies.concat(allSeries);

    /**
     * documentary
     */
    const trending = allSeries.sort(
      (a, b) => a.firstAiredDate - b.firstAiredDate
    );
    /**
     * documentary
     */
    const documentary = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Documentary";
      });
    });
    shuffle(documentary);
    /**
     * Drama
     */
    const drama = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Drama";
      });
    });
    shuffle(drama);
    /**
     * family
     */
    const family = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Family";
      });
    });
    shuffle(family);
    /**
     * history
     */
    const history = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "History";
      });
    });
    shuffle(history);
    /**
     * music
     */
    const music = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Music";
      });
    });
    shuffle(music);
    /**
     * mystery
     */
    const mystery = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Mystery";
      });
    });
    shuffle(mystery);
    /**
     * news
     */
    const news = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "News";
      });
    });
    shuffle(news);
    /**
     * realityTV
     */
    const realityTV = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Reality-TV";
      });
    });
    shuffle(realityTV);
    /**
     * romance
     */
    const romance = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Romance";
      });
    });
    shuffle(romance);
    /**
     * sicence
     */
    const sicence = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Sicence";
      });
    });
    shuffle(sicence);
    /**
     * education
     */
    const education = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Education";
      });
    });
    shuffle(education);
    /**
     * nature
     */
    const nature = allContents.filter((content) => {
      return content.genres.some((genre) => {
        return genre.name === "Nature";
      });
    });
    shuffle(nature);

    const contents = {
      trending,
      documentary,
      drama,
      family,
      history,
      music,
      mystery,
      news,
      realityTV,
      romance,
      sicence,
      education,
      nature,
    };
    res.json(contents);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
};

exports.getContent = async (req, res) => {
  try {
    let content;
    let category;
    content = await Movie.findOne({ title: req.query.param })
      .populate("genres")
      .populate("region");
    category = "movie";
    if (!content) {
      content = await Series.findOne({ title: req.query.param })
        .populate("genres")
        .populate("region");
      category = "series";
    }
    let genres = [];
    content.genres.forEach((genre) => {
      genres.push(genre.name);
    });
    const randomGenre =
      genres[Math.floor(Math.random() * genres.length)].toLowerCase();

    res.status(200).json({
      content: content,
      randomGenre: randomGenre,
      category: category,
    });
  } catch (e) {
    console.error(e);
    res.status(500);
  }
};
