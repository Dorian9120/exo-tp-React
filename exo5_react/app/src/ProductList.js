import { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") //api public qui envoie une liste de produits
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du fetch :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Liste des produits</h2>

      {loading && <p>Chargement...</p>}

      {!loading && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title} - {product.price} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
