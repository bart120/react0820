

import en from './translations/en.json';
import fr from './translations/fr.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = { en, fr };

i18n.use(initReactI18next).init({
    resources: resources,
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;