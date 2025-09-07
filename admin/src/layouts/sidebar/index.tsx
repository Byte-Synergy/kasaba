"use client";

// import { FaAngleLeft } from "react-icons/fa6";
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

  console.log(showSidebar);

  return (
    <>
      <aside
        className={cn(
          "sticky top-0 z-50 flex min-h-[100vh] h-full flex-col gap-3 p-2 transition-all duration-500 ease-in-out",
          "dark:bg-gradient-to-tr dark:from-slate-900 dark:to-slate-800",
          "border-r border-black/50",
          showSidebar ? "w-75" : "w-20",
        )}
      >
        <div className="size-full overflow-y-auto">
          <div className={cn("mb-4 flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-white/10", showSidebar ? "" : "items-center justify-center")}>
            <Avatar>
              <AvatarImage src={photoUrl} alt="Kasaba" />
              <AvatarFallback className="bg-white/30 text-white">
                K
              </AvatarFallback>
            </Avatar>
            <span className={cn("text-xs font-medium text-white uppercase", showSidebar ? "inline-block" : "hidden")}>
              Kasaba
            </span>
            <button
              onClick={logOut}
              className={cn("ml-auto cursor-pointer text-lg text-red-300", showSidebar ? "inline-block" : "hidden")}
            >
              <IoMdLogOut />
            </button>
          </div>
          <div>
            <SidebarMenu showSidebar={showSidebar} />
          </div>
        </div>
      </aside>
    </>
  );
}
