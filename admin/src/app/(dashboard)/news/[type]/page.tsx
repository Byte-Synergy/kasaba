import { getNews } from "@/actions/news";
import React from "react";
import { redirect } from "next/navigation";
import PageHeader from "../../components/header";
import PageC from "./page-c";

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const titles = {
    standard: "Standard yangiliklar",
    photo: "Foto yangiliklar",
    video: "video yangiliklar",
    archive: "Arxiv",
  };

  if (!["standard", "photo", "video", "archive"].includes(type))
    redirect("/news/standard");

  return (
    <section className="h-full">
      <div className="container min-h-full p-5">
        <div className="h-full rounded-lg bg-white p-5 shadow-lg shadow-slate-200">
          <PageHeader
            showAddButton={type !== "archive"}
            href={`/news/create/${type}`}
            title={titles[type as keyof typeof titles]}
          />
          <PageC type={type} />
        </div>
      </div>
    </section>
  );
}
