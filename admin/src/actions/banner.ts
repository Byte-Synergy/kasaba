"use server";

import eden from "@/libs/eden";
import { AppType } from "@/types/server";
import { getUserSession } from "@/utils/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getBanners(
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher.banner.get({ fetch });

  return { data, error, status };
}

export async function deleteBanner(
  bannerId: number,
  redirectTo?: string,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const cookiesStore = await cookies();
  const session = await getUserSession(cookiesStore);

  const { response } = await fetcher.banner({ bannerId }).delete(undefined, {
    fetch,
    headers: {
      authorization: `Bearer ${session}`,
    },
  });

  if (response.ok && redirectTo) redirect(redirectTo);
}
