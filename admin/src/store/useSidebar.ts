import { create } from "zustand"

export interface SidebarInterface {
    isOpenSidebar: boolean,
    onOpenSidebar: () => boolean,
    onCloseSidebar: () => boolean
}

export const useSidebar = create<SidebarInterface>((set) => ({
    isOpenSidebar: false,
    onOpenSidebar: () => true,
    onCloseSidebar: () => false
}))