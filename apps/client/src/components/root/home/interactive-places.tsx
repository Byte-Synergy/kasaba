"use client";

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
import { Locale } from "@/configs/i18n";
import { getInteractiveAreasByFetch } from "@/utils/placesApi";
import { cn } from "@/libs/utils";
import { useTranslations } from "@/utils/translation-provider";

const ID_TO_REGION: Record<number, string> = {
  1: "karakalpakstan",
  2: "andijan",
  3: "bukhara",
  4: "jizzakh",
  5: "kashkadarya",
  6: "navoiy",
  7: "namangan",
  8: "samarkand",
  9: "surkhandarya",
  10: "syrdarya",
  11: "tashkent_region",
  12: "fergana",
  13: "khorezm",
  14: "tashkent"
};

const REGION_TO_ID: Record<string, number> = Object.entries(ID_TO_REGION).reduce((acc, [id, slug]) => {
  acc[slug] = Number(id);
  return acc;
}, {} as Record<string, number>);

function normalizeLang(lang: string) {
  const mapping: Record<string, string> = {
    "uz": "uz-UZ",
    "ru": "ru-RU",
    "en": "en-US",
    "uz-cyrl": "uz-Cyrl"
  };
  return mapping[lang] || lang;
}

function mapArea(item: any, lang: string) {
  const nLang = normalizeLang(lang);
  const trans = item.translations?.find((t: any) => t.languages_code === nLang) || item.translations?.[0];
  const chairman = item.employees?.[0]; // Usually one chairman per area
  const chairTrans = chairman?.translations?.find((t: any) => t.languages_code === nLang) || chairman?.translations?.[0];

  const title = trans?.name || (item.translations?.[0]?.name) || `Area ${item.id}`;
  return {
    id: item.id,
    name: trans?.name || item.id.toString(),
    title: title,
    address: trans?.address || "",
    membersCount: item.members_count || 0,
    chairmanFullName: chairTrans?.full_name || "",
    phoneNumber: chairman?.phone_number || "",
    email: chairman?.email || "",
    workingTime: chairTrans?.work_time || "",
    chairmanPhoto: chairman?.image ? (typeof chairman.image === 'string' 
      ? `${process.env.NEXT_PUBLIC_API_URL}/assets/${chairman.image}`
      : `${process.env.NEXT_PUBLIC_API_URL}/assets/${chairman.image.id}`) 
      : null,
    employees: (item.employees || []).map((emp: any) => {
      const eTrans = emp.translations?.find((t: any) => t.languages_code === nLang) || emp.translations?.[0];
      return {
        id: emp.id,
        fullName: eTrans?.full_name || "",
        position: eTrans?.position || "",
        phoneNumber: emp.phone_number || "",
        email: emp.email || "",
        image: emp.image ? (typeof emp.image === 'string' 
          ? `${process.env.NEXT_PUBLIC_API_URL}/assets/${emp.image}`
          : `${process.env.NEXT_PUBLIC_API_URL}/assets/${emp.image.id}`) 
          : null
      };
    })
  };
}

export type MappedAreaType = {
  id: number;
  name: string;
  title: string;
  address: string;
  membersCount: number;
  chairmanFullName: string;
  phoneNumber: string;
  email: string;
  workingTime: string;
  chairmanPhoto: string | null;
  employees: {
    id: number;
    fullName: string;
    position: string;
    phoneNumber: string;
    email: string;
    image: string | null;
  }[];
};

const InteractivePlaces = ({
  lang,
  regions
}: {
  lang: Locale;
  regions: { id: number, name?: string, areasCount: number, title: string }[] | []
}) => {
  const [selectedArea, setSelectedArea] = useState<{ 
    region: string | null, 
    placeId: number | null, 
    placeData: MappedAreaType[] 
  } | null>({
    region: null,
    placeId: null,
    placeData: []
  })

  const t = useTranslations()

  // select bo'lgan regionni umumiy regionlarda topib olish
  const selectedRegionId = selectedArea?.region ? REGION_TO_ID[selectedArea.region] : REGION_TO_ID["tashkent_region"];
  const findSelectedRegion = regions?.find(r => r.id === selectedRegionId);
  
  // fetch places by region
  // agar selectedArea region bo'lsa, fetch qilish
  useEffect(() => {
    const getPlacesByRegion = async () => {
      if (!findSelectedRegion?.id) {
        console.log("Siz izlayotgan viloyat bo'yicha ma'lumot topilmadi...");
        setSelectedArea((prev) => ({
          region: prev?.region || null,
          placeId: null,
          placeData: []
        }))
        return;
      }

      try {
        const { data: places, error: fetchError } = await getInteractiveAreasByFetch(
          { limit: 50, page: 1 },
          findSelectedRegion.id
        );
        if (places && Array.isArray(places.data)) {
          const mapped = places.data.map((item: any) => mapArea(item, lang));
          setSelectedArea((prev) => ({
            region: prev?.region || null,
            placeId: prev?.placeId || null,
            placeData: mapped
          }));
        } else {
          console.log("Ma'lumot olishda xatolik: ", fetchError);
          setSelectedArea((prev) => ({
            region: prev?.region || null,
            placeId: prev?.placeId || null,
            placeData: []
          }));
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

  useEffect(() => {
    if (selectedArea?.region === null) {
      setSelectedArea(() => ({
        region: "tashkent_region",
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
    <section id="interactive-informations" className="w-full">
      <div className="max-w-[90%] w-full mx-auto max-md:max-w-[95%] py-[60px]">
        <ScrollAnimation>
          <div className="flex items-center gap-x-4 max-md:gap-1 max-md:my-5 uppercase py-1 my-[30px]">
            <h3 className="relative text-4xl font-bold text-[#ff8400] pl-5 max-md:text-base max-md:text-[#000674] after:absolute after:top-1/2 after:left-0 after:w-2 after:h-2/3 after:content-[''] after:bg-[#ff8400] after:-translate-y-[50%]">
              {t("interactive_areas_label")}
            </h3>
            <div className="flex-auto h-1 bg-[#ff8400] max-md:bg-[#000674] max-md:h-[1px]"></div>
          </div>
        </ScrollAnimation>
        <div className="flex items-start max-md:flex-col gap-4">
          <div className={cn(
            "transition-all",
            "w-2/3 max-md:w-full",
          )}>
            <ScrollAnimation>
              <Select  // select yordamida region tanlash
                onValueChange={(value) => changeSelectRegionHandler(value)}
                defaultValue={selectedArea?.region || "tashkent_region"}
                value={selectedArea?.region ? selectedArea?.region : "tashkent_region"}
              >
                <SelectTrigger className="w-[300px] py-[15px] px-[25px] bg-[#ff8400] text-white text-xl font-bold mb-5 max-md:w-full focus:ring-0">
                  <SelectValue
                    placeholder={t("select_area_placeholder")}
                    aria-valuetext="tashkent_region"
                    className="text-2xl placeholder:text-white text-white"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white border-none">
                  {regions?.map((item) => {
                    const slug = ID_TO_REGION[item.id];
                    if (!slug) return null;
                    return (
                      <SelectItem key={item.id} value={slug}>
                        {t(`regions.${slug}`) || item.title}
                      </SelectItem>
                    );
                  })}
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
            "w-[130] transition-all max-md:w-full max-sm:w-full max-md:max-w-full w-[520px]"
          )}>
          <ScrollAnimation>
            <InteractiveInformation
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
              onBackHandler={onBackHandler}
              regionTitle={(() => {
                if (!selectedArea?.region) return "";
                const translated = t(`regions.${selectedArea.region}`);
                // Agar tarjima mavjud bo'lsa (key qaytib kelmasa), uni ishlatish
                if (translated && translated !== `regions.${selectedArea.region}`) {
                  return translated;
                }
                return findSelectedRegion?.title || selectedArea.region;
              })()}
            />
          </ScrollAnimation>
        </div>
      </div>
      </div>
    </section>
  );
};

export default InteractivePlaces;
