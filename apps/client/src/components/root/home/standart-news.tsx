"use client";
import NewsTitle from "@/components/news/title";
import { Container } from "@/components/shared";
import StandardNewsCard from "@/components/shared/standart-news-card";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Locale } from "@/configs/i18n";
import { NewsDataType } from "@/types";
import { cn } from "@/libs/utils";

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
          {/* Main Large Card (news[0]) - First on mobile */}
          {news?.[0] && (
            <ScrollAnimation className="order-1 md:order-2 md:col-span-2 h-full">
              <StandardNewsCard
                className="w-full"
                data={news[0]}
                variant="fit"
              />
            </ScrollAnimation>
          )}

          {/* First Small Card (news[1]) */}
          {news?.[1] && (
            <ScrollAnimation className="order-2 md:order-1 h-full">
              <StandardNewsCard data={news[1]} variant="card" />
            </ScrollAnimation>
          )}

          {/* Remaining Small Cards (Showing only 2 more on mobile to have 3 total small cards, or show 3 if news[1] is counted) */}
          {/* User said: Large card + 3 more image cards. So news[1, 2, 3] */}
          {news?.slice(2, 8).map((item, idx) => (
            <ScrollAnimation 
              key={item.id} 
              idx={idx} 
              className={cn(
                "order-3 h-full",
                idx >= 2 ? "hidden md:block" : "" // Show news[2] and news[3] on mobile (idx 0 and 1 here)
              )}
            >
              <StandardNewsCard variant="card" data={item} />
            </ScrollAnimation>
          ))}
        </div>

        {/* Division 2: News without Images (Sidebar) - Hidden on mobile */}
        <div className="md:col-span-1 hidden md:flex flex-col gap-[24px]">
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
