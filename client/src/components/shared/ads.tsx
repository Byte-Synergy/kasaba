import Image from "next/image";
import React from "react";

const Ads = ({ src }: { src: string }) => {
  return (
    <img
      src={src}
      alt="reklama"
      className="w-full h-full object-contain"
      loading="lazy"
    />
  );
};

export default Ads;
