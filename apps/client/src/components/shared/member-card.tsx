"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FiPhone, FiMail, FiGlobe, FiClock } from "react-icons/fi";
import { cn } from "@/libs/utils";

const MemberCardVertical = ({ data, imgSrc }: { data: any; imgSrc: string }) => {
  const hasPhone = data.phoneNumber && data.phoneNumber.trim().length > 0;
  const hasEmail = data.email && data.email.trim().length > 0;

  return (
    <div className="bg-white min-h-[500px] relative overflow-hidden group rounded-lg shadow-xl shrink-0 grow-0 h-full">
      <LazyLoadImage
        src={imgSrc}
        alt={data.fullName || "Member"}
        effect="blur"
        width="100%"
        height="100%"
        className="size-full absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105"
        wrapperClassName="size-full"
      />
      <div className="size-full absolute top-0 left-0 z-10 flex flex-col pointer-events-none">
        <div className="w-full h-3/5 bg-gradient-to-t from-[#000443] via-[#000443]/80 to-transparent absolute bottom-0 left-0"></div>
        <div className="relative z-20 text-white min-h-[150px] p-6 mt-auto grid gap-1 font-medium pointer-events-auto">
          <h3 className="font-bold text-xl leading-tight">{data.fullName}</h3>
          <div className="text-[#FF8500]">
            {data.position && data.position.trim().length > 0 && (
              <p className="leading-tight text-sm md:text-base">
                {data.position}
              </p>
            )}
            <hr className="border-2 mt-2 border-[#FF8500] w-full" />
          </div>
          <div className="mt-3 text-sm opacity-90">
            {hasPhone && <p>Tel: {data.phoneNumber}</p>}
            {hasEmail && <p className="truncate">Email: {data.email}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberCardHorizontal = ({ data, imgSrc }: { data: any; imgSrc: string }) => {
  const hasPhone = data.phoneNumber && data.phoneNumber.trim().length > 0;
  const hasEmail = data.email && data.email.trim().length > 0;
  const hasWebsite = data.website && data.website.trim().length > 0;
  const hasAcceptance = data.acceptanceDay && data.acceptanceDay.trim().length > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-8 items-start md:items-center w-full min-h-[220px]">
      {/* Circle Image */}
      <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
        <LazyLoadImage
          src={imgSrc}
          alt={data.fullName || "Member"}
          effect="blur"
          width="100%"
          height="100%"
          className="object-cover"
          wrapperClassName="w-full h-full"
        />
      </div>

      {/* Info Block */}
      <div className="flex-1 flex flex-col md:flex-row gap-8 w-full">
        <div className="flex-1">
          <h3 className="font-bold text-2xl md:text-3xl text-[#141348] leading-tight mb-2 uppercase break-words">
            {data.fullName}
          </h3>
          {data.position && data.position.trim().length > 0 && (
            <p className="text-base md:text-lg text-gray-700 max-w-md">
              {data.position}
            </p>
          )}
        </div>

        {/* Contact info with icons */}
        <div className="shrink-0 flex flex-col gap-3 text-base md:text-lg text-gray-800">
          {hasPhone && (
            <div className="flex items-center gap-3">
              <div className="bg-[#00428D] p-1.5 rounded-full text-white shrink-0">
                <FiPhone className="size-4" />
              </div>
              <span className="font-medium whitespace-nowrap">{data.phoneNumber}</span>
            </div>
          )}
          {hasEmail && (
            <div className="flex items-center gap-3">
              <div className="bg-[#00428D] p-1.5 rounded-full text-white shrink-0">
                <FiMail className="size-4" />
              </div>
              <span className="truncate max-w-[200px]">{data.email}</span>
            </div>
          )}
          {hasWebsite && (
            <div className="flex items-center gap-3">
              <div className="bg-[#00428D] p-1.5 rounded-full text-white shrink-0">
                <FiGlobe className="size-4" />
              </div>
              <span>{data.website}</span>
            </div>
          )}
          {hasAcceptance && (
            <div className="flex items-start gap-3 mt-1 italic text-gray-500">
              <div className="bg-[#00428D] p-1.5 rounded-full text-white shrink-0">
                <FiClock className="size-4" />
              </div>
              <span className="max-w-[240px] leading-snug">{data.acceptanceDay}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ data, files, style }: { data: any; files?: any[]; style?: string }) => {
  const selectFile = files?.find(
    (f: { name: string }) => f.name === data.fileId,
  );
  const imgSrc = data.href || selectFile?.href;

  if (!imgSrc) return null;

  if (style === "horizontal") {
    return <MemberCardHorizontal data={data} imgSrc={imgSrc} />;
  }

  return <MemberCardVertical data={data} imgSrc={imgSrc} />;
};

const MemberCards = ({ data, files }: { data: any; files: any }) => {
  const style = data.card_style || "vertical";
  
  return (
    <div className={cn(
      "w-full",
      style === "horizontal" 
        ? "flex flex-col gap-8" 
        : "grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8"
    )}>
      {data.members?.map((m: any, idx: number) => (
        <MemberCard data={m} files={files} key={idx} style={style} />
      ))}
    </div>
  );
};

export default MemberCards;
