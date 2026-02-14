function AddProduct() {
  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      nom: e.target.nom.value,
      description: e.target.description.value,
    };

    fetch("http://localhost:3001/new-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Réponse du backend :", data);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom</label>
        <input type="text" name="nom" />
      </div>

      <div>
        <label>Description</label>
        <input type="text" name="description" />
      </div>

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddProduct;
