import Image from "next/image";
import React from "react";

const MemberCard = ({ data, files }: { data: any; files: any[] }) => {
  const selectFile = files?.find(
    (f: { name: string }) => f.name === data.fileId
  );

  return (
    <>
      <div className="w-[250px] rounded-sm overflow-hidden group shadow-md hover:shadow-[0px_0px_15px_0px_#777]">
        <div className="w-[250px] h-[250px]">
          <img
            src={selectFile.href}
            alt={data.fullName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2 h-32">
          <h3 className="text-md font-bold">{data.fullName}</h3>
          <p className="text-sm text-black/50">{data.position}</p>
          <p className="text-sm text-black/50">{data.phoneNumber}</p>
        </div>
      </div>
    </>
  );
};

const MemberCards = ({ data, files }: { data: any; files: any }) => {
  return (
    <div className="w-full flex items-start gap-5">
      {data.members?.map((m: any, idx: number) => (
        <MemberCard data={m} files={files} key={idx} />
      ))}
    </div>
  );
};

export default MemberCards;
