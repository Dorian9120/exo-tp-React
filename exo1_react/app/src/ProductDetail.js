function ProductDetail(props) {
  return (
    <div>
      <h2>{props.nom}</h2>
      <p>Prix : {props.prix} €</p>
      <p>Description : {props.description}</p>
      <p>Quantité : {props.quantité}</p>
    </div>
  );
}

export default ProductDetail;
