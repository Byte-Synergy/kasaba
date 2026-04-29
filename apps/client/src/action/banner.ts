"use server";

import { getDirectusClient } from "@/utils/directus";
import { readSingleton } from "@directus/sdk";

export async function getBanners() {
  const client = getDirectusClient();
  try {
    const response = await client.request(
      readSingleton("banners", {
        fields: [
          "main_blocks.item.*",
          "level_1.item.*",
          "level_2.item.*",
        ],
      })
    );

    // Map to the format the frontend expects (array of objects with file.href)
    const adsArr: any[] = [];
    
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

    (response.level_1 || []).forEach((b: any) => {
        const block = b.item;
        if (!block || !block.file) return;
        adsArr.push({
            type: "hero1",
            url: block.link || null,
            file: {
                href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${block.file}`
            }
        });
    });

    (response.level_2 || []).forEach((b: any) => {
        const block = b.item;
        if (!block || !block.file) return;
        adsArr.push({
            type: "hero2",
            url: block.link || null,
            file: {
                href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${block.file}`
            }
        });
    });

    return { data: adsArr, error: null, status: 200 };
  } catch (error) {
    console.error("Directus getBanners Error:", error);
    return { data: [], error, status: 500 };
  }
}
