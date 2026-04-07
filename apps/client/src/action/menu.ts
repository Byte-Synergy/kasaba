"use server";

import { getDirectusClient } from "@/utils/directus";
import { readItems } from "@directus/sdk";

export type MenuItem = {
  id: string;
  title: string;
  path: string;
  docCount?: number;
  sub_menu: MenuItem[];
  type?: string;
  newsType?: string;
};

function normalizeLang(lang: string) {
  const mapping: Record<string, string> = {
    "uz": "uz-UZ",
    "ru": "ru-RU",
    "en": "en-US",
    "uz-cyrl": "uz-Cyrl"
  };
  return mapping[lang] || lang;
}

export async function getMenuTree(lang: string) {
  const client = getDirectusClient();
  const nLang = normalizeLang(lang);

  try {
    // Barcha sahifalarni o'qiymiz
    const pages = await client.request(
      readItems("pages", {
        fields: [
          "*",
          "translations.*"
        ],
        filter: {
          status: { _eq: "published" }
        },
        // Sahifalar soni kam bo'lgani uchun hammasini olamiz
        limit: -1,
      })
    );

    // Tree qurish
    const mapPage = (p: any): MenuItem => {
      const trans = p.translations?.find((t: any) => t.languages_code === nLang) || p.translations?.[0];
      return {
        id: p.id.toString(),
        title: trans?.name || "",
        path: trans?.slug ? `/${lang}/${trans.slug}` : "",
        sub_menu: [],
      };
    };

    const allItems = (pages as any[]).map(mapPage);
    const itemMap: Record<string, MenuItem> = {};
    allItems.forEach(item => {
        itemMap[item.id] = item;
    });

    const rootItems: MenuItem[] = [];
    (pages as any[]).forEach(p => {
        const item = itemMap[p.id.toString()];
        if (p.parent) {
            const parentItem = itemMap[p.parent.toString()];
            if (parentItem) {
                parentItem.sub_menu.push(item);
            } else {
                rootItems.push(item);
            }
        } else {
            rootItems.push(item);
        }
    });

    return { success: true, data: rootItems, status: 200 };
  } catch (error: any) {
    console.error("Directus getMenuTree Error:", error?.errors || error?.message || error);
    return { success: false, data: [], error, status: 500 };
  }
}
