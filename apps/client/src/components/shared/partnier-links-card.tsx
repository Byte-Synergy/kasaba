import { PartniersType } from "@/types";
import Image from "next/image";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";

const PartnierLinksCard = memo(
  ({ data, lang }: { lang: Locale; data: PartniersType }) => {
    return (
      <div className=" w-full h-full">
        <div className="relative overflow-hidden w-full h-52 max-md:h-40 bg-zinc-300">
          <Image
            width={100}
            height={100}
            className="relative w-full h-full object-contain z-10"
            src={data.img}
            alt="photo"
          />
          <Image
            fill
            className="blur-lg opacity-60"
            src={data.img}
            alt="photo"
          />
        </div>
        <Link lang={lang} href={data.link}>
          <div className="w-full p-6 bg-indigo-950 group">
            <p className="font-montserrat font-bold text-base duration-200 text-white group-hover:text-orange-500 max-md:text-sm">
              {data.title}
            </p>
          </div>
        </Link>
      </div>
    );
  }
);

export default PartnierLinksCard;
