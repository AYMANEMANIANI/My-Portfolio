import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './i18n/en.json';
import translationFR from './i18n/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR }
    },
    fallbackLng: 'fr',
    interpolation: { escapeValue: false }
  });

export default i18n;
