import { redirect } from "next/navigation";
import NewsHandler from "../../components/handler";
import { getNewsCategories } from "@/actions/news";

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  if (!["standard", "video", "photo"].includes(type)) redirect("/news");

  const { data: categoriesData } = await getNewsCategories();

  return (
    <>
      <NewsHandler
        categories={categoriesData?.map((category) => category.name) || []}
        mode="create"
        title="Yangilik qo'shish"
        type={type}
      />
    </>
  );
}
