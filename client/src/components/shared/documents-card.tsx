import { FormatToKebabCase } from "@/utils/formatToKebabCase";
import { FileText } from "lucide-react";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";

const DocumentsCard = memo(
  ({ name, fileId, lang }: { lang: Locale; name: string; fileId: string }) => {
    return (
      <Link
        lang={lang}
        href={`/docs?fileUrl=${encodeURIComponent(fileId)}`}
        className="group bg-gray-100 rounded-sm flex flex-col"
      >
        <div className="p-10 flex items-center justify-center">
          <FileText className="w-24 h-24 text-[#777]" />
        </div>
        <div className="p-4 text-xl w-full h-full bg-[#141348] text-white font-medium group-hover:text-[#ff8400]">
          <span>{name}</span>
        </div>
      </Link>
    );
  }
);

export default DocumentsCard;
