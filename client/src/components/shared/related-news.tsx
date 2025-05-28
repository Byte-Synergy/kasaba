import React from "react";
import Container from "./container";
import StandardNewsCard from "./standart-news-card";
import { ChevronRight } from "lucide-react";
import { NewsDataType } from "@/types";

const RelatedNews = ({
  data,
  news_on_the_topic_label,
  all_label,
}: {
  news_on_the_topic_label: string;
  all_label: string;
  data: NewsDataType[];
}) => {
  return (
    <Container className=" py-16 max-md:py-5">
      <div className="flex items-center justify-start gap-3 mb-10 max-md:mb-5">
        <div className="w-8 h-8 max-md:min-w-4 max-md:h-4 bg-orange-500" />
        <p className=" font-montserrat font-semibold text-4xl max-md:text-base max-md:text-nowrap max-md:text-blue-950">
          {news_on_the_topic_label}
        </p>
        <div className=" hidden max-md:block w-full h-[1px] bg-blue-950"></div>
        <button className=" items-center gap-1 hidden max-md:flex ">
          <span className="text-sm text-[#A4B0BE] font-bold uppercase">
            {all_label}
          </span>
          <ChevronRight className="text-[#A4B0BE] " />
        </button>
      </div>
      <div className=" grid grid-cols-4 max-md:grid-cols-2 gap-7 max-md:gap-3">
        {data.map((data) => (
          <StandardNewsCard
            key={data.id}
            data={{ ...data, type: "standard" }}
          />
        ))}
      </div>
    </Container>
  );
};

export default RelatedNews;
