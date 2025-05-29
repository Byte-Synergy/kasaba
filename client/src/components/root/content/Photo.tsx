import React from "react";
import { dataType } from "./Content";
import Image from "next/image";
import { ContentType } from "elysia/types";
import { AppType } from "@/types/server";

function Photo({
  data,
  files,
}: {
  data: string;
  files: AppType["~Routes"]["api"]["rest"]["news"][":newsPath"]["get"]["response"]["200"]["files"];
}) {
  const image = files?.find((file) => file.href.includes(data));

  return (
    <>
      {image && (
        <Image
          width={920}
          height={512}
          src={image.href}
          alt={image.name}
          className="aspect-video object-cover"
        />
      )}
    </>
  );
}

export default Photo;
