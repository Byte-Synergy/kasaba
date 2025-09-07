"use client";
import Sidebar from "@/components/root/layout/sidebar";
import Weather from "@/components/shared/weather/weather";
import { Locale } from "@/configs/i18n";
import { useModalStore } from "@/hooks/useModal";
import { cn } from "@/libs/utils";
import { MenuItem } from "@/types";
import React, { createContext, useContext, ReactNode } from "react";

type ModalType = "weather" | "sidebar" | "photoPreview" | null;

interface ModalContextType {
  modal: ModalType;
  openModal?: (type: ModalType) => void;
  closeModal?: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({
  children,
  lang,
  menu,
}: {
  children: ReactNode;
  lang: Locale;
  menu: MenuItem[];
}) => {
  const { modal, closeModal } = useModalStore();

  return (
    <ModalContext.Provider value={{ modal, closeModal }}>
      <main
        className={cn(
          "relative w-full h-full",
          modal !== null ? "w-full h-[100vh] overflow-y-hidden" : ""
        )}
      >
        {children}
        <article
          className={cn(
            "w-full h-full absolute top-0 left-0 bg-black/50 z-[9999]",
            modal === null && "hidden",
            modal === "weather" || modal === "photoPreview"
              ? "flex items-center justify-center"
              : ""
          )}
          onClick={closeModal} // <- Fonga bosilganda modal yopiladi
        >
          {modal === "weather" && (
            <div
              className="w-4/6 max-md:w-5/6"
              onClick={(e) => e.stopPropagation()} // <- Ichki bosishda yopilmasin
            >
              <Weather />
            </div>
          )}
          {modal === "sidebar" && (
            <div
              className="w-full"
              onClick={(e) => e.stopPropagation()} // <- Ichki bosishda yopilmasin
            >
              {/* Sidebar content goes here */}
              <Sidebar lang={lang} menu={menu} />
            </div>
          )}
          {modal === "photoPreview" && (
            <div
              className="w-5/6 h-[80vh] bg-[#919191] rounded-xl"
              onClick={(e) => e.stopPropagation()} // <- Ichki bosishda yopilmasin
            ></div>
          )}
        </article>
      </main>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};
