"use client";

import NewsTitle from "@/components/news/title";
import { Container } from "@/components/shared";
import StandardNewsCard from "@/components/shared/standart-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import type { NewsDataType } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Locale } from "@/configs/i18n";
import "swiper/css";

const PopularNews = ({
  news,
  lang,
  public_news_label,
  all_label,
}: {
  public_news_label: string;
  all_label: string;
  lang: Locale;
  news: NewsDataType[];
}) => {
  return (
    <Container className="my-10 max-md:my-5">
      <ScrollAnimation>
        <NewsTitle
          lang={lang}
          title={public_news_label}
          button={all_label}
          href="/news/standard"
        />
      </ScrollAnimation>
      
      <div className="relative mt-8 overflow-x-clip -mx-4 px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 4000,
            disableOnInteraction: false
          }}
          spaceBetween={20}
          slidesPerView={3.7}
          className="pb-12! pt-4! overflow-visible!"
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 10 },
            640: { slidesPerView: 2.2, spaceBetween: 15 },
            1024: { slidesPerView: 3.2, spaceBetween: 20 },
            1280: { slidesPerView: 3.7, spaceBetween: 20 },
          }}
        >
          {news?.map((data, index) => (
            <SwiperSlide key={data.id} className="!h-auto flex">
              <ScrollAnimation idx={index / 2} className="flex flex-col w-full h-full">
                <StandardNewsCard data={data} variant="card" className="flex-grow flex flex-col h-full" />
              </ScrollAnimation>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default PopularNews;
