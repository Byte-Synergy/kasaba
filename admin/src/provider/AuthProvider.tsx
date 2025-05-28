"use client";

import { ReactNode, useEffect } from "react";
import useAuthStore from "@/store/authStore";

// Global auth state provider
export default function AuthProvider({ children }: { children: ReactNode }) {
  const { fetchUserData, user } = useAuthStore();

  // useEffect(() => {
  //   const userId = user?.id
  //   // Component yuklanganda user ma'lumotlarini olish
  //   if (userId) {
  //     const userData = fetchUserData();
  //     console.log(userData);

  //   }
  // }, []);

  return <>{children}</>;
}
