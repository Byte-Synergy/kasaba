import LoginForm from "@/components/root/login/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Kasabalar uyushmasiga kirish",
  description: "Kasaba yangiliklar platformasining admin paneli.",
};

export default function LoginPage() {

  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("admin_token", token); // yoki sessionStorage
    window.location.href = "/dashboard"; // token bilan ichki sahifaga o'tish
  }

  return <LoginForm />;
}
