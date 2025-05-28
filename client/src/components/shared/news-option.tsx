"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useParams } from "next/navigation";
import EventCalendar from "./event-calendar";
import ScrollAnimation from "../ui/scroll-animation";
import { useEffect, useState } from "react";
import { cn } from "@/libs/utils";
import { placesData } from "@/data/place";
import { getNewsCategories } from "@/action/news";
import Image from "next/image";
import { AppType } from "@/types/server";
import Link from "../link";

const NewsOption = ({
  ads,
  areas_label,
  archive_label,
  search_label,
}: {
  search_label: string;
  areas_label: string;
  archive_label: string;
  ads: AppType["_routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
}) => {
  const params = useParams<{ lang: string }>();
  const [places, setPlaces] = useState<
    { title: string; lang: string; isdisabled: boolean; link: string }[]
  >([]);

  useEffect(() => {
    async function getCategories() {
      const { data } = await getNewsCategories();

      if (!data) return;
      setPlaces(
        placesData
          .filter((place) => place.lang === params.lang)
          .map((place) => {
            const hasCategory = data.some((category) =>
              place.title.toLowerCase().includes(category.name.toLowerCase())
            );

            return {
              ...place,
              isdisabled: !hasCategory,
            };
          })
      );
    }
    getCategories();
  }, []);
  return (
    <div className="flex items-start flex-col gap-y-4 max-md:gap-5 ">
      <div className=" w-full">
        <ScrollAnimation>
          <h2 className="py-[15px] px-[25px] bg-[#ff8400] text-white font-montserrat text-center text-2xl font-bold ">
            {areas_label}
          </h2>
        </ScrollAnimation>
        {places.map((section, idx) => (
          <ScrollAnimation key={section.title + idx} idx={idx} className="grid">
            <Link
              lang={!section.isdisabled ? params.lang : undefined}
              className={cn(
                "relative py-[15px] text-left px-[20px] text-white text-base font-bold my-[5px] z-0 border border-[#000573] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[#000573] after:-z-10 cursor-pointer overflow-hidden",
                section.isdisabled
                  ? "bg-[#000573] text-white after:bg-white/5 cursor-not-allowed"
                  : " hover:after:left-[100%]  hover:text-[#000573] cursor-pointer"
              )}
              key={idx}
              href={!section.isdisabled ? section.link : undefined}
            >
              {section.title}
            </Link>
          </ScrollAnimation>
        ))}
      </div>
      <ScrollAnimation>
        <EventCalendar
          search_label={search_label}
          archive_label={archive_label}
        />
      </ScrollAnimation>
      <ScrollAnimation className="w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          className="size-full max-h-56"
        >
          {ads
            .filter((ad) => ad.type === "fit")
            .map((ad, key) => (
              <SwiperSlide key={key}>
                <a href={ad.url}>
                  <Image
                    src={ad.file.href}
                    alt={ad.file.name}
                    width={1080}
                    height={1080}
                    className="size-full object-cover"
                  />
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </ScrollAnimation>
    </div>
  );
};

export default NewsOption;
