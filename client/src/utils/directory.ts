import "server-only";
import { Locale } from "@/configs/i18n";

const dictionaries = {
  "uz-cyrl": () =>
    import("@/data/messages/uz-cyrl.json").then((module) => module.default),
  uz: () => import("@/data/messages/uz.json").then((module) => module.default),
  en: () => import("@/data/messages/en.json").then((module) => module.default),
  ru: () => import("@/data/messages/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();