'use client'
import { MenuItem } from '@/types'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = ({menu, parentTitle, count = 0}: {
  menu: MenuItem,
  parentTitle?: string,
  count?: number
}) => {
  const hasSubMenu = menu.sub_menu.length > 0;
  // const [c, setC] = useState<number>(0)

  if(hasSubMenu) {
    return (
      <li className="group relative">
        <div
          className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          {menu.title}
          {hasSubMenu && <ChevronDown />}
        </div>
        <ul className="hidden group-hover:block absolute left-0 mt-1 bg-white shadow-lg rounded-md z-90">
          {menu.sub_menu.map((subItem) => (
            <Menu key={subItem.id} menu={subItem} parentTitle={menu.title}/>
          ))}
        </ul>
      </li>
    );
  }
}

export default Menu
