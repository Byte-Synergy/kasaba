"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PhotoNewsCard from "@/components/shared/photo-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";
import { Locale } from "@/configs/i18n";
import NewsTitle from "@/components/news/title";

const PhotoNews = ({
  data,
  all_label,
  lang,
  photo_news_label,
}: {
  photo_news_label: string;
  all_label: string;
  lang: Locale;
  data: NewsDataType[];
}) => {
  return (
    <>
      <ScrollAnimation>
        <NewsTitle
          lang={lang}
          title={photo_news_label}
          button={all_label}
          href="/news/photo"
          className="max-md:text-[#fff]"
        />
      </ScrollAnimation>
      <div className="flex flex-col gap-y-10">
        <div className="flex items-center justify-between gap-x-10 max-md:flex-col gap-10 max-md:gap-5">
          <ScrollAnimation idx={0} className="w-1/2 max-md:w-full">
            <PhotoNewsCard data={data[0]} />
          </ScrollAnimation>
          <ScrollAnimation idx={1} className="w-1/2 max-md:w-full">
            <PhotoNewsCard data={data[1]} />
          </ScrollAnimation>
        </div>
        <div className="">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 3 },
              0: { slidesPerView: 1.5 },
            }}
            loop={true}
            className="size-full"
          >
            {data.slice(2).map((data, key) => (
              <SwiperSlide key={key}>
                <PhotoNewsCard data={data} variant="small" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PhotoNews;
