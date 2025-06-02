"use client";

import NewsTitle from "@/components/news/title";
import CopyContext from "@/components/shared/copy";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Locale } from "@/configs/i18n";
import { cn } from "@/libs/utils";
import { NewsDataType } from "@/types";
import { formatDate } from "@/utils";
import { FormateToTitle } from "@/utils/formateTitle";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { RiPlayFill } from "react-icons/ri";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoNews = ({
  all_label,
  video_news_label,
  data,
  share_label,
  lang,
}: {
  share_label: string;
  video_news_label: string;
  all_label: string;
  lang: Locale;
  data: NewsDataType[];
}) => {
  const [selectedData, setSelectedData] = useState<NewsDataType>();

  const changeSelectedData = (id: number | string): void => {
    setSelectedData(() => data.find((i) => i.title == id));
  };

  useEffect(() => {
    setSelectedData(data[0]);
  }, [data]);

  return (
    <>
      <ScrollAnimation>
        <NewsTitle
          lang={lang}
          title={video_news_label}
          button={all_label}
          href="/news/video"
          className="max-md:text-[#fff]"
        />
      </ScrollAnimation>
      <div className="grid grid-cols-2 py-5 max-md:grid-cols-1">
        <ScrollAnimation>
          <div className="flex flex-col gap-5 max-md:gap-2">
            {selectedData && (
              <>
                {selectedData?.content.find((i) => i.type === "video-url") && (
                  <iframe
                    src={
                      (
                        selectedData?.content.find(
                          (i) => i.type === "video-url"
                        ) as any
                      ).value
                    }
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className=" size-full aspect-video"
                  />
                )}
                {/* <ReactPlayer
                  url={videoUrl?.value}
                  controls
                  width="100%"
                  height="340px"
                /> */}
                <div className="w-full flex items-center justify-between gap-3">
                  <div className="flex items-center gap-x-4">
                    <p className="py-1 px-6 rounded bg-white/15 font-medium text-sm text-white capitalize">
                      {selectedData.tags?.[0]}
                    </p>
                    <p className="py-1 px-6 rounded bg-white/15 font-medium text-sm text-white max-md:px-3">
                      {formatDate(selectedData.createdAt || new Date())}
                    </p>
                  </div>
                  <button className="rounded bg-white/15  text-white flex">
                    <CopyContext
                      text={`https://davlat.kasaba.uz/news/${selectedData.path}`}
                    >
                      <span className="capitalize text-md">
                        {/* Ulashish */}
                        {share_label}
                      </span>
                    </CopyContext>
                  </button>
                </div>
                <div className="font-semibold text-2xl text-white duration-200 hover:text-orange-500 max-md:text-xl">
                  {selectedData.title}
                </div>
              </>
            )}
          </div>
        </ScrollAnimation>
        <div className="flex items-center justify-start max-md:flex-col my-4">
          <div className="h-full bg-orange-500/50 w-[2px] mx-10 max-md:h-[1px] max-md:w-full"></div>
          <div className="w-full h-[480px] overflow-y-auto flex flex-col gap-5 scroll-bar py-5 px-5 max-md:max-h-[240px] max-md:h-full max-md:px-0">
            {data.map((item, idx) => (
              <ScrollAnimation key={item.id} idx={idx} className="w-full">
                <div
                  className={cn(
                    "relative h-full flex items-stretch justify-start gap-3 group border border-transparent hover:border-[#FF8500] rounded-sm",
                    selectedData?.title === item?.title && "bg-white/15"
                  )}
                  onClick={() => changeSelectedData(item.title)}
                >
                  <div className="relative w-[150px] h-20 rounded-sm ">
                    <ReactPlayer
                      url={
                        (
                          item.content?.find(
                            (item) => item.type === "video-url"
                          ) as any
                        )?.value || ""
                      }
                      width={"150px"}
                      height={"100%"}
                    />
                    <div className="absolute w-full h-full flex items-center justify-center top-0 left-0 bg-gray-800/25">
                      <RiPlayFill className="w-7 h-7 text-white bg-[#FF8500] p-1 rounded-full" />
                    </div>
                  </div>
                  <div className="pr-4">
                    <p
                      className={cn(
                        " text-start font-raleway font-medium text-sm  duration-200 ",
                        "text-[#fff]/50"
                      )}
                    >
                      {formatDate(item.createdAt || new Date())}
                    </p>
                    <h3
                      className={cn(
                        "text-start font-bold text-base  duration-200  max-md:text-sm",
                        "text-white"
                      )}
                    >
                      {FormateToTitle(item.title, 50)}
                    </h3>
                  </div>
                </div>
                {/* <VideoNewsCard
                  selectedData={selectedData}
                  onClick={changeSelectedData}
                  data={item}
                /> */}
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoNews;
