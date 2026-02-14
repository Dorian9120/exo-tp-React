import "./ProductPreview.css";
function ProductPreview(props) {
  return (
    <div className="product-card">
      <h3>{props.nom}</h3>
      <p>{props.description}</p>
      <p>
        <strong>{props.prix} €</strong>
      </p>
    </div>
  );
}

export default ProductPreview;
