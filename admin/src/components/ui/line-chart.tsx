// components/LineChart.tsx
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useChartStore } from "@/store/useBarChart";
import SettingProcessAnimation from "../animations/setting-process";
import Title from "../share/title";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default function LineChart() {
  const { data, labels } = useChartStore();

  const chartData = {
    labels,
    datasets: [
      {
        label: "Standard",
        data: data[0],
        borderColor: "#3b82f6",
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(59, 130, 246, 0.25)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0.02)");
          return gradient;
        },
        fill: true,
        tension: 0.3,
      },
      {
        label: "Photo",
        data: data[1],
        borderColor: "#059855",
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(8, 153, 88, .25)");
          gradient.addColorStop(1, "rgba(8, 153, 88, 0.02)");
          return gradient;
        },
        fill: true,
        tension: 0.3,
      },
      {
        label: "Video",
        data: data[2],
        borderColor: "#de7221",
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(222, 115, 33, 0.25)");
          gradient.addColorStop(1, "rgba(222, 115, 33, 0.02)");
          return gradient;
        },
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index" as const, intersect: false },
    },
    interaction: { mode: "nearest" as const, intersect: false },
    scales: {
      y: {
        beginAtZero: true,
        grid: { drawBorder: false, color: "rgba(0,0,0,0.05)" },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="w-full group relative overflow-hidden rounded-lg bg-white py-6 shadow">
      <Title title={"Statistika"} description={"Umumiy statistika"} className="px-6" />
      <div className="w-full mt-4 px-6">
        <Line data={chartData} options={options} height={100} />
      </div>
      <SettingProcessAnimation />
    </div>
  );
}
