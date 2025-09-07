'use client'

import { useModalStore } from "@/hooks/useModal"
import { cn } from "@/libs/utils"
import { ReactNode } from "react"

function ModalComponent({ children }: {
    children: ReactNode
}) {
    const { modal, closeModal } = useModalStore()

    return (
        <div className={cn(modal ? "fixed top-0 left-0 w-full min-h-screen z-50 bg-black/15" : "hidden")} id="modal__component">
            {children}
        </div>
    )
}

export default ModalComponent