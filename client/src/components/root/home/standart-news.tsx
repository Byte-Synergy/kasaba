"use client";
import NewsTitle from "@/components/news/title";
import { Container } from "@/components/shared";
import NewsOption from "@/components/shared/news-option";
import StandardNewsCard from "@/components/shared/standart-news-card";
import TopNewsCard from "@/components/shared/top-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Locale } from "@/configs/i18n";
import { useWindowSize } from "@/hooks/useWindowSize";
import { cn } from "@/libs/utils";
import { NewsDataType } from "@/types";
import { AppType } from "@/types/server";
import { useEffect, useState } from "react";

const StandardNews = ({
  news,
  ads,
  news_label,
  areas_label,
  lang,
  search_label,
  archive_label,
  all_label,
}: {
  lang: Locale;
  search_label: string;
  news_label: string;
  areas_label: string;
  all_label: string;
  archive_label: string;
  news: NewsDataType[];
  ads: AppType["~Routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
}) => {
  const { width } = useWindowSize();
  const [data, setData] = useState<NewsDataType[]>([]);

  useEffect(() => {
    if (width) {
      if (width < 450) {
        setData(news.slice(0, 4));
      } else {
        setData(news);
      }
    }
  }, [width, news]);

  return (
    <Container>
      <ScrollAnimation>
        <NewsTitle
          lang={lang}
          button={all_label}
          href="/news/standard"
          title={news_label}
          variant="titleWithLink"
        />
      </ScrollAnimation>

      <div className="flex gap-8 max-md:flex-col items-start">
        <div className="w-4/5 max-md:w-full grid md:grid-cols-3 gap-4 items-start max-md:gap-x-3 max-md:gap-y-5">
          {/* <ScrollAnimation className="h-full">
            <StandardNewsCard data={data[1]} />
          </ScrollAnimation> */}
          {data[1] && (
            <ScrollAnimation className="col-span-1 h-full">
              <StandardNewsCard data={data[1]} variant="withThumbnailImage" />
            </ScrollAnimation>
          )}
          {data?.[0] && (
            <ScrollAnimation className="md:col-span-2 max-md:px-5 xl:h-[500px] lg:h-[350px] sm:h-[250px]">
              <TopNewsCard
                variant="inStandardNewsSection"
                lang={lang}
                data={data[0]}
              />
            </ScrollAnimation>
          )}
          {data?.slice(2, 5)?.map((item, idx) => (
            <div key={item.id} className="h-full">
              <ScrollAnimation idx={idx} className="col-span-1 h-full">
                <StandardNewsCard data={item} variant="withThumbnailImage" />
              </ScrollAnimation>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "w-1/5 max-md:w-full h-full md:block hidden",
            "flex flex-col items-start gap-4"
          )}
        >
          {data?.slice(5)?.map((item, idx) => (
            <ScrollAnimation key={item.id} idx={idx} className="h-full">
              <StandardNewsCard data={item} variant="withoutThumbnailImage" />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default StandardNews;
