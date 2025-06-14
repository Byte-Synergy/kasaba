"use client";

import Container from "../../shared/container";
import Logo from "./logo";
import dynamic from "next/dynamic";
import LanguageSwitcher from "./language";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { Search } from "lucide-react";
import Link from "@/components/link";
import { Locale } from "@/configs/i18n";
import Weather from "./weather";
import { MenuItem } from "@/types";
import CurrencyBox from "./currency-box";
import { RiMenu3Fill } from "react-icons/ri";
import { useSidebarStore } from "@/hooks/useSidebar";
import WeatherHeader from "@/components/shared/weather/weather-header";

const Clock = dynamic(() => import("./clock"), { ssr: false });

const Header = ({
  lang,
  header_desc,
  menu
}: {
  header_desc: string;
  lang: Locale;
  menu: MenuItem[]
}) => {
  const openSidebar = useSidebarStore((state) => state.open)

  const handleOpenSidebar = () => {
    openSidebar();
  };

  return (
    <section className="w-full bg-[url(/img/BG.png)] bg-cover bg-no-repeat py-[20px] overflow-hidden relative z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-linear-to-r after:from-[#141348] after:to-[#030239] after:blur-[40px] after:-z-10 max-md:bg-linear-to-r max-md:from-[#000674] max-md:to-[#000BDA] max-md:shadow-[0px_0px_25px_5px] shadow-[#000BDA]/50">
      <Container className=" flex items-center justify-between max-md:hidden">
        <Logo lang={lang} header_desc={header_desc} />
        <div className="flex items-center gap-x-[20px] max-md:hidden">
          <CurrencyBox />
          {/* <Weather /> */}
          <WeatherHeader />
          <Clock />
          <div className="flex items-center gap-x-1">
            <LanguageSwitcher />
            <Link lang={lang} href="/search" prefetch={false} >
              <button
                role="button"
                className="hover:bg-white/15 transition-colors p-2 rounded-sm"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="flex-1 "></div> */}
        <div className="flex-1/3 hidden max-md:flex max-md:items-center max-md:justify-between max-md:gap-1">
          <WeatherHeader />
          {/* <Link lang={lang} href="/search" prefetch={false} className="cursor-pointer">
            <button className="p-2 bg-white/15 rounded-full border border-white/15">
              <FiSearch className=" object-contain w-5 h-5 text-white" />
            </button>
          </Link> */}
          {/* MenuSidebar button */}
          <div className="border border-red-400">
            <button
              className=" w-auto p-2 bg-white/15 rounded-full border border-white/15 float-end"
              onClick={handleOpenSidebar}
            >
              <RiMenu3Fill className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </Container>
      <Container className="hidden items-center justify-between max-md:flex ">
        <div className="w-full text-xl font-bold flex justify-between items-center">
          <Logo lang={lang} header_desc={header_desc} />
          <WeatherHeader />
          <button
              className=" w-auto p-2 bg-white/15 rounded-full border border-white/15 float-end"
              onClick={handleOpenSidebar}
            >
              <RiMenu3Fill className="w-5 h-5 text-white" />
            </button>
        </div>
        </Container>
    </section>
  );
};

export default Header;
