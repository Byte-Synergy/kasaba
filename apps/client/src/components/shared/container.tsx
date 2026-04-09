import { cn } from "@/libs/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-[1780px] mx-auto w-full px-4 md:px-10", className)}>
      {children}
    </div>
  );
};

export default Container;
