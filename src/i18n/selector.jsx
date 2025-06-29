import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button 
        className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
        onClick={() => changeLanguage('fr')}
        title="Français"
      >
        <span className="fi fi-fr fis"></span>
        <span>FR</span>
      </button>
      <div className="divider"></div>
      <button 
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        title="English"
      >
        <span className="fi fi-gb fis"></span>
        <span>EN</span>
      </button>
    </div>
  );
}
