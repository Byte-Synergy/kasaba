import { Download, FileText, Image, LayoutGrid, Music, Play } from "lucide-react";
import MediaCardItem from "./mediaCardItem";

const items = [
    { label: "Image", used: "17%", files: 245, icon: Image },
    { label: "Videos", used: "22%", files: 245, icon: Play },
    { label: "Audio", used: "24%", files: 245, icon: Music },
    { label: "Apps", used: "46%", files: 245, icon: LayoutGrid },
    { label: "Docs", used: "18%", files: 245, icon: FileText },
    { label: "Downloads", used: "16%", files: 245, icon: Download },
];

export function MediaCards() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 ">
            {items.map((item) => (
                <MediaCardItem data={item} key={item.label} />
            ))}
        </div>
    );
}