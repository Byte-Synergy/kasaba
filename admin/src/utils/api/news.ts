import { getSessionData } from "@/actions/session";
import { ContentType } from "@/types/content";

// API URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Yangiliklar uchun filter parametrlari
interface NewsFilter {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  startDate?: string;
  endDate?: string;
  filter?: {
    type?: string[];
    isTop?: boolean;
    isArchive?: boolean;
  };
  tags?: string[];
  sortBy?: "date" | "title" | "views";
  sortOrder?: "asc" | "desc";
  languageCode?: string;
}

export const NewsApi = {
  createNews: async (newsData: {
    title: string;
    description: string;
    categories: string[];
    type: string;
    isTop: boolean;
    languageCode: string;
    content: ContentType[];
    files: File[] | null;
  }): Promise<any> => {
    try {
      const token = await getSessionData();
      console.log(newsData);

      if (!token) {
        throw new Error("Autentifikatsiya tokeni topilmadi");
      }

      // FormData obyektini yaratish
      const formData = new FormData();

      
      if (newsData.type) formData.append("type", newsData.type);
      
      if (newsData.title) formData.append("title", newsData.title);
      
      if (newsData.description) formData.append("description", newsData.description);
      
      if (newsData.languageCode)  formData.append("languageCode", newsData.languageCode);

      if(newsData.categories) formData.append("tags", JSON.stringify(newsData.categories || []));

      if (newsData.isTop) formData.append("isTop", String(newsData.isTop));

      // Fayllar
      if (Array.isArray(newsData.files)) {
        newsData.files.forEach(async (file) => {
          return formData.append("files", file);
        });
      }

      if (Array.isArray(newsData.content)) {
        formData.append("content", JSON.stringify(newsData.content));
      }

      // API so'rovni yuborish
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/news`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      // Javobni tekshirish
      if (!response.ok) {
        let errorMessage = `Yangilik yaratishda xatolik: ${response.status}`;
        throw new Error(errorMessage);
      }

      try {
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          return await response.json();
        } else {
          // JSON emas, tekst qaytaradi
          const textResponse = await response.text();
          console.log("Server javobi (text):", textResponse);

          // Matn ko'rinishidagi javobni ishlov berish
          return { success: true, message: textResponse };
        }
      } catch (error) {
        console.error("Javobni parse qilishda xatolik:", error);
        return { success: true, message: "Yangilik muvaffaqiyatli yaratildi" };
      }
    } catch (error) {
      console.error("Yangilik yaratishda xatolik:", error);
      throw error;
    }
  },
  updateNews: async (
    path: string,
    newsData: {
      title: string;
      description: string;
      categories: string[];
      type: string;
      isTop: boolean;
      languageCode: string;
      content: ContentType[];
      files: File[] | null;
    },
  ): Promise<any> => {
    try {
      const token = await getSessionData();
      console.log(newsData);

      if (!token) {
        throw new Error("Autentifikatsiya tokeni topilmadi");
      }

      // FormData obyektini yaratish
      const formData = new FormData();

      if (newsData.title)
        if (newsData.title) formData.append("title", newsData.title);

      if (newsData.description)
        formData.append("description", newsData.description);

      if (newsData.languageCode)
        formData.append("languageCode", newsData.languageCode);

      if (newsData.categories)
        formData.append("tags", JSON.stringify(newsData.categories));

      if (newsData.isTop) formData.append("isTop", String(newsData.isTop));

      if (Array.isArray(newsData.files)) {
        newsData.files.forEach(async (file: File, index: number) => {
          return formData.append("files", file);
        });
      }

      if (Array.isArray(newsData.content)) {
        formData.append("content", JSON.stringify(newsData.content));
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/news/${path}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      if (!response.ok) {
        let errorMessage = `Yangilik yaratishda xatolik: ${response.status}`;
        throw new Error(errorMessage);
      }

      try {
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          return await response.json();
        } else {
          // JSON emas, tekst qaytaradi
          const textResponse = await response.text();
          console.log("Server javobi (text):", textResponse);

          // Matn ko'rinishidagi javobni ishlov berish
          return { success: true, message: textResponse };
        }
      } catch (error) {
        console.error("Javobni parse qilishda xatolik:", error);
        return { success: true, message: "Yangilik muvaffaqiyatli yaratildi" };
      }
    } catch (error) {
      console.error("Yangilik yaratishda xatolik:", error);
      throw error;
    }
  },

  // get news list
  getNewsList: async (filters: NewsFilter = {}) => {
    const { page, limit, filter } = await filters;
    try {
      // URL parametrlarini yaratish
      const params = new URLSearchParams();
      params.append("page", page?.toString() || "1");
      params.append("limit", limit?.toString() || "10");
      params.append("filter", JSON.stringify({ ...filter }));

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/news?${params.toString()}`,
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
    const response = await fetch(`${API_BASE_URL}/news/${title}`);

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
