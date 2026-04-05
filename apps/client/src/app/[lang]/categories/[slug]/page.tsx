import { Locale } from "@/configs/i18n";
import NewsPageClient from "./page-client";
import { getDictionary } from "@/utils/directory";
import { getNews } from "@/action/news";
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

  const { data: newsResp } = await getNews({
    limit: 50,
    page: 1,
    filter: {
      lang,
      tags: [category.title],
    },
  });
  const newsData = newsResp?.data || [];
  return (
    <>
      <NewsPageClient
        data={newsData}
        news_label={t.news_label}
        main_label={t.main_label}
      />
    </>
  );
}
