const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");
const seed = require("../seeders/seeds");

//Index
breads.get("/", (req, res) => {
  Bread.find().then((foundBreads) => {
    res.render("index", { breads: foundBreads, title: "Index Page" });
  });
});

//New
breads.get("/new", (req, res) => {
  res.render("new");
});

//Seed
breads.get("/data/seed", (req, res) => {
  Bread.insertMany(seed).then((createdBreads) => {
    res.redirect("/breads");
  });
});

//Edit
breads.get("/:id/edit", (req, res) => {
  Bread.findById(req.params.id).then((foundBread) => {
    res.render("edit", {
      bread: foundBread,
    });
  });
});

//Show
breads.get("/:id", (req, res) => {
  Bread.findById(req.params.id)
    .then((foundBread) => {
      const bakedBy = foundBread.getBakedBy();
      console.log(bakedBy);
      res.render("show", {
        bread: foundBread,
      });
    })
    .catch((err) => {
      res.status(404).render("404");
    });
});

//Update
breads.put("/:id", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedBread) => {
      console.log(updatedBread);
      res.status(200).redirect(`/breads/${req.params.id}`);
    }
  );
});

//Create
breads.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = "true";
  } else {
    req.body.hasGluten = "false";
  }
  Bread.create(req.body);
  res.status(200).redirect("/breads");
});

//Delete
breads.delete("/:id", (req, res) => {
  Bread.findByIdAndDelete(req.params.id).then((deletedBread) => {
    res.status(303).redirect("/breads");
  });
});

module.exports = breads;
