"use client";

import { cn } from "@/libs/utils";
import React from "react";

export default function ScrollAnimation({
  children,
  className,
}: {
  children: React.ReactNode;
  idx?: number;
  className?: string;
}) {
  return (
    <div data-aos="fade-up" className={cn("w-full", className)}>
      {children}
    </div>
  );
}
