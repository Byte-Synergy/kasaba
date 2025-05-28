"use client";
import { useRouter } from "next/navigation";
import React from "react";

const UnauthorizedContent = () => {
  const router = useRouter();
  return (
    <div>
      <h1>401 - UnauthorizedContent</h1>
      <p>Please log in to access this page.</p>
      <button className="btn btn-primary" onClick={() => router.push("/login")}>
        Login
      </button>
    </div>
  );
};

export default UnauthorizedContent;
