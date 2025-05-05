import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationEn from "./locales/en-US/translation.json";
import translationRu from "./locales/ru-RU/translation.json";
import translationUa from "./locales/uk-UA/translation.json";

const resources = {
  "uk-UA": { translation: translationUa },
  "ru-RU": { translation: translationRu },
  "en-US": { translation: translationEn },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem("language");

  if (!savedLanguage) {
    const locale = Localization.locale;
    if (locale.startsWith("ru")) {
      savedLanguage = "ru-RU";
    } else if (locale.startsWith("uk")) {
      savedLanguage = "uk-UA";
    } else {
      savedLanguage = "en-US";
    }
  }  

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: savedLanguage,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;