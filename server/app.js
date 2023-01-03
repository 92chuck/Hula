const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config({ path: path.join(__dirname, "/.env") });

const userRouter = require("./routes/userRoutes");
const seriesRouter = require("./routes/seriesRoutes");
const movieRouter = require("./routes/movieRoutes");
const genreRouter = require("./routes/genreRoutes");
const regionRouter = require("./routes/regionRoutes");
const contentsRouter = require("./routes/contentsRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * routes
 */
app.get("/", (req, res) => {
  res.json("hi");
});

app.use("/users", userRouter);
app.use("/series", seriesRouter);
app.use("/movies", movieRouter);
app.use("/genres", genreRouter);
app.use("/regions", regionRouter);
app.use("/contents", contentsRouter);

module.exports = app;
