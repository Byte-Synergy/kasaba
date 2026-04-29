"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { Container } from "@/components/shared";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface BannerProps {
  ads: Array<{
    id: string;
    url: string | null;
    type: string;
    file: {
      href: string;
    };
  }>;
}

const SecondaryBanner = ({ ads }: BannerProps) => {
  const level2Banners = ads.filter((ad) => ad.type === "hero2");

  if (level2Banners.length === 0) return null;

  return (
    <Container className="my-4">
      <ScrollAnimation>
        <div className="w-full relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={level2Banners.length > 1}
            slidesPerView={"auto"}
            spaceBetween={20}
            centeredSlides={level2Banners.length === 1}
            className="w-full"
          >
            {level2Banners.map((ad, index) => {
              const isLink = !!ad.url;
              const content = (
                <div className="block w-[278px] h-[204px] rounded-[15px] md:rounded-[20px] overflow-hidden bg-gray-50 shadow-sm transition-shadow hover:shadow-md">
                  <LazyLoadImage
                    src={ad.file.href}
                    alt="Secondary Banner"
                    effect="blur"
                    width="100%"
                    height="100%"
                    className="w-full h-full object-contain"
                    wrapperClassName="w-full h-full"
                  />
                </div>
              );

              return (
                <SwiperSlide key={ad.id || index} style={{ width: "278px" }}>
                  {isLink ? (
                    <Link
                      href={ad.url!}
                      target={ad.url?.startsWith("http") ? "_blank" : "_self"}
                      rel={ad.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default SecondaryBanner;
