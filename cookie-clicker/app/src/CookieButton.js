import { useState } from "react";
import "./CookieButton.css";

function CookieButton({
  onClick,
  cookies,
  image,
  album,
  multiplicateur,
  sauvegarderPartie,
  chargerPartie,
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [clicks, setClicks] = useState([]);

  const handleClick = (e) => {
    onClick();

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 150);

    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newClick = {
      id: Date.now(),
      x,
      y,
      value: multiplicateur,
    };

    setClicks((prev) => [...prev, newClick]);

    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
    }, 800);
  };

  return (
    <div className="cookie-container">
      <div className="image-wrapper">
        {album && <h2 className="h2-cookie">Album : {album}</h2>}
        <img
          src={image}
          alt="Album"
          className={`cookie-button ${isAnimating ? "clicked" : ""}`}
          onClick={handleClick}
        />

        {clicks.map((click) => (
          <span
            key={click.id}
            className="floating-text"
            style={{ left: click.x, top: click.y }}
          >
            +{click.value}
          </span>
        ))}
      </div>
      {album ? (
        <p className="p-cookie">Ventes actuelles : {cookies}</p>
      ) : (
        <p className="p-cookie">Nombre d'auditeurs(trices) : {cookies}</p>
      )}
      <div className="save-buttons">
        <button onClick={sauvegarderPartie}>💾 Sauvegarder</button>
        <button onClick={chargerPartie}>📂 Charger</button>
      </div>
    </div>
  );
}

export default CookieButton;
