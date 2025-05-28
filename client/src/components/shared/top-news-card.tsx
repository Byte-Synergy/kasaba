"use client";

import { NewsDataType } from "@/types";
import { formatDateToDateTime } from "@/utils/formatDate";
import Image from "next/image";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";

const TopNewsCard = memo(
  ({ data, lang }: { lang: Locale; data: NewsDataType }) => {
    return (
      <Link
        lang={lang}
        href={`/news/${data.type}/${data.path}`}
        className="relative inline-block w-full aspect-video overflow-hidden hover:flex flex-row-reverse items-center justify-center gap-x-4 hover:bg-[#000573]"
      >
        <Image
          src={data.files?.[0]?.href || "/img/image 5.png"}
          alt={data.title || ""}
          width={1920}
          height={1080}
          className="size-full object-cover group-hover:scale-75 group-hover:w-[50%] group-hover:rounded-xl transition smooth-line-x"
        />
        <div className="absolute bottom-0 left-0 w-full h-[200px] max-md:h-60 group-hover:static group-hover:h-full group-hover:w-[50%] group-hover:top-0 transition-[width]">
          <div className="relative w-full h-full inline-flex flex-col gap-y-2 max-md:gap-5 py-[25px] px-[75px] max-md:p-5 z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#000573]/60 after:blur-sm after:-z-10 group-hover:justify-center group-hover:gap-y-4">
            <h3 className="w-[85%] text-white text-3xl max-md:text-xl font-bold group-hover:w-full">
              {data.title}
            </h3>
            <div className="w-[266.35px] h-[32.94px] px-3.5 py-1.5 bg-white/10 rounded border border-white/10 backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
              <p className="text-white text-sm font-medium leading-[18.20px]">
                {formatDateToDateTime(
                  data.createdAt || new Date().toISOString()
                )}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

export default TopNewsCard;
