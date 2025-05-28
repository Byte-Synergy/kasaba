"use client";

import { FaAngleLeft } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SidebarMenu from "@/layouts/sidebar/menu";
import { logOut } from "@/actions/auth";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/libs/utils";

export default function Sidebar({
  photoUrl,
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  photoUrl: string;
}) {
  return (
    <>
      <aside
        className={cn(
          "fixed z-50 top-0 flex h-full w-full max-w-64 flex-col gap-3 bg-gradient-to-tr from-slate-900 to-slate-800 p-2 pr-5 transition-all duration-500 ease-in-out md:sticky md:left-0 md:max-w-60 md:pr-2",
          showSidebar ? "left-0" : "-left-full",
        )}
      >
        {showSidebar && (
          <button
            className="absolute top-2 -right-3 grid size-6 place-items-center rounded-full bg-slate-950 text-white"
            onClick={() => setShowSidebar(false)}
          >
            <FaAngleLeft size={14} />
          </button>
        )}
        <div className="size-full overflow-y-auto">
          <div className="mb-4 flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-white/10">
            <Avatar>
              <AvatarImage src={photoUrl} alt="Kasaba" />
              <AvatarFallback className="bg-white/30 text-white">
                K
              </AvatarFallback>
            </Avatar>
            {/* <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white/50">
            <Image width={40} height={40} src={photoUrl} alt="" />
          </div> */}
            <span className="text-xs font-medium text-white uppercase">
              Kasaba
            </span>
            <button
              onClick={logOut}
              className="ml-auto cursor-pointer text-lg text-red-300"
            >
              <IoMdLogOut />
            </button>
          </div>
          <SidebarMenu />
        </div>
      </aside>
    </>
  );
}
