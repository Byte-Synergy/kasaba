"use client";

import React from "react";
import Container from "../../shared/container";
import TopNewsCard from "@/components/shared/top-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { AppType } from "@/types/server";
import Ads from "@/components/shared/ads";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Locale } from "@/configs/i18n";

const TopNews = ({
  news,
  ads,
}: {
  ads: AppType["_routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
  news: NewsDataType[];
}) => {
  const { lang } = useParams<{ lang: Locale }>();
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
                <SwiperSlide key={data.id}>
                  <TopNewsCard lang={lang} data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
            {Boolean(ads.length) && (
              // <div className="grid gap-3 min-w-[300px]">
              //   <ScrollAnimation className="max-w-[300px]">
              //     <Swiper
              //       modules={[Autoplay]}
              //       autoplay={{
              //         delay: 3000,
              //         disableOnInteraction: false,
              //       }}
              //       loop={true}
              //       className="size-full"
              //     >
              //       {[{ url: "", p: "img/banners/120uz.jpg" }].map(
              //         (ad, key) => (
              //           <SwiperSlide key={key}>
              //             <a href={ad.url} target="_blank">
              //               <Image
              //                 alt="Ad"
              //                 src={ad.p}
              //                 width={1080}
              //                 height={1080}
              //               />
              //             </a>
              //           </SwiperSlide>
              //         )
              //       )}
              //     </Swiper>
              //   </ScrollAnimation>
              //   <ScrollAnimation className="max-w-[300px]">
              //     <Swiper
              //       modules={[Autoplay]}
              //       autoplay={{
              //         delay: 3000,
              //         disableOnInteraction: false,
              //       }}
              //       loop={true}
              //       className="size-full"
              //     >
              //       {[
              //         {
              //           url: "https://www.oromgohlar.uz/uz",
              //           p: "img/banners/banner_uz_m.png",
              //         },
              //       ].map((ad, key) => (
              //         <SwiperSlide key={key}>
              //           <a href={ad.url} target="_blank">
              //             <Image
              //               alt="Ad"
              //               src={ad.p}
              //               width={1080}
              //               height={1080}
              //             />
              //           </a>
              //         </SwiperSlide>
              //       ))}
              //     </Swiper>
              //   </ScrollAnimation>
              // </div>
              <div className="flex px-5 md:px-0 flex-col gap-3 w-full md:max-w-[400px]">
                <Image
                  className="size-full object-cover"
                  alt="Ad"
                  src="/img/banners/120uz.jpg"
                  width={1080}
                  height={1080}
                />
                <a
                  href="https://www.oromgohlar.uz/uz"
                  target="_blank"
                  className="size-full"
                >
                  <Image
                    className="size-full object-cover"
                    alt="Ad"
                    src="/img/banners/banner_uz_m.png"
                    width={1080}
                    height={1080}
                  />
                </a>
              </div>
            )}
          </div>
        </ScrollAnimation>
      </Container>
    )
  );
};

export default TopNews;
