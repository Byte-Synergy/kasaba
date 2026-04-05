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
  // Ensure we have at least 5 items
  const newsItems = data?.slice(0, 5) || [];

  return (
    <div className="my-10 max-md:my-5">
      <ScrollAnimation>
        <NewsTitle
          lang={lang}
          title={photo_news_label}
          button={all_label}
          href="/news/photo"
          variant="dark"
        />
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px] items-stretch min-h-[560px] md:min-h-[640px]">
        {/* Left Column Items */}
        <div className="flex flex-col gap-[15px] md:order-1 h-full">
          {newsItems[0] && (
            <ScrollAnimation className="h-full">
              <PhotoNewsCard data={newsItems[0]} variant="standard" />
            </ScrollAnimation>
          )}
          {newsItems[3] && (
            <ScrollAnimation className="h-full">
              <PhotoNewsCard data={newsItems[3]} variant="standard" />
            </ScrollAnimation>
          )}
        </div>

        {/* Center Hero Item (Span 2 cols) */}
        {newsItems[1] && (
          <div className="md:col-span-2 md:order-2 h-full">
             <ScrollAnimation className="h-full">
               <PhotoNewsCard data={newsItems[1]} variant="hero" />
             </ScrollAnimation>
          </div>
        )}

        {/* Right Column Items */}
        <div className="flex flex-col gap-[15px] md:order-3 h-full">
          {newsItems[2] && (
            <ScrollAnimation className="h-full">
              <PhotoNewsCard data={newsItems[2]} variant="standard" />
            </ScrollAnimation>
          )}
          {newsItems[4] && (
            <ScrollAnimation className="h-full">
              <PhotoNewsCard data={newsItems[4]} variant="standard" />
            </ScrollAnimation>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoNews;
