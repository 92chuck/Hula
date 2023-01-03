const { Router } = require("express");
const router = Router();
const controller = require("../controllers/movieController");

router.get("/", controller.getMovies);

module.exports = router;
