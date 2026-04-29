"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TopNews, MainBanner } from "@/components/root";
import InteractivePlaces from "@/components/root/home/interactive-places";
import MediaNews from "@/components/root/home/media-news";
import PopularNews from "@/components/root/home/popular-news";
import StandardNews from "@/components/root/home/standart-news";
import { Container } from "@/components/shared";
import Ads from "@/components/shared/ads";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";
import { Locale } from "@/configs/i18n";

const HomePage = ({
  topNewsData,
  ads,
  interactive_areas_label,
  news_label,
  standardNews,
  videoNewsData,
  photoNewsData,
  // areas,
  places,
  areas_label,
  lang,
  archive_label,
  search_label,
  all_label,
  photo_news_label,
  share_label,
  public_news_label,
  video_news_label,
  select_area_placeholder,
  mediateka_label,
  image_count_label,
  month_labels,
}: {
  select_area_placeholder: string;
  all_label: string;
  public_news_label: string;
  photo_news_label: string;
  interactive_areas_label: string;
  share_label: string;
  video_news_label: string;
  lang: Locale;
  image_count_label: string;
  month_labels: Record<string, string>;
  ads: Array<{
    id: string;
    url: string | null;
    type: string;
    file: {
      href: string;
    };
  }>;
  // areas: any[];
  places:
    | { id: number; name?: string; areasCount: number; title: string }[]
    | [];
  topNewsData: NewsDataType[];
  standardNews: NewsDataType[];
  videoNewsData: NewsDataType[];
  photoNewsData: NewsDataType[];
  news_label: string;
  search_label: string;
  archive_label: string;
  areas_label: string;
  mediateka_label: string;
}) => {
  return (
    <>
      <TopNews news={topNewsData} month_labels={month_labels} />
      <MainBanner ads={ads} />
      <StandardNews
        lang={lang}
        all_label={all_label}
        news_label={news_label}
        news={standardNews}
      />
      <PopularNews
        all_label={all_label}
        public_news_label={public_news_label}
        lang={lang}
        news={standardNews}
      />
      <section id="media" className="relative bg-[#171717] py-10">
        <section id="video-news" className="max-w-[1780px] w-full mx-auto">
          <MediaNews
            all_label={all_label}
            photo_news_label={photo_news_label}
            share_label={share_label}
            video_news_label={video_news_label}
            lang={lang}
            videoNews={videoNewsData}
            photoNews={photoNewsData}
            mediateka_label={mediateka_label}
            image_count_label={image_count_label}
          />
        </section>
      </section>
      <section id="interactive-informations" className="w-full ">
        <InteractivePlaces lang={lang} regions={places} />
      </section>
    </>
  );
};

export default HomePage;
