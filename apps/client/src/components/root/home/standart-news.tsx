"use client";
import NewsTitle from "@/components/news/title";
import { Container } from "@/components/shared";
import StandardNewsCard from "@/components/shared/standart-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Locale } from "@/configs/i18n";
import { NewsDataType } from "@/types";

const StandardNews = ({
  news,
  news_label,
  lang,
  all_label
}: {
  lang: Locale;
  news_label: string;
  all_label: string;
  news: NewsDataType[];
}) => {
  return (
    <Container className="my-10 max-md:my-5">
      <ScrollAnimation>
        <NewsTitle
          lang={lang}
          button={all_label}
          href="/news/standard"
          title={news_label}
        />
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px] items-stretch">
        {/* Division 1: News with Images (Left Side, 3/4 width) */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-[15px] items-stretch">
          {/* Row 1: 1st Small (news[1]) + 2nd Large (news[0]) */}
          {news?.[1] && (
            <ScrollAnimation className="h-full">
              <StandardNewsCard data={news[1]} variant="card" />
            </ScrollAnimation>
          )}
          {news?.[0] && (
            <ScrollAnimation className="md:col-span-2 h-full">
              <StandardNewsCard
                className="w-full"
                data={news[0]}
                variant="fit"
              />
            </ScrollAnimation>
          )}
          {/* Row 2 & 3: Remaining 6 small image cards */}
          {news?.slice(2, 8)?.map((item, idx) => (
            <ScrollAnimation key={item.id} idx={idx} className="h-full">
              <StandardNewsCard variant="card" data={item} />
            </ScrollAnimation>
          ))}
        </div>

        {/* Division 2: News without Images (Sidebar, 1/4 width) */}
        <div className="md:col-span-1 flex flex-col gap-[24px]">
          {news?.slice(8, 15)?.map((item, idx) => (
            <ScrollAnimation key={item.id} idx={idx} className="h-full">
              <StandardNewsCard variant="box-text" data={item} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default StandardNews;
