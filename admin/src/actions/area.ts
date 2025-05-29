"use server";

import eden from "@/libs/eden";
import { AppType } from "@/types/server";
import { getUserSession } from "@/utils/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

export async function deleteArea(
  areaId: number,
  redirectTo: string,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const cookiesStore = await cookies();
  const session = await getUserSession(cookiesStore);

  const { response } = await fetcher.places
    .interactive_areas({ areaId })
    .delete(undefined, {
      fetch,
      headers: {
        authorization: `Bearer ${session}`,
      },
    });

  if (response.ok) redirect(redirectTo);
}
