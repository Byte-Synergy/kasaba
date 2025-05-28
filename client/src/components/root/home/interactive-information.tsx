"use client";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { cn } from "@/libs/utils";
import { AppType } from "@/types/server";
import { Building2, ChevronLeft, Clock, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const InteractiveInformation = ({
  data,
  selectedPlace,
  our_addresses_label,
  address_label,
  phone_number_label,
  email_label,
  members_count_label,
}: {
  address_label: string;
  members_count_label: string;
  phone_number_label: string;
  email_label: string;
  our_addresses_label: string;
  selectedPlace: string;
  data: AppType["_routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"];
}) => {
  const [place, setPlace] = useState(selectedPlace);
  const [information, setInformation] = useState<string[] | null>(null);

  const choosePlaceHandler = useCallback(
    (
      _: AppType["_routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"][number]
    ) => {
      setInformation([
        _.chairmanFullName,
        _.address,
        _.phoneNumber || "",
        _.email || "",
        _.address,
        _.chairmanPhoto,
        _.membersCount.toString(),
      ]);
    },
    []
  );

  const backHandler = useCallback(() => {
    setPlace(selectedPlace);
    setInformation(null);
  }, []);

  return (
    <div className="w-full">
      <ScrollAnimation>
        <div className="w-full flex items-center rounded-lg overflow-hidden shadow-xl mb-3">
          <button
            className={cn(
              "relative bg-[#000573] rounded-tl-lg rounded-bl-lg py-[15px] px-[25px] after:absolute after:w-full after:h-full after:content-[''] after:top-0 after:left-0",
              !information && " after:bg-white/25 "
            )}
            disabled={information ? false : true}
            onClick={backHandler}
          >
            <ChevronLeft className="text-white w-8 h-8" />
          </button>
          <h4 className="w-full text-[#000573] uppercase py-[18px] text-center font-bold">
            {information ? "" : our_addresses_label}
          </h4>
        </div>
      </ScrollAnimation>
      <div
        className={cn(
          "flex flex-col gap-y-1 overflow-y-auto scroll-bar p-2",
          information ? "md:h-full" : "md:h-[480px]"
        )}
      >
        {place && information && (
          <ScrollAnimation className="w-full h-full">
            <div className="h-full bg-white rounded-xl flex flex-col gap-y-4 shadow-[0px_4px_8.199999809265137px_1px_rgba(0,0,0,0.25)] p-4">
              <div className="flex itmes-center gap-x-4 max-md:flex-col">
                <Image
                  src={information[5]}
                  alt=""
                  width={150}
                  height={200}
                  objectFit="cover"
                  loading="lazy"
                  className="object-contain max-md:w-full"
                />
                <div className="">
                  <h5 className="text-[#000573] text-2xl font-extrabold py-2 border-b border-[#000573]">
                    {information[0]}
                  </h5>
                  <p className="text-[#ff8400] text-xl font-extrabold my-1">
                    {information[1]}
                  </p>
                  <ul className="flex flex-col gap-y-2 text-sm my-4">
                    <li className="flex items-center gap-x-1">
                      <span>{phone_number_label}:</span>
                      <strong>{information[2]}</strong>
                    </li>
                    <li className="flex items-center gap-x-1">
                      <span>{email_label}:</span>
                      <strong>{information[3]}</strong>
                    </li>
                    <li className="flex items-center gap-x-1">
                      <span>{address_label}:</span>
                      <strong>{information[4]}</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" max-md:flex">
                <h4 className="py-4 px-5 bg-[#000573] max-md:text-lg text-center text-white max-md:w-full">
                  {members_count_label}
                </h4>
                <p className="text-8xl max-md:text-lg max-md:p-4 max-md:border font-extrabold  text-[#ff8400] py-5 text-center">
                  {information[6]}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        )}
        {place &&
          !information &&
          data.map((_, idx) => (
            <ScrollAnimation key={idx} idx={idx}>
              <div
                className="flex items-center justify-between gap-x-4 rounded-lg hover:shadow-xl cursor-pointer"
                onClick={() => choosePlaceHandler(_)}
              >
                <div className=" bg-[#000573] py-4 px-4 rounded-lg">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                <div className="flex flex-col gap-y-1 ">
                  <div className="flex items-center gap-x-2 text-[#777] text-[12px]">
                    <Clock className="w-4 h-4" />
                    <p>{_.workingTime}</p>
                  </div>
                  <div className="text-sm">{_.address}</div>
                </div>
                <div>
                  <button className="p-3">
                    <EllipsisVertical />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
      </div>
    </div>
  );
};

export default InteractiveInformation;
