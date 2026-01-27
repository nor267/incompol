import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../lang/en/general.json";
import pt from "../lang/pt/general.json";

// LOAD SAVED LANGUAGE OR DEFAULT
const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        pt: { translation: pt },
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

// When language changes, save it
i18n.on("languageChanged", (lng) => {
    localStorage.setItem("lang", lng);
});

export default i18n;
