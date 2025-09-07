"use client";
import { cn } from "@/libs/utils";
import { NewsDataType } from "@/types";
import { formateDateToDayhithMonth } from "@/utils/formatDate";
import Image from "next/image";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";
import { useParams } from "next/navigation";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useTranslations } from "@/utils/translation-provider";

const PhotoNewsCard = memo(
  ({
    data,
    variant = "primaryPhotoCard",
  }: {
    data: NewsDataType;
    variant?: "primaryPhotoCard" | "secondaryPhotoCard";
  }) => {
    const { lang } = useParams<{ lang: Locale }>();
    const { width } = useWindowSize();

    const thumblPhoto = data.files?.find(
      (d) => data.content[0].fileId === d.name
    );

    const t = useTranslations();

    return (
      <Link
        lang={lang}
        href={`/news/${data?.type}/${data?.path}`}
        className={cn("w-full relative block  custom-glow rounded-sm group")}
      >
        <div
          className={cn(
            variant === "primaryPhotoCard" && "w-96 h-64",
            variant === "secondaryPhotoCard" && "w-[829.45px] h-[550.82px] ",
            "relative",
            "before:absolute before:w-full before:h-full before:-top-2 before:left-2 before:content-[''] before:bg-white/12 before:-z-10 group-hover:before:-top-4 group-hover:before:left-4 before:transition-all before:duration-250 before:delay-0",
            "after:absolute after:w-full after:h-full after:-top-4 after:left-4 after:content-[''] after:bg-white/12 after:-z-20 group-hover:after:-top-7 group-hover:after:left-7 after:transition-all after:duration-250 after:delay-150"
          )}
        >
          <div
            className={cn(
              variant === "primaryPhotoCard" && "w-96 h-64",
              variant === "secondaryPhotoCard" && "w-[829.45px] h-[550.82px] ",
              "relative overflow-hidden"
            )}
          >
            <Image
              src={`${thumblPhoto?.href}`}
              alt={data.title}
              fill
              objectFit="cover"
              className="group-hover:mix-blend-darken transition-all duration-200 delay-100"
            />
          </div>
          <div
            className={cn(
              "absolute bottom-0 left-0 w-full h-full bg-[#1717176c] group-hover:bg-[#1717171d] transition-all duration-200 delay-100",
              "flex flex-col justify-between"
            )}
          >
            <div></div>
            <div className=" px-6 pb-6">
              <p
                className={cn(
                  "my-2.5",
                  variant === "primaryPhotoCard" &&
                    "text-white/80 text-lg font-medium leading-snug",
                  variant === "secondaryPhotoCard" &&
                    "px-5 py-1 bg-white/10 backdrop-blur-xl inline-block text-white/75",
                  variant === "secondaryPhotoCard" &&
                    "rounded-[28.94px] outline-[1.45px] outline-offset-[-1.45px] outline-white/10 group-hover:outline-white/30"
                )}
              >
                {formateDateToDayhithMonth(data.createdAt).day} -{" "}
                {t(`month.${formateDateToDayhithMonth(data.createdAt).month}`)}{" "}
                {+formateDateToDayhithMonth(data.createdAt).year}
              </p>
              <h3
                className={cn(
                  "text-white text-xl font-bold leading-relaxed [text-shadow:_0px_6px_29px_rgb(23_23_23_/_0.30)]",
                  variant === "primaryPhotoCard" && "line-clamp-1",
                  variant === "secondaryPhotoCard" && "line-clamp-2"
                )}
              >
                {data.title}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

export default PhotoNewsCard;
