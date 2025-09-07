"use client";

import { NewsDataType } from "@/types";
import {
  formatDateToDateTime,
  formateDateToDayhithMonth,
} from "@/utils/formatDate";
import Image from "next/image";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";
import { cn } from "@/libs/utils";
import { useTranslations } from "@/utils/translation-provider";

const TopNewsCard = memo(
  ({
    data,
    lang,
    variant = "inTopNewsSection",
  }: {
    lang: Locale;
    data: NewsDataType;
    variant: "inTopNewsSection" | "inStandardNewsSection";
  }) => {
    const t = useTranslations();

    return (
      <Link
        lang={lang}
        href={`/news/${data.type}/${data.path}`}
        className={cn(
          "relative inline-block w-full h-full",
          "",
          "overflow-hidden rounded-[10px]"
        )}
      >
        <Image
          src={data.files?.[0]?.href || "/img/image 5.png"}
          alt={data.title || ""}
          width={1920}
          height={750}
          className="w-full h-[750px] object-cover"
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 w-full ",
            variant === "inTopNewsSection" && "h-2/3",
            variant === "inStandardNewsSection" && "h-1/3"
          )}
        >
          <div
            className={cn(
              "relative w-full h-full flex items-end gap-y-2 max-md:gap-5",
              variant === "inTopNewsSection" && "py-[25px] px-[75px]",
              variant === "inStandardNewsSection" && "py-[15px] px-[50px]",
              "max-md:p-5 z-10 max-md:py-4 max-md:px-5",
              "after:w-full after:h-full after:absolute after:bottom-0 after:left-0 after:content-[''] after:bg-gradient-to-t after:from-[#000674] after:via-[#0008A7]/50 after:to-[#000BDA]/0 after:opacity-[60%] after:-z-10"
            )}
          >
            <div
              className={cn(
                "w-full flex items-center justify-between",
                variant === "inTopNewsSection" && "py-[25px]",
                variant === "inTopNewsSection" && "py-[15px]"
              )}
            >
              <h3
                className={cn(
                  "w-[85%] text-white text-5xl max-md:text-xl font-bold",
                  variant === "inTopNewsSection"
                    ? "xl:text-5xl lg:text-4xl md:text-3xl"
                    : "xl:text-3xl lg:text-2xl md:text-xl",
                  "line-clamp-2"
                )}
              >
                {data.title}
              </h3>
              <p
                className={cn(
                  "relative",
                  "flex flex-col items-center",
                  variant === "inTopNewsSection" && " gap-3",
                  variant === "inStandardNewsSection" && " gap-1",
                  variant === "inTopNewsSection" && "py-5 px-7",
                  variant === "inStandardNewsSection" && "py-3 px-5",
                  variant === "inTopNewsSection" &&
                    "text-6xl xl:text-4xl lg:text-3xl md:text-xl sm:text-lg text-white",
                  variant === "inStandardNewsSection" &&
                    "text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-white",
                  "rounded-[10px]  outline-[1.34px] outline-offset-[-1.34px] outline-white/10 overflow-hidden",
                  "after:absolute after:w-full after:h-full after:content-[''] after:top-0 after:left-0 after:bg-white/30  after:backdrop-blur-[20.03px] after:-z-10"
                )}
              >
                <span className={cn()}>
                  {formateDateToDayhithMonth(data.createdAt).day}
                </span>
                <span>
                  {t(
                    `month.${formateDateToDayhithMonth(data.createdAt).month}`
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

export default TopNewsCard;
