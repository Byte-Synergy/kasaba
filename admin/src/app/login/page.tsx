import LoginForm from "@/components/root/login/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Kasabalar uyushmasiga kirish",
  description: "Kasaba yangiliklar platformasining admin paneli.",
};

export default function LoginPage() {
  return <LoginForm />;
}
