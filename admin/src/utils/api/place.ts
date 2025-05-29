import { getSessionData } from "@/actions/session";
import { WithOut } from "@/types";
import { AppType } from "@/types/server";

export const PlaceApi = {
  create: async (
    data: WithOut<
      AppType["~Routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["post"]["body"],
      "chairmanPhoto"
    > & { chairmanPhoto: File },
    placeId: number,
  ) => {
    try {
      const token = await getSessionData();

      if (!token) {
        throw new Error("Autentifikatsiya tokeni topilmadi");
      }

      const formData = new FormData();

      formData.append("address", data.address);
      formData.append("chairmanFullName", data.chairmanFullName);
      formData.append("chairmanPhoto", data.chairmanPhoto);

      if (data.email) formData.append("email", data.email);
      if (data.phoneNumber) formData.append("phoneNumber", data.phoneNumber);
      formData.append("membersCount", data.membersCount.toString());
      if (data.workingTime) formData.append("workingTime", data.workingTime);

      // API so'rovni yuborish
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rest/places/${placeId}/interactive_areas`,
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
        let errorMessage = `Interaktiv hudud yaratishda xatolik: ${response.status}`;
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
          message: "Interaktiv hudud muvaffaqiyatli yaratildi",
        };
      }
    } catch (error) {
      console.error("Interaktiv hudud yaratishda xatolik:", error);
      throw error;
    }
  },
};
