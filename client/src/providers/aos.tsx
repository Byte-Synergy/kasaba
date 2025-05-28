"use client";
import AOS from "aos";
import React, { useEffect } from "react";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      offset: 40,
      once: true,
    });
  }, []);
  return <>{children}</>;
}
