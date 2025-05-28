"use client";

import UsefulLinksCard from "@/components/shared/useful-links-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ScrollAnimation from "@/components/ui/scroll-animation";
import React, { useRef } from "react";
import { Locale } from "@/configs/i18n";
import { Swiper as SwiperType } from "swiper";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const SocailMediaLinksClient = ({
  data,
  lang,
  follow_label,
}: {
  follow_label: string;
  lang: Locale;
  data: {
    title: string;
    description: string;
    url: string;
    username: string;
  }[];
}) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative">
      <Swiper
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="!pb-10"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((social, idx) => (
          <SwiperSlide key={idx} style={{ height: "auto" }}>
            <ScrollAnimation className="h-full" idx={idx}>
              <UsefulLinksCard follow_label={follow_label} data={social} />
            </ScrollAnimation>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 text-[#000674] cursor-pointer -left-4 -translate-y-1/2 z-10"
      >
        <FaCircleChevronLeft size={32} />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 text-[#000674] cursor-pointer -right-4 -translate-y-1/2 z-10"
      >
        <FaCircleChevronRight size={32} />
      </button>
    </div>
  );
};

export default SocailMediaLinksClient;
