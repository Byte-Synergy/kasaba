"use client";
import { Container } from "@/components/shared";
import React, { useEffect, useState } from "react";
import VideoNews from "./video-news";
import PhotoNews from "./photo-news";
import { NewsDataType, NewsFilter } from "@/types";
import { NewsApi } from "@/utils/newsApi";
import { Locale } from "@/configs/i18n";

const fetchNews = async (filters: NewsFilter) => {
  try {
    const res = await NewsApi.getNewsList(filters);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const MediaNews = ({
  lang,
  photo_news_label,
  share_label,
  all_label,
  video_news_label,
}: {
  photo_news_label: string;
  video_news_label: string;
  share_label: string;
  all_label: string;
  lang: Locale;
}) => {
  const [news, setNews] = useState<{
    video: NewsDataType[] | null;
    photo: NewsDataType[] | null;
  }>({
    video: null,
    photo: null,
  });

  useEffect(() => {
    fetchNews({
      page: 1,
      limit: 10,
      filter: {
        type: ["video", "photo"],
        lang,
        isTop: false,
        isArchive: false,
      },
    }).then((res) => {
      setNews((prev) => ({
        ...prev,
        video:
          res?.filter((data: NewsDataType) => data.type === "video") ||
          prev.video,
        photo:
          res?.filter((data: NewsDataType) => data.type === "photo") ||
          prev.photo,
      }));
    });
  }, []);

  return (
    <Container className="py-12 relative max-md:py-5">
      {news.video?.length ? (
        <VideoNews
          share_label={share_label}
          all_label={all_label}
          video_news_label={video_news_label}
          lang={lang}
          data={news.video}
        />
      ) : null}
      {news.photo?.length ? (
        <PhotoNews
          all_label={all_label}
          photo_news_label={photo_news_label}
          lang={lang}
          data={news.photo}
        />
      ) : null}
    </Container>
  );
};

export default MediaNews;
