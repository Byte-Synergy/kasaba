"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Container } from "@/components/shared";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface BannerProps {
  ads: Array<{
    id: string;
    url: string;
    type: string;
    file: {
      href: string;
    };
  }>;
}

const MainBanner = ({ ads }: BannerProps) => {
  const combinedBanners = ads.filter(
    (ad) => ad.type === "full" || ad.type === "hero1"
  );

  if (combinedBanners.length === 0) return null;

  return (
    <Container className="my-2 md:my-4">
      <ScrollAnimation>
        <div className="w-full relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={combinedBanners.length > 1}
            slidesPerView={1}
            className="w-full h-auto rounded-[15px] md:rounded-[30px] overflow-hidden"
          >
            {combinedBanners.map((ad, index) => (
              <SwiperSlide key={ad.id || index}>
                <a
                  href={ad.url}
                  target={ad.url === "#" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="block w-full aspect-[1729/394] overflow-hidden"
                >
                  <LazyLoadImage
                    src={ad.file.href}
                    alt="Main Banner"
                    effect="blur"
                    width="100%"
                    height="100%"
                    className="w-full h-full object-contain bg-gray-50"
                    wrapperClassName="w-full h-full"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default MainBanner;
