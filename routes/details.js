const express = require("express");
const router = express.Router();

//user controller
const detailsController = require("../controllers/details_controller");
router.get("/", detailsController.details);

// update route: Habits
router.post("/update-habit/", detailsController.updateHabit);
module.exports = router;
