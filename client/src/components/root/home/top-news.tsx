"use client";

import React, { useEffect, useState } from "react";
import Container from "../../shared/container";
import TopNewsCard from "@/components/shared/top-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { AppType } from "@/types/server";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Locale } from "@/configs/i18n";
import Link from "next/link";

const TopNews = ({
  news,
  ads,
}: {
  ads: AppType["~Routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
  news: NewsDataType[];
}) => {
  const { lang } = useParams<{ lang: Locale }>();

  const [heroAds, setHeroAds] = useState<{
    hero1: { url: string, id: number, file: { name: string; mimeType: string; extension: string; href: string }, type: string }[] | null;
    hero2: { url: string, id: number, file: { name: string; mimeType: string; extension: string; href: string }, type: string }[] | null;
  }>({
    hero1: null,
    hero2: null,
  });

  useEffect(() => {
    if (!ads.length) return;
    setHeroAds(prev => ({
      hero1: ads.filter(i => i.type === "hero1"),
      hero2: ads.filter(i => i.type === "hero2"),
    }));
  }, [ads]);

  return (
    Boolean(news.length) && (
      <Container className="relative max-md:w-full my-5">
        <ScrollAnimation>
          <div className="relative flex md:flex-row flex-col gap-3">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full"
            >
              {news.map((data) => (
                <SwiperSlide key={data.id} className="max-md:px-5">
                  <TopNewsCard lang={lang} data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
            {Object.keys(heroAds).length && (
              <div className="flex px-5 md:px-0 flex-col gap-3 w-full md:max-w-[400px]">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop
                  className="size-full max-h-56"
                >
                  {
                    heroAds.hero1?.length ?
                    heroAds.hero1.map((ad, key) => (
                      <SwiperSlide key={key}>
                        <Link key={key} href={ad?.file?.href || "/"} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={ad?.file?.href || "/img/default-image.png"}
                            alt="Ad"
                            width={1080}
                            height={1080}
                            className="size-full object-cover"
                          />
                        </Link>
                      </SwiperSlide>
                    )) : (
                      <SwiperSlide>
                        <Image
                          src="/img/banners/120uz.jpg"
                          alt="Default Ad"
                          width={1080}
                          height={1080}
                          className="size-full object-cover"
                        />
                      </SwiperSlide>
                    )
                  }
                </Swiper>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop
                  className="size-full max-h-56"
                >
                  {
                    heroAds.hero2?.length ?
                    heroAds.hero2.map((ad, key) => (
                      <SwiperSlide key={key}>
                        <Link key={key} href={ad?.file?.href || "/"} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={ad?.file?.href || "/img/banners/banner_uz_m.png"}
                            alt="Ad"
                            width={1080}
                            height={1080}
                            className="size-full object-cover"
                          />
                        </Link>
                      </SwiperSlide>
                    )) : (
                      <SwiperSlide>
                        <Image
                          src="/img/banners/banner_uz_m.png"
                          alt="Default Ad"
                          width={1080}
                          height={1080}
                          className="size-full object-cover"
                        />
                      </SwiperSlide>
                    )
                  }
                </Swiper>
              </div>
            )}
          </div>
        </ScrollAnimation>
      </Container>
    )
  );
};

export default TopNews;
