import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
    },
    debug: false,
    ns: ['pages', 'navigation', 'contact', 'properties'],
    interpolation: {
      formatSeparator: ',',
    },
    lng: 'en',
    fallbackLng: 'en',
  });

export default i18n;
