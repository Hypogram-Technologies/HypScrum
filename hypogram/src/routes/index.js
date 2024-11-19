const express = require("express");
const router = express.Router();
const pageController = require("../controller/pageController");
const userController = require("../controller/userController");

router.get("/:page", pageController.renderPage);

router.post("/criarUsuario", userController.criarUsuario);

router.post("/loginUser", userController.loginUser);

module.exports = router;
