"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "@/components/link";
import React, { useEffect, useState } from "react";
import SidebarMenuGroup from "./group";
import { IoChevronDown } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { MenuItemType } from "@/data/menu-item";

export default function SidebarMenuItem({
  item,
}: React.HTMLAttributes<HTMLLIElement> & {
  item: MenuItemType;
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
    <li className="flex flex-col">
      <Link
        href={item.pathname}
        exact={item.exact}
        activeClassName="text-white bg-white/20"
        inActiveClassName="text-white/70 hover:bg-white/10"
        className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-colors"
        onClick={() => (item.children?.length ? toggleMenuGroup() : undefined)}
      >
        {item.icon &&
          React.cloneElement(item.icon, {
            className: "text-base",
          })}
        <span className="text-sm font-medium">{item.content}</span>
        {item.children?.length && (
          <IoChevronDown
            className={`ml-auto transition-transform ${
              isOpen ? "-rotate-180" : "-rotate-90"
            }`}
          />
        )}
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
              className="mt-1 pl-[23px]"
              menuItems={item.children}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </li>
  );
}
