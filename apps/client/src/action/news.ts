"use server";

import { getDirectusClient } from "@/utils/directus";
import { readItems } from "@directus/sdk";

function normalizeLang(lang: string) {
  const mapping: Record<string, string> = {
    "uz": "uz-Cyrl",
    "uz-uz": "uz-UZ",
    "ru": "ru-RU",
    "en": "en-US",
    "uz-cyrl": "uz-Cyrl"
  };
  return mapping[lang?.toLowerCase()] || lang;
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

    const response = await client.request(
      readItems("news", {
        fields: [
          "*",
          "translations.*",
          "translations.thumbnail.*",
          "translations.blocks.*",
          "translations.blocks.item:block_richtexts.*",
        ],
        filter: filters,
        limit: query.limit || 10,
        page: query.page || 1,
        sort: ["-date_created"],
      })
    );

    const mapped = (response as any[]).map((item) => mapNewsItem(item, lang));

    return { 
      data: { data: mapped, total: mapped.length }, 
      error: null, 
      status: 200 
    };
  } catch (error: any) {
    console.error("Directus getNews Error:", error?.errors || error?.message || error);
    return { data: { data: [], total: 0 }, error, status: 500 };
  }
}

export async function getNewsBySlug(slug: string, rawLang: string = "uz") {
  const client = getDirectusClient();
  const lang = normalizeLang(rawLang);

  try {
    const response = await client.request(
      readItems("news", {
        fields: [
          "*",
          "translations.*",
          "translations.thumbnail.*",
          "translations.blocks.*",
          "translations.blocks.item:block_richtexts.*",
        ],
        filter: {
          translations: {
            slug: { _eq: slug },
          },
          status: { _eq: "published" },
        },
        limit: 1,
      })
    );

    const item = (response as any[])[0];
    if (!item) return { data: null, error: "Not Found", status: 404 };

    return { data: mapNewsItem(item, lang), error: null, status: 200 };
  } catch (error) {
    console.error("Directus getNewsBySlug Error:", error);
    return { data: null, error, status: 500 };
  }
}

function mapNewsItem(item: any, lang: string) {
  const translation = item.translations?.find((t: any) => t.languages_code === lang) || item.translations?.[0];
  
  // Thumbnail resolving (it's in the translation record)
  const thumbnail = translation?.thumbnail;
  const thumbUrl = thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}/assets/${thumbnail.id || thumbnail}` : null;

  // Blocks mapping (nested in translation)
  const content: any[] = [];
  const blocks = translation?.blocks || [];
  for (const b of blocks) {
    if (b.collection === "block_richtexts") {
      const bContent = b.item?.content;
      if (bContent) {
        content.push({ type: "text", value: bContent });

        // Extract YouTube ID if present in iframe
        const iframeMatch = typeof bContent === "string" ? bContent.match(/<iframe.*?src=["'](.*?)["']/) : null;
        if (iframeMatch && iframeMatch[1]) {
           content.push({ type: "video-url", value: iframeMatch[1] });
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
    languageCode: translation?.languages_code || lang,
    isFallback: !item.translations?.some((t: any) => t.languages_code === lang),
    authorId: item.user_created || null,
    tags: item.categories?.map((cat: any) => {
      const catTrans = cat.translations?.find((t: any) => t.languages_code === lang) || cat.translations?.[0];
      return catTrans?.name || "";
    }).filter(Boolean) || [],
    files: [
      ...(thumbUrl ? [{
        href: thumbUrl,
        name: thumbnail?.filename_download || "thumbnail",
        mimeType: thumbnail?.type || "image/jpeg",
        extension: thumbnail?.filename_download?.split('.').pop() || "jpg"
      }] : []),
      ...content.filter(c => c.type === "photo").map(c => ({
          href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${c.fileId}`,
          name: c.value || "image",
          mimeType: "image/jpeg",
          extension: "jpg"
      }))
    ],
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
      console.error("Directus getNewsCategories Error:", error);
      return { data: [], error, status: 500 };
    }
}
