"use client";
import React, { memo, useState } from "react";
import { RiTelegram2Fill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoCopy, IoCopyOutline } from "react-icons/io5";
import { cn } from "@/libs/utils";

const ShareCopy = memo(({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 soniyadan keyin xabar o‘chadi
    } catch (err) {
      console.error("Nusxalashda xatolik:", err);
    }
  };
  const sendToTelegram = () => {
    const telegramLink = `https://t.me/share/url?url=${text}&text=${encodeURIComponent(
      text,
    )}`;
    window.open(telegramLink, "_blank");
  };
  const sendToX = () => {
    const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      text,
    )}`;
    window.open(twitterLink, "_blank");
  };

  const sendToFacebook = () => {
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      text,
    )}`;
    window.open(facebookLink, "_blank");
  };

  const sendToInstagram = () => {
    alert(
      "Instagram rasm ulashishga ruxsat bermaydi. Ilovada qo'lda yuklashingiz kerak.",
    );
  };
  return (
    <div className=" flex items-center justify-between mt-6">
      <div className="flex items-center justify-center gap-3">
        <p className=" font-raleway font-semibold text-xl">Ulashish</p>
        <button
          onClick={sendToTelegram}
          className="p-2 border rounded-sm group hover:border-[#FF8500] hover:bg-[#FF850014] transition"
        >
          <RiTelegram2Fill className="w-5 h-5 text-gray-500 group-hover:text-[#FF8500]" />
        </button>
        <button
          onClick={sendToX}
          className="p-2 border rounded-sm group hover:border-[#FF8500] hover:bg-[#FF850014] transition"
        >
          <BsTwitterX className="w-5 h-5 text-gray-500 group-hover:text-[#FF8500]" />
        </button>
        <button
          onClick={sendToFacebook}
          className="p-2 border rounded-sm group hover:border-[#FF8500] hover:bg-[#FF850014] transition"
        >
          <FaFacebook className="w-5 h-5 text-gray-500 group-hover:text-[#FF8500]" />
        </button>
        <button
          onClick={sendToInstagram}
          className="p-2 border rounded-sm group hover:border-[#FF8500] hover:bg-[#FF850014] transition"
        >
          <AiFillInstagram className="w-5 h-5 text-gray-500 group-hover:text-[#FF8500]" />
        </button>
      </div>
      <div
        className={cn(
          "py-2 px-3 border flex items-center justify-center gap-3",
          copied
            ? "border-green-500 bg-green-100"
            : "border-orange-500 bg-orange-100",
        )}
        role="button"
        onClick={copyToClipboard}
      >
        <p className=" font-medium text-base">Nusxa olish</p>
        <button>
          {copied ? (
            <IoCopy className="w-5 h-5 text-green-500" />
          ) : (
            <IoCopyOutline className=" w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
});
export default ShareCopy;
