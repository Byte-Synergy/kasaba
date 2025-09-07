import { Locale } from "@/configs/i18n";
import { NewsDataType } from "@/types";
import { getDictionary } from "@/utils/directory";
import React from "react";
import StandardNewsCard from "./standart-news-card";

const OtherContent = async ({
  data,
  lang,
}: {
  data: NewsDataType[];
  lang: Locale;
}) => {
  const t = await getDictionary(lang);

  return (
    <div className="sticky top-5 w-full">
      <div className="flex items-center justify-start gap-2">
        <div className="w-1 h-6 bg-orange-500" />
        <p className=" font-montserrat font-semibold text-xl">
          {t.others_label}
        </p>
      </div>
      <hr className=" border-gray-200 border-[1px] my-3" />
      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <StandardNewsCard
            data={item}
            variant="withoutThumbnailImage"
            className="shadow-none hover:shadow-xl border-b border-b-gray-300 rounded-none"
          />
        ))}
      </div>
    </div>
  );
};

export default OtherContent;
