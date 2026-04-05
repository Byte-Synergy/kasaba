import { ContentType } from "@/types/content";
import React from "react";

function Section({ data }: { data: ContentType }) {
  if (typeof data !== "string") return <>error</>;
  return (
    <h1 className=" font-montserrat font-bold text-3xl text-orange-500">
      {data}
    </h1>
  );
}

export default Section;
