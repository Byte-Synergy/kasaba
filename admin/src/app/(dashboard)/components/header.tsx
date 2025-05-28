import Link from "@/components/link";

export default function PageHeader({
  title,
  href,
  showAddButton = true,
}: {
  href: string;
  title: string;
  showAddButton?: boolean;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold capitalize">{title}</h1>
        {showAddButton && (
          <Link
            href={href}
            className="cursor-pointer rounded-md bg-blue-500 px-4 py-3 text-xs font-semibold text-white uppercase transition-colors hover:bg-blue-600"
          >
            Qo'shish
          </Link>
        )}
      </div>
    </>
  );
}
