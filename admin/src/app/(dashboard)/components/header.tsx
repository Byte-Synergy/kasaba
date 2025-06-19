'use client'
import Link from "@/components/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLangStore, Lang } from "@/hooks/useLang";

const LangData = [
  {
    uniqueCode: "uz",
    name: "O'zbekcha"
  },
  {
    uniqueCode: "uz-cyrl",
    name: "Uzbekcha"
  },
  {
    uniqueCode: "ru",
    name: "Ruscha"
  },
  {
    uniqueCode: "en",
    name: "Inglizcha"
  },
];

export default function PageHeader({
  title,
  href,
  showAddButton = true,
}: {
  href: string;
  title: string;
  showAddButton?: boolean;
}) {
  const { lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void } = useLangStore();

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-bold capitalize">{title}</h1>
      <div className="flex items-center gap-x-2">
        <Select onValueChange={(v: Lang) => setLang(v)} defaultValue="uz">
          <SelectTrigger className="w-[180px] rounded-sm !py-2">
            <SelectValue placeholder="Tilni tanlang..." />
          </SelectTrigger>
          <SelectContent className="rounded-sm !py-2">
            {LangData.map((l, key) => (
              <SelectItem value={l.uniqueCode} key={key + l.uniqueCode}>
                {l.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {showAddButton && (
          <Link
            href={href}
            className="cursor-pointer rounded-md bg-blue-500 px-4 py-3 text-xs font-semibold text-white uppercase transition-colors hover:bg-blue-600"
          >
            Qo'shish
          </Link>
        )}
      </div>
    </div>
  );
}
