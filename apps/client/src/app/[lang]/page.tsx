import eden from "@/libs/eden";
import HomePage from "./page-client";
import UsefulLinks from "@/components/root/home/useful-links";
import { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/directory";
import { getPlaces } from "@/action/place";
import { getNews } from "@/action/news";
import { getBanners } from "@/action/banner";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);

  if (!lang.length) redirect("/not-found");
  const { data: places } = await getPlaces({
    limit: 50,
    page: 1,
    filter: {
      languageCode: lang || "uz",
    },
  });

  const { data: adsData } = await getBanners();

  const { data: topNewsDataResp } = await getNews({
    limit: 50,
    page: 1,
    filter: {
      isTop: true,
      lang,
    },
  });

  const { data: standardNewsDataResp } = await getNews({
    limit: 50,
    page: 1,
    filter: {
      type: ["standard"],
      lang,
    },
  });

  const topNewsData = topNewsDataResp?.data || [];
  const standardNewsData = standardNewsDataResp?.data || [];

  return (
    <>
      <HomePage
        select_area_placeholder={t.select_area_placeholder}
        search_label={t.search_label}
        lang={lang}
        public_news_label={t.public_news_label}
        interactive_areas_label={t.interactive_areas_label}
        all_label={t.all_label}
        photo_news_label={t.photo_news_label}
        share_label={t.share_label}
        video_news_label={t.video_news_label}
        places={places?.data || []}
        archive_label={t.archive_label}
        areas_label={t.areas_label}
        news_label={t.news_label}
        standardNews={standardNewsData}
        topNewsData={topNewsData}
        ads={adsData || []}
      />
      <section id="useful-links" className="w-full max-w-[1440px] mx-auto">
        <UsefulLinks lang={lang} />
      </section>
    </>
  );
}
