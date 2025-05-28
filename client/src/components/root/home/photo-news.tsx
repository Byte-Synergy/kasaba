"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PhotoNewsCard from "@/components/shared/photo-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "@/components/link";
import { Locale } from "@/configs/i18n";

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
        <div className="flex w-full justify-between items-center gap-x-4 my-10 max-md:my-4 bg-[#ff8400] max-md:bg-transparent py-2 px-7 max-md:px-0 max-md:gap-2 uppercase">
          <div className=" hidden max-md:block w-4! h-4 bg-orange-500!"></div>
          <h3 className="text-[#fff] text-4xl font-bold">{photo_news_label}</h3>
          <div className="flex-auto h-1 bg-[#ff8400] max-md:h-[1px] max-md:bg-white/15"></div>
          <Link lang={lang} href="/news/photo">
            <button className="flex items-center gap-x-1 text-[#fff] group cursor-pointer">
              <span className="text-base font-bold uppercase">{all_label}</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </ScrollAnimation>
      <div className="flex flex-col gap-y-10">
        <div className="flex items-center justify-between gap-x-10 max-md:flex-col gap-10 max-md:gap-5">
          <ScrollAnimation idx={0} className="w-1/2 max-md:w-full">
            <PhotoNewsCard data={data[0]} />
          </ScrollAnimation>
          <ScrollAnimation idx={1} className="w-1/2 max-md:w-full">
            <PhotoNewsCard  data={data[1]} />
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

          {/* <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="pb-4">
              {data.slice(2).map((data, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 max-md:basis-1/2"
                >
                  <ScrollAnimation idx={index / 2} key={data.id}>
                    <PhotoNewsCard data={data} variant="small" />
                  </ScrollAnimation>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-[#01075ce7] text-white hover:bg-[#01075c] hover:text-white border-[#01075c]" />
            <CarouselNext className="right-2 bg-[#01075ce7] text-white hover:bg-[#01075c] hover:text-white border-[#01075c]" />
          </Carousel> */}
        </div>
      </div>
    </>
  );
};

export default PhotoNews;
