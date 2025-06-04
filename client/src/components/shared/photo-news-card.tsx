"use client";
import { cn } from "@/libs/utils";
import { NewsDataType } from "@/types";
import { formatDateToDateTime } from "@/utils/formatDate";
import { FormateToTitle } from "@/utils/formateTitle";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";
import { useParams } from "next/navigation";
import { useWindowSize } from "@/hooks/useWindowSize";

const PhotoNewsVariants = (variant: string) => {
  switch (variant) {
    case "standard":
      return {
        card: "w-full h-[361px]",
        p: "py-1 px-6 rounded bg-white/15 font-medium text-sm text-white",
        link: "font-semibold text-xl text-white hover:text-orange-500 duration-200 max-md:text-md line-clamp-1",
        blurBox: "gap-4 p-5 max-md:p-2 max-md:gap-2",
      };
    case "small":
      return {
        card: "h-[225px]",
        p: "py-1 px-6 rounded bg-white/15 font-medium text-[10px] text-white",
        link: "font-semibold text-xs text-white hover:text-orange-500 duration-200 max-md:text-xs line-clamp-1",
        blurBox: "gap-y-2 py-3 px-6 max-md:py-2 max-md:px-3 max-md:gap-2",
      };
    default:
      return {
        card: "w-full h-[361px]",
        p: "py-1 px-6 rounded bg-white/15 font-medium text-sm text-white",
        link: "font-semibold text-xl text-white hover:text-orange-500 duration-200 max-md:text-xs",
        blurBox: "gap-4 p-5 max-md:px-3",
      };
  }
};

const PhotoNewsCard = memo(
  ({
    data,
    variant = "standard",
  }: {
    data: NewsDataType;
    variant?: string;
  }) => {
    const { lang } = useParams<{ lang: Locale }>();
    const {width} = useWindowSize()

    const thumblPhoto = data.files?.find(d => data.content[0].fileId === d.name)
    console.log(thumblPhoto);
    
    return (
      <Link
        lang={lang}
        href={`/news/${data?.type}/${data?.path}`}
        className={cn(
          "w-full relative block group overflow-hidden custom-glow group ",
          PhotoNewsVariants(variant).card
        )}
      >
        <Image
          width={594}
          height={350}
          className=" w-full h-full object-cover group-hover:scale-105 transition-transform"
          src={`${thumblPhoto?.href || "/img/image 4.png"}`}
          alt="Photo"
          loading="lazy"
        />
        <div className="z-20 absolute bottom-[0%] left-0 w-full inline-block transition-all">
          <div
            className={cn(
              "w-full flex flex-col items-start justify-center relative z-0 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:content-[''] after:bg-black/60 after:backdrop-blur-xl after:-z-10",
              PhotoNewsVariants(variant).blurBox
            )}
          >
            <div className="w-full flex items-center justify-between">
              <div
                className={cn(
                  "flex items-center gap-x-1",
                  PhotoNewsVariants(variant)?.p
                )}
              >
                <p>{formatDateToDateTime(data?.createdAt)}</p>
              </div>
              {/* <button className="p-2 rounded-sm hover:bg-white/15 translate-x-40 group-hover:translate-x-0 transition-all">
                <EllipsisVertical className="w-5 h-5 text-white" />
              </button> */}
            </div>
            <h3 className={cn(PhotoNewsVariants(variant)?.link, "line-clamp-1 max-md:line-clamp-1")}>
              {data.title}
            </h3>
            {/* <div className=" w-full h-full absolute top-0 left-0 bg-black/55 -z-10"></div> */}
          </div>
        </div>
      </Link>
    );
  }
);

export default PhotoNewsCard;
