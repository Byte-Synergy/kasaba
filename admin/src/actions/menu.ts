"use server";

import eden from "@/libs/eden";
import { AppType } from "@/types/server";
import { getUserSession } from "@/utils/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getMenus(
  query: AppType["~Routes"]["api"]["rest"]["menus"]["get"]["query"],
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher.menus.get({
    fetch,
    query,
  });

  return { data, error, status };
}
export async function getMenu(
  menuId: number,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher
    .menus({ menuId })
    .get({ fetch });

  return { data, error, status };
}
export async function updateMenu(
  menuId: number,
  menuData: AppType["~Routes"]["api"]["rest"]["menus"][":menuId"]["put"]["body"],
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const cookiesStore = await cookies();
  const session = await getUserSession(cookiesStore);

  const { data, error, status, response } = await fetcher
    .menus({ menuId })
    .put(menuData, {
      fetch,
      headers: {
        authorization: `Bearer ${session}`,
      },
    });

  return { data, error, status, ok: response.ok };
}

export async function createMenu(
  menuData: AppType["~Routes"]["api"]["rest"]["menus"]["post"]["body"],
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const cookiesStore = await cookies();
  const session = await getUserSession(cookiesStore);

  const { data, error, status } = await fetcher.menus.post(menuData, {
    headers: {
      authorization: `Bearer ${session}`,
    },
    fetch,
  });

  return { data, error, status };
}

export async function menuVisibility(
  menuId: number,
  isVisible: boolean,
  redirectTo: string,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const response = await updateMenu(menuId, { isVisible }, fetch, fetcher);

  if (response.ok) redirect(redirectTo);
}
export async function deleteMenu(
  menuId: number,
  redirectTo?: string,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const cookiesStore = await cookies();
  const session = await getUserSession(cookiesStore);

  const { response } = await fetcher.menus({ menuId }).delete(undefined, {
    fetch,
    headers: {
      authorization: `Bearer ${session}`,
    },
  });

  if (response.ok && redirectTo) redirect(redirectTo);
}
