'use client'

// import { cn } from "../../../../libs/utils"

import { cn } from "@/libs/utils"
import { useSidebar } from "@/store/useSidebar"

const Sidebar = () => {
    const { isOpenSidebar } = useSidebar()

    return (
        <aside className={cn("fixed top-0 left-0", "p-4", isOpenSidebar ? "w-75" : "inline-block w-full")}>
            <div className=""></div>
        </aside>
    )
}

export default Sidebar