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
// import { getAreasFromClient } from "@/utils/placesApi";

const InteractivePlaces = ({
  data,
  interactive_areas_label,
  lang,
  select_area_placeholder,
  places
}: {
  select_area_placeholder: string;
  interactive_areas_label: string;
  lang: Locale;
  data?: AppType["~Routes"]["api"]["rest"]["places"]["get"]["response"]["200"]["data"];
  places: {id: number, name?: string, areasCount: number, title: string}[] | []
}) => {
  const [selectPlace, setSelectPlace] = useState<string | null>(null);
  const [placesInRegion, setPlacesInRegion] = useState<
  | AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"]
  | any[]
>([])

  const findSelectedRegion = places.find(r => r.name === selectPlace)

  useEffect(() => {
    const getPlacesByRegion = async () => {
      if (!findSelectedRegion?.id) {
        console.log("Siz izlayotgan viloyat bo'yicha ma'lumot topilmadi...");
        setPlacesInRegion([]); // Clear the state if no region is found
        return;
      }

      try {
        const {data: places} = await getInteractiveAreasByFetch(
          { limit: 50, page: 1 },
          findSelectedRegion.id
        );
        if (Array.isArray(places.data)) {
          console.log(places.data, Array.isArray(places.data));
          setPlacesInRegion(() => ([...places.data])); 
        } else {
          console.log("Ma'lumot olishda xatolik: ", places.error);
          setPlacesInRegion([]); 
        }
      } catch (error) {
        console.error(
          "Viloyat bo'yicha hududlar ma'lumotini olishda xatolik:",
          error
        );
        setPlacesInRegion([]);
      }
    };

    getPlacesByRegion();
  }, [selectPlace, findSelectedRegion?.id]);

  useEffect(() => {
    if (selectPlace === null && places.length > 0) {
      setSelectPlace("tashkent_region");
    }
  });

  const changeSelectRegionFn = useCallback((place: string) => {
    setSelectPlace(place)
  }, [selectPlace])

  return (
    <Container className="">
      <ScrollAnimation>
        <NewsTitle lang={lang} title={interactive_areas_label} />
      </ScrollAnimation>
      <div className="flex items-start max-md:flex-col gap-4">
        <div className={"w-[55%] max-md:w-full"}>
          <ScrollAnimation>
            <Select
              onValueChange={(value) => changeSelectRegionFn(value === selectPlace ? selectPlace : value)}
              defaultValue={selectPlace ? selectPlace : "tashkent_region"}
            >
              <SelectTrigger className="w-[300px] py-[15px] px-[25px] bg-[#ff8400] text-white text-xl font-bold mb-5 max-md:w-full">
                <SelectValue
                  placeholder={select_area_placeholder}
                  defaultValue={selectPlace ? selectPlace : "tashkent_region"}
                  className="text-2xl placeholder:text-white text-white"
                />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                {places?.map((item, key) => (
                  <SelectItem key={key} value={item.name || item.title}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <InteractiveMap
              selectPlace={selectPlace}
              onChangeSelectPlace={(value) => {
                changeSelectRegionFn(value === selectPlace ? selectPlace : value);
              }}
            />
          </ScrollAnimation>
        </div>

        <div className="w-[45%] max-md:w-full">
          {selectPlace && findSelectedRegion && (
            <InteractiveInformation
              
              selectedPlace={findSelectedRegion}
              data={placesInRegion || []}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default InteractivePlaces;
