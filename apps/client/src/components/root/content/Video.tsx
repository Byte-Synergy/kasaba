"use client";

import React from "react";
function Video({ data }: { data: string }) {
  if (typeof data !== "string") return <>error</>;
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
      <iframe
        src={data}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="size-full border-none"
      />
    </div>
  );
}

export default Video;
