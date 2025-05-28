import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { generateImageFileName } from "@/utils/generateFileName";

// Kontent elementi turi (matn, rasm, video va boshqalar)
export interface ContentItem {
  id: string;
  type: "text" | "image" | "video" | "quote" | "gallery";
  value: string | File | File[] | string[];
  metadata?: Record<string, any>;
}

// Yangilik modeli
export interface News {
  id: string;
  type: string | null;
  title: string | null;
  description: string | null;
  categories: string[];
  is_top: boolean;
  content: ContentItem[];
  files: File[];
  created_at: string;
  updated_at: string;
}

// Holati va metodlari
interface NewsStore {
  currentNews: News | null;
  savedNews: News[];
  // Actions
  createNewPost: () => void;
  updateTitle: (title: string) => void;
  updateDescription: (description: string) => void;
  updateType: (type: string) => void;
  addCategories: (categories: string[]) => void;
  removeCategory: (category: string) => void;
  addArchive: () => void;
  removeArchive: () => void;
  addContent: (contentItem: Omit<ContentItem, "id">) => void;
  updateContent: (
    id: string,
    updatedContent: Partial<Omit<ContentItem, "id">>,
  ) => void;
  removeContent: (id: string) => void;
  saveNews: () => void;
  loadNews: (id: string) => void;
  resetCurrentNews: () => void;
}

export const useNewsStore = create<NewsStore>(
  // persist(
  (set, get) => ({
    currentNews: null,
    savedNews: [],
    // Yangi yangilik yaratish
    createNewPost: () => {
      const existingNews = get().currentNews;
      if (existingNews && existingNews.id) {
        return existingNews;
      }
      const newNews: News = {
        id: uuidv4(),
        title: null,
        description: null,
        categories: [],
        type: null,
        is_top: false,
        files: [],
        content: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      set({ currentNews: newNews });
      return newNews;
    },

    // Sarlavhani yangilash
    updateTitle: (title: string) => {
      const { currentNews } = get();
      if (!currentNews) return;

      set({
        currentNews: {
          ...currentNews,
          title,
          updated_at: new Date().toISOString(),
        },
      });
    },

    // Type ni yangilash
    updateType: (type: string) => {
      const { currentNews } = get();
      if (!currentNews) return;

      set({
        currentNews: {
          ...currentNews,
          type,
          updated_at: new Date().toISOString(),
        },
      });
    },

    // Tavsifni yangilash
    updateDescription: (description: string) => {
      const { currentNews } = get();
      if (!currentNews) return;

      set({
        currentNews: {
          ...currentNews,
          description,
          updated_at: new Date().toISOString(),
        },
      });
    },

    // Kategoriyalar qo'shish
    addCategories: (categories: string[]) => {
      const { currentNews } = get();
      if (!currentNews) return;

      // Duplikat kategoriyalarni olib tashlash
      const uniqueCategories = [
        ...new Set([...currentNews.categories, ...categories]),
      ];

      set({
        currentNews: {
          ...currentNews,
          categories: uniqueCategories,
          updated_at: new Date().toISOString(),
        },
      });
    },

    // Kategoriyani olib tashlash
    removeCategory: (category: string) => {
      const { currentNews } = get();
      if (!currentNews) return;

      set({
        currentNews: {
          ...currentNews,
          categories: currentNews.categories.filter((c) => c !== category),
          updated_at: new Date().toISOString(),
        },
      });
    },

    // Arxiv holatini o'zgartirish
    addArchive: () => {
      const { currentNews } = get();
      if (!currentNews) return;

      set({
        currentNews: {
          ...currentNews,
          is_top: true,
          updated_at: new Date().toISOString(),
        },
      });
    },

    removeArchive: () => {
      const { currentNews } = get();
      if (!currentNews) return;

      set({
        currentNews: {
          ...currentNews,
          is_top: false,
          updated_at: new Date().toISOString(),
        },
      });
    },

    addContent: (contentItem: Omit<ContentItem, "id">) => {
      const { currentNews } = get();
      if (!currentNews) return;

      // Multimedia tipi bo'lsa
      if (contentItem.type === "image" || contentItem.type === "gallery") {
        // Agar contentItem.value File objekti bo'lsa
        if (contentItem.value && contentItem.value instanceof File) {
          // Unikal nom generatsiya qilish
          const generatedFileName = generateImageFileName(
            contentItem.value.name,
          );

          // Yangi File objektini yaratish
          const newFile = new File([contentItem.value], generatedFileName, {
            type: contentItem.value.type,
          });

          const newContent: ContentItem = {
            id: uuidv4(),
            ...contentItem,
            value: generatedFileName, // Generatsiya qilingan nom
          };

          // Files massiviga faylni qo'shish
          const updatedFiles = [...(currentNews.files || []), newFile];

          set({
            currentNews: {
              ...currentNews,
              content: [...currentNews.content, newContent],
              files: updatedFiles,
              updated_at: new Date().toISOString(),
            },
          });

          return newContent.id;
        }
      }

      // Agar multimedia fayl bo'lmasa, standart content qo'shish
      const newContent: ContentItem = {
        id: uuidv4(),
        ...contentItem,
      };

      set({
        currentNews: {
          ...currentNews,
          content: [...currentNews.content, newContent],
          updated_at: new Date().toISOString(),
        },
      });

      return newContent.id;
    },

    // Contentni yangilash metodi
    updateContent: (
      id: string,
      updatedContent: Partial<Omit<ContentItem, "id">>,
    ) => {
      const { currentNews } = get();
      if (!currentNews) return;

      // Eskiy content topish
      const oldContent = currentNews.content.find((item) => item.id === id);
      if (!oldContent) return;

      // Multimedia tiplari uchun maxsus ishlov berish
      if (oldContent.type === "image" || oldContent.type === "gallery") {
        // Agar yangi qiymat File bo'lsa
        if (updatedContent.value && updatedContent.value instanceof File) {
          // Unikal nom generatsiya qilish
          const generatedFileName = generateImageFileName(
            updatedContent.value.name,
          );

          // Yangi File objektini yaratish
          const newFile = new File([updatedContent.value], generatedFileName, {
            type: updatedContent.value.type,
          });
          // Eski faylni o'chirish
          const updatedFiles = currentNews.files.filter(
            (file) => file.name !== generatedFileName,
          );
          // Yangi faylni qo'shish
          updatedFiles.push(newFile);

          set({
            currentNews: {
              ...currentNews,
              content: currentNews.content.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      ...updatedContent,
                      value: generatedFileName,
                    }
                  : item,
              ),
              files: [...updatedFiles],
              updated_at: new Date().toISOString(),
            },
          });

          return;
        }
      }

      // Adi content yangilash
      set({
        currentNews: {
          ...currentNews,
          content: currentNews.content.map((item: ContentItem) =>
            item.id === id ? { ...item, ...updatedContent } : item,
          ),
          updated_at: new Date().toISOString(),
        },
      });
    },

    // Kontentni o'chirish metodini yangilash
    removeContent: (id: string) => {
      const { currentNews } = get();
      if (!currentNews) return;

      // Ushbu item'ni topish
      const contentToRemove = currentNews.content.find(
        (item) => item.id === id,
      );
      if (!contentToRemove) return;
      let updatedFiles = [...currentNews.files];
      if (!contentToRemove.value) {
        set({
          currentNews: {
            ...currentNews,
            content: currentNews.content.filter(
              (item: ContentItem) => item.id !== id,
            ),
            updated_at: new Date().toISOString(),
          },
        });
      }
      if (
        contentToRemove.type === "image" ||
        contentToRemove.type === "gallery"
      ) {
        updatedFiles = updatedFiles.filter(
          (file) => file.name !== contentToRemove.value,
        );
      }

      set({
        currentNews: {
          ...currentNews,
          content: currentNews.content.filter(
            (item: ContentItem) => item.id !== id,
          ),
          files: updatedFiles,
          updated_at: new Date().toISOString(),
        },
      });
    },

    // Yangilikni saqlash
    saveNews: () => {
      const { currentNews, savedNews } = get();
      if (!currentNews) return;

      // Sarlavha talab qilinadi
      if (!currentNews.title) {
        throw new Error("Yangilik sarlavhasi bo'sh bo'lishi mumkin emas");
      }

      const updatedNews = {
        ...currentNews,
        updated_at: new Date().toISOString(),
      };

      // Mavjud yangilikni yangilash yoki yangi yangilik qo'shish
      const updatedNewsList = savedNews.some(
        (news) => news.id === currentNews.id,
      )
        ? savedNews.map((news) =>
            news.id === currentNews.id ? updatedNews : news,
          )
        : [...savedNews, updatedNews];

      set({
        savedNews: updatedNewsList,
        currentNews: updatedNews,
      });

      return updatedNews.id;
    },

    // Saqlangan yangilikni yuklash
    loadNews: (id: string) => {
      const { savedNews } = get();
      const newsToLoad = savedNews.find((news) => news.id === id);

      if (newsToLoad) {
        set({ currentNews: { ...newsToLoad } });
      }
    },

    // Joriy yangilikni tozalash
    resetCurrentNews: () => {
      set({ currentNews: null });
    },
  }),
  // {
  //   name: "news-storage", // localStorage nomi
  //   storage: createJSONStorage(() => localStorage),
  //   partialize: (state) => {
  //     const currentNews = state.currentNews;

  //     // Agar currentNews null bo'lmasa, files bilan birga saqlaymiz
  //     if (!currentNews) return { currentNews: null };

  //     return {
  //       currentNews: {
  //         ...currentNews,
  //         files: currentNews.files || [], // Files bo'sh bo'lsa, bo'sh massiv
  //       },
  //     };
  //   },
  // }
  // )
);
