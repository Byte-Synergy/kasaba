"use client";
import { cn } from "@/libs/utils";
import { ChildrenProps } from "@/types";
import { useState } from "react";
import { IoCopy, IoCopyOutline } from "react-icons/io5";

const CopyContext = ({
  text,
  children,
}: {
  text: string;
  children?: ChildrenProps["children"];
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Nusxalashda xatolik:", err);
    }
  };

  return (
    <div
      className={cn(
        "w-full h-full py-1 px-3 flex items-center justify-center gap-3 border rounded-sm",
        copied
          ? "border-green-500 bg-transparent"
          : "border-transparent bg-transparent",
      )}
      role="button"
      onClick={copyToClipboard}
    >
      {children}
      <div>
        {copied ? (
          <IoCopy
            className={cn(
              "w-5 h-5 text-green-500 inline-flex max-md:w-4 max-md:h-4",
              copied ? "scale-120" : "scale-100",
            )}
          />
        ) : (
          <IoCopyOutline className=" w-5 h-5 inline-flex max-md:w-4 max-md:h-4" />
        )}
      </div>
    </div>
  );
};

export default CopyContext;
