"use server";

import eden from "@/libs/eden";
import { AppType } from "@/types/server";

// ✅ Interactive Areas - placeId bo‘yicha olish
export async function getAreas(
  placeId: number,
  query: AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["query"] = {
    page: 1,
    limit: 10,
  },
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher
    .places({ placeId })
    .interactive_areas.get({
      fetch,
      query,
    });

  return { data, error, status };
}

// ✅ Barcha joylarni olish
export async function getPlaces(
  query: AppType["~Routes"]["api"]["rest"]["places"]["get"]["query"],
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher.places.get({
    fetch,
    query,
  });

  return { data, error, status };
}

// ✅ Bitta joyni olish (ID bo‘yicha)
export async function getPlace(
  placeId: number,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher.places({ placeId }).get({
    fetch,
  });

  return { data, error, status };
}

// ✅ Interactive Areas ni query bilan olish
export async function getInteractiveAreas(
  query: AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["query"],
  placeId: number,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher
    .places({ placeId })
    .interactive_areas.get({
      fetch,
      query,
    });

  return { data, error, status };
}