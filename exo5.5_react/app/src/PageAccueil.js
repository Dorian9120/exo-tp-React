function PageAccueil({ setCurrentPage }) {
  return (
    <div>
      <h2>Bienvenue !</h2>
      <a
        href="contact"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("contact");
        }}
      >
        Aller à la page Contact
      </a>
    </div>
  );
}

export default PageAccueil;
