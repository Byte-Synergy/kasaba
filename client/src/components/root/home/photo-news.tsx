"use client";

import PhotoNewsCard from "@/components/shared/photo-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { NewsDataType } from "@/types";
import { Locale } from "@/configs/i18n";
import NewsTitle from "@/components/news/title";

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
      <ScrollAnimation className="">
        <NewsTitle
          lang={lang}
          title={photo_news_label}
          button={all_label}
          href="/news/photo"
          className="max-md:text-[#fff]"
          variant="subtitleWithLink"
        />
      </ScrollAnimation>
      {/* <div className="flex flex-col gap-y-10"> */}
      <div className="grid grid-cols-4 grid-rows-4 auto-rows-fr gap-9 max-md:flex-col max-md:gap-5 pt-5">
        <ScrollAnimation idx={0} className="col-span-1 row-span-1">
          <PhotoNewsCard data={data[0]} />
        </ScrollAnimation>

        {/* Ikkinchi item: 2 ustun va 2 qatorni egallaydi */}
        <ScrollAnimation idx={1} className="col-span-2 row-span-2">
          <PhotoNewsCard data={data[1]} variant="secondaryPhotoCard" />
        </ScrollAnimation>

        <ScrollAnimation idx={2} className="col-span-1 row-span-1">
          <PhotoNewsCard data={data[2]} />
        </ScrollAnimation>

        <ScrollAnimation idx={3} className="col-span-1 row-span-1">
          <PhotoNewsCard data={data[3]} />
        </ScrollAnimation>

        <ScrollAnimation idx={4} className="col-span-1 row-span-1">
          <PhotoNewsCard data={data[4]} />
        </ScrollAnimation>
      </div>
    </>
  );
};

export default PhotoNews;
