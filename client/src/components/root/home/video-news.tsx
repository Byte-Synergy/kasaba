"use client";

import NewsTitle from "@/components/news/title";
import CopyContext from "@/components/shared/copy";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Locale } from "@/configs/i18n";
import { cn } from "@/libs/utils";
import { NewsDataType } from "@/types";
import { formatDate } from "@/utils";
import {
  formatDateToNumber,
  formateDateToDayhithMonth,
  formatTime,
} from "@/utils/formatDate";
import { FormateToTitle } from "@/utils/formateTitle";
import { useTranslations } from "@/utils/translation-provider";
import dynamic from "next/dynamic";
import Link from "next/link";
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

  const t = useTranslations();

  return (
    <>
      <ScrollAnimation>
        <NewsTitle
          lang={lang}
          title={video_news_label}
          button={all_label}
          href="/news/video"
          className="max-md:text-[#fff]"
          variant="subtitleWithLink"
        />
      </ScrollAnimation>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-x-8">
        <ScrollAnimation className="col-span-2">
          <div className="flex flex-col gap-3 max-md:gap-2 ">
            {selectedData && (
              <>
                {selectedData?.content.find(
                  (i: any) => i.type === "video-url"
                ) && (
                  <iframe
                    src={
                      (
                        selectedData?.content.find(
                          (i: any) => i.type === "video-url"
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
                <div className="w-full flex items-center justify-between gap-3">
                  <div className="flex items-center gap-x-2">
                    <p className="px-5 py-1 bg-white/10 rounded-[28.94px] outline-[1.45px] outline-offset-[-1.45px] outline-white/10 backdrop-blur-xl inline-flex justify-center items-center gap-3.5">
                      <span className={cn("text-white/75 text-xl font-medium")}>
                        {formateDateToDayhithMonth(selectedData.createdAt).day}{" "}
                        -{" "}
                        {t(
                          `month.${
                            formateDateToDayhithMonth(selectedData.createdAt)
                              .month
                          }`
                        )}{" "}
                        {
                          +formateDateToDayhithMonth(selectedData.createdAt)
                            .year
                        }
                        ,
                      </span>
                      <span className="text-white/75 text-xl font-medium">
                        {formatTime(selectedData.createdAt)}
                      </span>
                    </p>
                    {selectedData.tags.length > 0 &&
                      selectedData.tags.slice(0, 2).map((tag, idx) => (
                        <p
                          key={`${tag + idx}`}
                          className="px-5 py-1 bg-white/10 rounded-[28.94px] outline-[1.45px] outline-offset-[-1.45px] outline-white/5 backdrop-blur-xl inline-flex justify-center items-center gap-3.5 text-white/75 text-xl font-medium"
                        >
                          {tag}
                        </p>
                      ))}
                  </div>
                  <button className="rounded bg-white/15  text-white flex">
                    <CopyContext
                      text={`https://davlat.kasaba.uz/news/video/${selectedData.path}`}
                    >
                      <span className="capitalize text-md">
                        {/* Ulashish */}
                        {share_label}
                      </span>
                    </CopyContext>
                  </button>
                </div>
                <Link
                  href={`/news/video/${selectedData.path}`}
                  className="font-semibold text-white text-4xl leading-10 duration-200 hover:text-orange-500 max-md:text-xl line-clamp-1"
                >
                  {selectedData.title}
                </Link>
              </>
            )}
          </div>
        </ScrollAnimation>
        <div className="flex items-center max-md:flex-col col-span-1">
          {/* <div className="h-full bg-orange-500/50 w-[2px] mx-10 max-md:h-[1px] max-md:w-full"></div> */}
          <div className="w-full h-full overflow-y-auto flex flex-col gap-3 scroll-bar p-2">
            {data.map((item, idx) => (
              <ScrollAnimation key={item.id} idx={idx} className="w-full ">
                <div
                  className={cn(
                    "relative h-full flex items-stretch justify-start gap-3 group rounded-sm overflow-hidden transition p-1",
                    // Hoverda tashqi va ichki glow
                    "hover:shadow-[inset_0_0_10px_0__rgba(255,133,0,0.5)]"
                  )}
                  onClick={() => changeSelectedData(item.title)}
                >
                  <div className="relative w-46 h-25 rounded-sm -z-10 overflow-hidden">
                    <ReactPlayer
                      url={
                        (
                          item.content?.find(
                            (item: any) => item.type === "video-url"
                          ) as any
                        )?.value || ""
                      }
                      width={"186px"}
                      height={"100px"}
                      style={{
                        borderRadius: "10px",
                        zIndex: "-10!",
                      }}
                    />
                  </div>
                  <div className="w-[65%] pr-4 py-2">
                    <p
                      className={cn(
                        "text-start font-raleway font-medium text-lg duration-200",
                        "text-[#fff]/50"
                      )}
                    >
                      {formatDateToNumber(item.createdAt)}
                    </p>
                    <h3
                      className={cn(
                        "text-white text-xl font-semibold duration-200 max-md:text-sm",
                        "text-white line-clamp-2"
                      )}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoNews;
