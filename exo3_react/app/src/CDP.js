import React from "react";

class CDP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 0,
    };
  }

  incrementer = () => {
    this.setState({ nombre: this.state.nombre + 1 });
  };

  decrementer = () => {
    if (this.state.nombre > 0) {
      this.setState({ nombre: this.state.nombre - 1 });
    }
  };

  render() {
    if (this.state.nombre >= 10) {
      return <p>La salle est complète.</p>;
    }

    return (
      <div>
        <p>Nombre de personnes : {this.state.nombre}</p>
        <button onClick={this.incrementer}>Incrémenter</button>
        <button onClick={this.decrementer}>Décrémenter</button>
      </div>
    );
  }
}

export default CDP;
