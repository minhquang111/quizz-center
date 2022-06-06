import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEN from './locales/en/common';
import authEN from './locales/en/auth';
import dashboardEN from './locales/en/dashboard';
import categoryEN from './locales/en/category';
import testEN from './locales/en/test.json';
import statisticEN from './locales/en/statistic.json';

import commonVI from './locales/vi/common';
import authVI from './locales/vi/auth';
import dashboardVI from './locales/vi/dashboard';
import categoryVI from './locales/vi/category';
import testVI from './locales/vi/test.json';
import statisticVI from './locales/vi/statistic.json';

const resources = {
  en: {
    common: commonEN,
    auth: authEN,
    dashboard: dashboardEN,
    category: categoryEN,
    test: testEN,
    statistic: statisticEN,
  },
  vi: {
    common: commonVI,
    auth: authVI,
    dashboard: dashboardVI,
    category: categoryVI,
    test: testVI,
    statistic: statisticVI,
  },
};

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common', // Set default namespace
    fallbackLng: 'vi',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
