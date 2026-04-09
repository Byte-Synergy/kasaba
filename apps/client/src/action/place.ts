"use server";

import { getDirectusClient } from "@/utils/directus";
import { readItems, readItem } from "@directus/sdk";

export async function getPlaces(query: any = { page: 1, limit: 100 }) {
  const client = getDirectusClient();
  const lang = query.filter?.languageCode || "uz-UZ";
  const nLang = normalizeLang(lang);

  try {
    const response = await client.request(
      readItems("interactive_areas", {
        fields: [
          "*",
          "translations.*",
          "employees.*",
          "employees.translations.*",
          "employees.image.*"
        ],
        filter: {
          status: { _eq: "published" }
        },
        deep: {
          translations: {
            _filter: { languages_code: { _eq: nLang } }
          }
        },
        limit: query.limit || 100,
        page: query.page || 1,
      })
    );

    const mapped = (response as any[]).map(item => mapArea(item, nLang));

    return { 
      data: mapped, 
      error: null, 
      status: 200 
    };
  } catch (error) {
    console.error("Directus getPlaces Error:", error);
    return { data: [], error, status: 500 };
  }
}

export async function getPlace(placeId: string, langSlug: string = "uz") {
    const client = getDirectusClient();
    const nLang = normalizeLang(langSlug);
    try {
        const response = await client.request(
            readItem("interactive_areas", placeId, {
                fields: [
                    "*",
                    "translations.*",
                    "employees.*",
                    "employees.translations.*",
                    "employees.image.*"
                ],
                deep: {
                   translations: {
                       _filter: { languages_code: { _eq: nLang } }
                   }
                }
            })
        );
        return { data: mapArea(response, nLang), error: null, status: 200 };
    } catch (error) {
        console.error("Directus getPlace Error:", error);
        return { data: null, error, status: 500 };
    }
}

function normalizeLang(lang: string) {
  const mapping: Record<string, string> = {
    "uz": "uz-UZ",
    "ru": "ru-RU",
    "en": "en-US",
    "uz-cyrl": "uz-Cyrl"
  };
  return mapping[lang] || lang;
}

function mapArea(item: any, lang: string) {
  const trans = item.translations?.find((t: any) => t.languages_code === lang) || item.translations?.[0];
  const chairman = item.employees?.[0]; // Usually one chairman per area
  const chairTrans = chairman?.translations?.find((t: any) => t.languages_code === lang) || chairman?.translations?.[0];

  const title = trans?.name || (item.translations?.[0]?.name) || `Area ${item.id}`;
  return {
    id: item.id,
    name: trans?.name || item.id.toString(),
    title: title,
    address: trans?.address || "",
    membersCount: item.members_count || 0,
    chairmanFullName: chairTrans?.full_name || "",
    phone: chairman?.phone_number || "",
    email: chairman?.email || "",
    chairmanPhoto: chairman?.image ? {
        href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${chairman.image.id || chairman.image}`
    } : null
  };
}
