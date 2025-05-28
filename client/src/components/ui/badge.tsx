import { cn } from "@/libs/utils";
import React, { ReactNode } from "react";

const BadgeVariants = (badge: string) => {
  switch (badge) {
    case "default":
      return "bg-[#2f348d] inline-flex py-[6px] px-[14px] justify-center items-center gap-x-1 rounded text-white text-[8px] font-medium";
    case "primary":
      return "inline-flex justify-center items-center gap-x-1 rounded text-white text-[8px] font-medium relative z-0 py-[6px] px-[14px] rounded border border-white/10 inline-flex justify-center items-center after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-white/10 after:backdrop-blur-[30px] after:-z-10 overflow-hidden";
    case "outline":
      return "text-white/70 text-xs font-medium leading-none";
    default:
      return "";
  }
};

const Badge = ({
  variant,
  children,
  className,
}: {
  variant: string;
  children?: ReactNode | string;
  className?: string;
}) => {
  const badgeVariant = BadgeVariants(variant);

  return <p className={cn(badgeVariant, className)}>{children}</p>;
};

export default Badge;
