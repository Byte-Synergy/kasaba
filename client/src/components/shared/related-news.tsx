import React from "react";
import Container from "./container";
import StandardNewsCard from "./standart-news-card";
import { NewsDataType } from "@/types";
import NewsTitle from "../news/title";
import { Locale } from "@/configs/i18n";

const RelatedNews = ({
  data,
  news_on_the_topic_label,
  all_label,
  lang,
}: {
  news_on_the_topic_label: string;
  all_label: string;
  data: NewsDataType[];
  lang: Locale;
}) => {
  return (
    <div className=" py-16 max-md:py-5">
      <NewsTitle
        title={news_on_the_topic_label}
        button={all_label}
        href={`/news/${data[0].type}`}
        lang={lang}
        variant="titleWithLink"
      />
      <div className=" grid grid-cols-4 max-md:grid-cols-1 gap-7 max-md:gap-3 ">
        {data.map((data) => (
          <StandardNewsCard
            key={data.id}
            data={{ ...data, type: "standard" }}
            variant="withThumbnailImage"
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
