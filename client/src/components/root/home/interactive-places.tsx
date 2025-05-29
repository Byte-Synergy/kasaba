"use client";

import { Container } from "@/components/shared";
import InteractiveMap from "@/components/shared/interactive-map";
import React, { useEffect, useState } from "react";
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

const InteractivePlaces = ({
  data,
  interactive_areas_label,
  lang,
  select_area_placeholder,
  address_label,
  email_label,
  members_count_label,
  our_addresses_label,
  phone_number_label,
}: {
  select_area_placeholder: string;
  address_label: string;
  email_label: string;
  members_count_label: string;
  our_addresses_label: string;
  phone_number_label: string;
  interactive_areas_label: string;
  lang: Locale;
  data: AppType["~Routes"]["api"]["rest"]["places"]["get"]["response"]["200"]["data"];
}) => {
  const [selectPlace, setSelectPlace] = useState<string | null>(
    data[0]?.name || null
  );
  const [areas, setAreas] = useState<
    | AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"]
    | null
  >(null);

  useEffect(() => {
    async function getData() {
      const id = data.find((d) => d.name === selectPlace);
      if (id) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/rest/places/${id.id}/interactive_areas`
        );
        const data = await response.json();

        if (data) setAreas((data as any).data);
      } else setAreas(null);
    }
    getData();
  }, [selectPlace]);
  return (
    <Container className="">
      <ScrollAnimation>
        <NewsTitle lang={lang} title={interactive_areas_label} />
      </ScrollAnimation>
      <div className="flex items-start max-md:flex-col gap-4">
        <div className={"w-[55%] max-md:w-full"}>
          <ScrollAnimation>
            <Select
              onValueChange={(value) => setSelectPlace(value)}
              defaultValue={data[0]?.name}
            >
              <SelectTrigger className="w-[300px] py-[15px] px-[25px] bg-[#ff8400] text-white text-xl font-bold mb-5">
                <SelectValue
                  placeholder={select_area_placeholder}
                  className="text-2xl placeholder:text-white text-white"
                />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                {data.map((item, key) => (
                  <SelectItem key={key} value={item.name || item.title}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <InteractiveMap
              selectPlace={selectPlace}
              onChangeSelectPlace={(value) => {
                setSelectPlace(value === selectPlace ? null : value);
              }}
            />
          </ScrollAnimation>
        </div>

        <div className="w-[45%] max-md:w-full">
          {selectPlace && (
            <InteractiveInformation
              address_label={address_label}
              email_label={email_label}
              members_count_label={members_count_label}
              our_addresses_label={our_addresses_label}
              phone_number_label={phone_number_label}
              selectedPlace={selectPlace}
              data={areas || []}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default InteractivePlaces;
