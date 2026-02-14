const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3001;

app.use(cors());

app.get("/products", (req, res) => {
  const products = [
    {
      nom: "Lentille",
      description: "Riche en protéines",
      prix: 3,
      image:
        "https://www.papillesetpupilles.fr/wp-content/uploads/2019/03/Lentilles-Copyright-zi3000-shutterstock.jpg",
    },
    {
      nom: "Chocolat",
      description: "Du bon chocolat noir",
      prix: 5,
      image:
        "https://img.passeportsante.net/1200x675/2021-05-03/i102005-chocolat-nu.webp",
    },
    {
      nom: "Orange",
      description: "Pleine de vitamines",
      prix: 2,
      image:
        "http://media2.popsugar-assets.com/files/thumbor/5bDtJLUd5u858BagEWhcAXZ8EG4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2012/11/47/1/192/1922195/574f46474ab2683d_shutterstock_49887109/i/Oranges.jpg",
    },
  ];

  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Backend lancé sur http://localhost:${PORT}`);
});
