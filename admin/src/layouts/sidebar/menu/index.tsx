// "use client";

import { menuItems, supportItems } from "@/data/menu-item";
import React from "react";
import SidebarMenuGroup from "./group";
import { cn } from "@/libs/utils";
import { PiDotsThree } from "react-icons/pi";

export default function SidebarMenu({
  showSidebar
}: {
  showSidebar: boolean
}) {
  return (
    <>
      <nav className="">
        <div className="mb-5">
          <h5 className={cn("uppercase text-xs text-white/50 my-2")}>{showSidebar ? "MENU" : <PiDotsThree className="w-7 h-7 text-white mx-auto" />}</h5>
          <SidebarMenuGroup menuItems={menuItems} showSidebar={showSidebar} />
        </div>
        <div className="mb-5">
          <h5 className="uppercase text-xs text-white/50 my-2">{showSidebar ? "SUPPORT" : <PiDotsThree className="w-7 h-7 text-white mx-auto" />}</h5>
          <SidebarMenuGroup menuItems={supportItems} showSidebar={showSidebar} />
        </div>
      </nav>
    </>
  );
}
