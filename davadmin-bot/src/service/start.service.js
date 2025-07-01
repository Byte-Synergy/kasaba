import axios from "axios";
import { config } from "dotenv";
config();


export async function Login(username, password) {
  try {
    if (!process.env.API_URL) {
      throw new Error("API_URL is not defined in the environment variables");
    }

    const response = await axios.post(`${process.env.API_URL}/api/rest/auth/signIn`, {
      username,
      password,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data
    
    if (Object.keys(data).length) {
      return {
        success: true,
        token: data?.session.id,
      };
    } else {
      return {
        success: false,
        error: "Login yoki parol noto‘g‘ri",
      };
    }

  } catch (error) {
    console.error("Auth error:", error?.response?.data || error.message);

    const errMsg = error?.response?.data?.message || "Ulanishda xatolik yoki server ishlamayapti";

    return {
      success: false,
      error: errMsg,
    };
  }
}
