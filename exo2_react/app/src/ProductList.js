import ProductPreview from "./ProducPreview";
import "./ProductList.css";

function ProductList(props) {
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        <ProductPreview
          key={index}
          nom={product.nom}
          description={product.description}
          prix={product.prix}
        />
      ))}
    </div>
  );
}

export default ProductList;
