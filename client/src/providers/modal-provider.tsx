'use client'
import Weather from "@/components/shared/weather/weather";
import { useModalStore } from "@/hooks/useModal";
import { cn } from "@/libs/utils";
import React, { createContext, useContext, ReactNode } from "react";

type ModalType = "weather" | "login" | "settings" | "sidebar" | null;

interface ModalContextType {
    modal: ModalType;
    openModal?: (type: ModalType) => void;
    closeModal?: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const { modal, closeModal } = useModalStore();

    return (
        <ModalContext.Provider value={{ modal, closeModal }}>
            <main className={cn("relative w-full h-full", modal !== null ? "w-full h-[100vh] overflow-y-hidden" : "")}>
                {children}
                <article
                    className={cn(
                        "w-full h-full absolute top-0 left-0 bg-black/50 z-[9999]",
                        modal === null && "hidden",
                        modal === "weather" ? "flex items-center justify-center" : ""
                    )}
                    onClick={closeModal} // <- Fonga bosilganda modal yopiladi
                >
                    {modal === "weather" && (
                        <div
                            className="w-4/6"
                            onClick={(e) => e.stopPropagation()} // <- Ichki bosishda yopilmasin
                        >
                            <Weather />
                        </div>
                    )}
                </article>

                {/* Modals */}
                {/* Sidebar modal */}
            </main>
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("useModal must be used within ModalProvider");
    return ctx;
};
