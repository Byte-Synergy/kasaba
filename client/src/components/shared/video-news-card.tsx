"use client";

import { cn } from "@/libs/utils";
import { NewsDataType } from "@/types";
import { formatDate } from "@/utils";
import { FormateToTitle } from "@/utils/formateTitle";
import { memo } from "react";
import { RiPlayFill } from "react-icons/ri";
import ReactPlayer from "react-player";
import Link from "../link";
import { Locale } from "@/configs/i18n";
import { useParams } from "next/navigation";

const VideoNewsCard = memo(
  ({
    data,
    onClick,
    variant,
    selectedData,
  }: {
    data: NewsDataType;
    onClick?: (id: string | number) => void;
    variant?: string;
    selectedData?: NewsDataType;
  }) => {
    const { lang } = useParams<{ lang: Locale }>();

    const videoUrl =
      (data?.content?.find((item) => item.type === "video-url") as any)
        ?.value || "";

    return (
      <Link
        lang={lang}
        href={`/news/${data.type}/${data?.path}`}
        className={cn(
          "relative h-full flex items-stretch justify-start gap-3 group border border-transparent hover:border-[#FF8500] rounded-sm",
          selectedData?.title === data?.title && "bg-white/15"
        )}
        onClick={() => onClick && onClick(data?.title || "")}
      >
        <div className="relative w-[150px] h-20 rounded-sm ">
          <ReactPlayer url={videoUrl} width={"150px"} height={"100%"} />
          <div className="absolute w-full h-full flex items-center justify-center top-0 left-0 bg-gray-800/25">
            <RiPlayFill className="w-7 h-7 text-white bg-[#FF8500] p-1 rounded-full" />
          </div>
        </div>
        <div className="pr-4">
          <p
            className={cn(
              " text-start font-raleway font-medium text-sm  duration-200 ",
              variant !== "standart" ? "text-[#e7e7e7]" : "text-[#777]"
            )}
          >
            {formatDate(data?.createdAt || new Date())}
          </p>
          <h3
            className={cn(
              "text-start font-bold text-base  duration-200  max-md:text-sm",
              variant !== "standart" ? "text-white" : "text-[#222]"
            )}
          >
            {FormateToTitle(data.title, 50)}
          </h3>
        </div>
      </Link>
    );
  }
);
export default VideoNewsCard;
