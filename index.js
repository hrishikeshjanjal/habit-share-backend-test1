// requiring express js and create a port
const express = require("express");
const app = express();
const port = 5000;
const db = require("./config/mongoose");
const path = require("path");
const expressLayout = require("express-ejs-layouts");

// setting view engines
app.set("view engine", "ejs");
app.set("views", "./views");

// adding database Path
app.set("views", path.join(__dirname, "views"));

//adding styles to pages
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(express.urlencoded());
app.use(express.static("./assets"));
app.use(expressLayout);

// using router
app.use("/", require("./routes/index"));

// handling port when listening
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in starting the server : ${err}`);
    return;
  }
  console.log(`Server is successfully running at port no : ${port}`);
});
