import api from "./api";

export const userApi = {
  async getUserById(id: string) {
    try {
      const response = await api.get(`/users/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: `User ma'lumotlarini olishda xatolik yuz berdi ${error}`,
      };
    }
  },

  async getUserByUsername(username: string) {
    try {
      const response = await api.get(`/users/username${username}`);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: `User ma'lumotlarini olishda xatolik yuz berdi ${error}`,
      };
    }
  },

  async getCurrentUser() {
    try {
      const response = await api.get("/users/profile");
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: `user ma'lumotlarini olishda xatolik yuz berdi ${error}`,
      };
    }
  },

  async updateUser() {},
};
