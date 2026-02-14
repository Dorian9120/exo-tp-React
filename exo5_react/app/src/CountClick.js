import { useState, useEffect } from "react";

function CountClick() {
  let [nClick, setnClick] = useState(0);
  const [name, setName] = useState("Dorian");

  useEffect(() => {
    if (nClick > 0) {
      alert("Tu as cliqué");
    }
  }, [nClick]);

  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <button onClick={() => setnClick(nClick + 1)}>Click</button>
      <p>
        Bonjour {name}, vous avez cliqué {nClick} fois !
      </p>

      <label>
        <input
          type="text"
          value={name}
          onChange={changeName}
          placeholder="Changer mon nom"
        />
      </label>
    </div>
  );
}

export default CountClick;
