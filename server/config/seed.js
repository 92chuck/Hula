const path = require("path");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config(path.join(__dirname, "../.env"));

const { MONGO_URL, SALT } = process.env;

/**
 * Models
 */

const User = require("../models/User");
const Series = require("../models/Series");
const Movie = require("../models/Movie");
const Genre = require("../models/Genre");
const Region = require("../models/Region");

async function run() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB.");

    /**
     * Reset Database
     */

    await Promise.all([
      User.collection.drop(),
      Series.collection.drop(),
      Movie.collection.drop(),
      Genre.collection.drop(),
      Region.collection.drop(),
    ]);

    /**
     * Seed User and Admin
     */

    const userpasswordHash = await bcrypt.hash("User1@", parseInt(SALT));
    const createUser = await User.create({
      username: "user1",
      email: "user1@gmail.com",
      password: userpasswordHash,
      isAdmin: false,
    });

    const adminpasswordHash = await bcrypt.hash("Admin1@", parseInt(SALT));
    const createAdminUser = await User.create({
      username: "admin1",
      email: "admin1@gmail.com",
      password: adminpasswordHash,
      isAdmin: true,
    });

    /**
     * Genre Seed
     */

    const genresName = [
      "Documentary",
      "Drama",
      "Family",
      "History",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sicence",
      "Education",
      "Nature",
    ];

    const genres = [];
    for (let i = 0; i < genresName.length; i++) {
      genres.push({
        name: genresName[i],
      });
    }

    const insertManyGenres = await Genre.insertMany(genres);

    const documentary = await Genre.findOne({
      name: "Documentary",
    });
    const drama = await Genre.findOne({
      name: "Drama",
    });
    const family = await Genre.findOne({
      name: "Family",
    });
    const history = await Genre.findOne({
      name: "History",
    });
    const music = await Genre.findOne({
      name: "Music",
    });
    const mystery = await Genre.findOne({
      name: "Mystery",
    });
    const news = await Genre.findOne({
      name: "News",
    });
    const realityTV = await Genre.findOne({
      name: "Reality-TV",
    });
    const romance = await Genre.findOne({
      name: "Romance",
    });
    const sicence = await Genre.findOne({
      name: "Sicence",
    });
    const education = await Genre.findOne({
      name: "Education",
    });
    const nature = await Genre.findOne({
      name: "Nature",
    });

    /**
     * Region Seed
     */
    const RegionsName = [
      "United States of America",
      "Canada",
      "United Kingdom",
      "France",
    ];

    const regions = [];
    for (let i = 0; i < RegionsName.length; i++) {
      regions.push({
        name: RegionsName[i],
      });
    }

    const insertManyRegions = await Region.insertMany(regions);

    const unitedStates = await Region.findOne({
      name: "United States of America",
    });
    const canada = await Region.findOne({
      name: "Canada",
    });
    const unitedKingdom = await Region.findOne({
      name: "United Kingdom",
    });
    const france = await Region.findOne({
      name: "France",
    });

    /**
     * Series Seed
     */

    const series = [
      {
        title: "Monday",
        overview:
          "Monday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
        firstAiredDate: "2022-11-23",
        genres: [
          documentary._id,
          drama._id,
          family._id,
          history._id,
          music._id,
          mystery._id,
        ],
        region: unitedStates._id,
      },
      {
        title: "Samurai",
        overview:
          "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.",
        firstAiredDate: "2022-10-12",
        genres: [
          documentary._id,
          drama._id,
          family._id,
          history._id,
          music._id,
          mystery._id,
        ],
        region: canada._id,
      },
      {
        title: "Paper of House",
        overview:
          "Disguised under the shadows of a mask, a crew of desperados band together under the leadership of a criminal mastermind known only as “The Professor” to pull off the biggest heist Korea has ever seen.",
        firstAiredDate: "2022-06-24",
        genres: [
          documentary._id,
          drama._id,
          family._id,
          history._id,
          music._id,
          mystery._id,
        ],
        region: unitedKingdom._id,
      },
      {
        title: "John and Kate",
        overview:
          "John is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Kate in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Kate's already unstable family life, these events cause Kate much distress at home and school.",
        firstAiredDate: "2013-09-25",
        genres: [
          documentary._id,
          drama._id,
          family._id,
          history._id,
          music._id,
          mystery._id,
        ],
        region: france._id,
      },
      {
        title: "Owen's Anatomy",
        overview:
          "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
        firstAiredDate: "2005-02-23",
        genres: [
          documentary._id,
          drama._id,
          family._id,
          history._id,
          music._id,
          mystery._id,
        ],
        region: unitedStates._id,
      },
      {
        title: "Godfather of Harlem",
        overview:
          "Inspired by actual persons and events, Godfather of Harlem reimagines the story of infamous crime boss Bumpy Johnson (Academy Award®- winner Forest Whitaker), who in the early 1960s returned from ten years in prison to find the neighborhood he once ruled in shambles.",
        firstAiredDate: "2005-02-23",
        genres: [
          documentary._id,
          drama._id,
          family._id,
          history._id,
          music._id,
          mystery._id,
        ],
        region: canada._id,
      },
    ];

    const insertManySeries = await Series.insertMany(series);

    /**
     * Movies Seed
     */

    const movies = [
      {
        title: "Guillermo del Toro's Pinocchio",
        overview:
          "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
        releaseDate: "2022-11-09",
        genres: [
          news._id,
          realityTV._id,
          romance._id,
          sicence._id,
          education._id,
          nature._id,
        ],
        region: unitedKingdom._id,
      },
      {
        title: "My Name Is Vendetta",
        overview:
          "After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.",
        releaseDate: "2022-11-30",
        genres: [
          news._id,
          realityTV._id,
          romance._id,
          sicence._id,
          education._id,
          nature._id,
        ],
        region: france._id,
      },
      {
        title: "R.I.P.D. 2: Rise of the Damned",
        overview:
          "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
        releaseDate: "2022-11-15",
        genres: [
          news._id,
          realityTV._id,
          romance._id,
          sicence._id,
          education._id,
          nature._id,
        ],
        region: unitedStates._id,
      },
      {
        title: "The Boss Baby: Christmas Bonus",
        overview:
          "Christmas Eve takes a twisty turn when the Boss Baby accidentally swaps places with one of Santa's elves and gets stranded at the North Pole.",
        releaseDate: "2022-12-06",
        genres: [
          news._id,
          realityTV._id,
          romance._id,
          sicence._id,
          education._id,
          nature._id,
        ],
        region: canada._id,
      },
      {
        title: "Troll",
        overview:
          "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
        releaseDate: "2022-12-01",
        genres: [
          news._id,
          realityTV._id,
          romance._id,
          sicence._id,
          education._id,
          nature._id,
        ],
        region: unitedKingdom._id,
      },
      {
        title: "The Queen's Man",
        overview:
          "One queen races against time to stop a group of tyrants and criminal masterminds plotting a world war.",
        releaseDate: "2021-01-21",
        genres: [
          news._id,
          realityTV._id,
          romance._id,
          sicence._id,
          education._id,
          nature._id,
        ],
        region: france._id,
      },
    ];

    const insertManyMovies = await Movie.insertMany(movies);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
    console.log("Seed completed!");
  }
}

run().catch(console.dir);
