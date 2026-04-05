"use server";

import { getDirectusClient } from "@/utils/directus";
import { readItems } from "@directus/sdk";
import { NewsDataType } from "@/types";

function normalizeLang(lang: string) {
  const mapping: Record<string, string> = {
    "uz": "uz",
    "ru": "ru",
    "en": "en",
    "uz-cyrl": "uz-cyrl"
  };
  return mapping[lang] || lang;
}

export async function getNews(query: any = { page: 1, limit: 10 }) {
  const client = getDirectusClient();
  const rawLang = query.filter?.lang || "uz";
  const lang = normalizeLang(rawLang);

  try {
    const filters: any = {
      status: { _eq: "published" },
      translations: {
        languages_code: { _eq: lang },
      },
    };

    if (query.filter?.isTop !== undefined) {
      filters.is_top = { _eq: query.filter.isTop };
    }

    if (query.filter?.type) {
      const typeArr = Array.isArray(query.filter.type) ? query.filter.type : [query.filter.type];
      filters.type = { _in: typeArr };
    }

    if (query.filter?.tags) {
      const tagsArr = Array.isArray(query.filter.tags) ? query.filter.tags : [query.filter.tags];
      filters.categories = {
        translations: {
          name: { _in: tagsArr }
        }
      };
    }

    const response = await client.request(
      readItems("news", {
        fields: [
          "*",
          "translations.*",
          "thumbnail.*",
          "categories.translations.*",
          "blocks.collection",
          "blocks.item:block_richtext.translations.*",
          "blocks.item:block_photo.file.*",
        ],
        filter: filters,
        deep: {
          translations: {
            _filter: { languages_code: { _eq: lang } },
          },
          categories: {
            translations: {
              _filter: { languages_code: { _eq: lang } },
            },
          },
        },
        search: query.filter?.q || undefined,
        page: query.page || 1,
        limit: query.limit || 10,
        sort: ["-published_at"],
      })
    );

    const mappedData = (response as any[]).map((item) => mapNewsItem(item, lang));

    return { 
      data: { data: mappedData, total: 100 }, 
      error: null, 
      status: 200 
    };
  } catch (error) {
    console.error("Directus getNews Error:", error);
    return { data: { data: [], total: 0 }, error, status: 500 };
  }
}

export async function getNewsBySlug(slug: string, lang: string = "uz") {
  const client = getDirectusClient();
  const nLang = normalizeLang(lang);
  try {
    const response = await client.request(
      readItems("news", {
        fields: [
          "*",
          "translations.*",
          "thumbnail.*",
          "categories.translations.*",
          "blocks.collection",
          "blocks.item:block_richtext.translations.*",
        ],
        filter: {
          translations: {
            slug: { _eq: slug },
            languages_code: { _eq: nLang },
          },
          status: { _eq: "published" },
        },
        deep: {
          translations: {
            _filter: { languages_code: { _eq: nLang } },
          },
          categories: {
            translations: {
              _filter: { languages_code: { _eq: nLang } },
            },
          },
        },
        limit: 1,
      })
    );

    const item = (response as any[])[0];
    if (!item) return { data: null, error: "Not Found", status: 404 };

    return { data: mapNewsItem(item, nLang), error: null, status: 200 };
  } catch (error) {
    console.error("Directus getNewsBySlug Error:", error);
    return { data: null, error, status: 500 };
  }
}

function mapNewsItem(item: any, lang: string) {
  const translation =
    item.translations?.find((t: any) => t.languages_code === lang) ||
    item.translations?.[0];

  // Map blocks to content array for compatibility
  const content: any[] = [];
  if (item.blocks) {
    for (const b of item.blocks) {
      if (b.collection === "block_richtext") {
        const bTrans = b.item?.translations?.find((t: any) => t.languages_code === lang) || b.item?.translations?.[0];
        if (bTrans?.content) {
          content.push({ type: "text", value: bTrans.content });
        }
      }
    }
  }

  return {
    id: item.id,
    isTop: item.is_top,
    type: item.type,
    createdAt: item.published_at || item.date_created,
    title: translation?.title || "",
    description: translation?.description || "",
    path: translation?.slug || "",
    languageCode: lang,
    authorId: item.user_created || null,
    tags: item.categories?.map((cat: any) => {
      const catTrans = cat.translations?.find((t: any) => t.languages_code === lang) || cat.translations?.[0];
      return catTrans?.name || "";
    }).filter(Boolean) || [],
    files: item.thumbnail ? [{
      href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${item.thumbnail.id || item.thumbnail}`,
      name: item.thumbnail.filename_download || "thumbnail",
      mimeType: item.thumbnail.type || "image/jpeg",
      extension: (item.thumbnail.filename_download || "").split(".").pop() || "jpg"
    }] : [],
    content: content,
  };
}

export async function getNewsCategories() {
  const client = getDirectusClient();
  try {
    const response = await client.request(
      readItems("news_categories" as any, {
        fields: ["*", { translations: ["*"] }],
      })
    );
    return { data: response, error: null, status: 200 };
  } catch (error) {
    return { data: null, error, status: 500 };
  }
}
