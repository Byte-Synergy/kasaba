import { Container } from "@/components/shared";
import StandardNewsCard from "@/components/shared/standart-news-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewsDataType } from "@/types";
import { ChevronRight } from "lucide-react";
import React from "react";

const TopNews = ({ data }: { data: NewsDataType[] }) => {
  return (
    <Container>
      <p className=" font-bold text-2xl text-orange-500 hidden max-md:block">
        Yangiliklar
      </p>
      <div className="flex justify-between items-center gap-x-4 my-10 bg-[#ff8400] max-md:bg-transparent  py-2 px-7 max-md:px-0 max-md:gap-2 max-md:my-4 uppercase">
        <div className="hidden max-md:block w-4 h-4 bg-orange-500"></div>
        <h3 className="text-[#fff] max-md:text-black text-4xl font-bold max-md:text-base">
          Sara Yangiliklar
        </h3>
        <div className="flex-auto h-1 bg-[#ff8400] max-md:bg-black/70 max-md:h-[1px]"></div>
        <button className="hidden max-md:flex items-center gap-1 ">
          <span className="text-sm text-[#A4B0BE] font-bold uppercase">
            Barchasi
          </span>
          <ChevronRight className="text-[#A4B0BE] " />
        </button>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 py-5 px-4 max-md:p-0 max-md:-ml-4">
          {data.map((data) => (
            <CarouselItem
              key={data.id}
              className="pl-4 basis-1/4 max-md:basis-1/2"
            >
              <StandardNewsCard data={data} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-[#01075ce7] text-white hover:bg-[#01075c] hover:text-white border-[#01075c]" />
        <CarouselNext className="right-2 bg-[#01075ce7] text-white hover:bg-[#01075c] hover:text-white border-[#01075c]" />
      </Carousel>
    </Container>
  );
};

export default TopNews;
