import React from "react";
import { dataType } from "./Content";

function Text({ data }: dataType) {
  if (typeof data !== "string") return <>error</>;
  return (
    <p className=" font-montserrat font-normal text-base">
      {data.split("\n").map((line, i) => (
        <React.Fragment key={"txt-" + i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
}

export default Text;
