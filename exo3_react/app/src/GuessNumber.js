import React from "react";

class GuessNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: Math.floor(Math.random() * 10) + 1,
      userNumber: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ userNumber: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const guess = parseInt(this.state.userNumber);

    if (guess < this.state.secretNumber) {
      this.setState({ message: "Trop petit !" });
    } else if (guess > this.state.secretNumber) {
      this.setState({ message: "Trop grand !" });
    } else {
      this.setState({ message: "Bravo, tu as trouvé !" });
    }
  };

  render() {
    return (
      <div>
        <h2>Devine le nombre (entre 1 et 10)</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.userNumber}
            onChange={this.handleChange}
          />
          <button type="submit">Tester</button>
        </form>

        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default GuessNumber;
