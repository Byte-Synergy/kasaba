import { FaStar } from "react-icons/fa6";
import { cn } from "@/libs/utils";
import Image from "next/image";

export default function NewsCard({
  data,
  variant = "row",
}: {
  variant?: "col" | "row";
  data: {
    files?: {
      name: string;
      mimeType: string;
      extension: string;
      href: string;
    }[];
    isTop: boolean;
    title: string;
    description: string;
    content: Record<string, any>[];
    authorId: number;
  };
}) {
  return (
    <>
      <div
        className={cn(
          "flex overflow-hidden rounded-lg bg-slate-100 transition-shadow hover:shadow-xl",
          variant === "row" && "flex-row",
          variant === "col" && "flex-col",
        )}
      >
        <div
          className={cn(
            "relative aspect-video size-full w-full shrink-0 overflow-hidden rounded-lg",
            variant === "row" && "max-w-64",
            data.files?.length ? "bg-black" : "bg-slate-200",
          )}
        >
          {data.isTop && (
            <>
              <div className="absolute z-20 size-full bg-gradient-to-br from-black via-transparent to-transparent" />
              <FaStar className="absolute top-3 left-3 z-30 text-yellow-500" />
            </>
          )}
          {data.content.find((content) => content.type === "video-url") && (
            <iframe
              src={
                data.content.find((content) => content.type === "video-url")
                  ?.value
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="size-full"
            />
          )}
          {data.files && Boolean(data.files.length) && (
            <>
              <Image
                className="relative z-10 size-full object-contain"
                src={data.files[0].href}
                alt={data.files[0].name}
                width={1920}
                height={1080}
              />
              <Image
                className="absolute top-0 left-0 scale-110 opacity-70 blur-xs"
                src={data.files[0].href}
                alt={data.files[0].name}
                fill
              />
            </>
          )}
        </div>
        <div className="p-5">
          <h3 className="mb-2 text-base font-semibold">{data.title}</h3>
          <p className="text-sm font-medium">{data.description}</p>
        </div>
      </div>
    </>
  );
}
