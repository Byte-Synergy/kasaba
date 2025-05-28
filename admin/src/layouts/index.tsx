"use client";

import { HiBars2 } from "react-icons/hi2";
import Sidebar from "@/layouts/sidebar";
import { ReactNode, useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        photoUrl=""
      />
      <main
        id="main-scroll"
        className="size-full overflow-hidden overflow-y-auto scroll-smooth"
      >
        <header className="bg-white md:hidden">
          <div className="container px-5 py-3">
            <button
              onClick={() => setShowSidebar(true)}
              className="grid size-8 place-items-center rounded-full border border-gray-200 bg-gray-100"
            >
              <HiBars2 size={18} />
            </button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
