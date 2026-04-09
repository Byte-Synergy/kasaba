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

export const getDictionary = async (locale: Locale | string) => {
  const mapping: Record<string, keyof typeof dictionaries> = {
    uz: "uz-Cyrl",
    "uz-uz": "uz-UZ",
    ru: "ru-RU",
    "ru-ru": "ru-RU",
    en: "en-US",
    "en-us": "en-US",
    "uz-cyrl": "uz-Cyrl",
    "uz-Cyrl": "uz-Cyrl",
  };

  const normalizedLocale =
    mapping[locale?.toLowerCase()] || (locale as keyof typeof dictionaries);

  if (!dictionaries[normalizedLocale]) {
    console.error("Dictionary not found for locale:", locale);
    // Fallback to default locale if not found
    return dictionaries["uz-Cyrl"]();
  }

  return dictionaries[normalizedLocale]();
};
