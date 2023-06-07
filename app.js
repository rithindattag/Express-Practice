const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Hello there!</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map((products) => {
        const { id, name, image } = products;
        return { id, name, image };
    })
  res.json(newProducts);
});

app.listen(5000, () => {
  console.log("Server listening at port 5000...");
});
