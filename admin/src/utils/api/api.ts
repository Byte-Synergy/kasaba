import axios from "axios";
import Cookies from "js-cookie";

// API URL - backend URL manzilingizga o'zgartiring
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Axios instansini yaratish
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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

// Response interceptor - token yangilash logikasi
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Token eskirgan bo'lsa, yangilash (401 xatolik)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) {
          throw new Error("Refresh token mavjud emas");
        }

        // Refresh tokenni yuborish
        const response = await axios.post(`${API_URL}/auth/refresh`, {
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
        // Refresh token ham yaroqsiz bo'lsa, foydalanuvchini chiqarib yuborish
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");

        // Agar client-side bo'lsa, login sahifasiga yo'naltirish
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
