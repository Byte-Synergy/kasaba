"use server";

import { getDirectusClient } from "@/utils/directus";
import { readItems } from "@directus/sdk";
import { MenuItem } from "@/types";

function normalizeLang(lang: string) {
  const mapping: Record<string, string> = {
    uz: "uz-Cyrl",
    "uz-uz": "uz-UZ",
    ru: "ru-RU",
    en: "en-US",
    "uz-cyrl": "uz-Cyrl",
  };
  return mapping[lang?.toLowerCase()] || lang;
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
      const trans = p.translations?.find(
        (t: any) => t.languages_code === nLang,
      );

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
      : {
          translations: {
            _and: [
              { slug: { _eq: p } },
              { languages_code: { _eq: nLang } }
            ]
          }
        };

    const items = await client.request(
      readItems("menus", {
        fields: [
          "*",
          "translations.*",
          "translations.content_blocks.*",
          "translations.content_blocks.item:block_richtexts.*",
          "translations.content_blocks.item:block_images.image.*",
          "translations.member_blocks.*",
          "translations.member_blocks.item:internal_employees.*",
          "translations.member_blocks.item:internal_employees.image.*",
          "translations.member_blocks.item:internal_employees.translations.*",
          "translations.document_blocks.*",
          "translations.document_blocks.item:block_documents.file.*",
        ],
        filter: {
          _and: [{ status: { _eq: "published" } }, filter],
        },
        limit: 1,
      }),
    );

    console.log("Directus getMenu Raw Items:", JSON.stringify(items, null, 2));

    if (!items || items.length === 0) {
      return { success: false, data: null, status: 404 };
    }

    const page = items[0];
    const trans = page.translations?.find(
      (t: any) => t.languages_code === nLang,
    );

    if (!trans) {
      return { success: false, data: null, status: 404 };
    }

    const content: any[] = [];

    // Add content blocks
    if (trans.content_blocks) {
      trans.content_blocks.forEach((b: any) => {
        if (b.collection === "block_richtexts" && b.item) {
          content.push({ type: "text", value: b.item.content });
        } else if (b.collection === "block_images" && b.item) {
          const image = b.item.image;
          content.push({
            type: "photo",
            fileId: image?.id,
            fileUrl: image?.id
              ? `${process.env.NEXT_PUBLIC_API_URL || "https://davadmin.kasaba.uz"}/assets/${image.id}`
              : null,
          });
        }
      });
    }

    // Add member blocks
    if (trans.member_blocks) {
      const members: any[] = [];
      trans.member_blocks.forEach((b: any) => {
        if (b.collection === "internal_employees" && b.item) {
          const emp = b.item;
          const empTrans =
            emp.translations?.find((et: any) => et.languages_code === nLang) ||
            emp.translations?.[0];
          members.push({
            fullName: empTrans?.full_name || "",
            position: empTrans?.position || "",
            phoneNumber: emp.phone_number,
            email: emp.email,
            fileId: emp.image?.id,
            href: emp.image
              ? `${process.env.NEXT_PUBLIC_API_URL || "https://davadmin.kasaba.uz"}/assets/${emp.image.id}`
              : null,
          });
        }
      });
      if (members.length > 0) {
        content.push({ type: "member", members });
      }
    }

    // Add document blocks
    if (trans.document_blocks) {
      const documents: any[] = [];
      trans.document_blocks.forEach((b: any) => {
        if (b.collection === "block_documents" && b.item) {
          const file = b.item.file;
          const fileId = typeof file === "string" ? file : file?.id;
          const fileName = typeof file === "object" ? file?.title : null;

          documents.push({
            fileId: fileId,
            fileUrl: fileId
              ? `${process.env.NEXT_PUBLIC_API_URL || "https://davadmin.kasaba.uz"}/assets/${fileId}`
              : null,
            name: fileName || trans.name || "Hujjat",
          });
        }
      });
      if (documents.length > 0) {
        content.push({ type: "document", documents });
      }
    }

    const normalizedData = {
      ...page,
      title: trans.name,
      slug: trans.slug,
      type: trans.type,
      newsType: trans.news_type,
      content: content,
    };

    return { success: true, data: normalizedData, status: 200 };
  } catch (error: any) {
    console.error("Directus getMenu Error:", error);
    return { success: false, data: null, error, status: 500 };
  }
}
