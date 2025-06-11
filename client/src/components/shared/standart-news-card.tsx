"use client";

import { Locale } from "@/configs/i18n";
import { cn } from "@/libs/utils";
import { NewsDataType } from "@/types";
import { formatDateToDateTime } from "@/utils/formatDate";
import { FormateToTitle } from "@/utils/formateTitle";
import Image from "next/image";
import React, { memo } from "react";
import Link from "../link";
import { useParams } from "next/navigation";

type CardStyles = {
  parentDiv?: string;
  image?: string;
  informationDiv?: string;
  titleParent?: string;
  title?: string;
  description?: string;
  badge?: string;
  options?: string;
};

const CardVariant = (variant: string): CardStyles => {
  switch (variant) {
    case "card":
      return {
        parentDiv:
          "w-full bg-white shadow-lg border border-[#e6e6e6] hover:shadow-[0_4px_12px_#1717170d,0_24px_46px_#17171714,0_47px_60px_#17171721] hover:-translate-y-3 transition-all",
        image: "w-full h-56 max-md:h-48",
        informationDiv:
          "relative py-4 px-[16px] flex flex-col items-start gap-y-[8px] mad-md:py-1 max-md:px-[12px]",
        titleParent: "absolute bottom-[100%] left-0",
        title:
          "relative py-[5px] px-[10px] text-[#01075c] text-[12px] font-bold z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white/60 after:backdrop-blur-xs after:-z-10 font-montserrat max-md:text-md line-clamp-2",
        options: "justify-between",
        description: "text-[#01075c] h-[40px] text-sm font-medium break-normal line-clamp-2",
        badge:
          "bg-[#2f348d] inline-flex py-[6px] px-[14px] justify-center items-center gap-x-1 rounded text-white text-[10px] font-medium font-raleway",
      };
    case "fit":
      return {
        parentDiv: "h-full w-full border border-[#e6e6e6]",
        image: "w-full h-[500px] max-md:h-[400px]",
        informationDiv:
          "absolute w-full bottom-0 left-0 py-[20px] px-[12px] bg-[#000573]/60 inline-flex items-start flex-col-reverse gap-y-[8px]",
        titleParent: "w-[466.64px] max-md:w-full ",
        title: "w-full h-full text-white text-xl font-bold",
        description: "hidden",
        options: "justify-start gap-x-4",
        badge:
          "inline-flex justify-center items-center gap-x-1 rounded text-white text-sm font-medium relative z-0 py-[6px] px-[14px] rounded border border-white/10 inline-flex justify-center items-center after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-white/10 after:backdrop-blur-[30px] after:-z-10 overflow-hidden",
      };
    default:
      return {};
  }
};

const StandardNewsCard = memo(
  ({
    variant = "card",
    data,
    className = "",
  }: {
    variant?: string;
    data: NewsDataType;
    className?: string;
  }) => {
    const styles = CardVariant(variant);
    const { lang } = useParams<{ lang: Locale }>();

    return (
      <Link
        lang={lang}
        href={`/news/${data.type}/${data.path}`}
        className={cn(
          "border inline-block relative overflow-hidden group h-full rounded-sm",
          styles?.parentDiv,
          className
        )}
      >
        <div className={cn("overflow-hidden aspect-video", styles.image)}>
          {(data.type === "photo" || data.type === "standard") &&
            data.files?.[0]?.href && (
              <Image
                src={data.files?.[0]?.href}
                alt={data.title}
                width={1920}
                height={1080}
                className={cn(
                  "w-full h-full object-cover transition-transform"
                )}
              />
            )}
          {data.type === "video" &&
            data.content.find((content) => content.type === "video-url") && (
              <iframe
                src={
                  (
                    data.content.find(
                      (content) => content.type === "video-url"
                    ) as any
                  ).value
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="size-full"
              />
            )}
        </div>
        <div className={cn("py-5", styles.informationDiv)}>
          <div
            className={cn("w-full transition-all duration-300", styles.titleParent)}
          >
            <h3 className={cn(styles.title, "line-clamp-2")}>{data.title}</h3>
          </div>
          <div className={cn("w-full flex items-center", styles.options)}>
            <p className={cn(styles.badge)}>
              <span>
                {formatDateToDateTime(
                  data.createdAt || new Date().toISOString()
                )}
              </span>
            </p>
          </div>
          <p className={cn(styles.description)}>
            {data.description}
          </p>
        </div>
      </Link>
    );
  }
);
export default StandardNewsCard;
