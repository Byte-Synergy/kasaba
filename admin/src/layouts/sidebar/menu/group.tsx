import { MenuItemType } from "@/data/menu-item";
import React from "react";
import { cn } from "@heroui/theme";
import SidebarMenuItem from "./item";

export default function SidebarMenuGroup({
  className,
  menuItems,
  ...props
}: React.HTMLAttributes<HTMLUListElement> & {
  menuItems: MenuItemType[];
}) {
  return (
    <>
      <ul className={cn("grid gap-1", className)} {...props}>
        {React.Children.toArray(
          menuItems.map((menuItem, key) => (
            <SidebarMenuItem key={key} item={menuItem} />
          )),
        )}
      </ul>
    </>
  );
}
