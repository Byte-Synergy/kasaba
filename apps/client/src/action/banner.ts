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
      })
    );

    // Handle both { data: { ... } } and { ... } formats
    const response = (rawResponse as any).data || rawResponse;

    if (!response) {
      return { data: [], error: "No response data", status: 404 };
    }

    const adsArr: any[] = [];
    
    // Process main_blocks (M2A)
    (response.main_blocks || []).forEach((b: any) => {
        const block = b.item;
        if (!block || !block.file) return;
        adsArr.push({
            type: "full",
            url: block.link || null,
            file: {
                href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${block.file}`
            }
        });
    });

    // Process level_1 (can be M2M or M2A)
    (response.level_1 || []).forEach((b: any) => {
        // Try M2A item first, then fallback to M2M directus_files_id
        const block = b.item;
        const fileId = block?.file || b.directus_files_id?.id || b.directus_files_id;
        
        if (!fileId) return;

        adsArr.push({
            type: "hero1",
            url: block?.link || null,
            file: {
                href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${fileId}`
            }
        });
    });

    // Process level_2 (can be M2M or M2A)
    (response.level_2 || []).forEach((b: any) => {
        const block = b.item;
        const fileId = block?.file || b.directus_files_id?.id || b.directus_files_id;
        
        if (!fileId) return;

        adsArr.push({
            type: "hero2",
            url: block?.link || null,
            file: {
                href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${fileId}`
            }
        });
    });

    return { data: adsArr, error: null, status: 200 };
  } catch (error) {
    console.error("Directus getBanners Error:", error);
    return { data: [], error, status: 500 };
  }
}
