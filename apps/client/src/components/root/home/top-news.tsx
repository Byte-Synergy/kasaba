"use client";
import Container from "../../shared/container";
import TopNewsCard from "@/components/shared/top-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useParams } from "next/navigation";
import { Locale } from "@/configs/i18n";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TopNews = ({ news }: { news: NewsDataType[] }) => {
  const { lang } = useParams<{ lang: Locale }>();

  return (
    Boolean(news.length) && (
      <Container className="relative max-md:w-full my-5 group/swiper">
        <ScrollAnimation>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              className="w-full h-full [&_.swiper-pagination-bullet]:!bg-white [&_.swiper-pagination-bullet]:w-[17px] [&_.swiper-pagination-bullet]:h-[17px] [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet-active]:!w-[63px] [&_.swiper-pagination-bullet-active]:!rounded-[10px] [&_.swiper-pagination-bullet]:shadow-[0px_2px_4px_rgba(0,0,0,0.45)] [&_.swiper-pagination]:!bottom-10 transition-all [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300"
            >
              {news.map((data) => (
                <SwiperSlide key={data.id} className="max-md:px-5">
                  <TopNewsCard lang={lang} data={data} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              type="button"
              className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 w-[46px] h-[46px] flex items-center justify-center rounded-full bg-white text-[#000573] shadow-lg transition-all opacity-0 group-hover/swiper:opacity-100 max-md:hidden cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 w-[46px] h-[46px] flex items-center justify-center rounded-full bg-white text-[#000573] shadow-lg transition-all opacity-0 group-hover/swiper:opacity-100 max-md:hidden cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </ScrollAnimation>
      </Container>
    )
  );
};

export default TopNews;
