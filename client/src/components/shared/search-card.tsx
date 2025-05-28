import { SearchDataType } from "@/types";
import React, { memo } from "react";
import Link from "../link";
import { useParams } from "next/navigation";
import { Locale } from "@/configs/i18n";

const SearchCard = memo(
  ({
    data: {
      title,
      news_type,
      href,
      publishedAt: { date },
    },
    query,
  }: {
    data: SearchDataType & {
      href: string;
    };
    query: string;
  }) => {
    const { lang } = useParams<{ lang: Locale }>();
    const highlightMatch = (text: string, query: string) => {
      if (!query) return text;
      const regex = new RegExp(`(${query})`, "gi");
      return text.split(regex).map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index} className="bg-yellow-300">
            {part}
          </mark>
        ) : (
          part
        )
      );
    };
    return (
      <Link href={href} lang={lang} className="p-5 max-md:p-3 bg-zinc-100">
        <div className="flex items-center justify-start gap-2 mb-2">
          <p className=" border rounded-full border-[#000674] text-[#000674] font-medium text-xs px-2 py-1">
            {news_type}
          </p>
          <p className=" border rounded-full border-[#E1E3E6] text-[#697583] font-medium text-xs px-2 py-1">
            {date}
          </p>
        </div>
        <h2 className=" font-bold text-xl max-md:text-base">
          {highlightMatch(title, query)}
        </h2>
      </Link>
    );
  }
);

export default SearchCard;
