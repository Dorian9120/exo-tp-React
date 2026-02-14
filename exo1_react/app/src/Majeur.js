function Majeur(props) {
  let message;

  if (props.age < 18) {
    message = "Tu es mineur !";
  } else {
    message = "Tu es majeur !";
  }
  return (
    <div>
      <p>Âge : {props.age}</p>
      <p>{message}</p>
    </div>
  );
}

export default Majeur;
