"use client";
import Container from "../../shared/container";
import TopNewsCard from "@/components/shared/top-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useParams } from "next/navigation";
import { Locale } from "@/configs/i18n";

const TopNews = ({ news, month_labels }: { news: NewsDataType[], month_labels?: Record<string, string> }) => {
  const { lang } = useParams<{ lang: Locale }>();

  return (
    Boolean(news.length) && (
      <Container className="relative max-md:w-full max-md:px-0 max-md:mt-0 max-md:mb-6 md:my-6 group/swiper">
        <ScrollAnimation>
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full transition-all"
            >
              {news.map((data) => (
                <SwiperSlide key={data.id} className="">
                  <TopNewsCard lang={lang} data={data} month_labels={month_labels} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollAnimation>
      </Container>
    )
  );
};

export default TopNews;
