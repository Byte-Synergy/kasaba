"use client";

import React from "react";
import { dataType } from "./Content";

function Video({ data }: dataType) {
  if (typeof data !== "string") return <>error</>;
  return (
    <iframe
      src={data}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="size-full"
    />
  );
}

export default Video;
