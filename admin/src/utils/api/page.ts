import { getSessionData } from "@/actions/session";
import { AppType } from "@/types/server";

export const PageApi = {
  createMenu: async (
    data: AppType["_routes"]["api"]["rest"]["menus"]["post"]["body"],
  ): Promise<any> => {
    try {
      const token = await getSessionData();

      if (!token) {
        throw new Error("Autentifikatsiya tokeni topilmadi");
      }

      // FormData obyektini yaratish
      const formData = new FormData();

      if (data.type) formData.append("type", data.type);
      if (data.languageCode) formData.append("languageCode", data.languageCode);

      formData.append("name", data.name || "");
      formData.append("isPin", String(data.isPin || false));
      if (data.parentId) formData.append("parentId", String(data.parentId));

      // Fayllar
      if (Array.isArray(data.files)) {
        data.files.forEach(async (file: File, index: number) => {
          return formData.append("files", file);
        });
      }

      if (Array.isArray(data.content)) {
        formData.append("content", JSON.stringify(data.content));
      }

      // API so'rovni yuborish
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/menus`,
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
        let errorMessage = `Sahifa yaratishda xatolik: ${response.status}`;
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
        return { success: true, message: "Sahifa muvaffaqiyatli yaratildi" };
      }
    } catch (error) {
      console.error("Sahifa yaratishda xatolik:", error);
      throw error;
    }
  },
  updateMenu: async (
    menuId: number,
    data: AppType["_routes"]["api"]["rest"]["menus"][":menuId"]["put"]["body"],
  ): Promise<any> => {
    try {
      const token = await getSessionData();

      if (!token) {
        throw new Error("Autentifikatsiya tokeni topilmadi");
      }

      // FormData obyektini yaratish
      const formData = new FormData();

      if (data.type) formData.append("type", data.type);
      if (data.name) formData.append("name", data.name);
      if (data.parentId) formData.append("parentId", data.parentId.toString());
      if (data.isPin) formData.append("isPin", String(data.isPin || false));
      if (data.languageCode) formData.append("languageCode", data.languageCode);

      if (Array.isArray(data.files)) {
        data.files.forEach(async (file: File, index: number) => {
          return formData.append("files", file);
        });
      }

      if (Array.isArray(data.content)) {
        formData.append("content", JSON.stringify(data.content));
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/menus/${menuId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      // Javobni tekshirish
      // Javobni tekshirish
      if (!response.ok) {
        let errorMessage = `Sahifa yaratishda xatolik: ${response.status}`;
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
        return { success: true, message: "Sahifa muvaffaqiyatli yaratildi" };
      }
    } catch (error) {
      console.error("Sahifa yaratishda xatolik:", error);
      throw error;
    }
  },
};
