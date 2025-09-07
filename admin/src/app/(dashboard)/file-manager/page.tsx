import Title from "@/components/share/title";
import { Folders } from "./components/folders";
import { Header } from "./components/header";
import { MediaCards } from "./components/mediaCards";
import { StorageChart } from "./components/storageChart";
import { ChevronRight, Plus, Search } from "lucide-react";
import Link from "next/link";
import RecentFiles from "./components/recentFiles";

const FileData = [

]

export default function FileManagerPage() {
    return (
        <main className="p-6 space-y-8 min-h-screen">
            <Title
                title={"File manager"}
            />
            <section className="space-y-4 bg-white  rounded-xl border-2 border-[#e5e7eb] ">
                <Title
                    title={"Barcha Medialar"}
                    description={"Umumiy platformaga joylanagan medialar haqida ma'lumotlar"}
                    className="border-b-2 border-[#f2f4f7] text-xs p-5"
                    children={
                        <>
                            <div className="flex items-center relative">
                                <label htmlFor="search__input" className="absolute top-1/2 left-3 -translate-y-1/2">
                                    <Search className="text-gray-500 rotate-90" />
                                </label>
                                <input type="text" name="search__input" id="search__input" placeholder="Qidirish..." className="w-80 px-10 py-2 placeholder:text-sm placeholder:font-semibold rounded-md outline-0 focus:outline-2 focus:outline-blue-400 border-2 border-[#e4e7ec] bg-white" />
                            </div>
                            <button className="flex items-center gap-x-2 bg-[#307efe] rounded-sm p-2 border border-[#307efe]">
                                <Plus className="text-white" size={18} />
                                <span className="text-white text-sm font-medium">File yuklash</span>
                            </button>
                        </>
                    }
                />
                <MediaCards />
            </section>

            <section className="grid grid-cols-4 gap-6">
                <div className="col-span-3 bg-white rounded-xl border-2 border-[#e5e7eb]">
                    <Title
                        title={"Barcha Medialar"}
                        // description={"Umumiy platformaga joylanagan medialar haqida ma'lumotlar"}
                        className="border-b-2 border-[#f2f4f7] text-xs p-5"
                        children={
                            <>
                                <Link href={"/"} className="flex items-center gap-x-1">
                                    <span className="text-sm">View All</span>
                                    <ChevronRight size={18} />
                                </Link>
                            </>
                        }
                    />
                    <Folders />
                </div>
                <StorageChart />
            </section>

            <section className="space-y-4 bg-white  rounded-xl border-2 border-[#e5e7eb] ">
                <Title
                    title={"Recent Files"}
                    // description={"Umumiy platformaga joylanagan medialar haqida ma'lumotlar"}
                    className="border-b-2 border-[#f2f4f7] text-xs p-5 mb-0"
                    children={
                        <>
                            <Link href={"/"} className="flex items-center gap-x-1">
                                <span className="text-sm">View All</span>
                                <ChevronRight size={18} />
                            </Link>
                        </>
                    }
                />
                <RecentFiles />
            </section>
        </main>
    );
}
