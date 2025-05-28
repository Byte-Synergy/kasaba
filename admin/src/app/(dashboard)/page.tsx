import { getNews } from "@/actions/news";
import Link from "@/components/link";
import { cn } from "@/libs/utils";
import { NewsApi } from "@/utils/api/news";
import React from "react";
import NewsCard from "./news/components/card";
import eden from "@/libs/eden";

export default async function Page() {
  const [
    standardNews,
    photoNews,
    videoNews,
    standardNewsCount,
    photoNewsCount,
    videoNewsCount,
    archivedNewsCount,
  ] = await Promise.all([
    eden.news.get({
      query: { limit: 10, page: 1, filter: { type: ["standard"] } },
    }),
    eden.news.get({
      query: { limit: 10, page: 1, filter: { type: ["photo"] } },
    }),
    eden.news.get({
      query: { limit: 10, page: 1, filter: { type: ["video"] } },
    }),
    eden.news.count.get({ query: { filter: { type: ["standard"] } } }),
    eden.news.count.get({ query: { filter: { type: ["photo"] } } }),
    eden.news.count.get({ query: { filter: { type: ["video"] } } }),
    eden.news.count.get({ query: { filter: { isArchived: true } } }),
  ]);

  return (
    <section>
      <div className="container grid gap-3 p-5 text-white md:grid-cols-4">
        {React.Children.toArray(
          [
            {
              title: "Foto yangiliklar",
              className: "from-indigo-600 to-indigo-500",
              count: photoNewsCount.data,
            },
            {
              title: "Video yangiliklar",
              className: "from-green-600 to-green-500",
              count: videoNewsCount.data,
            },
            {
              title: "Standard yangiliklar",
              className: "from-blue-600 to-blue-500",
              count: standardNewsCount.data,
            },
            {
              title: "Arxivdagi yangiliklar",
              className: "from-amber-600 to-amber-500",
              count: archivedNewsCount.data,
            },
          ].map((card, key) => (
            <div
              key={key}
              className={cn(
                "flex flex-col rounded-2xl bg-gradient-to-t p-5",
                card.className,
              )}
            >
              <h3 className="text-base font-medium">{card.title}</h3>
              <span className="mt-10 text-4xl font-semibold">
                {card.count || 0}
              </span>
            </div>
          )),
        )}
      </div>
      <div className="container grid items-start gap-5 p-5 md:grid-cols-2">
        {React.Children.toArray(
          [
            {
              title: "Standard yangiliklar",
              data: standardNews.data?.data,
            },
            {
              title: "Foto yangiliklar",
              data: photoNews.data?.data,
            },
            {
              title: "Video yangiliklar",
              data: videoNews.data?.data,
            },
          ].map((card, key) => (
            <div
              className="rounded-2xl bg-white p-5 shadow-lg shadow-slate-200"
              key={key}
            >
              <h2 className="mb-5 font-bold capitalize">{card.title}</h2>
              {card.data && Boolean(card.data.length) && (
                <div className="grid gap-2">
                  {React.Children.toArray(
                    card.data.map((data, key) => (
                      <Link
                        href={`/news/content/${data.type}/${data.path}`}
                        key={key}
                      >
                        <NewsCard variant="col" data={data} />
                      </Link>
                    )),
                  )}
                </div>
              )}
              {!Boolean(card.data?.length) && <p>No data</p>}
            </div>
          )),
        )}
      </div>
      {/* <DiagrammStatistic
        data={{
          video: videoNews || [],
          standard: standardNews || [],
          photo: photoNews || [],
        }}
      />
      <Statistic
        data={{
          video: videoNews || [],
          standard: standardNews || [],
          photo: photoNews || [],
        }}
      /> */}
    </section>
  );
}
