import { create } from "zustand";

type ProgressState = {
  percentage: number;
  setPercentage: (value: number) => void;
};

export const useProgressChartStore = create<ProgressState>((set) => ({
  percentage: 75.55,
  setPercentage: (value) => set({ percentage: value }),
}));
