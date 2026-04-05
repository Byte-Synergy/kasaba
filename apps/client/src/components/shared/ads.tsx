import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";

const Ads = ({ src }: { src: string }) => {
  return (
    <LazyLoadImage
      src={src}
      alt="reklama"
      effect="blur"
      width="100%"
      height="100%"
      className="w-full h-full object-contain"
      wrapperClassName="w-full h-full"
    />
  );
};

export default Ads;
