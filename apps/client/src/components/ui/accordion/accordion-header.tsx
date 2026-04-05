import { cn } from "@/libs/utils";
import { ChildrenProps } from "@/types";
import React, { useCallback } from "react";

const AccordionHeader = ({
  children,
  className,
}: {
  children: ChildrenProps["children"];
  className?: string;
}) => {
  const toggleAccardionHandler = useCallback(() => {}, []);

  return (
    <div
      className={cn("w-full flex items-center", className)}
      onClick={toggleAccardionHandler}
    >
      {children}
    </div>
  );
};

export default AccordionHeader;
