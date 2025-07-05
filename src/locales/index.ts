import { use } from "i18next";
import { initReactI18next } from "react-i18next";

import { Language } from "../constants/language";
import english from "./en";
import traditionalChinese from "./zh-hk";

use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      [Language["ZH-HK"]]: traditionalChinese,
      [Language.EN]: english,
    },
    lng: Language["ZH-HK"],
    fallbackLng: Language["ZH-HK"],
    interpolation: {
      escapeValue: false,
    },
    debug: true,
    fallbackNS: "global",
  });
