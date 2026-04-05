"use client";

import type { Locale } from "@/configs/i18n";
import { cn } from "@/libs/utils";
import type { NewsDataType } from "@/types";
import { formatDateToDateTime } from "@/utils/formatDate";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { memo } from "react";
import Link from "../link";
import { useParams } from "next/navigation";
import { RiCalendarLine } from "react-icons/ri";

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
          "w-full bg-white shadow-xl hover:shadow-2xl transition-all h-full flex flex-col",
        image: "w-full aspect-video",
        informationDiv: "py-4 px-5 flex flex-col gap-y-2 flex-grow",
        title: `text-[#000573] text-[20px] font-bold font-montserrat line-clamp-2 leading-tight hover:underline mb-1`,
        description: "text-[#555] text-sm font-medium line-clamp-2",
        options: "flex items-center justify-between mb-2",
        badge: "flex items-center gap-2 border border-[#697583] text-[#697583] text-[12px] font-medium py-1 px-3 rounded-[6px]",
      };
    case "fit":
      return {
        parentDiv: "h-full w-full relative overflow-hidden group rounded-[5px]",
        image: "w-full aspect-video h-full shrink-0",
        informationDiv:
          "absolute w-full bottom-0 left-0 p-8 md:p-12 bg-gradient-to-t from-[#000573] to-transparent flex flex-col gap-y-4",
        title: "text-white text-3xl font-bold font-montserrat lead-snug line-clamp-2",
        description: "text-white/80 text-base font-medium line-clamp-2",
        options: "flex items-center justify-between gap-x-4",
        badge: "flex items-center gap-2 border border-white/40 text-white text-[12px] py-1 px-4 rounded-[6px] backdrop-blur-sm bg-white/5",
      };
    case "text-only":
      return {
        parentDiv: "w-full py-4 border-b border-[#eee] last:border-0 hover:bg-gray-50 transition-all px-2",
        image: "hidden",
        informationDiv: "flex flex-col gap-y-2",
        title: `text-[#000573] text-[16px] font-bold line-clamp-2 leading-tight`,
        description: "text-[#555] text-[13px] line-clamp-2",
        options: "flex justify-between mb-1",
        badge: "flex items-center gap-1.5 border border-[#697583] text-[#697583] text-[12px] font-medium py-0.5 px-2 rounded-[6px]",
      };
    case "box-text":
      return {
        parentDiv: "w-full bg-white shadow-md hover:shadow-lg transition-all h-full flex flex-col rounded-[5px] border border-gray-100",
        image: "hidden",
        informationDiv: "p-5 flex flex-col gap-y-2 flex-grow",
        title: `text-[#000573] text-[15px] font-bold font-montserrat line-clamp-2 leading-tight`,
        description: "text-[#666] text-[12px] line-clamp-2",
        options: "flex justify-between mb-1",
        badge: "flex items-center gap-1.5 border border-[#697583] text-[#697583] text-[12px] font-medium py-0.5 px-2 rounded-[6px]",
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
          "inline-block relative overflow-hidden group h-full transition-all",
          variant === "card" ? "rounded-[5px]" : "rounded-sm",
          styles?.parentDiv,
          className
        )}
      >
        <div className={cn("overflow-hidden", styles.image)}>
          {(data.type === "photo" || data.type === "standard" || data.type === "video") &&
            data.files?.[0]?.href && (
              <LazyLoadImage
                src={data.files?.[0]?.href}
                alt={data.title || ""}
                effect="blur"
                width="100%"
                height="100%"
                className={cn(
                  "size-full object-cover transition-transform duration-500",
                  variant === "card" ? "rounded-t-[5px] rounded-b-0" : "rounded-sm"
                )}
                wrapperClassName="w-full h-full"
              />
            )}
        </div>
        <div className={styles.informationDiv}>
          {/* Badge at the top and right-aligned */}
          {variant !== "fit" && (
            <div className={styles.options}>
              {data.tags?.[0] && (
                <div className={styles.badge}>
                  <span>{data.tags[0]}</span>
                </div>
              )}
              <div className={styles.badge}>
                <RiCalendarLine />
                <span>
                  {formatDateToDateTime(
                    data.createdAt || new Date().toISOString()
                  )}
                </span>
              </div>
            </div>
          )}
          
          <h3 className={styles.title}>{data.title}</h3>
          
          {styles.description !== "hidden" && (
            <p className={styles.description}>
              {data.description}
            </p>
          )}
        </div>
      </Link>
    );
  }
);

export default StandardNewsCard;
