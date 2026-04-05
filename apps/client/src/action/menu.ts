"use server";

import eden from "@/libs/eden";
import { AppType } from "@/types/server";

export type MenuItem = {
  id: string;
  title: string;
  path: string;
  docCount?: number;
  sub_menu: MenuItem[];
  type?: AppType["~Routes"]["api"]["rest"]["menus"]["tree"]["get"]["response"]["200"][number]["type"];
  newsType?: AppType["~Routes"]["api"]["rest"]["menus"]["tree"]["get"]["response"]["200"][number]["newsType"];
};
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
// Eden’dan menu olish
export async function getMenuTree(lang: string) {
  const { data, error, status } = await eden.menus.tree.get({
    query: {
      page: 1,
      filter: {
        lang,
        orderBy: "asc",
        parentId: null,
      },
    },
  });

  if (error) {
    return { success: false, error, status, data: [] };
  }

  // Menuni mapping qilish
  function mapMenuTree(
    menu: AppType["~Routes"]["api"]["rest"]["menus"]["tree"]["get"]["response"]["200"][number]
  ): MenuItem {
    return {
      type: menu.type,
      id: menu.id.toString(),
      title: menu.name,
      path: menu.path || "",
      newsType: menu.newsType,
      docCount: menu.type === "document" ? menu.files?.length : undefined,
      sub_menu: (menu.children || []).map(mapMenuTree),
    };
  }

  return {
    success: true,
    status,
    data: (data || []).map(mapMenuTree),
  };
}
