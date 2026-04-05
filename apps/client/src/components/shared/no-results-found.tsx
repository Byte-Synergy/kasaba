import Image from "next/image";
import React from "react";

function NoResultsFound({
  no_result_description,
  no_result_label,
}: {
  no_result_description: string;
  no_result_label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Image
        src={"/icon/no-result-found.svg"}
        width={150}
        height={150}
        alt="no found"
      />
      <h3 className=" font-bold text-xl">{no_result_label}</h3>
      <p className=" font-normal text-sm text-zinc-500 text-center">
        {no_result_description.split("\n").map((d, k) => (
          <React.Fragment key={k}>
            {d}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default NoResultsFound;
