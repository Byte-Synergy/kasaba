import React from "react";
import { dataType } from "./Content";
import Image from "next/image";

function Motto({ data }: { data: string }) {
  return (
    <div className=" w-full px-6 bg-sky-500/5 border border-sky-500/15 rounded-sm py-10">
      <div className=" flex items-start justify-between gap-7">
        <Image
          width={100}
          height={100}
          src="/image/textIcon.svg"
          alt="icon"
          className="m-4"
        />
        <p className=" font-montserrat font-medium italic text-xl leading-6">
          {data}
        </p>
      </div>
    </div>
  );
}

export default Motto;
