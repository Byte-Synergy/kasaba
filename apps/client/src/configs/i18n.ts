export const i18n = {
  defaultLocale: "uz-Cyrl",
  locales: ["uz-UZ", "uz-Cyrl", "en-US", "ru-RU"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
