import { NewsFilter } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const NewsApi = {
  getNewsList: async (filters: NewsFilter = {}) => {
    const { page, limit, filter } = await filters;
    try {
      // URL parametrlarini yaratish
      const params = new URLSearchParams();
      params.append("page", page?.toString() || "1");
      params.append("limit", limit?.toString() || "10");
      params.append("filter", JSON.stringify({ ...filter }));

      const response = await fetch(
        `${API_BASE_URL}/api/rest/news?${params.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.json();
    } catch (error) {
      console.error("Yangiliklar olishda xatolik:", error);
      throw error;
    }
  },

  getSingleNews: async (title: string) => {
    const response = await fetch(`${API_BASE_URL}/api/rest/news/${title}`);

    // Agar response JSON bo'lmasa
    if (response.headers.get("content-type")?.includes("text/plain")) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    // JSON parse qilish
    try {
      return await response.json();
    } catch (parseError) {
      // JSON parse qilishda xatolik
      const text = await response.text();
      console.error("Parse xatosi:", text);
      throw new Error(`JSON parse qilishda xatolik: ${text}`);
    }
  },
};
