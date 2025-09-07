'use client'
import DeleteFnModal from "@/components/modals/deleteFnModal"
import { useModalStore } from "@/hooks/useModal"
import { cn } from "@/libs/utils"
import { ReactNode } from "react"

function ModalProvider({ children }: {
    children: ReactNode
}) {
    const { modal, closeModal } = useModalStore()

    return (
        <main className={cn(
            "relative w-full h-full",
            modal !== null ? "w-full h-[100vh] overflow-y-hidden" : ""
        )}
            id="modal__provider"
        >

            <article
                className={cn(
                    "w-full h-full absolute top-0 left-0 bg-black/50 z-[9999]",
                    modal === null && "hidden",
                    modal === "deleteFn" || modal === "photoPreview"
                        ? "flex items-center justify-center"
                        : ""
                )}
                onClick={closeModal}
            >
                {children}
            </article>

        </main>
    )
}

export default ModalProvider