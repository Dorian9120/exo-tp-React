import "./Succes.css";
import { useNavigate } from "react-router-dom";

function Succes({ succes, cookies }) {
  const navigate = useNavigate();
  return (
    <div className="succes-panel">
      <div className="succes-back" onClick={() => navigate("/")}>
        ← Retour
      </div>
      <h2 className="succes-title">🏆 Succès</h2>

      {succes.map((s) => {
        const progress = Math.min((cookies / s.objectif) * 100, 100);

        return (
          <div
            key={s.id}
            className={`succes-card ${s.unlocked ? "unlocked" : "locked"}`}
          >
            <div className="succes-header">
              <span className="succes-icon">{s.unlocked ? "🏆" : "🔒"}</span>
              <span className="succes-name">{s.nom}</span>
            </div>

            <div className="succes-objectif">
              Objectif : {s.objectif.toLocaleString()} cookies
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Succes;
