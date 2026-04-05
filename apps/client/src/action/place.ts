import eden from "@/libs/eden";
import { AppType } from "@/types/server";

export const getAreas = (placeId: number) => {
  eden.places({placeId}).interactive_areas.get({query:{limit: 10, page: 1}})
}


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
