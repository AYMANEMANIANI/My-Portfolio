import { Link } from "react-router-dom";
import "../Home/home.css";

export default function Home() {
  return (
    <div className="app-home">
      <h1>
        Aymane Maniani <i className="bi bi-check-circle-fill"></i>
      </h1>
      <h2>Développeur Full Stack passionné (ReactJS/Angular & Laravel)</h2>
      <p>
        Des solutions web modernes, rapides et esthétiques. Entre innovation,
        performance et expérience utilisateur soignée, chaque ligne de code vise
        l'excellence digitale.
      </p>
      <div>
        <a
          href="/cv-aymane.pdf"
          download
          className="btn btn-outline-primary"
        >
          <i className="bi bi-download"></i>
          <span> Télécharger mon CV</span>
        </a>
        <Link to="/about" className="btn btn-outline-primary ms-3">
          À propos
        </Link>
      </div>
    </div>
  );
}
