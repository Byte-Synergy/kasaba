'use client'
import { MenuItem } from "@/app/[lang]/layout";
import Link from "@/components/link";
import { Locale } from "@/configs/i18n";
import { cn } from "@/libs/utils";
import { useTranslations } from "@/utils/translation-provider";

export default function Navbar({
  lang,
  menu,
}: {
  menu: MenuItem[];
  lang: Locale | string;
}) {
  const c =
    "flex relative h-full text-nowrap items-center space-x-2 text-[#141348] text-lg font-semibold uppercase max-md:p-4";

  const t = useTranslations()

  const render = (menu: MenuItem[], level = 0) => {
    return (
      <>
        {menu.map((item, key) => {
          const hasSub =
            Array.isArray(item.sub_menu) && item.sub_menu.length > 0;

          const g: any = {
            0: "group/0",
            1: "group/1",
            2: "group/2",
            3: "group/3",
            4: "group/3",
            5: "group/3",
          };
          const gHF: any = {
            0: "group-hover/0:flex",
            1: "group-hover/1:flex",
            2: "group-hover/2:flex",
            3: "group-hover/3:flex",
            4: "group-hover/4:flex",
            5: "group-hover/4:flex",
          };

          const href =
            item.type === "news"
              ? `/news/${item.newsType}`
              : item.type === "document" &&
                !(item.docCount && item.docCount > 1)
                ? `/documents/${item.id}`
                : `/p/${item.id}`;

          return (
            <div key={item.id} className={`relative ${g[level]}`}>
              {!hasSub ? (
                <Link
                  lang={lang}
                  href={href}
                  className={cn(
                    c,

                    level > 0
                      ? "text-white text-base hover:bg-white hover:text-[#ff7a00] px-4 py-2 cursor-pointer"
                      : "hover:text-[#ff7a00]"
                  )}
                >
                  <span>
                    {item.title}
                  </span>
                </Link>
              ) : (
                <div
                  className={cn(
                    c,

                    level > 0
                      ? "text-white text-base hover:bg-white hover:text-[#ff7a00] px-4 py-2 relative cursor-pointer"
                      : "hover:text-[#ff7a00]"
                  )}
                >
                  <span>
                    {item.title}
                  </span>
                </div>
              )}

              {hasSub && (
                <div
                  className={`absolute z-20 bg-[#ff7a00] flex-col hidden cursor-pointer ${gHF[level]} ${level === 0 ? "top-full left-0" : "top-0 left-full"
                    }`}
                >
                  {render(item.sub_menu, level + 1)}
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <nav className="md:flex hidden justify-center gap-10 shadow-lg shadow-gray-100 h-[60px]">
        <Link
          className="h-full flex items-center space-x-2 text-[#141348] text-lg font-semibold hover:text-[#ff7a00] uppercase max-md:p-4"
          href={"/"}
          lang={lang}
        >
          {t("menu.main")}
        </Link>
        {render(menu)}
        <Link
          className="h-full flex items-center space-x-2 text-[#141348] text-lg font-semibold hover:text-[#ff7a00] uppercase max-md:p-4"
          href={"/contact"}
          lang={lang}
        >
          {t("menu.contact")}
        </Link>
      </nav>
    </>
  );
}
