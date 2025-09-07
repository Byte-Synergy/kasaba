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
  onBackHandler,
}: {
  selectedArea: {
    region: string | null;
    placeId: number | null;
    placeData: AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"];
  } | null;
  setSelectedArea: React.Dispatch<
    React.SetStateAction<{
      region: string | null;
      placeId: number | null;
      placeData: AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"];
    } | null>
  >;
  onBackHandler: () => void;
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

  const t = useTranslations();

  useEffect(() => {
    const findSelectedPlace = selectedArea?.placeData?.find(
      (place) => place.id === selectedArea?.placeId
    );

    setFindPlace(
      findSelectedPlace
        ? {
            email: findSelectedPlace.email || null,
            phoneNumber: findSelectedPlace.phoneNumber || null,
            workingTime: findSelectedPlace.workingTime || null,
            id: findSelectedPlace.id,
            chairmanFullName: findSelectedPlace.chairmanFullName,
            chairmanPhoto: findSelectedPlace.chairmanPhoto,
            address: findSelectedPlace.address,
            membersCount: findSelectedPlace.membersCount,
          }
        : null
    );
  }, [selectedArea?.placeId]);

  const selectedPlaceHandler = (placeId: number) => {
    console.log(placeId, selectedArea?.placeId);

    const existingPlace = selectedArea?.placeData?.find(
      (place) => place?.id === placeId
    );

    if (!existingPlace) {
      console.log("Xudud haqida ma'lumot topilmadi");
      return;
    }

    if (selectedArea?.placeId !== placeId) {
      setSelectedArea((prev) => ({
        ...prev,
        region: prev?.region || null,
        placeId: placeId,
        placeData: [...(prev?.placeData || [])],
      }));
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <ScrollAnimation>
        <div className="w-full flex items-center rounded-lg overflow-hidden shadow-xl mb-3">
          <button
            className={cn(
              "relative bg-[#000573] rounded-tl-lg rounded-bl-lg py-[15px] px-[25px] after:absolute after:w-full after:h-full after:content-[''] after:top-0 after:left-0"
            )}
            onClick={onBackHandler}
          >
            <ChevronLeft className="text-white w-8 h-8" />
          </button>
          <h4 className="w-full text-[#000573] text-sm uppercase py-[18px] text-center font-bold line-clamp-1 overflow-clip">
            {selectedArea?.region && selectedArea.placeId
              ? findPlace?.address
              : selectedArea?.region}
          </h4>
        </div>
      </ScrollAnimation>
      <div
        className={cn(
          "flex flex-col gap-y-1 overflow-y-auto scroll-bar p-1",
          // "md:h-[480px]",
          "relative  max-md:h-full max-sm:h-[250px] transition-all"
          // "max-md:overflow-y-hidden",
        )}
      >
        {
          // only selected place
          selectedArea?.region && selectedArea.placeId && (
            <ScrollAnimation
              className={cn(
                "w-full h-full p-2"
                // "absolute top-0 -left-[200%] transition-all duration-300",
              )}
            >
              <div
                className="h-full bg-white rounded-xl flex flex-col gap-y-4 shadow-[0px_4px_8.199999809265137px_1px_rgba(0,0,0,0.25)] px-6 py-8"
                onClick={() => selectedPlaceHandler(findPlace?.id || 0)}
              >
                <h3 className="text-3xl font-bold uppercase text-[#000573]">
                  Hududiy boshqarmalar
                </h3>
                <p
                  className={cn(
                    "text-xl text-[#000573] uppercase font-medium pr-10",
                    "relative",
                    "after:absolute after:-bottom-5 after:left-0 after:content-[''] after:w-20 after:h-0.5 after:bg-[#000573]"
                  )}
                >
                  {selectedArea.region === "tashkent-city"
                    ? `${selectedArea.region} shahar `
                    : `${selectedArea.region} viloyati `}
                  Hududiy boshqarmasi
                </p>
                <div className="flex justify-start gap-x-5 items-end mt-5">
                  <div className="w-[150px] border">
                    <Image
                      className="w-[150px] h-[175px] object-cover"
                      src={selectedArea.placeData[0].chairmanPhoto}
                      alt={`${selectedArea.placeData[0].chairmanFullName} image`}
                      width={150}
                      height={175}
                    />
                  </div>
                  <div className="w-2/3">
                    <h3
                      className={cn(
                        "text-3xl font-medium text-[#000573] inline-flex flex-col",
                        "relative pb-5",
                        "after:absolute after:bottom-0 after:left-0 after:content-[''] after:w-full after:h-0.5 after:bg-[#000573]"
                      )}
                    >
                      <span>
                        {
                          selectedArea.placeData[0].chairmanFullName.split(
                            " "
                          )[0]
                        }
                      </span>
                      <span>
                        {
                          selectedArea.placeData[0].chairmanFullName.split(
                            " "
                          )[1]
                        }
                      </span>
                      <span className="">
                        {
                          selectedArea.placeData[0].chairmanFullName.split(
                            " "
                          )[2]
                        }
                      </span>
                    </h3>
                    <p className="text-xl mt-4 uppercase">
                      Boshqarma boshlig'i
                    </p>
                  </div>
                </div>
                <ul
                  className={cn(
                    "flex flex-col gap-4 py-10",
                    "relative",
                    "after:absolute after:top-4 after:left-0 after:content-[''] after:w-full after:h-0.5 after:bg-[#000573]"
                  )}
                >
                  <li className="flex justify-between">
                    <span className="w-1/3 text-[#000573] text-xl font-medium">
                      A'zolar soni:
                    </span>
                    <span className="w-2/3 text-xl">
                      {selectedArea.placeData[0].membersCount}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="w-1/3 text-[#000573] text-xl font-medium">
                      Telefon:
                    </span>
                    <span className="w-2/3 text-xl">
                      {selectedArea.placeData[0].phoneNumber}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="w-1/3 text-[#000573] text-xl font-medium">
                      Email:
                    </span>
                    <span className="w-2/3 text-xl">
                      {selectedArea.placeData[0].email}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="w-1/3 text-[#000573] text-xl font-medium">
                      Manzil:
                    </span>
                    <span className="w-2/3 text-xl">
                      {selectedArea.placeData[0].address}
                    </span>
                  </li>
                </ul>
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
            <p>
              {selectedArea?.region} bo'yicha hech qanday ma'lumot topilmadi.
            </p>
          )
        }
      </div>
    </div>
  );
};

export default InteractiveInformation;
