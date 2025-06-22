"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Locale } from "@/configs/i18n";
import { useModalStore } from "@/hooks/useModal";
import { useParams, useRouter } from "next/navigation";

const languages = {
  uz: {
    name: "O'zbek",
    icon: "🇺🇿",
  },
  ru: {
    name: "Русский",
    icon: "🇷🇺",
  },
  en: {
    name: "English",
    icon: "🇰🇷",
  },
  "uz-cyrl": {
    name: "Ўзбек",
    icon: "🇰🇷",
  },
};

export default function LanguageSwitcher({
  lang,
}: {
  lang: Locale
}) {
  // const { lang } = useParams();
  const router = useRouter();
  // const {closeModal} = useModalStore()

  const changeLanguage = (lang: string) => {
    router.replace(`/${lang}`);
    // closeModal()
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <button
            role="button"
            className="relative gap-3 cursor-pointer text-white text-[8px] font-medium z-10 py-[6px] px-[14px] rounded-sm hover:bg-white/15 flex max-md:text-black max-md:w-full max-md:border max-md:border-black/20"
          >
            <h5 className="w-full text-sm text-center">
              {languages[lang as keyof typeof languages]?.name}
            </h5>
          </button>
        </MenubarTrigger>
        <MenubarContent className="bg-white border-none max-md:text-black max-md:w-full !z-[9999]">
          <MenubarItem className="max-md:w-full">
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("uz")}
            >
              O'zbek
            </button>
          </MenubarItem>
          <MenubarItem className="max-md:w-full">
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("uz-cyrl")}
            >
              Ўзбек
            </button>
          </MenubarItem>
          <MenubarItem className="max-md:w-full">
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("ru")}
            >
              Русский
            </button>
          </MenubarItem>
          <MenubarItem className="max-md:w-full">
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
