import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const defaultLanguage = 'en';

i18n.use(initReactI18next).init({
  defaultNS: 'translations',
  keySeparator: false,
  lowerCaseLng: true,
  initImmediate: false,
  interpolation: {
    escapeValue: false,
    prefix: '%{',
    suffix: '}',
  },
  fallbackLng: defaultLanguage,
});

export default i18n;
