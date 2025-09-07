import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";
import { Crown, Star } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { formatDate } from "@/utils/formateDate";

export default function NewsCard({
  newData,
  variant = "row",
}: {
  variant?: "col" | "row";
  newData: {
    id: number;
    path: string;
    title: string;
    isTop?: boolean;
    description: string;
    content: {
      type: string;
      value?: string;
      fileId?: string
    }[];
    type: any;
    languageCode?: string | undefined;
    tags?: string[];
    createdAt: string;
    authorId?: number | null;
    files?: {
      extension: string;
      mimeType: string;
      name: string;
      href: string;
    }[];
  };
}) {

  const thumbnailPhoto = newData.files?.find(f => f.name === newData.content.find(c => c.type === "photo")?.fileId)

  return newData == undefined ? null : (
    <>
      <div
        className={cn(
          "flex overflow-hidden rounded-lg bg-white hover:bg-gray-50 transition-shadow hover:shadow-[0px_0px_20px_-5px_#d1d1d1] group border",
          variant === "row" && "flex-row",
          variant === "col" && "flex-col",
        )}
      >
        <div
          className={cn(
            "relative aspect-video size-full w-full shrink-0 overflow-hidden rounded-lg",
            variant === "row" && "max-w-64",
            newData?.files?.length ? "bg-black" : "bg-slate-200",
          )}
        >
          {newData?.isTop && (
            <>
              <div className="absolute z-20 size-full bg-gradient-to-br from-black via-transparent to-transparent" />
              <Badge variant={"light"} color={"gold"}>
                <Crown className="absolute top-3 left-3 z-30" />
              </Badge>
            </>
          )}
          {newData?.content.find((content: any) => content?.type === "video-url") && (
            <iframe
              src={
                newData?.content.find((content: any) => content?.type === "video-url")
                  ?.value
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="size-full"
            />
          )}
          {newData?.files && Boolean(newData?.files.length) && (
            <>
              <Image
                className="relative z-10 size-full object-contain"
                src={`${thumbnailPhoto?.href}`}
                alt={`${thumbnailPhoto?.href}`}
                width={1920}
                height={1080}
              />
              <Image
                className="absolute top-0 left-0 scale-110 opacity-70 blur-xs"
                src={`${thumbnailPhoto?.href}`}
                alt={`${thumbnailPhoto?.href}`}
                fill
              />
            </>
          )}
        </div>
        <div className="p-5">
          <div className="flex justify-start gap-x-2 mb-2">
            {
              newData.isTop && <Badge variant={"light"} color={"gold"} withIcon icon={Crown}>Top yangilik</Badge>
            }
            <Badge variant={"light"} color={"primary"}>{formatDate(newData?.createdAt)}</Badge>
            {/* <span className="px-1 py-0 border border-blue-500 bg-blue-500/25 rounded-2xl text-black/75"></span> */}
            <Badge variant={"light"} color={"primary"} className="hover:underline">
              <Link href={`/news/${newData.type}`}>{newData?.type}</Link>
            </Badge>
          </div>
          <Link href={`/news/content/${newData?.type}/${newData?.path}`} className={cn("mb-1 text-lg font-semibold line-clamp-1", "group-hover:underline")}>{newData?.title}</Link>
          <p className="text-sm font-normal line-clamp-2">{newData?.description}</p>
        </div>
      </div>
    </>
  );
}
