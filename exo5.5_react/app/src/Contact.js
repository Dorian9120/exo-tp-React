function Contact({ setCurrentPage }) {
  return (
    <div>
      <h2>Contact</h2>
      <p>Email : contact@monsite.com</p>
      <p>Téléphone : 01 23 45 67 89</p>

      <a
        href="welcome"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("welcome");
        }}
      >
        Retour à l'accueil
      </a>
    </div>
  );
}

export default Contact;
