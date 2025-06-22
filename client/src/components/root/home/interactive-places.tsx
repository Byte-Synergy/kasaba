"use client";

import { Container } from "@/components/shared";
import InteractiveMap from "@/components/shared/interactive-map";
import React, { useCallback, useEffect, useState } from "react";
import InteractiveInformation from "./interactive-information";
import ScrollAnimation from "@/components/ui/scroll-animation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NewsTitle from "@/components/news/title";
import { AppType } from "@/types/server";
import { Locale } from "@/configs/i18n";
import { getInteractiveAreasByFetch } from "@/utils/placesApi";
import { cn } from "@/libs/utils";
import { useTranslations } from "@/utils/translation-provider";

const InteractivePlaces = ({
  lang,
  regions
}: {

  lang: Locale;
  regions: { id: number, name?: string, areasCount: number, title: string }[] | []
}) => {
  const [selectedArea, setSelectedArea] = useState<{ region: string | null, placeId: number | null, placeData: AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"] } | null>({
    region: null,  // region nomi === region.name
    placeId: null,  // tanlagan region ichidagi tanlangan place id === place.id
    placeData: []   // tanlangan region ichidagi barcha place ma'lumotlari
  })

  const t = useTranslations()

  // select bo'lgan regionni umumiy regionlarda topib olish
  const findSelectedRegion = regions?.find(r => r.name === selectedArea?.region)
  
  // fetch places by region
  // agar selectedArea region bo'lsa, fetch qilish
  useEffect(() => {
    const getPlacesByRegion = async () => {
      if (!findSelectedRegion?.id) {
        console.log("Siz izlayotgan viloyat bo'yicha ma'lumot topilmadi...");
        setSelectedArea(() => ({
          region: null,
          placeId: null,
          placeData: []
        }))
        return;
      }

      try {
        const { data: places } = await getInteractiveAreasByFetch(
          { limit: 50, page: 1 },
          findSelectedRegion.id
        );
        if (Array.isArray(places.data)) {
          setSelectedArea((prev) => ({
            ...prev,
            region: findSelectedRegion.name || null,
            placeId: prev?.placeId || null,
            placeData: [...places.data]
          }));
        } else {
          console.log("Ma'lumot olishda xatolik: ", places.error);
          // setPlacesInRegion([]);
        }
      } catch (error) {
        console.error(
          "Viloyat bo'yicha hududlar ma'lumotini olishda xatolik:",
          error
        );
      }
    };
    getPlacesByRegion();
  }, [selectedArea?.region]);

  // initial state for selectedArea
  // agar selectedArea region bo'lmasa, selectedArea ga toshkent-region ni berish
  useEffect(() => {
    if (selectedArea?.region === null) {
      setSelectedArea(() => ({
        region: "toshkent-region",
        placeId: null,
        placeData: []
      }));
    }
  }, []);

  // place infromation back button function
  // agar selectedArea region bo'lsa, placeId ni null qilish
  // agar selectedArea region bo'lmasa, selectedArea ni tozalash
  // agar selectedArea region bo'lsa, placeData ni tozalash
  const onBackHandler = useCallback(() => {
    if (selectedArea?.placeId) {
      setSelectedArea(prev => ({
        region: prev?.region || null,
        placeId: null,
        placeData: prev?.placeData || []
      }))
      return null
    } 
      setSelectedArea(() => ({
        
        region: null,
        placeData: [],
        placeId: null
      }))
  }, [selectedArea?.placeId])

  // region selectda o'zgartirish functioni
  const changeSelectRegionHandler = useCallback((place: string) => {
    setSelectedArea(() => ({
      region: place,
      placeId: null,
      placeData: []
    }))
  }, [selectedArea?.region])

  return (
    <Container className="">
      <ScrollAnimation>
        <NewsTitle lang={lang} title={t("interactive_areas_label")} />
      </ScrollAnimation>
      <div className="flex items-start max-md:flex-col gap-4">
        <div className={cn(
          "w-full transition-all",
          (selectedArea?.region && findSelectedRegion) ? "w-[55%] max-md:w-full" : "w-full",
          "max-sm:w-full max-md:max-w-full",
        )}>
          <ScrollAnimation>
            <Select  // select yordamida region tanlash
              onValueChange={(value) => changeSelectRegionHandler(value)}
              defaultValue={selectedArea?.region || "tashkent_region"}
              value={selectedArea?.region ? selectedArea?.region : "tashkent_region"}
            >
              <SelectTrigger className="w-[300px] py-[15px] px-[25px] bg-[#ff8400] text-white text-xl font-bold mb-5 max-md:w-full">
                <SelectValue
                  placeholder={t("select_area_placeholder")}
                  aria-valuetext="tashkent_region"
                  className="text-2xl placeholder:text-white text-white"
                />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                {regions?.map((item, key) => (
                  <SelectItem key={key} value={item.name || ""}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <InteractiveMap  // Xududlar xaritasi
              selectPlace={selectedArea?.region || "tashkent_region"}
              onChangeSelectPlace={(value) => {
                changeSelectRegionHandler(value);
              }}
            />
          </ScrollAnimation>
        </div>
        <div className={cn(
          "w-full transition-all",
          (selectedArea?.region && findSelectedRegion) ? "w-[45%] max-md:w-full" : "hidden",
          "max-sm:w-full max-md:max-w-full",
        )}>
          <ScrollAnimation>
            <InteractiveInformation
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
              onBackHandler={onBackHandler}
              // selectedPlaceHandler={(id: number) => selectedPlaceHandler(id.toString())}
            />
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
};

export default InteractivePlaces;
