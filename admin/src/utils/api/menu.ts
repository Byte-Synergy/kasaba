import { getSessionData } from "@/actions/session";

export const MenuApi = {
  createLink: async (data: {
    title: string;
    path: string;
    parentId: string;
  }) => {
    try {
      const token = await getSessionData();

      if (!token) {
        throw new Error("Autentifikatsiya tokeni topilmadi");
      }

      // API so'rovni yuborish
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/menus`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.title,
            href: data.path,
            parentId: data.parentId,
          }),
        },
      );

      // Javobni tekshirish
      // Javobni tekshirish
      if (!response.ok) {
        let errorMessage = `Menu yaratishda xatolik: ${response.status}`;
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
        return { success: true, message: "Menu muvaffaqiyatli yaratildi" };
      }
    } catch (error) {
      console.error("Menu yaratishda xatolik:", error);
      throw error;
    }
  },
  getLinks: async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/menus`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!res.ok) console.log("Menularni olishda xatolik.");
      return res.json();
    } catch (error) {
      console.log("Menularni olishda xatolik: ", error);
    }
  },
};
