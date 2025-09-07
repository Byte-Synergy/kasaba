"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import SettingProcessAnimation from "@/components/animations/setting-process";
import Title from "@/components/share/title";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-01-01", standard: 301, photo: 340, video: 340 },
  { date: "2024-02-01", standard: 245, photo: 180, video: 340 },
  { date: "2024-03-08", standard: 409, photo: 320, video: 340 },
  { date: "2024-04-09", standard: 59, photo: 110, video: 340 },
  { date: "2024-05-10", standard: 261, photo: 190, video: 340 },
  { date: "2024-06-11", standard: 327, photo: 350, video: 340 },
  { date: "2024-07-12", standard: 292, photo: 210, video: 340 },
  { date: "2024-08-13", standard: 342, photo: 380, video: 340 },
  { date: "2024-09-14", standard: 137, photo: 220, video: 340 },
  { date: "2024-10-15", standard: 120, photo: 170, video: 340 },
  { date: "2024-11-16", standard: 138, photo: 190, video: 340 },
  { date: "2024-12-17", standard: 446, photo: 360, video: 340 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  standard: {
    label: "Standard",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartBarInteractive() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("standard");

  const total = React.useMemo(
    () => ({
      standard: chartData.reduce((acc, curr) => acc + curr.standard, 0),
      photo: chartData.reduce((acc, curr) => acc + curr.photo, 0),
      video: chartData.reduce((acc, curr) => acc + curr.video, 0),
    }),
    [],
  );

  return (
    <Card className="group relative w-full overflow-hidden py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        {/* <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle className="text-xl">Analitika</CardTitle>
          <CardDescription>Yangiliklarni oylik hisoboti</CardDescription>
        </div> */}
        <Title
          title={"Analitika"}
          description={"Yangiliklarning yillik hisobida oylik hisoboti"}
          className="px-6"
        />
        <div className="flex">
          {["standard", "photo", "video"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
              // onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-sm">{key}</span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 8,
              right: 8,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
              className="rounded-2xl bg-red-500"
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar
              dataKey={activeChart}
              fill={`#307efe`}
              className=""
              radius={5}
              maxBarSize={50}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <SettingProcessAnimation />
    </Card>
  );
}
