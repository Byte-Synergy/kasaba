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
  areas,
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
  phone_number_label,
  address_label,
  email_label,
  members_count_label,
  our_addresses_label,
}: {
  address_label: string;
  email_label: string;
  members_count_label: string;
  our_addresses_label: string;
  select_area_placeholder: string;
  phone_number_label: string;
  all_label: string;
  public_news_label: string;
  photo_news_label: string;
  interactive_areas_label: string;
  share_label: string;
  video_news_label: string;
  lang: Locale;
  ads: AppType["_routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
  areas: AppType["_routes"]["api"]["rest"]["places"]["get"]["response"]["200"]["data"];
  topNewsData: NewsDataType[];
  standardNews: NewsDataType[];
  news_label: string;
  search_label: string;
  archive_label: string;
  areas_label: string;
}) => {
  return (
    <>
      <TopNews ads={ads} news={topNewsData} />
      <StandardNews
        lang={lang}
        all_label={all_label}
        search_label={search_label}
        archive_label={archive_label}
        areas_label={areas_label}
        news_label={news_label}
        ads={ads}
        news={standardNews.slice(0, 10)}
      />
      <PopularNews
        all_label={all_label}
        public_news_label={public_news_label}
        lang={lang}
        news={standardNews.slice(10, 20)}
      />
      <Container className="py-10 max-md:py-5">
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
      <section
        id="media"
        className="relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#1e1e1e]/90 before:backdrop-blur-[9.30px] before:-z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#000573]/75 after:backdrop-blur-[9.30px] after:-z-10"
      >
        <section id="vide-news" className="max-w-[1440px] w-full mx-auto">
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
        <InteractivePlaces
          address_label={address_label}
          email_label={email_label}
          members_count_label={members_count_label}
          our_addresses_label={our_addresses_label}
          phone_number_label={phone_number_label}
          select_area_placeholder={select_area_placeholder}
          interactive_areas_label={interactive_areas_label}
          lang={lang}
          data={areas}
        />
      </section>
    </>
  );
};

export default HomePage;
