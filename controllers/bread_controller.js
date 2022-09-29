const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");

//Index
breads.get("/", (req, res) => {
  res.send(Bread);
});

//Show
breads.get("/:arrayIndex", (req, res) => {
  res.send(Bread[req.params.arrayIndex]);
});

module.exports = breads;
