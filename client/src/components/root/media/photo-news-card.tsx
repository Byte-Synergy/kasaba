"use client";

import Link from "@/components/link";
import Badge from "@/components/ui/badge";
import { Locale } from "@/configs/i18n";
import { NewsDataType } from "@/types";
import { formatDateToDateTime } from "@/utils/formatDate";
import { Images } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { memo } from "react";

const PhotoNewsCard = memo(({ data }: { data: NewsDataType }) => {
  const { lang } = useParams<{ lang: Locale }>();
  return (
    <div
      className={
        "relative w-full h-full after:absolute after:w-full after:h-full after:-top-2 after:left-2 after:bg-[#273647]/10 before:absolute before:w-full before:h-full before:-top-4 before:left-4 before:bg-[#273647]/10 group"
      }
    >
      <Image
        src={data?.files?.[0]?.href || "/img/image 4.png"}
        alt="img"
        width={283}
        height={250}
        className="w-full h-[250px] object-contian"
        loading="lazy"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-[16px] bg-neutral-900/60 z-10">
        <div className="flex justify-end">
          <Badge
            variant="primary"
            className="flex items-center gap-x-2 rounded-[20px]"
          >
            <Images className="w-[16px] h-[16px]" />
            <span className="text-white text-xs font-medium font-['Raleway'] leading-none">
              {" "}
              {data?.files?.length}та расм
            </span>
          </Badge>
        </div>
        <div className="flex flex-col gap-y-2">
          <Badge variant="outline" className="inline-flex items-center gap-x-2">
            <span>{formatDateToDateTime(data.createdAt || "")}</span>
          </Badge>
          <Link
            lang={lang}
            href={`/news/${data.path}`}
            className="text-white text-[1em] font-bold leading-5 [text-shadow:_0px_4px_20px_rgb(225_225_225_/_0.30)] hover:text-[#ff8400] group-hover:cursor-pointer"
          >
            {data.title}
          </Link>
        </div>
      </div>
    </div>
  );
});

export default PhotoNewsCard;
