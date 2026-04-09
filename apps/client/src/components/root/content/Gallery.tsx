"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface GalleryProps {
  images: {
    href: string;
    name: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full space-y-4">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="w-full aspect-video rounded-lg overflow-hidden"
      >
        {images.map((image, idx) => {
          if (!image.href) return null;
          return (
            <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <Image
                src={image.href}
                alt={image.name || "Gallery image"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
              />
            </div>
          </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full !mt-2 sm:!mt-4 h-20 sm:h-24 md:h-28"
      >
        {images.map((image, idx) => {
          if (!image.href) return null;
          return (
            <SwiperSlide key={idx} className="cursor-pointer rounded-md overflow-hidden opacity-50 [.swiper-slide-thumb-active&]:opacity-100 transition-opacity">
            <div className="relative w-full h-full">
              <Image
                src={image.href}
                alt={image.name || "Thumbnail"}
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>
          </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Gallery;
