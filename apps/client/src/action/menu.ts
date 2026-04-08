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
    uz: "uz-UZ",
    ru: "ru-RU",
    en: "en-US",
    "uz-cyrl": "uz-Cyrl",
  };
  return mapping[lang] || lang;
}

export async function getMenuTree(lang: string) {
  const client = getDirectusClient();
  const nLang = normalizeLang(lang);

  try {
    const items = await client.request(
      readItems("menus", {
        fields: ["*", "translations.*"],
        filter: {
          _and: [
            { status: { _eq: "published" } },
            {
              translations: {
                languages_code: { _eq: nLang },
              },
            },
          ],
        },
        limit: -1,
      }),
    );

    const itemMap: Record<string, MenuItem> = {};
    (items as any[]).forEach((p) => {
      const trans = p.translations?.find((t: any) => t.languages_code === nLang);
      
      if (!trans) return;

      itemMap[p.id.toString()] = {
        id: p.id.toString(),
        title: trans.name || "",
        path: trans.slug ? `/p/${trans.slug}` : "",
        type: trans.type,
        newsType: trans.news_type,
        sub_menu: [],
      };
    });

    const rootItems: MenuItem[] = [];
    (items as any[]).forEach((p) => {
      const item = itemMap[p.id.toString()];
      if (!item) return;

      const pId = typeof p.parent === "object" ? p.parent?.id : p.parent;
      const parentIdStr = pId?.toString();

      if (parentIdStr && itemMap[parentIdStr]) {
        itemMap[parentIdStr].sub_menu.push(item);
      } else {
        rootItems.push(item);
      }
    });

    return { success: true, data: rootItems, status: 200 };
  } catch (error: any) {
    console.error(
      "Directus getMenuTree Error:",
      error?.errors || error?.message || error,
    );
    return { success: false, data: [], error, status: 500 };
  }
}

export async function getMenu(p: string | number, lang: string) {
  const client = getDirectusClient();
  const nLang = normalizeLang(lang);

  try {
    const isId = !isNaN(Number(p));
    
    const filter: any = isId 
      ? { id: { _eq: Number(p) } }
      : { translations: { slug: { _eq: p } } };

    const items = await client.request(
      readItems("menus", {
        fields: [
          "*",
          "translations.*",
          {
            translations: [
              "*",
              {
                content_blocks: [
                  "*",
                  {
                    item: ["*"]
                  }
                ],
                member_blocks: [
                  "*",
                  {
                    item: [
                      "*",
                      "image.*",
                      {
                        translations: ["*"]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        filter: {
          _and: [
            { status: { _eq: "published" } },
            filter
          ],
        },
        limit: 1,
      }),
    );

    if (!items || items.length === 0) {
      return { success: false, data: null, status: 404 };
    }

    const page = items[0];
    const trans = page.translations?.find((t: any) => t.languages_code === nLang);

    if (!trans) {
       return { success: false, data: null, status: 404 };
    }

    const content: any[] = [];
    
    // Add content blocks
    if (trans.content_blocks) {
      trans.content_blocks.forEach((b: any) => {
        if (b.collection === "block_richtexts" && b.item) {
          content.push({ type: "text", value: b.item.content });
        }
      });
    }

    // Add member blocks
    if (trans.member_blocks) {
      const members: any[] = [];
      trans.member_blocks.forEach((b: any) => {
        if (b.collection === "internal_employees" && b.item) {
          const emp = b.item;
          const empTrans = emp.translations?.find((et: any) => et.languages_code === nLang) || emp.translations?.[0];
          members.push({
            fullName: empTrans?.full_name || "",
            position: empTrans?.position || "",
            phoneNumber: emp.phone_number,
            email: emp.email,
            fileId: emp.image?.id,
            href: emp.image ? `${process.env.NEXT_PUBLIC_API_URL || "https://davadmin.kasaba.uz"}/assets/${emp.image.id}` : null
          });
        }
      });
      if (members.length > 0) {
        content.push({ type: "member", members });
      }
    }

    const normalizedData = {
      ...page,
      title: trans.name,
      slug: trans.slug,
      type: trans.type,
      newsType: trans.news_type,
      content: content
    };

    return { success: true, data: normalizedData, status: 200 };
  } catch (error: any) {
    console.error("Directus getMenu Error:", error);
    return { success: false, data: null, error, status: 500 };
  }
}

