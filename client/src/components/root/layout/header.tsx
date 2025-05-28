"use client";

import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import Container from "../../shared/container";
import Logo from "./logo";
import Curreny from "./curreny";
import dynamic from "next/dynamic";
import LanguageSwitcher from "./language";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { useNavbarStore } from "@/store/navbar-store";
import { Search } from "lucide-react";
import { CurrencyType } from "@/types/currency";
import Link from "@/components/link";
import { Locale } from "@/configs/i18n";

const Clock = dynamic(() => import("./clock"), { ssr: false });

const fetchData = async ({
  currency,
  date,
}: {
  currency: string;
  date: string;
}): Promise<CurrencyType[] | null> => {
  try {
    const res = await fetch(
      `https://cbu.uz/uz/arkhiv-kursov-valyut/json/${currency}/${date}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Ma’lumotlarini olishda xatolik:", err);
    return null;
  }
};

const Header = ({
  lang,
  header_desc,
}: {
  header_desc: string;
  lang: Locale;
}) => {
  // const router = useRouter();

  const setNavbarMenu = useNavbarStore((state) => state.setNavbarMenu);
  const [currencies, setCurrencies] = useState<CurrencyType[] | null>(null);

  const getCurrencyData = async () => {
    try {
      const date = DateTime.now();
      const formatted = date.toFormat("yyyy-MM-dd");

      const usdData =
        (await fetchData({ currency: "USD", date: formatted })) || [];
      const rubData =
        (await fetchData({ currency: "RUB", date: formatted })) || [];
      const eurData =
        (await fetchData({ currency: "EUR", date: formatted })) || [];
      const cnyData =
        (await fetchData({ currency: "CNY", date: formatted })) || [];

      setCurrencies([...usdData, ...eurData, ...rubData, ...cnyData]);
    } catch (error) {
      console.error("Ma'lumotlarini olishda xatolik:", error);
    }
  };

  useEffect(() => {
    getCurrencyData();
  }, []);

  return (
    <section className="w-full bg-[url(/img/BG.png)] bg-cover bg-no-repeat py-[20px] overflow-hidden relative z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-linear-to-r after:from-[#141348] after:to-[#030239] after:blur-[40px] after:-z-10 max-md:bg-linear-to-r max-md:from-[#000674] max-md:to-[#000BDA]">
      <Container className="flex items-center justify-between">
        <Logo lang={lang} header_desc={header_desc} />
        <div className="flex items-center gap-x-[20px] max-md:hidden">
          {currencies && (
            <>
              <Curreny currency={[currencies[0], currencies[1]]} />
              <Curreny currency={[currencies[2], currencies[3]]} />
            </>
          )}
          {/* <Weather /> */}
          <Clock />
          <div className="flex items-center gap-x-1">
            <LanguageSwitcher />
            <Link lang={lang} href="/search">
              <button
                role="button"
                className="hover:bg-white/15 transition-colors p-2 rounded-sm"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" hidden max-md:flex max-md:items-center max-md:justify-center max-md:gap-1">
          <button className="p-2 bg-white/15 rounded-full border border-white/15">
            <Image
              src={"/icon/weather.svg"}
              width={21}
              height={21}
              alt="icon"
              className=" object-contain"
            />
          </button>
          <Link lang={lang} href="/search">
            <button className="p-2 bg-white/15 rounded-full border border-white/15">
              <FiSearch className=" object-contain w-5 h-5 text-white" />
            </button>
          </Link>
          <button
            onClick={setNavbarMenu}
            className="p-2 bg-white/15 rounded-full border border-white/15"
          >
            <RiMenu3Fill className=" object-contain w-5 h-5 text-white" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Header;
