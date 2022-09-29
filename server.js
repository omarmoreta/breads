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

//Breads
const breadsController = require("./controllers/bread_controller");
app.use("/breads", breadsController);

//Listen
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
