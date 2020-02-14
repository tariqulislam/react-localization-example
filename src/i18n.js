import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from 'react-i18next'
//import XHR from 'i18next-xhr-backend'
import languageEN from './locate/en/translate.json'
import languageJP from './locate/jp/translate.json'

i18n
//.use(XHR)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: languageEN,
        jp: languageJP
    },
    lng: "en",
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true,
        //bindI18n: 'languageChanged loaded',
       // bindStore: 'added removed',
        //nsMode: 'default'
    }
})

export default i18n;