"use client";

import React from "react";
import { dataType } from "./Content";
import Image from "next/image";
import { ContentType } from "elysia/types";
import { AppType } from "@/types/server";
import { useModal } from "../../../providers/modal-provider";
import { useModalStore } from "@/hooks/useModal";

function Photo({
  data,
  files,
}: {
  data: string;
  files: AppType["~Routes"]["api"]["rest"]["news"][":newsPath"]["get"]["response"]["200"]["files"];
}) {
  const image = files?.find((file) => file.href.includes(data));

  const { openModal } = useModalStore();

  return (
    <div className="w-full h-full">
      {image && (
        <Image
          width={1920}
          height={512}
          src={image.href}
          alt={image.name}
          className="aspect-video object-cover rounded-md"
        />
      )}
    </div>
  );
}

export default Photo;
