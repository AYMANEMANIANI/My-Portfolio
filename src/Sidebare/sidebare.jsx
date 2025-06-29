import { Link } from "react-router-dom";
import "../Sidebare/sidebare.css";
import LanguageSelector from "../i18n/selector";
import { useTranslation } from "react-i18next";

export default function Sidebare() {
  const { t } = useTranslation();
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
        <LanguageSelector/>
        <Link to="/" className="nav-link">
          <li>
            <i className="bi bi-house-door-fill"></i>
            <span>{t('sidebar.home')}</span>
          </li>
        </Link>
        <Link to="/about" className="nav-link">
          <li>
            <i className="bi bi-person-fill"></i>
            <span>{t('sidebar.about')}</span>
          </li>
        </Link>
        <Link to="/skills" className="nav-link">
          <li>
            <i className="bi bi-code-slash"></i>
            <span>{t('sidebar.skills')}</span>
          </li>
        </Link>
        <Link to="/projects" className="nav-link">
          <li>
            <i className="bi bi-pc-display"></i>
            <span>{t('sidebar.projects')}</span>
          </li>
        </Link>
        <span className="cantact-title">{t('sidebar.contact')}</span>
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
