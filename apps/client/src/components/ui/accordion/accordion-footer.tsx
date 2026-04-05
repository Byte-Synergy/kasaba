import { cn } from "@/libs/utils";
import { ChildrenProps } from "@/types";
import React from "react";

const AccordionFooter = ({
  children,
  className,
}: {
  children: ChildrenProps["children"];
  className?: string;
}) => {
  return <div className={cn(className)}>{children}</div>;
};

export default AccordionFooter;
