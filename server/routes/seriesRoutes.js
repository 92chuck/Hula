const { Router } = require("express");
const router = Router();
const controller = require("../controllers/seriesController");

router.get("/", controller.getSeries);

module.exports = router;
