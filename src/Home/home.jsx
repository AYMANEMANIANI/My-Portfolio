import { Link } from "react-router-dom";
import "../Home/home.css";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="app-home">
      <span>{t('home.welcome')}</span>
      <h1>
        {t('home.title')} <i className="bi bi-check-circle-fill"></i>
      </h1>
      <h2>{t('home.subtitle')}</h2>
      <p>{t('home.description')}</p>
      <div>
        <a
          href="/cv-aymane.pdf"
          download
          className="btn btn-outline-primary"
        >
          <i className="bi bi-download"></i>
          <span>{" "+t('home.downloadCv')}</span>
        </a>
        <Link to="/about" className="btn btn-outline-primary ms-3">
          {t('home.about')}
        </Link>
      </div>
    </div>
  );
}
