const express = require("express");
const path = require("path");

const app = express();

require("dotenv").config({ path: path.join(__dirname, "/.env") });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", async (req, res) => {
  res.json({
    data: "hello",
  });
});

module.exports = app;
