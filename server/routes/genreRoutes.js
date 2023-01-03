const { Router } = require("express");
const router = Router();
const controller = require("../controllers/genreController");

router.get("/", controller.getGenres);

module.exports = router;
