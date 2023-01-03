const { Router } = require("express");
const router = Router();
const controller = require("../controllers/userController");
const { authenticateToken } = require("../middleware/JWT");

router.get("/", authenticateToken, controller.getUser);
router.post("/register", controller.register);
router.post("/login", controller.login);
router.put("/updateFavorite", controller.updateFavorite);
router.put("/removeFavorite", controller.removeFavorite);

module.exports = router;
