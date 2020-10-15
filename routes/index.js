//require express and router
const express = require("express");
const router = express.Router();

// set homepage controller
const homeController = require("../controllers/home_controller");
router.get("/", homeController.home);

//habit route from home controller
router.post("/create-habit", homeController.createHabit);

//habit route from home controller
router.get("/delete-habit/", homeController.deleteHabit);

//details routes from home controller
router.use("/details", require("./details"));

module.exports = router;
