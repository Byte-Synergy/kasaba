import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import Cookies from "js-cookie";
import ApiService from "@/services/api";

// API URL - o'z backend URL manzilingizga o'zgartiring
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Axios instance yaratish
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors - har bir so'rov uchun token qo'shish
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor - token yangilash
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 xatosi va qayta urinish bo'lmagan holda
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) {
          throw new Error("Refresh token mavjud emas");
        }

        // Refresh token orqali yangi token olish
        const response = await axios.post(`${API_URL}/auth/refresh-token`, {
          refreshToken,
        });

        // Yangi tokenlarni saqlash
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        Cookies.set("accessToken", accessToken);
        Cookies.set("refreshToken", newRefreshToken);

        // Yangi token bilan so'rovni qayta yuborish
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh token ham yaroqsiz bo'lsa, tokenlarni o'chirish
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");

        // Client-side bo'lsa, login sahifasiga yo'naltirish
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

// Zustand auth store
const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Login
      login: async (username: string, password: string) => {
        set({ isLoading: true, error: null });

        try {
          ApiService;
          const response = await api.post("/auth/sign-in", {
            username,
            password,
          });

          const accessToken = response.data.tokens.access;
          const refreshToken = response.data.tokens.refresh;
          // Cookie-da tokenlarni saqlash
          Cookies.set("accessToken", accessToken);
          Cookies.set("refreshToken", refreshToken);

          // Store-da foydalanuvchi ma'lumotlarini saqlash
          set({
            user: {
              fullName: response.data.fullName,
              username: response.data.username,
              id: response.data.id,
            },
            isAuthenticated: true,
            isLoading: false,
          });

          return true;
        } catch (error) {
          set({
            error:
              (error as any).response?.data?.message ||
              "Login jarayonida xatolik yuz berdi",
            isLoading: false,
          });
          return false;
        }
      },

      // Logout
      logout: async () => {
        try {
          // Backendga logout so'rovini yuborish (ixtiyoriy)
          await api.post("/auth/logout");
        } catch (error) {
          console.error("Logout xatoligi:", error);
        } finally {
          // Lokal ma'lumotlarni tozalash
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          set({
            user: null,
            isAuthenticated: false,
          });
        }
      },

      // Foydalanuvchi ma'lumotlarini olish
      fetchUserData: async (id: string) => {
        const accessToken = Cookies.get("accessToken");
        if (!accessToken) return false;

        set({ isLoading: true });

        try {
          const response = await api.get("/users/:id");
          set({
            user: response.data,
            isAuthenticated: true,
            isLoading: false,
          });
          return true;
        } catch (error) {
          set({ isLoading: false });
          // Xatolik auth bilan bog'liq bo'lmasa log qilish
          if ((error as any).response?.status !== 401) {
            console.error("Profil olishda xatolik:", error);
          }
          return false;
        }
      },

      // API so'rovlari uchun
      api,
    }),
    {
      name: "auth-storage", // localStorage kaliti
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? localStorage
          : {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            },
      ),
      // Faqat ma'lum ma'lumotlarni saqlash
      partialize: (state: any) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);

export default useAuthStore;
