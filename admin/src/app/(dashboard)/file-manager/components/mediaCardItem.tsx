import { Badge } from "@/components/ui/badge";
import { cn } from "@/libs/utils";
import { LucideIcon } from "lucide-react";

const MediaCardItem = ({ data }: {
    data: {
        label: string;
        used: string;
        files: number;
        icon: LucideIcon
    }
}) => {
    return (
        <div
            className={cn("col-span-1 p-4  bg-white space-y-1", "border-2 border-[#f2f4f7] rounded-xl", "flex items-center justify-between")}
        >
            <div className="flex-1/2 flex items-center gap-x-2">
                <div
                    className={
                        cn("p-3 rounded-lg",
                            data.label === "Image" && "bg-[#eff9f4] text-[#12b76a]",
                            data.label === "Videos" && "bg-[#fef1fa] text-[#ee47bc]",
                            data.label === "Audio" && "bg-[#eff5ff] text-[#0ca5ec]",
                            data.label === "Apps" && "bg-[#fff3ee] text-[#fb6513]",
                            data.label === "Docs" && "bg-[#fef7ee] text-[#f79008]",
                            data.label === "Downloads" && "bg-[#f4f2ff] text-[#7a5af8]",
                        )
                    }
                >{<data.icon size={16} className="" />}</div>
                <div>
                    <div className="font-medium text-sm">{data.label}</div>
                    <div className="text-xs text-[#909090]">Umumiy ma'lumotlar</div>
                </div>
            </div>
            <div className="flex-1/2 space-y-1 text-end">
                <Badge variant={"light"} color={"primary"} children={"new"} className="py-0.5 px-2 text-xs" />
                <div className="text-xs text-gray-500 font-medium">{data.files} files</div>
                {/* <div className="text-sm text-gray-400">{data.files} files • 26.40 GB</div> */}
            </div>
        </div>
    )
}

export default MediaCardItem