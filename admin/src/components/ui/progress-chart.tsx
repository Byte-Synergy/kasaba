"use client";

import { useProgressChartStore } from "@/store/useProgressChart";
import SettingProcessAnimation from "../animations/setting-process";
import { cn } from "@/libs/utils";
import Title from "../share/title";

export default function ProgressChart() {
  const { percentage } = useProgressChartStore();
  const radius = 80;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={cn(
        "group relative w-full max-w-md overflow-hidden rounded-xl bg-white py-6 shadow",
      )}
    >
      <Title
        title={"Oylik hisobot"}
        description={"Oldingi oylik hisobotga nisbati"}
        className="px-6"
      />

      <svg
        width="300"
        height="170"
        viewBox="0 0 200 120"
        className="mx-auto mt-4"
      >
        {/* Background arc */}
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Progress arc */}
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      {/* Percentage */}
      <div className="-mt-18 text-center">
        <p className="mb-2 text-3xl font-bold">{percentage.toFixed(2)}%</p>
        <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-medium text-green-600">
          +10%
        </span>
        <p className="mt-2 text-gray-500">
          You earn $3287 today, it's higher than last month.
          <br />
          Keep up your good work!
        </p>
      </div>

      {/* Footer stats */}
      <div className="mt-6 flex justify-around border-t pt-4 text-sm">
        <div className="text-center">
          <p className="text-gray-500">Target</p>
          <p className="text-lg font-semibold">
            $20K <span className="text-red-500">↓</span>
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Revenue</p>
          <p className="text-lg font-semibold">
            $20K <span className="text-green-500">↑</span>
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Today</p>
          <p className="text-lg font-semibold">
            $20K <span className="text-green-500">↑</span>
          </p>
        </div>
      </div>

      <SettingProcessAnimation />
    </div>
  );
}
