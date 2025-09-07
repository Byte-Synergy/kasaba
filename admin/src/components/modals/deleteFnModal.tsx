import { useModalStore } from "@/hooks/useModal"
import { cn } from "@/libs/utils"
import { Trash2 } from "lucide-react";
import { ReactNode, useEffect } from "react"

const DeleteFnModal = ({ children, onClickHandle }: {
    children: ReactNode;
    onClickHandle: () => void
}) => {
    const { modal, closeModal, openModal } = useModalStore()

    // Close on Escape
    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        if (modal === "deleteFn") {
            document.addEventListener("keydown", onEsc);
        }
        return () => document.removeEventListener("keydown", onEsc);
    }, [modal, closeModal]);

    const handleConfirm = () => {
        try {
            onClickHandle();
        } finally {
            // Always close modal after action
            closeModal();
        }
    };

    return (
        <>
            {modal === "deleteFn" && (
                <div
                    className={cn(
                        "fixed inset-0 z-50 flex items-center justify-center p-4"
                    )}
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="delete-modal-title"
                >
                    <div
                        className="w-full max-w-md bg-white shadow-[0px_0px_12.5px_-10px_#000] rounded-xl p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={closeModal}
                            className="absolute right-3 top-3 w-7 h-7 grid place-items-center rounded-md hover:bg-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 shrink-0 fill-gray-500 hover:fill-red-500"
                                viewBox="0 0 320.591 320.591"
                            >
                                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                            </svg>
                        </button>

                        <div className="mt-2">
                            <div className="w-14 h-14 p-3.5 rounded-full bg-red-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-red-500 inline" viewBox="0 0 24 24">
                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                                </svg>
                            </div>
                            <div id="delete-modal-title" className="mt-4">
                                {children}
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button
                                    type="button"
                                    className="px-5 py-2.5 rounded-md cursor-pointer w-full text-slate-900 text-sm font-medium bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                                    onClick={closeModal}
                                >
                                    No, Cancel
                                </button>
                                <button
                                    type="button"
                                    className="px-5 py-2.5 rounded-md cursor-pointer w-full text-white text-sm font-medium bg-red-600 hover:bg-red-700 active:bg-red-600"
                                    onClick={handleConfirm}
                                >
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeleteFnModal