import Image from "next/image";

const MemberCard = ({ data, files }: { data: any; files?: any[] }) => {
  const selectFile = files?.find(
    (f: { name: string }) => f.name === data.fileId,
  );
  const imgSrc = data.href || selectFile?.href;

  if (!imgSrc) return null;

  return (
    <div className="bg-white min-h-[500px] relative overflow-hidden group rounded-lg shadow-xl shrink-0 grow-0">
      <Image
        src={imgSrc}
        alt={data.fullName || "Member"}
        fill
        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="size-full absolute top-0 left-0 z-10 flex flex-col">
        <div className="w-full h-3/5 bg-gradient-to-t from-[#000443] via-[#000443]/80 to-transparent absolute bottom-0 left-0"></div>
        <div className="relative z-20 text-white min-h-[150px] p-6 mt-auto grid gap-1 font-medium">
          <h3 className="font-bold text-xl leading-tight">{data.fullName}</h3>
          <div className="text-[#FF8500]">
            <p className="leading-tight text-sm md:text-base">
              {data.position}
            </p>
            <hr className="border-2 mt-2 border-[#FF8500] w-full" />
          </div>
          <div className="mt-3 text-sm opacity-90">
            <p>Tel: {data.phoneNumber}</p>
            {data.email && <p className="truncate">Email: {data.email}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

// COMPONENT_FIXED_AUTO_GRID
const MemberCards = ({ data, files }: { data: any; files: any }) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
      {data.members?.map((m: any, idx: number) => (
        <MemberCard data={m} files={files} key={idx} />
      ))}
    </div>
  );
};

export default MemberCards;
