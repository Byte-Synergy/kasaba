import { create } from "zustand";
import { persist } from "zustand/middleware";

type NavbarStore = {
  NavbarMenu: boolean;
  setNavbarMenu: () => void;
};

export const useNavbarStore = create(
  persist<NavbarStore>(
    (set) => ({
      NavbarMenu: false,
      setNavbarMenu: () => set((state) => ({ NavbarMenu: !state.NavbarMenu })),
    }),
    { name: "Navbar-storage" },
  ),
);
