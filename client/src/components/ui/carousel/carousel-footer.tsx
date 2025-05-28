import { cn } from "@/libs/utils";
import { ChildrenProps } from "@/types";
import React from "react";

const CarouselFooter = ({
  children,
  className,
}: {
  children: ChildrenProps["children"];
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full h-hull", className)}>{children}</div>
  );
};

export default CarouselFooter;
