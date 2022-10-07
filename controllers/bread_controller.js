const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");

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

//Edit
breads.get("/:arrayIndex/edit", (req, res) => {
  res.render("edit", {
    bread: Bread[req.params.arrayIndex],
    index: req.params.arrayIndex,
  });
});

//Show
breads.get("/:id", (req, res) => {
  Bread.findById(req.params.id)
    .then((foundBread) => {
      res.render("show", {
        bread: foundBread,
      });
    })
    .catch((err) => {
      res.status(404).render("404");
    });
});

//Update
breads.put("/:arrayIndex", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread[req.params.arrayIndex] = req.body;
  res.status(200).redirect(`/breads/${req.params.arrayIndex}`);
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
breads.delete("/:indexArray", (req, res) => {
  Bread.splice(req.params.indexArray, 1);
  res.status(303).redirect("/breads");
});

module.exports = breads;
