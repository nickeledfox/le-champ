import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // translation file path
      loadPath: '../data/{{ns}}/{{lng}}.json',
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['common', 'home', 'story'],
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  });

export default i18n;
