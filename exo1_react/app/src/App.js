import "./App.css";
import Title from "./Title";
import ProductDetail from "./ProductDetail";
import Majeur from "./Majeur";

function App(props) {
  return (
    <div className="App">
      <h1>Bonjour {props.name} !</h1>
      <Title />
      <ProductDetail
        nom="Chocolat"
        prix={5}
        description="du bon chocolat noir"
        quantité={5}
      />
      <Majeur age={5} />
    </div>
  );
}

export default App;
