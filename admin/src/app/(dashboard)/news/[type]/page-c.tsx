"use client";

import React, { useState, useEffect } from "react";
import Link from "@/components/link";
import NewsCard from "../components/card";
import { AppType } from "@/types/server";
import { getNews } from "@/actions/news";
import InfiniteScroll from "react-infinite-scroll-component";
// import { redirect } from "next/navigation";
import { useLangStore } from "@/hooks/useLang";

export default function PageC({
  type,
}: {
  type: string;
}) {
  const limit = 50; // max 50
  const [data, setData] =
    useState<
      AppType["~Routes"]["api"]["rest"]["news"]["get"]["response"]["200"]["data"] | []
    >([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { lang } = useLangStore()


  useEffect(() => {
    const loadFirstPage = async () => {
      setData([]);          // eski ma'lumotni tozalaymiz
      setPage(1);           // page-ni 1 ga o‘rnatamiz
      setHasMore(true);     // infinite scroll holatini reset qilamiz
  
      const newsData = await getNews(
        {
          type: [type as any],
          lang: lang, // yangilangan til
        },
        limit,
        page 
      );
  
      const newItems = newsData.data?.data || [];
      setData(newItems);
      if (newItems.length < limit) setHasMore(false);
    };
  
    loadFirstPage();
  }, [lang]);  

  useEffect(() => {
    if (page === 1) return; // 1-sahifa allaqachon lang-effectda yuklangan
  
    const fetchData = async () => {
      const newsData = await getNews(
        {
          type: [type as any],
          lang: lang,
        },
        limit,
        page
      );
  
      const newItems = newsData.data?.data || [];
      setData((prev) => [...prev, ...newItems]);
      if (newItems.length < limit) setHasMore(false);
    };
  
    fetchData();
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={data?.length}
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
