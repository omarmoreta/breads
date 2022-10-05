const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");

//Index
breads.get("/", (req, res) => {
  res.render("index", { breads: Bread, title: "Index Page" });
  //   res.send(Bread);
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
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("show", {
      bread: Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    });
  } else {
    res.status(404).render("404");
  }
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
  console.log(req.body);
  if (!req.body.image) {
    req.body.image =
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = "true";
  } else {
    req.body.hasGluten = "false";
  }
  Bread.push(req.body);
  res.status(200).redirect("/breads");
});

//Delete
breads.delete("/:indexArray", (req, res) => {
  Bread.splice(req.params.indexArray, 1);
  res.status(303).redirect("/breads");
});

module.exports = breads;
