"use client";

import NewsTitle from "@/components/news/title";
import { Container } from "@/components/shared";
import StandardNewsCard from "@/components/shared/standart-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Locale } from "@/configs/i18n";
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
      
      <div className="relative mt-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 4000,
            disableOnInteraction: false
          }}
          spaceBetween={15}
          slidesPerView={3.7}
          // Removed !overflow-visible to fix horizontal scroll throughout the site
          className="!pb-10 !pt-4 !h-full"
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 10 },
            640: { slidesPerView: 2.2, spaceBetween: 15 },
            1024: { slidesPerView: 3.2, spaceBetween: 15 },
            1280: { slidesPerView: 3.7, spaceBetween: 15 },
          }}
        >
          {news?.map((data, index) => (
            <SwiperSlide key={data.id} className="h-full">
              <ScrollAnimation idx={index / 2} className="h-full">
                <StandardNewsCard data={data} variant="card" />
              </ScrollAnimation>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default PopularNews;
