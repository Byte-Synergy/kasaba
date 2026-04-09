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
  mediateka_label,
  image_count_label,
}: {
  photo_news_label: string;
  video_news_label: string;
  share_label: string;
  all_label: string;
  lang: Locale;
  videoNews: NewsDataType[];
  photoNews: NewsDataType[];
  mediateka_label: string;
  image_count_label: string;
}) => {
  return (
    <Container className="py-12 relative max-md:py-5">
      <div className="flex items-center gap-x-4 max-md:gap-1 max-md:my-5 uppercase py-1.2 my-7.5">
        <h3 className="relative text-4xl font-bold text-[#ff8400] pl-5 max-md:text-base after:absolute after:top-1/2 after:left-0 after:w-2 after:h-2/3 after:content-[''] after:bg-[#ff8400] after:-translate-y-[50%] max-md:text-[#fff]">
          {mediateka_label}
        </h3>
        <div className="flex-auto h-1 bg-[#ff8400] max-md:bg-[#000674] max-md:h-[1px]"></div>
      </div>
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
          image_count_label={image_count_label}
          lang={lang}
          data={photoNews}
        />
      ) : null}
    </Container>
  );
};

export default MediaNews;
