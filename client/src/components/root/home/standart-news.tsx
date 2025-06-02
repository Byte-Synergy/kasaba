'use client'
import NewsTitle from "@/components/news/title";
import { Container } from "@/components/shared";
import NewsOption from "@/components/shared/news-option";
import StandardNewsCard from "@/components/shared/standart-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Locale } from "@/configs/i18n";
import { useWindowSize } from "@/hooks/useWindowSize";
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
  all_label
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
        />
      </ScrollAnimation>

      <div className="flex gap-8 max-md:flex-col items-start">
        <div className="w-3/4 max-md:w-full grid md:grid-cols-3 gap-7 items-start max-md:gap-x-3 max-md:gap-y-5">
          {data?.[0] && (
            <StandardNewsCard
              className="md:col-span-3"
              data={data[0]}
              variant="fit"
            />
          )}
          {data?.slice(1)?.map((item, idx) => (
            <div key={item.id} className="h-full">
              <ScrollAnimation idx={idx} className="h-full">
                <StandardNewsCard variant="card" data={item} />
              </ScrollAnimation>
            </div>
          ))}
        </div>

        <div className="w-1/4 max-md:w-full md:block hidden">
          <NewsOption
            search_label={search_label}
            archive_label={archive_label}
            areas_label={areas_label}
            ads={ads}
          />
        </div>
      </div>
    </Container>
  );
};

export default StandardNews;
