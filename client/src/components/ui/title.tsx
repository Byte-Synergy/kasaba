import { cn } from "@/libs/utils";
import React from "react";
import Link from "../link";

type TitleProps = {
  title: string;
  variant?: string;
  miniTitle?: string;
  miniTitleVisible?: boolean;
  link?: string;
  lang: string;
};

const TitleVariants = (variant: string = "standard") => {
  switch (variant) {
    case "withSubtitle":
      return {
        div: "flex items-center justify-center gap-2",
        title: "text-orange-500 font-montserrat font-bold text-4xl text-nowrap",
        hr: "border-orange-500 border-2 w-full",
        miniTitle:
          "text-orange-500 font-montserrat font-bold text-base hidden hover:text-black duration-200",
      };
    case "withoutSubtitle":
      return {
        div: "flex items-center justify-center gap-2",
        title: "text-orange-500 font-montserrat font-bold text-4xl text-nowrap",
        hr: "border-orange-500 border-2 w-full",
        miniTitle:
          "text-orange-500 font-montserrat font-bold text-base hover:text-black duration-200",
      };
    default:
      return {
        div: "flex items-center justify-center gap-2",
        title: "text-orange-500 font-montserrat font-bold text-4xl text-nowrap",
        hr: "border-orange-500 border-2 w-full",
        miniTitle:
          "text-orange-500 font-montserrat font-bold text-base hidden hover:text-black duration-200",
      };
  }
};

function Title({
  title,
  miniTitle,
  variant = "standard",
  link = "",
  lang,
}: TitleProps) {
  return (
    <div className={cn("flex items-center justify-start gap-x-2.5")}>
      <h3 className={cn()}>{title}</h3>
      <hr className={cn()} />
      <Link lang={lang} href={link} className={cn()}>
        {miniTitle}
      </Link>
    </div>
  );
}

export default Title;
