"use client";

import { HiBars2 } from "react-icons/hi2";
// import Sidebar from "";
import { ReactNode, useState } from "react";
import Sidebar from "@/layouts/sidebar";
import { ChevronDown, Moon, Search } from "lucide-react";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  return (
    <div className="w-full min-h-full flex items-start justify-start bg-[#f9fafb]">
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        photoUrl=""
      />
      <main
        className={`relative scroll-smooth w-full`}
      // style={{ width: "100% - 300px" }}
      >
        <header className="flex items-center justify-between dark:bg-gradient-to-tr dark:from-slate-900 dark:to-slate-800 bg-white py-3 px-5 ">
          <div className="flex items-center gap-x-2">
            <button
              onClick={() => setShowSidebar(prev => !prev)}
              className="grid size-10 place-items-center rounded-md border border-[#e4e7ec] bg-white"
            >
              <HiBars2 size={18} />
            </button>
            <div className="flex items-center relative">
              <label htmlFor="search__input" className="absolute top-1/2 left-3 -translate-y-1/2">
                <Search className="text-gray-500 rotate-90" />
              </label>
              <input type="text" name="search__input" id="search__input" placeholder="Qidirish..." className="w-100 px-10 py-2 placeholder:text-sm placeholder:font-semibold rounded-md outline-0 focus:outline-2 focus:outline-blue-400 border border-[#e4e7ec] bg-white" />
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <button
              // onClick={() => setShowSidebar(true)}
              className="grid size-10 place-items-center rounded-full border border-[#e4e7ec] bg-white"
            >
              <Moon size={18} />
            </button>
            <button
              // onClick={() => setShowSidebar(true)}
              className="grid size-10 place-items-center rounded-full border border-[#e4e7ec] bg-white"
            >
              <IoNotificationsOutline size={18} />
            </button>
            <div role="button" className="flex items-center gap-x-1">
              <Image src={'/image/logo.svg'} alt="main avatar image" width={50} height={50} className="rounded-full object-contain" />
              <p className="flex items-center gap-x-1">
                <span className="inline-block text-sm">Tolipov</span>
                <ChevronDown size={16} />
              </p>
            </div>
          </div>
        </header>
        {/* <Container> */}
        <article className="mb-10 container mx-auto">
          {children}
        </article>
        {/* </Container> */}
      </main>
    </div>
  );
}
