import React from "react";
import Image from "next/image";
import { AppType } from "@/types/server";

function Photo({
  data,
  files,
}: {
  data: string;
  files?: AppType["~Routes"]["api"]["rest"]["news"][":newsPath"]["get"]["response"]["200"]["files"];
}) {
  const isUrl = data?.startsWith("http");
  const image = isUrl ? null : files?.find((file) => file.href.includes(data));
  const src = isUrl ? data : image?.href;

  if (!src) return null;

  return (
    <Image
      width={920}
      height={512}
      src={src}
      alt={image?.name || "Photo"}
      className="aspect-video object-cover"
    />
  );
}

export default Photo;
