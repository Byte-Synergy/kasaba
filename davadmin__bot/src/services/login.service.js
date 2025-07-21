const axios = require("axios");
const { config } = require("dotenv");
config();

async function Login(username, password) {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      throw new Error("API_URL is not defined in the environment variables");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/rest/auth/signIn`,
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;

    if (Object.keys(data).length) {
      return {
        success: true,
        token: data?.session.id,
      };
    } else {
      return {
        success: false,
        error: "Логин ёки парол нотўғри.",
      };
    }
  } catch (error) {
    console.error("Auth error:", error?.response?.data || error.message);

    const errMsg = error?.response?.data?.message || "Логин ёки парол нотўғри.";

    return {
      success: false,
      error: errMsg,
    };
  }
}

module.exports = {
  Login,
};
