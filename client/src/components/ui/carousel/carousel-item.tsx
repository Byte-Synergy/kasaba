import { cn } from "@/libs/utils";
import { ChildrenProps } from "@/types";
import React from "react";

const CarouselItem = ({
  children,
  className,
  ...props
}: {
  children: ChildrenProps["children"];
  className?: string;
  props: any;
}) => {
  return (
    <div className={cn("w-[1240px] h-[654px]", className)} {...props}>
      {children}
    </div>
  );
};

export default CarouselItem;
