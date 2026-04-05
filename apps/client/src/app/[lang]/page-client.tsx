"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TopNews } from "@/components/root";
import InteractivePlaces from "@/components/root/home/interactive-places";
import MediaNews from "@/components/root/home/media-news";
import PopularNews from "@/components/root/home/popular-news";
import StandardNews from "@/components/root/home/standart-news";
import { Container } from "@/components/shared";
import Ads from "@/components/shared/ads";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { AppType } from "@/types/server";
import { NewsDataType } from "@/types";
import { Locale } from "@/configs/i18n";

const HomePage = ({
  topNewsData,
  ads,
  interactive_areas_label,
  news_label,
  standardNews,
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
}: {
  select_area_placeholder: string;
  all_label: string;
  public_news_label: string;
  photo_news_label: string;
  interactive_areas_label: string;
  share_label: string;
  video_news_label: string;
  lang: Locale;
  ads: AppType["~Routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
  // areas: AppType["~Routes"]["api"]["rest"]["places"]["get"]["response"]["200"]["data"];
  places:
    | { id: number; name?: string; areasCount: number; title: string }[]
    | [];
  topNewsData: NewsDataType[];
  standardNews: NewsDataType[];
  news_label: string;
  search_label: string;
  archive_label: string;
  areas_label: string;
}) => {
  return (
    <>
      <TopNews news={topNewsData} />
      <Container className="py-2 max-md:py-5">
        <ScrollAnimation>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="size-full"
          >
            {ads
              .filter((ad) => ad.type === "full")
              .map((ad, key) => (
                <SwiperSlide key={key}>
                  <a href={ad.url} target="_blank">
                    <Ads src={ad.file.href} />
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
        </ScrollAnimation>
      </Container>
      <StandardNews
        lang={lang}
        all_label={all_label}
        news_label={news_label}
        news={standardNews.slice(7, 22)}
      />
      <PopularNews
        all_label={all_label}
        public_news_label={public_news_label}
        lang={lang}
        news={standardNews.slice(10, 20)}
      />
      <section
        id="media"
        className="relative bg-[#171717] py-10"
      >
        <section id="vide-news" className="max-w-[1600px] w-full mx-auto">
          <MediaNews
            all_label={all_label}
            photo_news_label={photo_news_label}
            share_label={share_label}
            video_news_label={video_news_label}
            lang={lang}
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
