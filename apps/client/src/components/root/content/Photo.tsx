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
    <div className="w-full flex justify-center">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
        <Image
          src={src}
          alt={image?.name || "Photo"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
        />
      </div>
    </div>
  );
}

export default Photo;
