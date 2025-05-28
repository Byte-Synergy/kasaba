import { getNews } from "@/actions/news";
import React from "react";
import { redirect } from "next/navigation";
import Link from "@/components/link";
import NewsCard from "../components/card";
import PageHeader from "../../components/header";
import PageC from "./page-c";

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  if (!["standard", "photo", "video", "archive"].includes(type))
    redirect("/news/standard");

  const titles = {
    standard: "Standard yangiliklar",
    photo: "Foto yangiliklar",
    video: "video yangiliklar",
    archive: "Arxiv",
  };

  const { data } = await getNews(
    type === "archive"
      ? {
          isArchived: true,
        }
      : {
          type: [type as any],
          isArchived: false,
        },
    50,
    1,
  );

  return (
    <section className="h-full">
      <div className="container min-h-full p-5">
        <div className="h-full rounded-lg bg-white p-5 shadow-lg shadow-slate-200">
          <PageHeader
            showAddButton={type !== "archive"}
            href={`/news/create/${type}`}
            title={titles[type as keyof typeof titles]}
          />
          {!data?.data.length ? (
            <div className="grid h-full min-h-40 w-full place-items-center">
              <p className="font-medium">Hech qanday ma'lumot mavjud emas</p>
            </div>
          ) : (
            <PageC type={type} data={data.data} />
          )}
        </div>
      </div>
    </section>
  );
}
