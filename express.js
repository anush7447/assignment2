const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Test<h1>`);
});

app.get("/users/:id", (req, res) => {
  res.send({
    id : req.params.id,
    path: "/users/" + req.params.id,
  });
});

app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});