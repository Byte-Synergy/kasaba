"use client";
import { Container } from "@/components/shared";
import React from "react";
import VideoNews from "./video-news";
import PhotoNews from "./photo-news";
import { NewsDataType } from "@/types";
import { Locale } from "@/configs/i18n";

const MediaNews = ({
  lang,
  photo_news_label,
  share_label,
  all_label,
  video_news_label,
  videoNews,
  photoNews,
}: {
  photo_news_label: string;
  video_news_label: string;
  share_label: string;
  all_label: string;
  lang: Locale;
  videoNews: NewsDataType[];
  photoNews: NewsDataType[];
}) => {
  return (
    <Container className="py-12 relative max-md:py-5">
      {videoNews?.length ? (
        <VideoNews
          share_label={share_label}
          all_label={all_label}
          video_news_label={video_news_label}
          lang={lang}
          data={videoNews}
        />
      ) : null}
      {photoNews?.length ? (
        <PhotoNews
          all_label={all_label}
          photo_news_label={photo_news_label}
          lang={lang}
          data={photoNews}
        />
      ) : null}
    </Container>
  );
};

export default MediaNews;
