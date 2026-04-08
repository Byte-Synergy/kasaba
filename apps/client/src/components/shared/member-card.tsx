import Image from "next/image";

const MemberCard = ({ data, files }: { data: any; files?: any[] }) => {
    const selectFile = files?.find(
        (f: { name: string }) => f.name === data.fileId
    );
    const imgSrc = data.href || selectFile?.href;

    if (!imgSrc) return null;

    return (
        <div className="w-[250px] rounded-sm overflow-hidden group shadow-md hover:shadow-[0px_0px_15px_0px_#777] bg-white">
            <div className="w-[250px] h-[300px] relative">
                <Image
                    src={imgSrc}
                    alt={data.fullName || "Member"}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4 flex flex-col justify-center h-32 border-t">
                <h3 className="text-md font-bold text-blue-900 leading-tight mb-1">{data.fullName}</h3>
                <p className="text-sm text-gray-500 font-medium leading-tight mb-1">{data.position}</p>
                <div className="mt-auto">
                    <p className="text-sm text-gray-400">{data.phoneNumber}</p>
                    {data.getMenu && <p className="text-sm text-gray-400">{data.email}</p>}
                </div>
            </div>
        </div>
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
