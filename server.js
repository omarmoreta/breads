//Dependencies
const express = require("express");
const methodOverride = require("method-override");

//Config
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

//Middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});

//Breads
const breadsController = require("./controllers/bread_controller");
app.use("/breads", breadsController);

// 404 page & catch-all route
app.get("*", (req, res) => {
  res.render("404");
});

//Listen
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
