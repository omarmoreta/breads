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
    .populate({
      path: "breads",
      options: { limit: 2 },
    })
    .then((foundBaker) => {
      res.render("bakerShow", {
        baker: foundBaker,
      });
    });
});

baker.delete("/:id", (req, res) => {
  Baker.findByIdAndDelete(req.params.id).then((deletedBaker) => {
    res.status(303).redirect("/breads");
  });
});

module.exports = baker;
