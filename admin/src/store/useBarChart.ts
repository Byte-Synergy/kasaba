// store/useChartStore.ts
import { create } from "zustand";

type ChartState = {
  data: number[][];
  labels: string[];
  setData: (data: number[][]) => void;
};

export const useChartStore = create<ChartState>((set) => ({
  data: [
    // 1-chiziq: barqaror o‘sish
    [120, 135, 150, 160, 170, 185, 195, 210, 230],

    // 2-chiziq: mavsumiy o‘zgarish (ko‘tarilish-pasayish)
    [90, 110, 95, 105, 120, 100, 130, 115, 140],

    // 3-chiziq: keskin o‘sish
    [30, 35, 40, 60, 80, 120, 160, 190, 220],
  ],

  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  setData: (data) => set({ data }),
}));
