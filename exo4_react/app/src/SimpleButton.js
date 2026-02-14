function SimpleButton() {
  function alert() {
    window.alert("hey you");
  }

  return (
    <div>
      <button onClick={alert}>Hey You</button>
    </div>
  );
}

export default SimpleButton;
