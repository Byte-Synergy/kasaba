import React from "react";
import Container from "../../shared/container";
import Image from "next/image";

import { SocialMediaData } from "@/data/social-media-data";
import SocialLink from "./social-link";
import { MapPin, PhoneCall } from "lucide-react";
import { getDictionary } from "@/utils/directory";
import { Locale } from "@/configs/i18n";
import Link from "@/components/link";
import FC from "./f-c";

const Footer = async ({ lang }: { lang: Locale }) => {
  const t = await getDictionary(lang);
  return (
    <div className="bg-[#000443] mt-auto">
      <Container className="">
        <div className=" py-5 border-b border-white/10">
          <div className="flex justify-between items-center max-md:flex-col gap-3 max-md:items-start ">
            <div className="flex items-start justify-start max-md:flex-col gap-2">
              <Image src={"/img/logo.svg"} alt="logo" width={90} height={70} />
              <p className=" font-bold text-base text-white hidden max-md:block">
                {t.footer.description.split("\n").map((d, k) => (
                  <React.Fragment key={k}>
                    {d}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <ul className="flex gap-x-3">
              {SocialMediaData.map((media) => (
                <li key={media.label} className="text-end">
                  <SocialLink link={media.link} icon={media.icon} />
                </li>
              ))}
            </ul>
          </div>
          <ul className="w-full flex items-start max-md:flex-col gap-4 my-3 max-md:my-10 ">
            {[
              {
                label: t.menu.main,
                link: "/",
                toTop: false,
              },
              {
                label: t.menu.council,
                link: "/council",
                toTop: true,
              },
              {
                label: t.menu.news,
                link: "/news",
                toTop: true,
              },
              {
                label: t.menu.documents,
                link: "/documents",
                toTop: true,
              },
              {
                label: t.menu.contact,
                link: "/contact",
              },
            ].map((link) => (
              <li
                key={link.label}
                className="text-white text-[15px] font-bold capitalize group"
              >
                {link.toTop ? (
                  <FC>{link.label}</FC>
                ) : (
                  <Link
                    lang={lang}
                    href={link.link}
                    className="group-hover:text-[#ff8400]"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-end justify-between">
            <p className="text-[#a4b0be] text-sm font-medium leading-[18.20px] max-md:hidden max-w-[500px]">
              {t.footer.description.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className=" flex items-center justify-end gap-3 max-md:flex-col max-md:items-start">
              <p className="text-white hover:text-[#ff8400] text-[12px] font-medium leading-[18.20px] flex gap-x-2 items-center cursor-pointer">
                <MapPin className="w-5 h-5" />
                <span>{t.footer.address}</span>
              </p>
              <p className="text-white hover:text-[#ff8400] text-[12px] font-medium leading-[18.20px] flex gap-x-2 items-center cursor-pointer">
                <PhoneCall className="w-4 h-4" />
                <span>71 256 54 86</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex py-6">
          <p className="text-[#e1e3e6] text-xs font-medium leading-none max-md:hidden">
            {t.footer.copyright}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
