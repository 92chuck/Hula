const { Router } = require("express");
const router = Router();
const controller = require("../controllers/contentsController");

router.get("/", controller.getContents);
router.get("/content", controller.getContent);

module.exports = router;
