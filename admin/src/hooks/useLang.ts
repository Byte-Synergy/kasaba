import { create } from "zustand";

export type Lang = "uz" | "ru" | "en" | "uz-cryl"; // kerakli tillarni qo‘shing

interface LangState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangState>((set) => ({
  lang: "uz", // default til
  setLang: (lang) => set({ lang }),
}));
