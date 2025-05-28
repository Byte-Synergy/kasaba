"use client";

import React, { useState, useEffect } from "react";
import Link from "@/components/link";
import NewsCard from "../components/card";
import { AppType } from "@/types/server";
import { getNews } from "@/actions/news";
import InfiniteScroll from "react-infinite-scroll-component";

export default function PageC({
  type,
  data: initialData,
}: {
  type: string;
  data: AppType["_routes"]["api"]["rest"]["news"]["get"]["response"]["200"]["data"];
}) {
  const limit = 50; // max 50
  const [data, setData] =
    useState<
      AppType["_routes"]["api"]["rest"]["news"]["get"]["response"]["200"]["data"]
    >(initialData);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getNews(
        {
          type: [type as any],
        },
        limit,
        page,
      );
      const newItems = newsData.data?.data || [];
      setData((prev) => [...prev, ...newItems]);
      if (newItems.length < limit) setHasMore(false);
    };
    fetchData();
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => setPage((prev) => prev + 1)}
      hasMore={hasMore}
      scrollableTarget="main-scroll"
      loader={hasMore ? <h4>Yuklanmoqda...</h4> : null}
    >
      <div className="mt-5 grid gap-4">
        {data.map((news, key) => (
          <Link href={`/news/content/${type}/${news.path}`} key={key}>
            <NewsCard data={news} />
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
}
