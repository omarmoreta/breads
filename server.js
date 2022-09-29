//Dependencies
const express = require("express");

//Config
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});

//Listen
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
