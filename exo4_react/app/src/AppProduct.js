function AppProduct() {
  function NameChange(event) {
    console.log(event.target.value);
  }

  function Submit(event) {
    event.preventDefault();
    console.log("Formulaire non soumis au navigateur");
  }

  return (
    <form onSubmit={Submit}>
      <div>
        <label>Nom du produit</label>
        <input type="text" onChange={NameChange} />
      </div>

      <div>
        <label>Description</label>
        <input type="text" />
      </div>

      <button type="submit">Soumettre</button>
    </form>
  );
}

export default AppProduct;
