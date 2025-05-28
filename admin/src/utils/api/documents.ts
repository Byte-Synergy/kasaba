import { getSessionData } from "@/actions/session";

export type DocumentFilterType = {
  filter: {
    categories: string[];
  };
};

export const DocumentsApi = {
  getByCategoriesDocuments: async function () {
    // const { filter } = await filters;
    try {
      const params = new URLSearchParams();
      params.append("filter", "");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/documents?${params.toString()}`,
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
  getDocs: async function () {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/documents`,
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

  createDocs: async (DocumentData: any): Promise<any> => {
    try {
      const token = await getSessionData();

      if (!token) {
        throw new Error("Autentifikatsiya tokeni topilmadi");
      }

      // FormData obyektini yaratish
      const formData = new FormData();

      formData.append("name", DocumentData.name || "");
      formData.append("title", DocumentData.title || "");

      // Tags (kategoriyalar)
      if (Array.isArray(DocumentData.categories)) {
        formData.append("categories", JSON.stringify(DocumentData.categories));
      }

      // Muhim yangilik holati - isTop nomini ishlatish
      // formData.append("isTop", String(DocumentData.isTop));

      formData.append("file", DocumentData.file);
      console.log(DocumentData);

      if (Array.isArray(DocumentData.content)) {
        // Har bir content elementini moslashtirib olish
        const checkedContent = DocumentData.content.map((item: any) => {
          return {
            type: item.type || "",
            // value - string yoki string massivi bo'lishi mumkin
            value: typeof item.value === "string" ? item.value : "",
          };
        });

        // Tozalangan contentni stringify qilish
        formData.append("content", JSON.stringify(checkedContent));
      }

      // API so'rovni yuborish
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/documents`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      // Javobni tekshirish
      // Javobni tekshirish
      if (!response.ok) {
        let errorMessage = `Xujjat yaratishda xatolik: ${response.status}`;
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
        return { success: true, message: "Xujjat muvaffaqiyatli yaratildi" };
      }
    } catch (error) {
      console.error("Xujjat yaratishda xatolik:", error);
      throw error;
    }
  },
};
