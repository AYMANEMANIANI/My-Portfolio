import { Link } from "react-router-dom";
import "../Sidebare/sidebare.css";

export default function Sidebare() {
  return (
    <menu>
      <div className="profile-section">
        <div className="profile-content">
          <img 
            src="/aymane.png" 
            alt="Aymane Maniani" 
            className="profile-image"
          />
          <h2 className="profile-name">Aymane Maniani</h2>
        </div>
      </div>
      <ul>
        <Link to="/" className="nav-link">
          <li>
            <i className="bi bi-house-door-fill"></i>
            <span>Accueil</span>
          </li>
        </Link>
        <Link to="/about" className="nav-link">
          <li>
            <i className="bi bi-person-fill"></i>
            <span>À propos</span>
          </li>
        </Link>
        <Link to="/skills" className="nav-link">
          <li>
            <i className="bi bi-code-slash"></i>
            <span>Compétences</span>
          </li>
        </Link>
        <Link to="/projects" className="nav-link">
          <li>
            <i className="bi bi-pc-display"></i>
            <span>Projets</span>
          </li>
        </Link>
        <span className="cantact-title">Contact</span>
        <ul className="cantact">
          <li>
            <a
              href="https://linkedin.com/in/aymane-maniani"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <i className="bi bi-linkedin text-black"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AYMANEMANIANI"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <i className="bi bi-github text-black"></i>
            </a>
          </li>
          <li>
            <a href="mailto:aymanemaniani@gmail.com" className="contact-icon">
              <i className="bi bi-envelope-at-fill text-black"></i>
            </a>
          </li>
        </ul>
      </ul>
    </menu>
  );
}
