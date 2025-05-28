import { cn } from "@/libs/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-[1240px] mx-auto w-[90%]", className)}>
      {children}
    </div>
  );
};

export default Container;
