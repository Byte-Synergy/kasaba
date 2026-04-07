"use server";

import { getDirectusClient } from "@/utils/directus";
import { readSingleton } from "@directus/sdk";

export async function getBanners() {
  const client = getDirectusClient();
  try {
    const response = await client.request(
      readSingleton("banners", {
        fields: [
          "main_banners.directus_files_id",
          "level_1_banners.directus_files_id",
          "level_2_banners.directus_files_id",
        ],
      })
    );

    // Map to the format the frontend expects (array of objects with file.href)
    const adsArr: any[] = [];
    
    (response.main_banners || []).forEach((b: any) => {
        if (!b.directus_files_id) return;
        adsArr.push({
            type: "full",
            url: "#",
            file: {
                href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${b.directus_files_id.id || b.directus_files_id}`
            }
        });
    });

    (response.level_1_banners || []).forEach((b: any) => {
        if (!b.directus_files_id) return;
        adsArr.push({
            type: "hero1",
            url: "#",
            file: {
                href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${b.directus_files_id.id || b.directus_files_id}`
            }
        });
    });

    (response.level_2_banners || []).forEach((b: any) => {
        if (!b.directus_files_id) return;
        adsArr.push({
            type: "hero2",
            url: "#",
            file: {
                href: `${process.env.NEXT_PUBLIC_API_URL}/assets/${b.directus_files_id.id || b.directus_files_id}`
            }
        });
    });

    return { data: adsArr, error: null, status: 200 };
  } catch (error) {
    console.error("Directus getBanners Error:", error);
    return { data: [], error, status: 500 };
  }
}
