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
import Menu from '@/components/shared/submenu'
import { use, useState } from 'react'
import { useTranslations } from '@/utils/translation-provider'
import { ChevronDown } from 'lucide-react'
import { Locale } from '@/configs/i18n'

const Render = ({menu, level = 0, lang}: {menu: MenuItem[], level: number, lang: Locale}) => {
    const [open, setOpen] = useState(false)

    const handleOpenMenu = () => {
        setOpen(!open)
    }
    const c =
        "flex relative h-full text-nowrap space-x-2 text-[#141348] text-lg font-semibold uppercase max-md:p-4";

    return (
        <>
            {menu.map((item, key) => {
                const hasSub =
                    Array.isArray(item.sub_menu) && item.sub_menu.length > 0;

                const href =
                    item.type === "news"
                        ? `/news/${item.newsType}`
                        : item.type === "document" &&
                            !(item.docCount && item.docCount > 1)
                            ? `/documents/${item.id}`
                            : `/p/${item.id}`;

                return (
                    <li key={item.id} className={cn(`relative`, level > 0 && `ml-[${level * 10}px] border-l-[1px]`)} style={{ marginLeft: `${level * 15}px` }}>
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
                            <div
                                className={cn("overflow-hidden ", open ? "h-full" : "h-[50px]", "transition-all duration-300 ease-in-out")}
                                onClick={() => handleOpenMenu()}
                            >
                                <span className={cn('flex items-center justify-between space-x-2 text-[#141348] text-lg font-semibold hover:text-[#ff7a00] uppercase p-4')}>
                                    {item.title}
                                    <ChevronDown className='w-5 h-5 text-black' />
                                </span>
                                <ul
                                    className={`cursor-pointer w-full ${level === 0 ? "top-full left-0" : "top-full"
                                        }`}
                                >
                                    <Render menu={item.sub_menu} level={level + 1} lang={lang}/>
                                </ul>
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
    const t = useTranslations()
    // const [open, setOpen] = useState(false)

    // const handleOpenMenu = () => {
    //     setOpen(!open)
    // }

    return (
        <section id="sidebar" className={cn("fixed inset-0 z-10 w-full bg-white hidden max-md:block top-0", isOpen ? "left-[0%] overflow-hidden" : "-left-[100%]", "transition-transform duration-300 ease-in-out")}>
            <div id="sidebar__header" className=' max-md:bg-linear-to-r max-md:from-[#000674] max-md:to-[#000BDA] py-5 px-5'>
                <div className="text-xl font-bold flex justify-between items-center">
                    <Image
                        width={100}
                        height={80}
                        src="/img/logo.svg"
                        alt="logo"
                        className=" object-contain max-md:w-14 max-md:h-11"
                    />
                    <Weather />
                    <button
                        className='p-2 bg-white/15 rounded-full border border-white/15'
                        onClick={() => useSidebarStore.getState().close()}
                    >
                        <IoClose className='text-white' />
                    </button>
                </div>
            </div>
            <nav className="flex flex-col h-[75vh] overflow-y-auto">
                <Link
                    className="flex items-center space-x-2 text-[#141348] text-lg font-semibold hover:text-[#ff7a00] uppercase p-4"
                    href={"/"}
                    lang={lang}
                >
                    {t("menu.main")}
                </Link>
                <Render menu={menu} level={0} lang={lang}/>
                <Link
                    className="flex items-center space-x-2 text-[#141348] text-lg font-semibold hover:text-[#ff7a00] uppercase p-4"
                    href={"/contact"}
                    lang={lang}
                >
                    {t("menu.contact")}
                </Link>
            </nav>
            {/* <Navbar lang={lang} menu={menu} /> */}
            <div id="sidebar__footer" className='p-5 '>
                <LanguageSwitcher />
                <CurrencyBox />
            </div>
        </section>
    )
}

export default Sidebar
