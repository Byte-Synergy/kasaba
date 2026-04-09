import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import StandardNewsCard from "@/components/shared/standart-news-card";
import { Locale } from "@/configs/i18n";
import { getNews } from "@/action/news";
import { getDictionary } from "@/utils/directory";
import React from "react";
import PageC from "./page-c";

const NewsPage = async ({
  params,
}: {
  params: Promise<{ type: string; lang: string }>;
}) => {
  const { type, lang } = await params;

  const t = await getDictionary(lang);

  const { data: newsResp } = await getNews({
    limit: 50,
    page: 1,
    filter: {
      lang,
      type: [type as any],
    },
  });

  const newsData = newsResp?.data || [];

  return (
    <div className="max-w-[1780px] w-full mx-auto">
      <Container className="my-5">
        <Breadcrumb main_label={t.main_label} data={[t.news_label]} />
      </Container>
      <section id="standart-news" className="my-5 ">
        <Container className="my-5">
          {newsData && <PageC data={newsData} lang={lang as any} type={type} />}
        </Container>
      </section>
    </div>
  );
};

export default NewsPage;
