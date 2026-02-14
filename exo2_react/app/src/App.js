import "./App.css";
import "./ProductPreview.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <h1>Introduction à React 2</h1>
      <h2>Voici nos produits :</h2>
      <div className="products">
        {products.map((p, index) => (
          <div key={index} className="product">
            <img src={p.image} alt={p.nom} className="product-img" />
            <p>{p.nom}</p>
            <p>{p.description}</p>
            <p>{p.prix} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
