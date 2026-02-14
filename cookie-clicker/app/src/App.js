import { useState, useEffect, navigate } from "react";
import CookieButton from "./CookieButton";
import UpgradeList from "./UpgradeList";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import mils from "./assets/mils.jpg";
import mils2 from "./assets/M-i-l-s-2-0.jpg";
import mils3 from "./assets/MILS-3-0.jpg";
import ninho from "./assets/ninho.jpg";
import destin from "./assets/destin.jpg";
import cmp from "./assets/cmp.jpg";
import jefe from "./assets/jefe.jpg";
import ni from "./assets/NI.jpg";
import goat from "./assets/goat.jpg";
import mils4 from "./assets/M-I-L-S-4.jpg";

function App({ succes, setSucces }) {
  const [cookies, setCookies] = useState(0);
  const [productionAuto, setProductionAuto] = useState(0);
  const [multiplicateur, setMultiplicateur] = useState(1);
  const [album, setAlbum] = useState();
  const navigate = useNavigate();

  const [ameliorations, setAmeliorations] = useState([
    { id: 1, nom: "Séance Dédicace", coutBase: 500, bonus: 5, nbAchats: 0 },
    { id: 2, nom: "Interview", coutBase: 1000, bonus: 10, nbAchats: 0 },
    { id: 3, nom: "Concert", coutBase: 1500, bonus: 15, nbAchats: 0 },
    { id: 4, nom: "Tournée", coutBase: 2500, bonus: 20, nbAchats: 0 },
    { id: 5, nom: "Signature Label", coutBase: 5000, bonus: 25, nbAchats: 0 },
  ]);

  const [multiplicateursArray, setMultiplicateursArray] = useState([
    {
      id: 1,
      nom: "x2 - M.I.L.S",
      album: "M.I.L.S",
      valeur: 2,
      cout: 50,
      isBought: false,
    },
    {
      id: 2,
      nom: "x4 - Comme prévu",
      album: "Comme prévu",
      valeur: 4,
      cout: 200,
      isBought: false,
    },
    {
      id: 3,
      nom: "x6 - M.I.L.S 2.0",
      album: "M.I.L.S 2.0",
      valeur: 6,
      cout: 400,
      isBought: false,
    },
    {
      id: 4,
      nom: "x8 - Destin",
      album: "Destin",
      valeur: 8,
      cout: 600,
      isBought: false,
    },
    {
      id: 5,
      nom: "x10 - M.I.L.S 3.0",
      album: "M.I.L.S 3.0",
      valeur: 10,
      cout: 1000,
      isBought: false,
    },
    {
      id: 6,
      nom: "x12 - Jefe",
      album: "Jefe",
      valeur: 12,
      cout: 1500,
      isBought: false,
    },
    {
      id: 7,
      nom: "x14 - NI",
      album: "NI",
      valeur: 14,
      cout: 2000,
      isBought: false,
    },
    {
      id: 8,
      nom: "x16 - GOAT",
      album: "Goat",
      valeur: 16,
      cout: 3000,
      isBought: false,
    },
    {
      id: 9,
      nom: "x20 - M.I.L.S 4.0",
      album: "M.I.L.S 4.0",
      valeur: 20,
      cout: 5000,
      isBought: false,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((prev) => prev + productionAuto);
    }, 1000);

    return () => clearInterval(interval);
  }, [productionAuto]);

  useEffect(() => {
    succes.forEach((s) => {
      if (!s.unlocked && cookies >= s.objectif) {
        toast.success(`🎉 Succès débloqué : ${s.nom} !`);

        setSucces((prev) =>
          prev.map((item) =>
            item.id === s.id ? { ...item, unlocked: true } : item,
          ),
        );
      }
    });
  }, [cookies]);

  const handleClickCookie = () => {
    setCookies((prev) => prev + multiplicateur);
  };

  const getImageByMultiplicateur = () => {
    if (multiplicateur >= 20) return mils4;
    if (multiplicateur >= 16) return goat;
    if (multiplicateur >= 14) return ni;
    if (multiplicateur >= 12) return jefe;
    if (multiplicateur >= 10) return mils3;
    if (multiplicateur >= 8) return destin;
    if (multiplicateur >= 6) return mils2;
    if (multiplicateur >= 4) return cmp;
    if (multiplicateur >= 2) return mils;
    return ninho;
  };

  const sauvegarderPartie = () => {
    const data = {
      cookies,
      multiplicateur,
      multiplicateursArray,
      ameliorations,
      succes,
    };

    localStorage.setItem("cookieGameSave", JSON.stringify(data));
    console.log("Données sauvegardé : ", data);
    alert("Partie sauvegardée !");
  };

  const chargerPartie = () => {
    const save = localStorage.getItem("cookieGameSave");

    if (!save) {
      alert("Aucune sauvegarde trouvée !");
      return;
    }

    const data = JSON.parse(save);

    setCookies(data.cookies);
    setMultiplicateur(data.multiplicateur);
    setMultiplicateursArray(data.multiplicateursArray);
    setAmeliorations(data.ameliorations);
    setSucces(data.succes);

    alert("Partie chargée !");
  };

  return (
    <div className="App">
      <i
        className="bx bx-user login-icon"
        onClick={() => navigate("/succes")}
      />
      <h1 className="h1">Ninho album Clicker</h1>

      <CookieButton
        onClick={handleClickCookie}
        cookies={cookies}
        image={getImageByMultiplicateur()}
        album={album}
        multiplicateur={multiplicateur}
        sauvegarderPartie={sauvegarderPartie}
        chargerPartie={chargerPartie}
      />
      <UpgradeList
        cookies={cookies}
        setCookies={setCookies}
        productionAuto={productionAuto}
        setProductionAuto={setProductionAuto}
        multiplicateursArray={multiplicateursArray}
        setMultiplicateursArray={setMultiplicateursArray}
        ameliorations={ameliorations}
        setAmeliorations={setAmeliorations}
        setMultiplicateur={setMultiplicateur}
        setAlbum={setAlbum}
      />

      <ToastContainer />
    </div>
  );
}

export default App;
