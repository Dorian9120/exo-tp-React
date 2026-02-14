import { useState } from "react";
import GuessNumber from "./GuessNumber";
import Contact from "./Contact";
import Welcome from "./Welcome";
import CountClick from "./CountClick";
import ProductList from "./ProductList";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  return (
    <div>
      <a
        href="welcome"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("welcome");
        }}
      >
        Accueil
      </a>

      {" | "}

      <a
        href="contact"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("contact");
        }}
      >
        Contact
      </a>
      {" | "}

      <a
        href="guess-number"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("guessNumber");
        }}
      >
        GuessNumber
      </a>

      {" | "}

      <a
        href="count-click"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("countClick");
        }}
      >
        CountClick
      </a>

      {" | "}

      <a
        href="product-list"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("productList");
        }}
      >
        ProductList
      </a>

      {currentPage === "welcome" && <Welcome />}
      {currentPage === "guessNumber" && <GuessNumber />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "countClick" && <CountClick />}
      {currentPage === "productList" && <ProductList />}
    </div>
  );
}

export default App;
