import { LoaderCircle } from "lucide-react";
import React from "react";

const LogoLoader = () => {
  return (
    <div className="fixed h-screen inset-0  bg-white">
      <div className="h-full relative flex items-center justify-center">
        <LoaderCircle className="w-48 h-48 border-dashed rounded-full animate-spin z-10 text-[#000573]"></LoaderCircle>
        {/* <Image src={'/img/logo__loader.png'} alt='home' width={30} height={30} className='w-[64px] h-[64px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain' /> */}
        <img
          src="/img/logo.svg"
          alt="logo__loader"
          className="w-[120px] h-[120px] object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />
      </div>
    </div>
  );
};

export default LogoLoader;
