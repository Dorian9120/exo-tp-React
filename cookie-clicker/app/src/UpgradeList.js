import "./UpgradeList.css";
import { toast } from "react-toastify";

function UpgradeList({
  cookies,
  setCookies,
  productionAuto,
  setProductionAuto,
  multiplicateursArray,
  setMultiplicateursArray,
  ameliorations,
  setAmeliorations,
  setMultiplicateur,
  setAlbum,
}) {
  const acheterAmelioration = (id) => {
    const amel = ameliorations.find((a) => a.id === id);
    const cout = Math.floor(amel.coutBase * Math.pow(1.15, amel.nbAchats));

    if (cookies < cout) {
      toast.error("❌ Pas assez de cookies !");
      return;
    }

    setCookies((prev) => prev - cout);
    setProductionAuto((prev) => prev + amel.bonus);
    setAmeliorations((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, nbAchats: Math.min(a.nbAchats + 1, 5) } : a,
      ),
    );

    toast.success(`🎵 ${amel.nom} débloqué(e) au niveau supérieur 🎵`);
  };

  const acheterMultiplicateur = (id) => {
    const multi = multiplicateursArray.find((m) => m.id === id);
    if (!multi) return;

    if (cookies < multi.cout || multi.isBought) {
      toast.error("❌ Multiplicateur non disponible !");
      return;
    }
    setCookies((prev) => prev - multi.cout);
    setMultiplicateur(multi.valeur);
    setAlbum(multi.album);
    toast.info(`🚀 Multiplicateur x${multi.valeur} activé !`);

    setMultiplicateursArray((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isBought: true } : m)),
    );
  };

  return (
    <div className="upgrade-list">
      <h2 className="h2-multi">Multiplicateurs de cliques</h2>
      {multiplicateursArray.map((multi) => (
        <button
          key={multi.id}
          className={`upgrade-item 
    ${cookies < multi.cout ? "disabled-cost" : ""} 
    ${multi.isBought ? "disabled-max" : ""}`}
          onClick={() => acheterMultiplicateur(multi.id)}
          disabled={multi.isBought || cookies < multi.cout}
        >
          <span>
            <strong>{multi.nom}</strong> {multi.isBought ? "✅" : "🔒"}
          </span>
          <span>
            <strong>Coût : </strong>
            {multi.cout}
          </span>
        </button>
      ))}

      <h2>Cliques Auto</h2>
      {ameliorations.map((amel) => {
        const cout = Math.floor(amel.coutBase * Math.pow(1.15, amel.nbAchats));
        return (
          <button
            key={amel.id}
            className={`upgrade-item 
            ${cookies < cout ? "disabled-cost" : ""} 
            ${amel.nbAchats >= 5 ? "disabled-max" : ""}`}
            onClick={() => acheterAmelioration(amel.id)}
            disabled={amel.nbAchats >= 5 || cookies < cout}
          >
            <span>
              <strong>{amel.nom} </strong>
              (+{amel.bonus}/sec)
            </span>

            <span>
              <strong>Niveau : </strong>
              {amel.nbAchats}
            </span>

            <span>
              <span className={amel.nbAchats > 0 ? "niveau-actif" : ""}></span>
            </span>

            <span>
              <strong>Coût : </strong>
              {cout}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default UpgradeList;
