"use client";
import { cn } from "@/libs/utils";
import { useCarouselStore } from "@/store/carousel-store";
import { ChildrenProps } from "@/types";
import React, { memo, useEffect } from "react";

type CarouselProps<T> = {
  data: T[];
  children: ChildrenProps["children"];
  className?: string;
};

const Carousel = memo(<T,>({ children, className, data }: CarouselProps<T>) => {
  const { setData } = useCarouselStore();
  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div
      id="carousel"
      className={cn("w-full h-full relative overflow-hidden", className)}
    >
      {children}
    </div>
  );
});

export default Carousel;
