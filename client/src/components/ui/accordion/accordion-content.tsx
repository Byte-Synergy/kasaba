import { cn } from "@/libs/utils";
import { ChildrenProps } from "@/types";
import React from "react";

const AccordionContent = ({
  children,
  className,
}: {
  children: ChildrenProps["children"];
  className?: string;
}) => {
  return (
    <div className={cn("absolute w-full h-full p-2", className)}>
      {children}
    </div>
  );
};

export default AccordionContent;
