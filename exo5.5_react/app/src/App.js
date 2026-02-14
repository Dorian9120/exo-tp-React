import { useState } from "react";
import PageAccueil from "./PageAccueil";
import Contact from "./Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  return (
    <div>
      {currentPage === "welcome" && (
        <PageAccueil setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "contact" && <Contact setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
