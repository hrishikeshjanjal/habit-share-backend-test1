const mongoose = require("mongoose");
// connecting to mongoose
mongoose.connect("mongodb://localhost/Habit_share_rj");
// mongoose database connection
const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "Error connecting to Mongo Database")
);

db.once("open", function () {
  console.log("Connected to Database Mondo Database");
});

module.exports = db;
