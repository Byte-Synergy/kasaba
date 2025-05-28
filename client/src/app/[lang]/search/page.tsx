import { Locale } from "@/configs/i18n";
import SearchPageClient from "./page-client";
import { getDictionary } from "@/utils/directory";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const t = await getDictionary(lang);

  return (
    <SearchPageClient
      search_engine={t.search_engine}
      result_label={t.result_label}
      loading_label={t.loading_label}
      main_label={t.main_label}
      no_result_label={t.no_result_label}
      no_result_description={t.no_result_description}
      lang={lang}
    />
  );
}
