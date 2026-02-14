import React from "react";

class GuessNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: Math.floor(Math.random() * 10) + 1,
      userInput: "",
      message: "",
    };
  }

  handleInput = (event) => {
    const value = event.target.value;

    this.setState({ userInput: value });

    const number = parseInt(value, 10);
    const { randomNumber } = this.state;

    if (!isNaN(number)) {
      if (number > randomNumber) {
        this.setState({ message: "le nombre est plus petit" });
      } else if (number < randomNumber) {
        this.setState({ message: "le nombre est plus grand" });
      } else {
        this.setState({ message: "c'est juste" });
      }
    } else {
      this.setState({ message: "" });
    }
  };

  render() {
    return (
      <div>
        <h2>Jeu : Devine le nombre</h2>
        <input
          type="number"
          value={this.state.userInput}
          onInput={this.handleInput}
          placeholder="Entrez un chiffre"
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default GuessNumber;
