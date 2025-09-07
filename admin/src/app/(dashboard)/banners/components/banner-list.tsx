import { cn } from "@/libs/utils";
import Image from "next/image";

interface BannerListProps {
  banners: string[];
  onDelete: (href: string) => void;
  type: "fit" | "hero1" | "hero2" | "full";
}

export default function BannerList({ banners, onDelete, type }: BannerListProps) {
  console.log(banners);

  return (
    <div className="mt-4 grid gap-2">
      {
        !banners.length ? (
          <p className="text-center text-gray-700 italic text-sm">Hozircha ma'lumot yo'q</p>
        ) : (
          banners.map((banner, key) => (
            <div className=" group relative" key={key}>
              <Image
                src={banner}
                width={1080}
                height={250}
                alt="Banner"
                className={cn(`w-full object-cover`, type === "full" ? "max-h-[120px]" : "max-h-250px")}
              />
              <button
                className="absolute top-2 right-2 hidden cursor-pointer rounded bg-red-500 px-2 py-1 text-xs text-white group-hover:block"
                onClick={() => onDelete(banner)}
              >
                O'chirish
              </button>
            </div>
          ))
        )
      }
    </div>
  );
}
