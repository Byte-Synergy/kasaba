import React, { memo } from "react";
import { IconType } from "react-icons";

const SocialLink = memo(
  ({ icon: Icon, link }: { icon: IconType; link: string }) => {
    return (
      <a
        href={link}
        className="inline-block w-full p-2 max-md:p-1 border border-[#FFFFFF14] bg-[#FFFFFF14] text-white hover:border-[#FF8500] hover:bg-[#FF850014] group rounded-sm"
        target="blank"
      >
        {<Icon className="w-8 h-8 group-hover:text-[#FF8500]" />}
      </a>
    );
  }
);

export default SocialLink;
