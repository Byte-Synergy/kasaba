import Cookies from "js-cookie";
import api from "./api";

export const userApi = {
  async login(username: string, password: string) {
    try {
      const response = await api.post("/auth/login", {
        username,
        password,
      });

      const tokens = {
        accessToken: response.data.tokens.access,
        refreshToken: response.data.tokens.refresh,
      };

      // Cookie-da tokenlarni saqlash
      Cookies.set("accessToken", tokens.accessToken);
      Cookies.set("refreshToken", tokens.refreshToken);

      // Tokenni avtomatik yangilashni boshlash
      userApi.setupTokenRefresh();

      return {
        success: true,
        user: {
          fullname: response.data.fullName,
          username: response.data.username,
          user_id: response.data.id,
        },
      };
    } catch (error) {
      console.log("Loginda xatolik:", error);
      return {
        success: false,
        error:
          (error as any).response?.data?.message ||
          "Login jarayonida xatolik yuz berdi",
      };
    }
  },

  async logout() {
    try {
      await api.post("/auth/logout");
      return { success: true };
    } catch (error) {
      console.log("Logout xatoligi:", error);
      return { success: false };
    } finally {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      clearInterval(userApi.tokenRefreshInterval);
    }
  },

  async getSession() {
    try {
      let accessToken = Cookies.get("accessToken");

      if (!accessToken) {
        const refreshSuccess = await userApi.refreshToken();
        if (!refreshSuccess) return { success: false, user: null };
        accessToken = Cookies.get("accessToken");
      }

      return {
        success: true,
      };
    } catch (error) {
      console.log("Sessiyani olishda xatolik:", error);
      return { success: false, user: null };
    }
  },

  async refreshToken() {
    try {
      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) return false;

      const response = await api.post("/auth/refresh", {
        refresh: refreshToken,
      });

      const newAccessToken = response.data.access;
      Cookies.set("accessToken", newAccessToken);

      console.log(newAccessToken);

      return true;
    } catch (error) {
      console.log("Tokenni yangilashda xatolik:", error);
      userApi.logout(); // Refresh token ishlamasa, userni chiqarib yuboramiz
      return false;
    }
  },

  setupTokenRefresh() {
    // Har 5 daqiqada tokenni yangilash
    if (userApi.tokenRefreshInterval) {
      clearInterval(userApi.tokenRefreshInterval);
    }

    userApi.tokenRefreshInterval = setInterval(async () => {
      console.log("🔄 Access token avtomatik yangilanmoqda...");
      const success = await userApi.refreshToken();
      if (!success) {
        console.log("❌ Refresh token ishlamadi. Logout qilinmoqda...");
        userApi.logout();
      }
    }, 1000); // Har 5 daqiqada yangilash
  },

  tokenRefreshInterval: null as any,
};
