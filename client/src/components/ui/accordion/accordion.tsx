import { cn } from "@/libs/utils";
import { ChildrenProps } from "@/types";
import React from "react";

const Accordion = ({
  children,
  className,
}: {
  children: ChildrenProps["children"];
  className?: string;
}) => {
  return <div className={cn("relative", className)}>{children}</div>;
};

export default Accordion;
