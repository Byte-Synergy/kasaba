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
    // Directus'dan faqat so'ralgan tilda tarjimasi bor va nashr qilingan sahifalarni olamiz
    const pages = await client.request(
      readItems("pages", {
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

    // 1. Dastlab hamma sahifalarni MenuItem formatiga o'tkazib, map'ga joylaymiz
    const itemMap: Record<string, MenuItem> = {};
    (pages as any[]).forEach((p) => {
      const trans = p.translations?.find((t: any) => t.languages_code === nLang);
      
      // Agar bu tilda tarjimasi bo'lmasa, uni menyuga qo'shmaymiz (tillar aralashmasligi uchun)
      if (!trans) return;

      itemMap[p.id.toString()] = {
        id: p.id.toString(),
        title: trans.name || "",
        path: trans.slug ? `/p/${trans.slug}` : "",
        type: p.type,
        newsType: p.news_type,
        sub_menu: [],
      };
    });

    // 2. Ierarxiyani quramiz
    const rootItems: MenuItem[] = [];
    (pages as any[]).forEach((p) => {
      const item = itemMap[p.id.toString()];
      if (!item) return; // Tarjimasi yo'qlar o'tkazib yuborilgan

      const pId = typeof p.parent === "object" ? p.parent?.id : p.parent;
      const parentIdStr = pId?.toString();

      if (parentIdStr && itemMap[parentIdStr]) {
        // Ota-onasi topilsa, uning sub_menu'siga qo'shiladi
        itemMap[parentIdStr].sub_menu.push(item);
      } else {
        // Ota-onasi bo'lmasa yoki topilmasa, root (asosiy) menyu bo'ladi
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

    const pages = await client.request(
      readItems("pages", {
        fields: [
          "*",
          "translations.*",
          {
            translations: [
              "*",
              {
                blocks: [
                  "*",
                  {
                    item: {
                      block_richtext: ["*"],
                      block_employee: ["*", "image.*"],
                      block_photo: ["*", "image.*"]
                    }
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

    if (!pages || pages.length === 0) {
      return { success: false, data: null, status: 404 };
    }

    const page = pages[0];
    const trans = page.translations?.find((t: any) => t.languages_code === nLang);

    if (!trans) {
       return { success: false, data: null, status: 404 };
    }

    // Directus formatini frontend tushunadigan sodda formatga o'giramiz
    const normalizedData = {
      ...page,
      title: trans.name,
      slug: trans.slug,
      content: trans.blocks?.map((b: any) => {
        const item = b.item;
        if (b.collection === "block_richtext") {
          return { type: "text", value: item.content };
        }
        if (b.collection === "block_employee") {
          return { 
            type: "member", 
            members: [{
              fullName: item.full_name,
              position: item.position,
              phoneNumber: item.phone_number,
              email: item.email,
              fileId: item.image?.id,
              href: item.image ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL || "https://davadmin.kasaba.uz"}/assets/${item.image.id}` : null
            }]
          };
        }
        if (b.collection === "block_photo") {
          return {
            type: "photo",
            fileId: item.image?.id,
            href: item.image ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL || "https://davadmin.kasaba.uz"}/assets/${item.image.id}` : null
          };
        }
        return null;
      }).filter(Boolean) || []
    };

    return { success: true, data: normalizedData, status: 200 };
  } catch (error: any) {
    console.error("Directus getMenu Error:", error);
    return { success: false, data: null, error, status: 500 };
  }
}
