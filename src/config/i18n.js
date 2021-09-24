export const supportedLocales = {
    en: {
        name: "English",
        translationFileLoader: () => require('../lang/en.json'),

        // en is default locale in Moment
        momentLocaleLoader: () => Promise.resolve(),
    },
    ar: {
        name: "عربي",
        translationFileLoader: () => require('../lang/ar.json'),
        momentLocaleLoader: () => import('moment/locale/ar'),
    },
};

export const defaultNamespace = "app";

export const namespaces = [
    "app"
];
