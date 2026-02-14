const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

let products = [{ nom: "Chocolat", description: "Chocolat noir", prix: 5 }];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/new-product", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);

  res.json({
    message: "Produit ajouté",
    products: products,
  });
});

app.listen(port, () => {
  console.log("Serveur lancé sur le port", port);
});
