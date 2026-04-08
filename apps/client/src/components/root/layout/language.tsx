"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Locale } from "@/configs/i18n";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({
  lang,
  languages,
}: {
  lang: Locale;
  languages: any[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLang: string) => {
    // pathname /en-US/news/1 -> /uz-Cyrl/news/1
    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = newLang;
      const newPath = segments.join("/");
      router.replace(newPath);
    } else {
      router.replace(`/${newLang}`);
    }
  };

  const currentLang = languages.find((l) => l.slug === lang) || languages[0];

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <button
            type="button"
            className="relative gap-3 cursor-pointer text-white text-[8px] font-medium z-10 py-[6px] px-[14px] rounded-sm hover:bg-white/15 flex max-md:text-black max-md:w-full max-md:border max-md:border-black/20"
          >
            <h5 className="w-full text-sm text-center">
              {currentLang?.name || lang}
            </h5>
          </button>
        </MenubarTrigger>
        <MenubarContent className="bg-white border-none max-md:text-black max-md:w-full !z-[9999]">
          {languages
            .filter((l) => l.slug !== lang)
            .map((l) => (
              <MenubarItem key={l.slug} className="max-md:w-full">
                <button
                  type="button"
                  className="cursor-pointer w-full text-left"
                  onClick={() => changeLanguage(l.slug)}
                >
                  {l.name}
                </button>
              </MenubarItem>
            ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
