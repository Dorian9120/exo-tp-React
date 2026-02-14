import "./App.css";
import React from "react";
import Accueil from "./Accueil";
import Contact from "./Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "accueil",
    };
  }

  pageContact = (event) => {
    event.preventDefault();
    this.setState({ currentPage: "contact" });
  };

  pageAccueil = (event) => {
    event.preventDefault();
    this.setState({ currentPage: "accueil" });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <a href="/" onClick={this.pageAccueil}>
            Accueil
          </a>{" "}
          |{" "}
          <a href="/contact" onClick={this.pageContact}>
            Contact
          </a>
        </nav>

        <br />

        {this.state.currentPage === "accueil" && <Accueil />}
        {this.state.currentPage === "contact" && <Contact />}
      </div>
    );
  }
}

export default App;
