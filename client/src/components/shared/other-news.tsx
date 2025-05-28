import { Locale } from "@/configs/i18n";
import { NewsDataType } from "@/types";
import { getDictionary } from "@/utils/directory";
import { formatDateToDateTime } from "@/utils/formatDate";
import { FormateToTitle } from "@/utils/formateTitle";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import Link from "../link";

const OtherContent = async ({
  data,
  lang,
}: {
  data: NewsDataType[];
  lang: Locale;
}) => {
  const t = await getDictionary(lang);

  return (
    <div className="w-full">
      <div className="flex items-center justify-start gap-2">
        <div className="w-1 h-6 bg-orange-500" />
        <p className=" font-montserrat font-semibold text-xl">
          {t.others_label}
        </p>
      </div>
      <hr className=" border-gray-200 border-[1px] my-3" />
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <Link
            lang={lang}
            href={`/news/${item.type}/${item.path}`}
            key={item.id}
            className="flex flex-col gap-2 items-start group"
          >
            <div className="flex items-center justify-center gap-1 border rounded-full border-gray-300 py-1 px-2">
              <CiCalendar className=" w-4 h-4 text-gray-400" />
              <p className=" font-raleway font-medium text-xs text-gray-400 ">
                {item.createdAt && formatDateToDateTime(item?.createdAt)}
              </p>
            </div>
            <h3 className=" font-montserrat font-semibold text-base group-hover:text-[#FF8500]">
              {FormateToTitle(item.title, 70)}
            </h3>
            <p className="text-sm">{FormateToTitle(item.description, 120)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherContent;
