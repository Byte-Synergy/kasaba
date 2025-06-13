'use client'
import Image from 'next/image'
import Weather from './weather'
import LanguageSwitcher from './language'
import { MenuItem } from '@/types'
import CurrencyBox from './currency-box'
import Navbar from "./navbar"
import { useSidebarStore } from '@/hooks/useSidebar'
import { cn } from '@/libs/utils'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslations } from '@/utils/translation-provider'
import { ChevronDown, Search } from 'lucide-react'
import { Locale } from '@/configs/i18n'
import WeatherHeader from '@/components/shared/weather/weather-header'

const Render = ({
    menu,
    level = 0,
    lang,
    handleOpenMenu,
    activeMenuMap
}: {
    menu: MenuItem[],
    level: number,
    lang: Locale,
    handleOpenMenu: (id: string) => void,
    activeMenuMap: Record<string, boolean>
}) => {
    return (
        <>
            {menu.map((item) => {
                const hasSub = Array.isArray(item.sub_menu) && item.sub_menu.length > 0;

                const href =
                    item.type === "news"
                        ? `/news/${item.newsType}`
                        : item.type === "document" && !(item.docCount && item.docCount > 1)
                            ? `/documents/${item.id}`
                            : `/p/${item.id}`;

                const isOpen = activeMenuMap[item.id];

                return (
                    <li key={item.id} style={{ marginLeft: `${level * 15}px` }}>
                        {!hasSub ? (
                            <Link
                                lang={lang}
                                href={href}
                                className='flex items-center space-x-2 text-[#141348] text-lg font-semibold hover:text-[#ff7a00] uppercase p-4'
                            >
                                <span className='flex justify-start items-center w-full'>
                                    {item.title}
                                </span>
                            </Link>
                        ) : (
                            <div>
                                <div
                                    className='flex items-center justify-between space-x-2 text-[#141348] text-lg font-semibold hover:text-[#ff7a00] uppercase p-4 cursor-pointer'
                                    onClick={() => handleOpenMenu(item.id)}
                                >
                                    {item.title}
                                    <ChevronDown className={`w-5 h-5 text-black transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {isOpen && (
                                    <ul className="pl-4 border-l border-gray-200">
                                        <Render
                                            menu={item.sub_menu}
                                            level={level + 1}
                                            lang={lang}
                                            activeMenuMap={activeMenuMap}
                                            handleOpenMenu={handleOpenMenu}
                                        />
                                    </ul>
                                )}
                            </div>
                        )}
                    </li>
                );
            })}
        </>
    );
};

const Sidebar = ({
    lang, menu
}: {
    lang: Locale,
    menu: MenuItem[]
}) => {
    const { isOpen } = useSidebarStore()
    const [activeMenuMap, setActiveMenuMap] = useState<Record<string, boolean>>({});

    const handleOpenMenu = (id: string) => {
        setActiveMenuMap(prev => ({
            ...prev,
            [id]: !prev[id]  // toggle holat
        }));
    };

    const t = useTranslations()

    return (
        <section id="sidebar" className={cn("min-h-[100vh] fixed inset-0 z-10 w-full bg-white hidden max-md:block top-0 overflow-hidden", isOpen ? "left-[0%]" : "-left-[100%]", "transition-transform duration-300 ease-in-out")}>
            <div id="sidebar__header" className='py-5 px-5 overflow-hidden relative z-10  after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-linear-to-r after:from-[#141348] after:to-[#030239] after:blur-[40px] after:-z-10 max-md:bg-linear-to-r max-md:from-[#000674] max-md:to-[#000BDA]'>
                <div className="text-xl font-bold flex justify-between items-center">
                    <Image
                        width={100}
                        height={80}
                        src="/img/logo.svg"
                        alt="logo"
                        className=" object-contain max-md:w-14 max-md:h-11"
                    />
                    <WeatherHeader />
                    <button
                        className='p-2 bg-white/15 rounded-full border border-white/15'
                        onClick={() => useSidebarStore.getState().close()}
                    >
                        <IoClose className='text-white' />
                    </button>
                </div>
            </div>
            <form className="flex items-center justify-start p-4 flex-row-reverse gap-x-1">
                <label htmlFor='search' className='inline-flex items-center bg-white rounded-sm focus-within:ring-2 focus-within:ring-[#ff7a00]'>
                    <Search className="text-gray-500 ml-2" />
                </label>
                <input
                    type="search"
                    placeholder={t("search_label")}
                    id='search'
                    name='search'
                    className="w-full max-w-md p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a00]"
                />
            </form>
            {/* Navbar links */}
            <nav className="flex flex-col h-[65vh] overflow-y-auto">
                <Link
                    className="flex items-center space-x-2 text-[#141348] text-lg font-semibold hover:text-[#ff7a00] uppercase p-4"
                    href={"/"}
                    lang={lang}
                >
                    {t("menu.main")}
                </Link>
                <Render
                    menu={menu}
                    level={0}
                    lang={lang}
                    activeMenuMap={activeMenuMap}
                    handleOpenMenu={handleOpenMenu}
                />


                <Link
                    className="flex items-center space-x-2 text-[#141348] text-lg font-semibold hover:text-[#ff7a00] uppercase p-4"
                    href={"/contact"}
                    lang={lang}
                >
                    {t("menu.contact")}
                </Link>
            </nav>
            {/* <Navbar lang={lang} menu={menu} /> */}
            <div id="sidebar__footer" className='p-5 flex flex-col gap-y-2'>
                <LanguageSwitcher />
                <CurrencyBox />
            </div>
        </section>
    )
}

export default Sidebar
