import Image from "next/image";
import React from "react";

const UsefulLinksCard = ({
  data,
  follow_label,
}: {
  data: {
    title: string;
    url: string;
    description: string;
    username: string;
  };
  follow_label: string;
}) => {
  return (
    <div className="w-full h-full shadow-lg bg-white">
      <Image
        src={"/img/kasaba-thumb.png"}
        alt="card-thumbnail"
        width={100}
        height={140}
        className="w-full h-[140px] max-md:h-[100px]"
      />
      <div className=" py-[15px] px-[30px]">
        <div className="relative flex items-center justify-end">
          <Image
            src={"/img/logo.svg"}
            alt="kasaba-media"
            width={100}
            height={100}
            className="absolute -top-1/2 left-0 -translate-y-1/2 rounded-full"
          />
          <a
            href={data.url}
            target="blank"
            className="text-center bg-black rounded-3xl text-white text-xl font-normal px-3 py-1"
          >
            {follow_label}
          </a>
        </div>
        <div className="flex flex-col gap-y-2 my-4">
          <div>
            <h5 className="text-lg max-md:text-base font-bold">{data.title}</h5>
            <span className="max-md:text-sm">{data.username}</span>
          </div>
          <p className="text-[#777] max-md:text-sm">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinksCard;
