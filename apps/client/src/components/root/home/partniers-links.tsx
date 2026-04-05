"use client";

import ScrollAnimation from "@/components/ui/scroll-animation";
import { Locale } from "@/configs/i18n";
import { PartniersData } from "@/data/partniers-data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useRef } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PartniersLink = () => {
  const swiperRef = useRef<any>(null);
  const { lang } = useParams<{ lang: Locale }>();
  return (
    <div className="w-full my-5 h-full">
      <ScrollAnimation className="relative">
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
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={1.5}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 4 },
            0: { slidesPerView: 1.5 },
          }}
        >
          {PartniersData.filter((p) => p.lang === lang).map((data, idx) => (
            <SwiperSlide key={idx} style={{ height: "auto" }} className="!flex">
              <a
                target="_blank"
                className="size-full bg-indigo-950 relative z-10"
                href={data.link}
              >
                <div className="relative overflow-hidden w-full h-52 max-md:h-40 bg-zinc-300">
                  <Image
                    width={100}
                    height={100}
                    className="relative w-full h-full object-contain z-10"
                    src={data.img}
                    alt="photo"
                  />
                  <Image
                    fill
                    className="blur-lg opacity-60"
                    src={data.img}
                    alt="photo"
                  />
                </div>
                <div>
                  <div className="w-full p-4 group">
                    <p className="font-montserrat font-bold text-base duration-200 text-white group-hover:text-orange-500 max-md:text-sm">
                      {data.title}
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollAnimation>
    </div>
  );
};

export default PartniersLink;
