import eden from "@/libs/eden";
import HomePage from "./page-client";
import UsefulLinks from "@/components/root/home/useful-links";
import { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/directory";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);

  const { data: areasData } = await eden.places.get({
    query: {
      limit: 50,
      page: 1,
      filter: {
        orderBy: "asc",
        languageCode: lang,
      },
    },
  });

  const { data: adsData } = await eden.banner.get();
  const { data: topNewsData } = await eden.news.get({
    query: {
      limit: 50,
      page: 1,
      filter: {
        isTop: true,
        lang,
      },
    },
  });
  const { data: standardNewsData } = await eden.news.get({
    query: {
      limit: 50,
      page: 1,
      filter: {
        type: ["standard"],
        lang,
      },
    },
  });

  return (
    <>
      <HomePage
        address_label={t.address_label}
        email_label={t.email_label}
        members_count_label={t.members_count_label}
        our_addresses_label={t.our_addresses_label}
        phone_number_label={t.phone_number_label}
        select_area_placeholder={t.select_area_placeholder}
        search_label={t.search_label}
        lang={lang}
        public_news_label={t.public_news_label}
        interactive_areas_label={t.interactive_areas_label}
        all_label={t.all_label}
        photo_news_label={t.photo_news_label}
        share_label={t.share_label}
        video_news_label={t.video_news_label}
        areas={areasData?.data || []}
        archive_label={t.archive_label}
        areas_label={t.areas_label}
        news_label={t.news_label}
        standardNews={standardNewsData?.data || []}
        topNewsData={topNewsData?.data || []}
        ads={adsData || []}
      />
      <section id="useful-links" className="w-full max-w-[1440px] mx-auto">
        <UsefulLinks lang={lang} />
      </section>
    </>
  );
}
