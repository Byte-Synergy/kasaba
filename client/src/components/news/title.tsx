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
  className
}: {
  title: React.ReactNode;
  href?: string;
  button?: React.ReactNode;
  lang: Locale;
  className?: string
}) {
  return (
    <>
      <div className="flex items-center gap-x-4  max-md:gap-1 my-10 max-md:my-5 uppercase">
        <div className="max-md:w-1  max-md:h-4  max-md:bg-orange-500 hidden max-md:block " />
        <h3 className={cn("mr-auto text-[#ff8400] text-4xl font-bold  max-md:text-base max-md:text-[#000674]", className)}>
          {title}
        </h3>
        <div className="flex-auto h-1 bg-[#ff8400] max-md:bg-[#000674] max-md:h-[1px]"></div>
        {button && href && (
          <Link
            lang={lang}
            href={href}
            className="flex items-center text-[#ff8400] "
          >
            {button}
            <ChevronRight  />
          </Link>
        )}
      </div>
    </>
  );
}
