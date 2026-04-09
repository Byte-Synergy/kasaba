"use client";

import { NewsDataType } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";

const TopNewsCard = memo(
  ({ data, lang, month_labels }: { lang: Locale; data: NewsDataType; month_labels?: Record<string, string> }) => {
    const pubMonth = (new Date(data.createdAt || "").getMonth() + 1).toString();
    const monthName = month_labels?.[pubMonth] || "Month " + pubMonth;
    return (
      <Link
        lang={lang}
        href={`/news/${data.type}/${data.path}`}
        className="relative inline-block w-full aspect-[4/3] md:aspect-video overflow-hidden group rounded-none md:rounded-[10px]"
      >
        <LazyLoadImage
          src={data.files?.[0]?.href || "/img/image 5.png"}
          alt={data.title || ""}
          effect="blur"
          width="100%"
          height="100%"
          className="size-full object-cover transition-transform duration-500 rounded-none md:rounded-[10px]"
          wrapperClassName="size-full overflow-hidden"
        />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 pb-16 md:p-14 md:pb-20 transition-all duration-300 rounded-none md:rounded-[10px] bg-gradient-to-t from-[#00014d] via-[#00057360] to-transparent">
          <div className="flex flex-col gap-y-2 md:gap-y-4">
            <h3 className="w-full md:w-[85%] text-white text-base sm:text-lg md:text-3xl font-bold leading-tight drop-shadow-xl line-clamp-2">
              {data.title}
            </h3>
            {data.description && (
              <p className="w-full md:w-[75%] text-white/90 text-sm md:text-base font-medium line-clamp-2 drop-shadow-md">
                {data.description}
              </p>
            )}
          </div>
        </div>

        {/* Published Date Badge - Top Right (Mobile) / Bottom Right (Desktop) */}
        <div className="absolute top-3 right-3 md:top-auto md:bottom-24 md:right-10 flex flex-col items-center justify-center text-white rounded-[6px] md:rounded-[10px] px-2.5 py-2 md:px-[22px] md:py-[32px] md:w-[159px] md:h-[166px] gap-1 md:gap-[13.35px] overflow-hidden bg-white/[0.12] backdrop-blur-[20.03px] border-[1.335px] border-white/[0.12]">
          <span className="text-2xl md:text-[40px] font-medium font-raleway leading-none">
            {new Date(data.createdAt || "").getDate()}
          </span>
          <span className="text-xs md:text-2xl font-medium tracking-wider opacity-90 capitalize">
            {monthName}
          </span>
        </div>
      </Link>
    );
  }
);

export default TopNewsCard;
