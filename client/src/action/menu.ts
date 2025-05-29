import eden from "@/libs/eden";
import { AppType } from "@/types/server";

export async function getMenus(
  query: AppType["~Routes"]["api"]["rest"]["menus"]["get"]["query"],
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden
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
  fetcher: typeof eden = eden
) {
  const { data, error, status } = await fetcher
    .menus({ menuId })
    .get({ fetch });

  return { data, error, status };
}
