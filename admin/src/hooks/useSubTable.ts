import { create } from "zustand";

type SubRowState = {
    activeMenu: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
};

export const useSubmenuStore = create<SubRowState>((set) => ({
    activeMenu: false,

    openMenu: () => set({ activeMenu: true }),

    closeMenu: () => set({ activeMenu: false }),

    toggleMenu: () =>
        set((state) => ({
            activeMenu: !state.activeMenu,
        })),
}));