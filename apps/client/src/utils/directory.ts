import "server-only";
import { Locale } from "@/configs/i18n";

const dictionaries = {
  "uz-Cyrl": () =>
    import("@/data/messages/uz-Cyrl.json").then((module) => module.default),
  "uz-UZ": () =>
    import("@/data/messages/uz-UZ.json").then((module) => module.default),
  "en-US": () =>
    import("@/data/messages/en-US.json").then((module) => module.default),
  "ru-RU": () =>
    import("@/data/messages/ru-RU.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
