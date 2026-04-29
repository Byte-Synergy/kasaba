"use server";

import { getDirectusClient } from "@/utils/directus";
import { readSingleton } from "@directus/sdk";

export async function getBanners() {
  const client = getDirectusClient();
  try {
    const rawResponse = await client.request(
      readSingleton("banners", {
        fields: [
          "main_blocks.item.*",
          "level_1.directus_files_id.id",
          "level_1.item.*",
          "level_2.directus_files_id.id",
          "level_2.item.*",
        ],
      }),
    );

    // Handle both { data: { ... } } and { ... } formats
    const response = (rawResponse as any).data || rawResponse;

    if (!response) {
      return { data: [], error: "No response data", status: 404 };
    }

    const adsArr: any[] = [];
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://davadmin.kasaba.uz";

    // Process main_blocks (M2A)
    (response.main_blocks || []).forEach((b: any, index: number) => {
      const block = b.item;
      if (!block) return;
      const fileId = block.file?.id || block.file;
      if (!fileId) return;

      adsArr.push({
        id: b.id || `main-${index}`,
        type: "full",
        url: block.link || null,
        file: {
          href: `${baseUrl}/assets/${fileId}`,
        },
      });
    });

    // Process level_1 (can be M2M or M2A)
    (response.level_1 || []).forEach((b: any, index: number) => {
      // Try M2A item first, then fallback to M2M directus_files_id
      const block = b.item;
      const fileId =
        block?.file?.id || block?.file || b.directus_files_id?.id || b.directus_files_id;

      if (!fileId) return;

      adsArr.push({
        id: b.id || `level1-${index}`,
        type: "hero1",
        url: block?.link || null,
        file: {
          href: `${baseUrl}/assets/${fileId}`,
        },
      });
    });

    // Process level_2 (can be M2M or M2A)
    (response.level_2 || []).forEach((b: any, index: number) => {
      const block = b.item;
      const fileId =
        block?.file?.id || block?.file || b.directus_files_id?.id || b.directus_files_id;

      if (!fileId) return;

      adsArr.push({
        id: b.id || `level2-${index}`,
        type: "hero2",
        url: block?.link || null,
        file: {
          href: `${baseUrl}/assets/${fileId}`,
        },
      });
    });
    console.log({ data: adsArr, error: null, status: 200 });

    return { data: adsArr, error: null, status: 200 };
  } catch (error) {
    console.error("Directus getBanners Error:", error);
    return { data: [], error, status: 500 };
  }
}
