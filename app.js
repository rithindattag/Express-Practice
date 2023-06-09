const express = require("express");
const app = express();

// req => middleware => res
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  console.log(method, url, year);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server listening at port 5000...");
});
