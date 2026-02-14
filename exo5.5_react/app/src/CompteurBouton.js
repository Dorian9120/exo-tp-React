import { useState } from "react";
import Bouton from "./Bouton";

function CompteurBouton() {
  const [nbClick, setNbClick] = useState(0);

  function incrementer() {
    setNbClick(nbClick + 1);
  }

  function afficherPopup() {
    alert("tu as clické");
  }

  return (
    <div>
      <p>Nombre de clics : {nbClick}</p>
      <Bouton onClick={incrementer} label="Incrémenter" />
      <Bouton onClick={afficherPopup} label="Afficher popup" />
    </div>
  );
}

export default CompteurBouton;
