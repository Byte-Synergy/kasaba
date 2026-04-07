"use server";

import { getDirectusClient } from "@/utils/directus";
import { readItems } from "@directus/sdk";

export async function getLanguages() {
  const client = getDirectusClient();
  try {
    const response = await client.request(
      readItems("languages" as any, {
        fields: ["*"],
      })
    );

    // Map backend codes to frontend slugs for compatibility
    // uz-UZ -> uz, ru-RU -> ru, en-US -> en, uz-Cyrl -> uz-cyrl
    const mapped = (response as any[]).map((l: any) => ({
      name: l.name,
      code: l.code,
      slug: mapToSlug(l.code)
    }));

    return { data: mapped, error: null, status: 200 };
  } catch (error) {
    console.error("Directus getLanguages Error:", error);
    return { data: [], error, status: 500 };
  }
}

function mapToSlug(code: string) {
  const c = code.toLowerCase();
  if (c === "uz-uz" || c === "uz") return "uz";
  if (c === "ru-ru" || c === "ru") return "ru";
  if (c === "en-us" || c === "en") return "en";
  if (c === "uz-cyrl") return "uz-cyrl";
  return c;
}
