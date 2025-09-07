import { ChevronRight } from "lucide-react";
import React from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";
import { cn } from "@/libs/utils";

export default function NewsTitle({
  title,
  href,
  button,
  lang,
  className,
  variant = "titleWithLink",
}: {
  title: React.ReactNode;
  href?: string;
  button?: React.ReactNode;
  lang: Locale;
  className?: string;
  variant:
    | "titleWithLink"
    | "titleWithoutLink"
    | "subtitleWithLink"
    | "subtitleWithoutLink";
}) {
  return (
    <>
      <div
        className={cn(
          "flex items-center gap-x-4  max-md:gap-1 max-md:my-5 uppercase py-1.2 my-7.5",
          (variant === "subtitleWithLink" ||
            variant === "subtitleWithoutLink") &&
            "bg-[#ff8400]"
        )}
      >
        {/* <div className="max-md:w-1  max-md:h-4  max-md:bg-orange-500 hidden max-md:block " /> */}
        <h3
          className={cn(
            "relative text-4xl font-bold",
            (variant === "titleWithLink" || variant === "titleWithoutLink") &&
              "text-[#ff8400]",
            (variant === "subtitleWithLink" ||
              variant === "subtitleWithoutLink") &&
              "text-white",
            "pl-5 max-md:text-base max-md:text-[#000674]",
            "after:absolute after:top-1/2 after:left-0 after:w-2 after:h-2/3 after:content-[''] after:bg-[#ff8400]  after:-translate-y-[50%]",
            className
          )}
        >
          {title}
        </h3>
        <div className="flex-auto h-1 bg-[#ff8400] max-md:bg-[#000674] max-md:h-[1px]"></div>
        {(variant === "titleWithLink" || variant === "subtitleWithLink") &&
          href && (
            <Link
              lang={lang}
              href={href}
              className={cn(
                "relative group",
                "inline-flex items-center z-10 px-1",
                variant === "titleWithLink" && "text-[#ff8400]",
                variant === "subtitleWithLink" && "text-white"
                // "after:absolute after:h-full after:top-0 after:left-0 after:content-[''] after:bg-[#ff8400] after:w-full hover:after:bg-red-500  after:-z-10"
              )}
            >
              {button}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
      </div>
    </>
  );
}
