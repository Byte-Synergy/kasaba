"use client";
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
import { useRouter } from "next/navigation";
import { memo } from "react";

const ArchiveNews = memo(({ data }: { data: NewsDataType[] }) => {
  const router = useRouter();
  return (
    <Container>
      <div className="flex w-full justify-between items-center gap-x-4 my-10 max-md:my-4 bg-[#ff8400] max-md:bg-transparent py-2 px-7 max-md:px-0 max-md:gap-2 uppercase">
        <div className=" hidden max-md:block w-4! h-4 bg-orange-500!"></div>
        <h3 className="text-[#fff] text-4xl font-bold max-md:text-base max-md:text-black">
          Arxiv Yangiliklar
        </h3>
        <div className="flex-auto h-1 bg-[#ff8400] max-md:h-[1px] max-md:bg-black/75"></div>
        <button
          className="flex items-center gap-x-1 text-[#fff] group"
          onClick={() => router.push("/video-news")}
        >
          <span className="text-base font-bold uppercase max-md:text-sm max-md:text-[#A4B0BE]">
            Barchasi
          </span>
          <ChevronRight className="group-hover:translate-x-1 transition-transform max-md:text-[#A4B0BE]" />
        </button>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 max-md:-ml-4 py-5 px-4 max-md:p-0">
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
});

export default ArchiveNews;
