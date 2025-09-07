"use client";

import React, { useRef } from "react";
import { Locale } from "@/configs/i18n";
import { cn } from "@/libs/utils";
import { CiInstagram } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { RiFacebookLine, RiTwitterXLine } from "react-icons/ri";
import { LucideFacebook } from "lucide-react";

const SocialMedia = (type: string) => {
  switch (type) {
    case "telegram":
      return (
        <FaTelegramPlane
          className={cn(
            "w-6 h-6 text-gray-700",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "group-hover:scale-0 group-hover:opacity-0 group-hover:text-white",
            "transition-all duration-300 delay-0"
          )}
        />
      );
    case "facebook":
      return (
        <LucideFacebook
          className={cn(
            "w-6 h-6 text-gray-700",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "group-hover:scale-0 group-hover:opacity-0 group-hover:text-white",
            "transition-all duration-300 delay-0"
          )}
        />
      );
    case "twitter":
      return (
        <RiTwitterXLine
          className={cn(
            "w-6 h-6 text-gray-700",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "group-hover:scale-0 group-hover:opacity-0 group-hover:text-white",
            "transition-all duration-300 delay-0"
          )}
        />
      );
    case "youtube":
      return (
        <FaYoutube
          className={cn(
            "w-6 h-6 text-gray-700",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "group-hover:scale-0 group-hover:opacity-0 group-hover:text-white",
            "transition-all duration-300 delay-0"
          )}
        />
      );
    case "instagram":
      return (
        <FaInstagram
          className={cn(
            "w-6 h-6 text-gray-700",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "group-hover:scale-0 group-hover:opacity-0 group-hover:text-white",
            "transition-all duration-300 delay-0"
          )}
        />
      );

    default:
      break;
  }
};

const SocailMediaLinksClient = ({
  data,
  lang,
  follow_label,
}: {
  follow_label: string;
  lang: Locale;
  data: {
    title: string;
    description: string;
    media: string;
    url: string;
    username: string;
  }[];
}) => {
  const swiperRef = useRef<any>(null);

  return (
    <div
      className={cn(
        "w-full h-[320px] rounded-xl border relative custom-gradient-overlay p-10 z-0 overflow-hidden",
        "bg-[url('/img/bg__useful__link.png')] bg-no-repeat bg-cover bg-center"
      )}
    >
      <h3 className="w-2/3 text-5xl text-white">
        Ўзбекистон давлат муассасалари ва жамоат хизмати ходимлари касаба
        уюшмаси Республика Кенгаши ижтимоий тармоқларда:
      </h3>
      <div className="flex gap-6 mt-10">
        {data.map((m) => (
          <div
            key={m.title}
            className={cn(
              "relative w-16 h-16 flex items-center justify-center",
              "rounded-full bg-white shadow-lg overflow-hidden cursor-pointer",
              "transition-all duration-500 ease-in-out group",
              "hover:w-48 transform origin-center", // 🌟 Muammo yechimi shu yerda
              "before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity before:duration-500",
              "after:absolute after:top-2.5 after:left-0 after:w-full after:h-full after:rounded-full after:blur-lg after:opacity-0 after:z-[-1] after:transition-opacity after:duration-500",

              m.media === "telegram" &&
                "before:bg-gradient-to-br before:from-[#0088cc] before:to-[#54a5db] hover:before:opacity-100 after:bg-gradient-to-br after:from-[#0088cc] after:to-[#54a5db] hover:after:opacity-50",

              m.media === "instagram" &&
                "before:bg-gradient-to-br before:from-[#833ab4] before:to-[#fcb045] hover:before:opacity-100 after:bg-gradient-to-br after:from-[#833ab4] after:to-[#fcb045] hover:after:opacity-50",

              m.media === "youtube" &&
                "before:bg-gradient-to-br before:from-[#cc0000] before:to-[#ff0000] hover:before:opacity-100 after:bg-gradient-to-br after:from-[#cc0000] after:to-[#ff0000] hover:after:opacity-50",

              m.media === "twitter" &&
                "before:bg-gradient-to-br before:from-[#1da1f2] before:to-[#47b8ff] hover:before:opacity-100 after:bg-gradient-to-br after:from-[#1da1f2] after:to-[#47b8ff] hover:after:opacity-50",

              m.media === "facebook" &&
                "before:bg-gradient-to-br before:from-[#1877f2] before:to-[#1976d2] hover:before:opacity-100 after:bg-gradient-to-br after:from-[#1877f2] after:to-[#1976d2] hover:after:opacity-50"
            )}
          >
            {/* Icon */}
            <div
              className={cn(
                "z-10 text-gray-600 text-2xl transition-all duration-500 delay-200",
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "group-hover:scale-0 group-hover:opacity-0 group-hover:delay-0"
              )}
            >
              {SocialMedia(m.media)}
            </div>

            {/* Title */}
            <span
              className={cn(
                "z-10 absolute text-white text-sm uppercase tracking-wider font-semibold",
                "scale-0 opacity-0 rotate-[-45deg]",
                "transition-all duration-500 delay-0",
                "group-hover:scale-100 group-hover:opacity-100 group-hover:rotate-0 group-hover:delay-150"
              )}
            >
              {m.media}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocailMediaLinksClient;
