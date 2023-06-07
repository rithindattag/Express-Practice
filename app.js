const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Hello there!</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
    res.json(products);
})

app.listen(5000, () => {
  console.log("Server listening at port 5000...");
});
