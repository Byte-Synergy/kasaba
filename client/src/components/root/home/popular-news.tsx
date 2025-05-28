"use client";

import NewsTitle from "@/components/news/title";
import { Container } from "@/components/shared";
import StandardNewsCard from "@/components/shared/standart-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Locale } from "@/configs/i18n";

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
    <>
      <Container>
        <ScrollAnimation>
          <NewsTitle
            lang={lang}
            title={public_news_label}
            button={all_label}
            href="/news/standard"
          />
        </ScrollAnimation>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              pauseOnMouseEnter: true,
              delay: 5000,
            }}
            spaceBetween={20}
            slidesPerView={5}
            className="!pb-20 !py-5 -mt-5 -mb-20"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {news?.map((data, index) => (
              <SwiperSlide key={data.id}>
                <ScrollAnimation idx={index / 2}>
                  <StandardNewsCard data={data} variant="card" />
                </ScrollAnimation>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default PopularNews;
