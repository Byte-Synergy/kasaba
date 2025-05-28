import { create } from "zustand";

type CarouselStore = {
  data: any[];
  activeIndex: number;
  setData: (data: any[]) => void;
  setActiveIndex: (index: number) => void;
  next: () => void;
  prev: () => void;
};

export const useCarouselStore = create<CarouselStore>((set) => ({
  activeIndex: 0,
  data: [],
  setData: (data) => set({ data }),
  setActiveIndex: (index) => set({ activeIndex: index }),
  next: () =>
    set((state) => {
      if (state.activeIndex === state.data.length - 1) {
        return { activeIndex: 0 };
      }
      return { activeIndex: state.activeIndex + 1 };
    }),
  prev: () =>
    set((state) => {
      if (state.activeIndex === 0) {
        return { activeIndex: state.data.length - 1 };
      }
      return { activeIndex: state.activeIndex - 1 };
    }),
}));
