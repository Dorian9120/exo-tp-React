import Magasin from "./Magasin";
import CDP from "./CDP";
import GuessNumber from "./GuessNumber";

function Accueil() {
  return (
    <div>
      <Magasin hour={20} />
      <br />
      <br />
      <CDP />
      <br />
      <br />
      <GuessNumber />
      <br />
      <br />
    </div>
  );
}

export default Accueil;
