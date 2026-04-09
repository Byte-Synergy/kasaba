export const i18n = {
  defaultLocale: "uz-Cyrl",
  locales: ["uz-Cyrl", "uz-UZ", "en-US", "ru-RU"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
