import HomePage from "./page-client";
import UsefulLinks from "@/components/root/home/useful-links";
import { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/directory";
import { getRegions } from "@/action/place";
import { getNews } from "@/action/news";
import { getBanners } from "@/action/banner";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);

  if (!lang.length) redirect("/not-found");
  const { data: regions } = await getRegions({
    limit: 100,
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

  const { data: videoNewsDataResp } = await getNews({
    limit: 10,
    page: 1,
    filter: {
      type: ["video"],
      lang,
    },
  });

  const { data: photoNewsDataResp } = await getNews({
    limit: 10,
    page: 1,
    filter: {
      type: ["photo"],
      lang,
    },
  });

  const topNewsData = topNewsDataResp?.data || [];
  const standardNewsData = standardNewsDataResp?.data || [];
  const videoNewsData = videoNewsDataResp?.data || [];
  const photoNewsData = photoNewsDataResp?.data || [];

  return (
    <>
      <HomePage
        select_area_placeholder={t.select_area_placeholder}
        search_label={t.search_label}
        lang={lang as any}
        public_news_label={t.public_news_label}
        interactive_areas_label={t.interactive_areas_label}
        all_label={t.all_label}
        photo_news_label={t.photo_news_label}
        share_label={t.share_label}
        video_news_label={t.video_news_label}
        places={(regions as any) || []}
        archive_label={t.archive_label}
        areas_label={t.areas_label}
        news_label={t.news_label}
        standardNews={standardNewsData}
        topNewsData={topNewsData}
        videoNewsData={videoNewsData}
        photoNewsData={photoNewsData}
        mediateka_label={t.mediateka_label}
        image_count_label={t.image_count_label}
        month_labels={t.month}
        ads={adsData || []}
      />
      <section id="useful-links" className="w-full max-w-[1780px] mx-auto">
        <UsefulLinks lang={lang as any} />
      </section>
    </>
  );
}
