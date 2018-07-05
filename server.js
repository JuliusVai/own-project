const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");
const noodle = require("noodlejs");

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/recipes/:ingredient", function(req, res) {
  const url = `http://food2fork.com/api/search?key=39dc02b747cfdc3931310e79c3d471b9&q=${
    req.params.ingredient
  }`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.json(data);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
