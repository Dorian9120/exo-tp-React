function Magasin(props) {
  if (props.hour >= 9 && props.hour <= 18) {
    return (
      <div>
        <h2>Magasin Ouvert !</h2>
        <p>Il est {props.hour}h.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Magasin Fermé.</h2>
        <p>Il est {props.hour}h.</p>
      </div>
    );
  }
}

export default Magasin;
