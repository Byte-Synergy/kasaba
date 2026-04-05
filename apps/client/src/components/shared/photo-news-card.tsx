"use client";
import { cn } from "@/libs/utils";
import { NewsDataType } from "@/types";
import { formatDateToDateTime } from "@/utils/formatDate";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";
import { useParams } from "next/navigation";
import { RiGalleryLine } from "react-icons/ri";

const PhotoNewsVariants = (variant: string) => {
  switch (variant) {
    case "hero":
      return {
        card: "w-full h-full min-h-[400px] md:min-h-full",
        p: "py-1 px-4 rounded-[6px] bg-white/10 backdrop-blur-md font-medium text-[13px] text-white",
        link: "font-semibold text-2xl md:text-3xl text-white hover:text-orange-400 transition-colors line-clamp-2",
        blurBox: "p-6 md:p-10 gap-4",
      };
    case "standard":
      return {
        card: "w-full h-[280px] md:h-[320px]",
        p: "py-1 px-3 rounded-[6px] bg-white/10 backdrop-blur-md font-medium text-[11px] text-white",
        link: "font-semibold text-lg text-white hover:text-orange-400 transition-colors line-clamp-2",
        blurBox: "p-5 gap-2",
      };
    case "small":
      return {
        card: "w-full h-[220px]",
        p: "py-1 px-2 rounded-[4px] bg-white/10 backdrop-blur-md font-medium text-[10px] text-white",
        link: "font-semibold text-sm text-white hover:text-orange-400 transition-colors line-clamp-2",
        blurBox: "p-4 gap-1.5",
      };
    default:
      return {
        card: "w-full h-full",
        p: "py-1 px-3 rounded-[6px] bg-white/10 backdrop-blur-md font-medium text-[12px] text-white",
        link: "font-semibold text-xl text-white hover:text-orange-400 transition-colors line-clamp-2",
        blurBox: "p-5 gap-3",
      };
  }
};

const PhotoNewsCard = memo(
  ({
    data,
    variant = "standard",
    className = "",
  }: {
    data: NewsDataType;
    variant?: string;
    className?: string;
  }) => {
    const { lang } = useParams<{ lang: Locale }>();
    const styles = PhotoNewsVariants(variant);

    // Filter main image or use first file
    const thumbnailPhoto = data.files?.find(d => data.content?.find((c: any) => c.type === 'image' || c.type === 'photo')?.value === d.name) || data.files?.[0];
    const imageCount = data.files?.length || 0;

    return (
      <Link
        lang={lang}
        href={`/news/${data?.type}/${data?.path}`}
        className={cn(
          "w-full relative block group overflow-hidden rounded-[5px] shadow-lg hover:shadow-2xl transition-all duration-300",
          styles.card,
          className
        )}
      >
        <LazyLoadImage
          width="100%"
          height="100%"
          effect="blur"
          className="w-full h-full object-cover"
          src={thumbnailPhoto?.href || "/img/image 4.png"}
          alt={data.title || "Photo News"}
          wrapperClassName="w-full h-full"
        />
        
        {/* Gallery Badge */}
        <div className="absolute top-4 right-4 z-30">
          <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[12px] font-medium">
            <RiGalleryLine className="w-4 h-4" />
            <span>{imageCount} ta rasm</span>
          </div>
        </div>

        {/* Gradient Overlay & Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div className={cn("flex flex-col items-start justify-end w-full h-full", styles.blurBox)}>
            <div className={styles.p}>
              {formatDateToDateTime(data?.createdAt || new Date().toISOString())}
            </div>
            <h3 className={styles.link}>
              {data.title}
            </h3>
          </div>
        </div>
      </Link>
    );
  }
);

export default PhotoNewsCard;
