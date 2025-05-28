"use client";

import Image from "next/image";
import React, { memo } from "react";
import Link from "../link";
import { Locale } from "@/configs/i18n";
import { useParams } from "next/navigation";

const Breadcrumb = memo(
  ({ data, main_label }: { main_label: string; data: string[] }) => {
    const { lang } = useParams<{ lang: Locale }>();

    return (
      <div className="flex items-center justify-start gap-2">
        <Image src={"/icon/home.svg"} width={16} height={16} alt="icon" />
        <Link lang={lang} href={"/"} className=" font-medium text-xs">
          {main_label}
        </Link>
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center gap-2 capitalize"
          >
            <div className=" w-2 h-2 bg-zinc-300"></div>
            <p className=" font-medium text-xs text-zinc-500">{item}</p>
          </div>
        ))}
      </div>
    );
  }
);

export default Breadcrumb;
