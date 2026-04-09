import React from "react";
import Image from "next/image";

function Photo({
  data,
  files,
}: {
  data: string;
  files?: Array<{
    href: string;
    name: string;
  }>;
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
