"use client";

import { getNews } from "@/action/news";
import StandardNewsCard from "@/components/shared/standart-news-card";
import { Locale } from "@/configs/i18n";
import { AppType } from "@/types/server";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function PageC({
  data: initialData,
  type,
  lang,
}: {
  lang: Locale;
  type: string;
  data: AppType["~Routes"]["api"]["rest"]["news"]["get"]["response"]["200"]["data"];
}) {
  const limit = 20; // max 50
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] =
    useState<
      AppType["~Routes"]["api"]["rest"]["news"]["get"]["response"]["200"]["data"]
    >(initialData);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getNews({
        limit,
        page,
        filter: {
          lang,
          type: [type as any],
        },
      });
      const newItems = newsData.data?.data || [];
      setData((prev) => [...prev, ...newItems]);
      if (newItems.length < limit) setHasMore(false);
    };
    fetchData();
  }, [page]);
  return (
    <>
      <InfiniteScroll
      className="!overflow-visible"
        dataLength={data.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={hasMore ? "" : null}
      >
        <div className="flex items-start gap-3 flex-wrap">
          {data.map((item, key) => (
            <div className="w-[24%] max-md:w-full" key={key}>
              <StandardNewsCard data={item} key={item.title} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
