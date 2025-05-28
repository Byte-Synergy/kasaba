import { Locale } from "@/configs/i18n";
import NewsPageClient from "./page-client";
import { getDictionary } from "@/utils/directory";
import eden from "@/libs/eden";
import { placesData } from "@/data/place";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}) {
  const { lang, slug } = await params;
  const t = await getDictionary(lang);

  const category = placesData.find(
    (place) => place.lang === lang && place.link.includes(slug)
  );

  if (!category) return;

  const data = await eden.news.get({
    query: {
      limit: 50,
      page: 1,
      filter: {
        lang,
        tags: [category.title],
      },
    },
  });
  return (
    <>
      <NewsPageClient
        data={data.data?.data || []}
        news_label={t.news_label}
        main_label={t.main_label}
      />
    </>
  );
}
