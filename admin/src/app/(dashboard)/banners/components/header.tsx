"use client";

import { Button } from "@/components/ui/button";

export default function PageViewHeader({
  title,
  buttonChildren,
}: {
  buttonChildren?: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold capitalize">{title}</h1>
        {buttonChildren}
      </div>
    </>
  );
}
