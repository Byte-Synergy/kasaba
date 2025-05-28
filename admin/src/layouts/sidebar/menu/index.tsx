// "use client";

import { menuItems } from "@/data/menu-item";
import React from "react";
import SidebarMenuGroup from "./group";

export default function SidebarMenu() {
  return (
    <>
      <nav>
        <SidebarMenuGroup menuItems={menuItems} />
      </nav>
    </>
  );
}
