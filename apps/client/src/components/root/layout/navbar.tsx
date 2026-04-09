'use client'
import { MenuItem } from "@/types";
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
  const t = useTranslations();

  const renderItems = (items: MenuItem[], level = 0) => {
    const g = ["group", "group/1", "group/2", "group/3"];
    const gHF = ["group-hover:flex", "group-hover/1:flex", "group-hover/2:flex", "group-hover/3:flex"];

    return (
      <>
        {items.map((item) => {
          const hasSub = Array.isArray(item.sub_menu) && item.sub_menu.length > 0;
          const href = item.type === "news" ? `/news/${item.newsType}` : item.path || `/p/${item.id}`;
          const isLink = item.type !== "main_menu";

          return (
            <div key={item.id} className={`relative flex items-center h-full ${g[level]}`}>
              {isLink ? (
                <Link
                  lang={lang}
                  href={href}
                  className={cn(
                    "flex items-center gap-1 transition-all h-full px-4 text-nowrap",
                    level === 0 
                      ? "text-[#141348] text-lg font-semibold uppercase hover:text-[#ff7a00]" 
                      : "text-white text-base font-medium hover:bg-white/10 w-full py-3 px-6 uppercase"
                  )}
                >
                  {item.title}
                </Link>
              ) : (
                <div
                  className={cn(
                    "flex items-center gap-1 transition-all h-full px-4 text-nowrap cursor-default",
                    level === 0 
                      ? "text-[#141348] text-lg font-semibold uppercase hover:text-[#ff7a00]" 
                      : "text-white text-base font-medium hover:bg-white/10 w-full py-3 px-6 uppercase"
                  )}
                >
                  {item.title}
                </div>
              )}

              {hasSub && (
                <div
                  className={cn(
                    "absolute z-50 bg-[#ff7a00] flex-col hidden shadow-xl",
                    gHF[level],
                    level === 0 ? "top-full left-0 min-w-[220px]" : "top-0 left-full min-w-[220px]"
                  )}
                >
                  {renderItems(item.sub_menu, level + 1)}
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
      <nav className="md:flex hidden justify-center gap-6 shadow-lg shadow-gray-100 h-[65px] bg-white border-b border-gray-100">
        <Link
          className="h-full flex items-center px-4 text-[#141348] text-lg font-semibold uppercase hover:text-[#ff7a00] transition-colors"
          href={"/"}
          lang={lang}
        >
          {t("menu.main")}
        </Link>
        
        {renderItems(menu)}

        <Link
          className="h-full flex items-center px-4 text-[#141348] text-lg font-semibold uppercase hover:text-[#ff7a00] transition-colors"
          href={"/contact"}
          lang={lang}
        >
          {t("menu.contact")}
        </Link>
      </nav>
    </>
  );
}
