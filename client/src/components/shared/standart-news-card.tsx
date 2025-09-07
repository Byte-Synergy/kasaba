"use client";

import { Locale } from "@/configs/i18n";
import { cn } from "@/libs/utils";
import { NewsDataType } from "@/types";
import { formatDateToDateTime } from "@/utils/formatDate";
import Image from "next/image";
import React, { memo } from "react";
import Link from "../link";
import { useParams } from "next/navigation";
import { Calendar } from "lucide-react";

const StandardNewsCard = memo(
  ({
    data,
    className = "",
    variant = "withThumbnailImage",
  }: {
    data: NewsDataType;
    className?: string;
    variant: "withThumbnailImage" | "withoutThumbnailImage";
  }) => {
    const { lang } = useParams<{ lang: Locale }>();
    console.log("entery new data: ", data);

    return (
      <Link
        lang={lang}
        href={`/news/${data.type}/${data.path}`}
        className={cn(
          "inline-block overflow-hidden group h-full rounded-sm",
          "shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.35)]",
          variant === "withThumbnailImage" &&
            "hover:-translate-y-3 transition-transform",
          // styles?.parentDiv,
          className
        )}
      >
        {variant === "withThumbnailImage" ? (
          <div className={cn("w-full relative")}>
            {data.files?.[0]?.href && (
              <Image
                src={data.files?.[0]?.href}
                alt={data.title}
                width={1920}
                height={1080}
                className={cn(
                  "w-full h-72 object-cover rounded-tl-[5px] rounded-tr-[5px]"
                )}
                loading="lazy"
              />
            )}
          </div>
        ) : null}
        <div
          className={cn(
            "py-[18px] px-4",
            variant === "withThumbnailImage" && "h-44"
            // variant === "withoutThumbnailImage" && "h-44"
          )}
        >
          <div
            className={cn(
              "group mb-[10px]",
              "inline-flex items-center justify-start gap-x-2",
              "border-[1px] border-gray-500 px-2 py-1 rounded-3xl",
              "group-hover:border-[#111]"
            )}
          >
            <span>
              <Calendar className="w-4 h-4 text-gray-500 group-hover:text-[#111]" />
            </span>
            <span className="text-sm text-gray-500 group-hover:text-[#111]">
              {formatDateToDateTime(data.createdAt || new Date().toISOString())}
            </span>
          </div>
          <h3
            className={cn(
              "text-[#01075C] font-semibold text-xl mb-2",
              "line-clamp-2",
              "group-hover:underline group-hover:underline-offset-1 transition-[0.5s_ease_linear]"
            )}
          >
            {data.title}
          </h3>
          <p
            className={cn(
              "text-zinc-700 text-sm font-medium",
              variant === "withThumbnailImage" && "line-clamp-2",
              variant === "withoutThumbnailImage" && "line-clamp-3"
            )}
          >
            {data.description}
          </p>
        </div>
      </Link>
    );
  }
);
export default StandardNewsCard;
