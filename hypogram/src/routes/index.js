const express = require("express");
const router = express.Router();
const pageController = require("../controller/pageController");

router.get("/:page", pageController.renderPage);

module.exports = router;
