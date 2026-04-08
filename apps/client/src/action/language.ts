"use server";

import { i18n } from "@/configs/i18n";

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
    const mapped = (response as any[]).map((l: any) => {
      const code = l.code;
      // Find the case-insensitive match in i18n.locales
      const slug = i18n.locales.find(
        (loc: string) => loc.toLowerCase() === code.toLowerCase()
      ) || code;
      
      return {
        name: l.name,
        code: code,
        slug: slug
      };
    });

    return { data: mapped, error: null, status: 200 };
  } catch (error) {
    console.error("Directus getLanguages Error:", error);
    return { data: [], error, status: 500 };
  }
}
