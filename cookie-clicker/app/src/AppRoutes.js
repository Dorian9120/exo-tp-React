import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import App from "./App";
import Succes from "./Succes";

export default function AppRoutes() {
  const [succes, setSucces] = useState([
    { id: 1, nom: "Premier contrat", objectif: 100, unlocked: false },
    { id: 2, nom: "Artiste confirmé", objectif: 1000, unlocked: false },
    { id: 3, nom: "Superstar", objectif: 10000, unlocked: false },
    { id: 4, nom: "Icône mondiale", objectif: 50000, unlocked: false },
  ]);
  const [cookies, setCookies] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <App succes={succes} setSucces={setSucces} cookies={cookies} />
          }
        />
        <Route
          path="/succes"
          element={<Succes succes={succes} cookies={cookies} />}
        />
      </Routes>
    </Router>
  );
}
