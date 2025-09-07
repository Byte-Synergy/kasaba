"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "@/components/link";
import React, { useEffect, useState } from "react";
import SidebarMenuGroup from "./group";
import { IoChevronDown } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { MenuItemType } from "@/data/menu-item";
import { cn } from "@/libs/utils";
import { Badge } from "@/components/ui/badge";

export default function SidebarMenuItem({
  item,
  showSidebar
}: React.HTMLAttributes<HTMLLIElement> & {
  item: MenuItemType;
  showSidebar: boolean
}) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenuGroup = () => setOpen(!isOpen);

  const isPathMatching = (item: MenuItemType): boolean => {
    if (item.pathname && pathname === item.pathname) {
      return true;
    }
    if (item.children) {
      return item.children.some(
        (child) => child.pathname && pathname.startsWith(child.pathname),
      );
    }
    return false;
  };

  useEffect(() => {
    if (isPathMatching(item)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [pathname]);
  return (
    <li className="flex flex-col hover:cursor-pointer">
      <Link
        href={item.pathname}
        exact={item.exact}
        activeClassName="text-white bg-white/20"
        inActiveClassName="text-white/70 hover:bg-white/10"
        className={cn("flex w-full cursor-pointer items-center gap-2 rounded-md py-2 transition-colors justify-between", showSidebar ? "flex-row  px-3" : "flex-col  px-2")}
        onClick={() => (item.children?.length ? toggleMenuGroup() : undefined)}
        prefetch
      >
        <div className="flex items-center gap-x-1">
          {item.icon &&
            React.cloneElement(item.icon, {
              className: "w-5 h-5",
            })}
          <span className={cn("text-sm font-medium", showSidebar ? "text-sm" : "hidden")}>{item.content}</span>
        </div>

        <div className="flex items-center gap-x-1 justify-end">
          {item.isNew && (
            <Badge variant={"solid"} color={"info"} className="py-1 px-2 text-xs">Tezda</Badge>
          )}
          {item.children?.length && (
            <IoChevronDown
              className={cn(`ml-auto transition-transform`, isOpen ? "-rotate-180" : "-rotate-90", showSidebar ? "inline-block" : "hidden")}
            />
          )}
        </div>
      </Link>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            height: 0,
          }}
          exit={{
            height: 0,
          }}
          animate={{
            height: "auto",
          }}
          key={isOpen && item.children?.length ? "open" : "close"}
          className="overflow-hidden"
        >
          {isOpen && item.children?.length && (
            <SidebarMenuGroup
              className="mt-1 ml-[30px] border-l border-white/25"
              menuItems={item.children}
              showSidebar={showSidebar}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </li>
  );
}
