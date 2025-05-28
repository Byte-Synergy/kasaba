"use client";
import { cn } from "@/libs/utils";
import { useCarouselStore } from "@/store/carousel-store";
import { ChildrenProps } from "@/types";
import React from "react";

const CarouselContent = ({
  children,
  className,
}: {
  children: ChildrenProps["children"];
  className?: string;
}) => {
  const { activeIndex } = useCarouselStore();

  return (
    <div
      className={cn(
        "w-[1240px] border flex h-[654px] transition-transform duration-700 ease-in-out",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CarouselContent;
