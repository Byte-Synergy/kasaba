import { cn } from "@/libs/utils";
import { ChildrenProps } from "@/types";
import React from "react";

const AccordionItem = ({
  children,
  className,
}: {
  children: ChildrenProps["children"];
  className?: string;
}) => {
  return <div className={cn(className)}>{children}</div>;
};

export default AccordionItem;
