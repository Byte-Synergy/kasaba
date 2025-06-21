"use client";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { cn } from "@/libs/utils";
import { AppType } from "@/types/server";
import { useTranslations } from "@/utils/translation-provider";
import { Building2, ChevronLeft, Clock, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const InteractiveInformation = ({
  selectedArea,
  setSelectedArea,
  onBackHandler
}: {
  selectedArea: { region: string | null, placeId: number | null, placeData: AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"] } | null;
  setSelectedArea: React.Dispatch<React.SetStateAction<{ region: string | null, placeId: number | null, placeData: AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"] } | null>>;
  onBackHandler: () => void
  // selectedPlaceHandler: (placeId: number) => void;
}) => {
  const [findPlace, setFindPlace] = useState<{
    email?: string | null;
    phoneNumber?: string | null;
    workingTime?: string | null;
    id: number;
    chairmanFullName: string;
    chairmanPhoto: string;
    address: string;
    membersCount: number;
  } | null>(null);

  const t = useTranslations()

  useEffect(() => {
    const findSelectedPlace = selectedArea?.placeData?.find(place => place.id === selectedArea?.placeId);
    
    setFindPlace(findSelectedPlace ? { 
      email: findSelectedPlace.email || null,
      phoneNumber: findSelectedPlace.phoneNumber || null,
      workingTime: findSelectedPlace.workingTime || null,
      id: findSelectedPlace.id,
      chairmanFullName: findSelectedPlace.chairmanFullName,
      chairmanPhoto: findSelectedPlace.chairmanPhoto,
      address: findSelectedPlace.address,
      membersCount: findSelectedPlace.membersCount
    } : null);

    console.log(selectedArea);
  }, [selectedArea?.placeId]);

  const selectedPlaceHandler = (placeId: number) => {
    const existingPlace = selectedArea?.placeData?.find(place => place?.id === placeId);
    if (!existingPlace) {
      console.log("Xudud haqida ma'lumot topilmadi");
      return;
    }
    if (selectedArea?.placeId !== placeId) {
      setSelectedArea((prev) => ({
        ...prev,
        region: prev?.region || null,
        placeId: placeId,
        placeData: [...prev?.placeData || []]
      }));
    }
  }

  return (
    <div className="w-full">
      <ScrollAnimation>
        <div className="w-full flex items-center rounded-lg overflow-hidden shadow-xl mb-3">
          <button
            className={cn(
              "relative bg-[#000573] rounded-tl-lg rounded-bl-lg py-[15px] px-[25px] after:absolute after:w-full after:h-full after:content-[''] after:top-0 after:left-0",
            )}
            onClick={onBackHandler}
          >
            <ChevronLeft className="text-white w-8 h-8" />
          </button>
          <h4 className="w-full text-[#000573] text-sm uppercase py-[18px] text-center font-bold line-clamp-1 overflow-clip">
            {selectedArea?.region && selectedArea.placeId ? findPlace?.address : selectedArea?.region}
          </h4>
        </div>
      </ScrollAnimation>
      <div
        className={cn(
          "flex flex-col gap-y-1 overflow-y-auto scroll-bar p-2",
          "md:h-[480px]",
          "relative h-[400px] max-md:h-full max-sm:h-[250px] transition-all",
          // "max-md:overflow-y-hidden",
        )}
      >
        {
          // only selected place 
          selectedArea?.region &&
          selectedArea.placeId && (
            <ScrollAnimation className={cn(
              "w-full h-full",
              // "absolute top-0 -left-[200%] transition-all duration-300",
            )}>
              <div className="h-full bg-white rounded-xl flex flex-col gap-y-4 shadow-[0px_4px_8.199999809265137px_1px_rgba(0,0,0,0.25)] p-4" onClick={() => selectedPlaceHandler(findPlace?.id || 0)}>
                <div className="flex itmes-center gap-x-4 max-md:flex-col">
                  <Image
                    src={findPlace?.chairmanPhoto || ""}
                    alt={findPlace?.address || ""}
                    width={150}
                    height={200}
                    objectFit="cover"
                    loading="lazy"
                    className="object-contain max-md:w-full"
                  />
                  <div className="">
                    <h5 className="text-[#000573] text-2xl font-extrabold py-2 border-b border-[#000573]">
                      {findPlace?.chairmanFullName}
                    </h5>
                    <p className="text-[#ff8400] text-xl font-extrabold my-1">
                      {findPlace?.address}
                    </p>
                    <ul className="flex flex-col gap-y-2 text-sm my-4">
                      <li className="flex items-center gap-x-1">
                        <strong>Tel raqam:</strong>
                        <span>{findPlace?.phoneNumber}</span>
                      </li>
                      <li className="flex items-center gap-x-1">
                        <strong>Email:</strong>
                        <span>{findPlace?.email}</span>
                      </li>
                      <li className="flex items-start gap-x-1">
                        <strong>Manzil:</strong>
                        <span>{findPlace?.address}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" max-md:flex">
                  <h4 className="py-2 px-5 bg-[#000573] max-md:text-lg text-center text-white max-md:w-full">
                    {t("members_count_label")}
                  </h4>
                  <p className="text-8xl max-md:text-lg max-md:p-4 max-md:border font-extrabold  text-[#ff8400] py-5 text-center">
                    {findPlace?.membersCount}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          )
        }
        {
          // places list
          selectedArea?.region &&
          !selectedArea.placeId &&
          selectedArea.placeData.map((place, idx) => (
            <ScrollAnimation key={idx} idx={idx}>
              <div
                className="flex items-center justify-between gap-x-4 rounded-lg hover:shadow-xl cursor-pointer"
                onClick={() => selectedPlaceHandler(place.id)}
              >
                <div className="flex gap-x-4 items-center">
                  <div className=" bg-[#000573] py-4 px-4 rounded-lg">
                    <Building2 className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex flex-col gap-y-1 ">
                    <div className="flex items-center gap-x-2 text-[#777] text-[12px]">
                      <Clock className="w-4 h-4" />
                      <p>{place.workingTime}</p>
                    </div>
                    <div className="text-sm">{place.address}</div>
                  </div>
                </div>
                <div className="">
                  <button className="p-3">
                    <EllipsisVertical />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))
        }
        {
          // not found msg
          !selectedArea?.placeData.length && (
            <p>{selectedArea?.region} bo'yicha hech qanday ma'lumot topilmadi.</p>
          )
        }
      </div>
    </div>
  );
};

export default InteractiveInformation;
