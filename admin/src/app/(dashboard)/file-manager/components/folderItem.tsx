import { EllipsisVertical } from "lucide-react";

const FolderItem = ({ folder }: {
    folder: {
        name: string;
        files: number;
    }
}) => {
    return (
        <div
            className="p-4 border-2 border-[#f2f4f7] rounded-lg bg-[#f9fafb] flex flex-col w-full"
        >
            <div className="flex items-center justify-between py-3">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3986 4.40674C12.9265 3.77722 12.1855 3.40674 11.3986 3.40674H2.5C1.11929 3.40674 0 4.52602 0 5.90674V30.0959C0 31.4766 1.11929 32.5959 2.5 32.5959H33.5C34.8807 32.5959 36 31.4766 36 30.0959V11.7446C36 10.3639 34.8807 9.24458 33.5 9.24458H18.277C17.4901 9.24458 16.7492 8.87409 16.277 8.24458L13.3986 4.40674Z" fill="url(#paint0_linear_2816_28044)"></path>
                    <defs>
                        <linearGradient id="paint0_linear_2816_28044" x1="18" y1="3.40674" x2="18" y2="32.5959" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFDC78"></stop>
                            <stop offset="1" stopColor="#FBBC1A"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <EllipsisVertical size={16} className="text-[#98a2b3] hover:text-[#222]" />
            </div>
            <div className="w-full flex items-end justify-between">
                <div>
                    <div className="font-semibold leading-7">{folder.name}</div>
                    <div className="text-xs text-gray-500">{folder.files} Files</div>
                </div>
                <div className="text-sm text-gray-400">26.40 GB</div>
            </div>
        </div>
    )
}

export default FolderItem