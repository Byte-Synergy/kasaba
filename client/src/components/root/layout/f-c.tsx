"use client";

import React from "react";

export default function FC({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        className="group-hover:text-[#ff8400]"
      >
        {children}
      </button>
    </>
  );
}
