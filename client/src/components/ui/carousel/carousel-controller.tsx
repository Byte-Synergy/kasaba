import { cn } from "@/libs/utils";
import { ChildrenProps } from "@/types";
import React from "react";

const CarouselController = ({
  children,
  className,
}: {
  children: ChildrenProps["children"];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CarouselController;
