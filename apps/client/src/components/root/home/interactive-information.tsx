"use client";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { cn } from "@/libs/utils";
import { AppType } from "@/types/server";
import { useTranslations } from "@/utils/translation-provider";
import { Building2, ChevronDown, ChevronLeft, Clock, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { MappedAreaType } from "./interactive-places";

const InteractiveInformation = ({
  selectedArea,
  setSelectedArea,
  onBackHandler,
  regionTitle
}: {
  selectedArea: { region: string | null, placeId: number | null, placeData: MappedAreaType[] } | null;
  setSelectedArea: React.Dispatch<React.SetStateAction<{ region: string | null, placeId: number | null, placeData: MappedAreaType[] } | null>>;
  onBackHandler: () => void;
  regionTitle?: string;
}) => {
  const [findPlace, setFindPlace] = useState<{
    id: number;
    address: string;
    membersCount: number;
    email?: string | null;
    phoneNumber?: string | null;
    workingTime?: string | null;
    chairmanFullName?: string | null;
    chairmanPhoto?: string | null;
    employees?: { id: number; fullName: string; position: string; phoneNumber: string; email: string; image: string | null }[];
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
      membersCount: findSelectedPlace.membersCount,
      employees: findSelectedPlace.employees
    } : null);
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
            {selectedArea?.placeId ? (
               <ChevronLeft className="text-white w-8 h-8" />
            ) : (
               <ChevronDown className="text-white w-8 h-8" />
            )}
          </button>
          <h4 className="w-full text-[#000573] text-sm uppercase py-[18px] text-center font-bold line-clamp-1 overflow-clip">
            {selectedArea?.region && selectedArea.placeId ? findPlace?.address : regionTitle || selectedArea?.region}
          </h4>
        </div>
      </ScrollAnimation>
      <div
        className={cn(
          "flex flex-col gap-y-1 overflow-y-auto scroll-bar p-1 relative max-md:h-full max-sm:h-[250px] transition-all",
          "md:h-[480px] h-[400px]",
        )}
      >
        {
          // only selected place 
          selectedArea?.region &&
          selectedArea.placeId && (
            <ScrollAnimation className="w-full h-full">
              <div className="flex flex-col gap-y-4">
                {/* Employees Cards List */}
                <div className="flex flex-col gap-y-3">
                  {findPlace?.employees?.map((emp, eidx) => (
                    <div 
                      key={emp.id} 
                      className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex items-center border border-gray-50/50 py-[12px] px-[26px] gap-x-4"
                    >
                      {/* Avatar */}
                      <div className="relative w-[106px] h-[106px] flex-shrink-0">
                         {emp.image ? (
                           <Image 
                             src={emp.image} 
                             alt={emp.fullName}
                             fill
                             className="rounded-full object-cover border-2 border-white shadow-sm"
                           />
                         ) : (
                           <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center border-2 border-white shadow-sm">
                              <span className="text-gray-400 text-xs text-center px-1 font-medium">{emp.fullName.split(' ')[0]}</span>
                           </div>
                         )}
                      </div>

                      {/* Card Body */}
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <div className="relative inline-block w-full">
                          <h3 className="text-[#000] text-2xl font-bold leading-tight pb-1">
                            {emp.fullName}
                          </h3>
                          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#000573]"></div>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 font-medium leading-snug line-clamp-2 italic">
                          {emp.position}
                        </p>
                      </div>
                    </div>
                  ))}
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
                className="flex items-center justify-between gap-x-4 rounded-xl hover:shadow-2xl hover:bg-gray-50/50 p-2 transition-all cursor-pointer border border-transparent hover:border-gray-100/50 mb-2"
                onClick={() => selectedPlaceHandler(place.id)}
              >
                <div className="flex gap-x-4 items-center min-w-0">
                  <div className="bg-[#000573] py-4 px-4 rounded-xl flex-shrink-0 shadow-lg">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex flex-col gap-y-1 min-w-0">
                    <h4 className="text-[#000573] font-bold text-base leading-tight line-clamp-2">
                       {place.name}
                    </h4>
                    <div className="flex items-start gap-x-1.5 text-gray-400 mt-0.5">
                      <p className="text-[13px] leading-snug line-clamp-2">{place.address}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="p-2 text-gray-300 hover:text-[#ff8400] transition-colors">
                    <EllipsisVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))
        }
        {
          // not found msg
          !selectedArea?.placeData?.length && (
            <p className="text-center mt-5 text-[#888] whitespace-pre-wrap">{t("no_result_description")}</p>
          )
        }
      </div>
    </div>
  );
};

export default InteractiveInformation;
