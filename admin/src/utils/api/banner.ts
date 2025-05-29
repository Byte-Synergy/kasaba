import { getSessionData } from "@/actions/session";
import { AppType } from "@/types/server";

export const BannerApi = {
  create: async (
    data: AppType["~Routes"]["api"]["rest"]["banner"]["post"]["body"],
  ) => {
    try {
      const token = await getSessionData();

      if (!token) {
        throw new Error("Autentifikatsiya tokeni topilmadi");
      }

      const formData = new FormData();

      console.log(data);

      formData.append("url", data.url);
      formData.append("file", data.file);
      formData.append("type", data.type);

      // API so'rovni yuborish
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/banner`,
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
        let errorMessage = `Banner yaratishda xatolik: ${response.status}`;
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
        return {
          success: true,
          message: "Banner muvaffaqiyatli yaratildi",
        };
      }
    } catch (error) {
      console.error("Banner yaratishda xatolik:", error);
      throw error;
    }
  },
};
