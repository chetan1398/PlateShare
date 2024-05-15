import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

// Initialize i18n with the HttpApi backend and React integration
i18n
  .use(HttpApi) // Use HTTP backend to load translation files
  .use(initReactI18next) // Integrate with React
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language in case the chosen language isn't available
    ns: ['common'], // Namespace for translation
    backend: {
      loadPath: '/i18n/{{lng}}/{{ns}}.json', // Path to load translation files
    },
    interpolation: {
      escapeValue: false, // No need to escape values
    },
  });

export default i18n; // Export the initialized i18n instance
