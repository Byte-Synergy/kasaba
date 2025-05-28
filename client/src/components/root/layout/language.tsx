"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Languages } from "lucide-react";
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

export default function LanguageSwitcher() {
  const { lang } = useParams();
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    router.replace(`/${lang}`);
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <button
            role="button"
            className="relative gap-3 cursor-pointer text-white text-[8px] font-medium z-10 py-[6px] px-[14px] rounded-sm hover:bg-white/15 flex"
          >
            <h5 className="text-sm">
              {languages[lang as keyof typeof languages]?.name}
            </h5>
            <Languages />
          </button>
        </MenubarTrigger>
        <MenubarContent className="bg-white border-none">
          <MenubarItem>
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("uz")}
            >
              O'zbek
            </button>
          </MenubarItem>
          <MenubarItem>
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("uz-cyrl")}
            >
              Ўзбек
            </button>
          </MenubarItem>
          <MenubarItem>
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("ru")}
            >
              Русский
            </button>
          </MenubarItem>
          <MenubarItem>
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
