import { create } from "zustand";
import { persist } from "zustand/middleware";

type Language = "uzbek" | "o'zbek" | "pусский";

type LanguageStore = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const useLanguageStore = create(
  persist<LanguageStore>(
    (set) => ({
      language: "uzbek",
      setLanguage: (lang) => set({ language: lang }),
    }),
    { name: "language-storage" },
  ),
);
