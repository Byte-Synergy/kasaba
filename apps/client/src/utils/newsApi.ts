import { NewsFilter } from "@/types";
import { getNews, getNewsBySlug } from "@/action/news";

export const NewsApi = {
  getNewsList: async (filters: NewsFilter = {}) => {
    try {
      const { data } = await getNews(filters);
      return data; // returns { data: mappedData, total: 100 }
    } catch (error) {
      console.error("Yangiliklar olishda xatolik:", error);
      throw error;
    }
  },

  getSingleNews: async (slug: string, lang: string = "uz") => {
    try {
      const { data } = await getNewsBySlug(slug, lang);
      return data;
    } catch (error) {
      console.error("Bitta yangilik olishda xatolik:", error);
      throw error;
    }
  },
};
