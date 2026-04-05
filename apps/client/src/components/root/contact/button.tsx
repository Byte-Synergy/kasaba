import Image from "next/image";
import React from "react";

function Button({ text, isEmail }: { text: string; isEmail?: boolean }) {
  return (
    <a
      href={(isEmail ? "mailto:" : "tel:") + text}
      className="flex items-center justify-center gap-2 p-4 border from-orange-500/10 via-white/70 to-orange-500/80 bg-linear-to-br hover:from-orange-500/20 hover:via-orange-500/20 hover:to-orange-500/90 hover:border-orange-500 duration-300"
    >
      {isEmail ? (
        <Image src={"/icon/mail.svg"} width={33} height={33} alt="phone" />
      ) : (
        <Image src={"/icon/phone.svg"} width={33} height={33} alt="phone" />
      )}
      <p className=" font-raleway font-semibold text-xl text-orange-500">
        {text}
      </p>
    </a>
  );
}

export default Button;
