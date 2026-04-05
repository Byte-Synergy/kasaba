"use client";

import { NewsDataType } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";

const TopNewsCard = memo(
  ({ data, lang }: { lang: Locale; data: NewsDataType }) => {
    return (
      <Link
        lang={lang}
        href={`/news/${data.type}/${data.path}`}
        className="relative inline-block w-full aspect-video overflow-hidden group rounded-[10px]"
      >
        <LazyLoadImage
          src={data.files?.[0]?.href || "/img/image 5.png"}
          alt={data.title || ""}
          effect="blur"
          width="100%"
          height="100%"
          className="size-full object-cover transition-transform duration-500 rounded-[10px]"
          wrapperClassName="size-full"
        />
        
        {/* Title Overlay */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-8 pb-20 md:p-14 md:pb-28 transition-all duration-300 rounded-[10px]"
          style={{
            height: '100%',
            background: 'linear-gradient(360deg, rgba(0, 6, 116, 0.6) 0%, rgba(0, 8, 167, 0.3) 40.36%, rgba(0, 11, 218, 0) 57.18%)',
            borderRadius: '10px'
          }}
        >
          <h3 className="w-[85%] text-white text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg group-hover:translate-x-2 transition-transform">
            {data.title}
          </h3>
        </div>
      </Link>
    );
  }
);

export default TopNewsCard;
