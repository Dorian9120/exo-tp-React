import { useState } from "react";

function ClickCounter() {
  const [number, setNumber] = useState(0);

  function addClick() {
    setNumber((ancienValue) => ancienValue + 1);
  }

  return (
    <div>
      <button onClick={addClick}>
        <p> Vous avez cliqué {number} fois !</p>
      </button>
    </div>
  );
}

export default ClickCounter;
