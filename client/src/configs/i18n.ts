export const i18n = {
  defaultLocale: "uz-cyrl",
  locales: ["uz", "uz-cyrl", "en", "ru"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
