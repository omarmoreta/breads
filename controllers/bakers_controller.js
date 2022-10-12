const express = require("express");
const baker = express.Router();
const Baker = require("../models/bakers");
const bakerSeeder = require("../seeders/baker_seeds");

baker.get("/data/seed", (req, res) => {
  Baker.insertMany(bakerSeeder).then(res.redirect("/breads"));
});

baker.get("/", (req, res) => {
  Baker.find()
    .populate("breads")
    .then((foundBakers) => {
      res.send(foundBakers);
    });
});

baker.get("/:id", (req, res) => {
  Baker.findById(req.params.id)
    .populate("breads")
    .then((foundBaker) => {
      res.render("bakerShow", {
        baker: foundBaker,
      });
    });
});

module.exports = baker;
