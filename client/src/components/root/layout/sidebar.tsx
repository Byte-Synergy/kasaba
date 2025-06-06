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

const Sidebar = ({
    lang, menu
}: {
    lang: string,
    menu: MenuItem[]
}) => {
    const {isOpen} = useSidebarStore()

    return (
        <section id="sidebar" className={cn("fixed inset-0 z-10 w-full bg-white hidden max-md:block top-0 ", isOpen ? "left-[0%]" : "-left-[100%]", "transition-transform duration-300 ease-in-out")}>
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
                        <IoClose className='text-white'/>    
                    </button>
                </div>
            </div>
            <Navbar lang={lang} menu={menu} />
            <div id="sidebar__footer" className='p-5'>
                <LanguageSwitcher />
                <CurrencyBox />
            </div>
        </section>
    )
}

export default Sidebar
