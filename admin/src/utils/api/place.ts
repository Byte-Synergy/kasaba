import { getSessionData } from "@/actions/session";
import { WithOut } from "@/types";
import { AppType } from "@/types/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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
      const response = await (globalThis.fetch || window.fetch)(
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

  delete: async (
    areaId: number,
    redirectTo: string,
    fetchOptions?: Omit<RequestInit, "headers" | "method">,
  ) => {
    const token = await getSessionData();

    if (!token) {
      throw new Error("Autentifikatsiya tokeni topilmadi");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/rest/places/interactive_areas/${areaId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Interaktiv hududni o'chirishda xatolik: ${response.status}`,
      );
    }

    if (redirectTo) {
      window.location.href = redirectTo;
    }
  },

  getPlaces: async (
    placeId: number,
    fetchOptions?: Omit<RequestInit, "headers" | "method">,
  ) => {
    const token = await getSessionData()

    if (!token) {
      throw new Error("Autentifikatsiya token topilmadi")
    }

    const res = await fetch(`${API_BASE_URL}/api/rest/places/${placeId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!res.ok) {
      throw new Error(`Interkativ hududlarni olishda xatolik: ${res.status}`)
    }
  },

  getInteractiveAreasByFetch: async (
    query: Record<string, any>,
    placeId: number,
    fetchOptions?: Omit<RequestInit, "headers" | "method">
  ) => {
    const params = new URLSearchParams(query);
    const url = `${API_BASE_URL}/api/rest/places/${placeId}/interactive_areas?`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        ...fetchOptions,
      });

      const data = await response.json();

      return {
        data: response.ok ? data : null,
        error: response.ok ? null : data,
        status: response.status,
      };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Fetch error",
        status: 500,
      };
    }
  }

};


