import Link from "@/components/link";
import { Locale } from "@/configs/i18n";
import Image from "next/image";
import React from "react";

const Logo = ({ header_desc, lang }: { lang: Locale; header_desc: string }) => {
  return (
    <Link
      lang={lang}
      href={"/"}
      className="flex items-center justify-start gap-4"
    >
      <Image
        width={90}
        height={70}
        src="/img/logo.svg"
        alt="logo"
        className=" object-contain max-md:w-14 max-md:h-11"
      />
      <p className=" font-bold text-base text-white select-none max-md:hidden">
        {header_desc.split("\n").map((d, k) => (
          <React.Fragment key={k}>
            {d}
            <br />
          </React.Fragment>
        ))}
      </p>
    </Link>
  );
};

export default Logo;
