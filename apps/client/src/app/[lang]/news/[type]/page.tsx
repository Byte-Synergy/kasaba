import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import StandardNewsCard from "@/components/shared/standart-news-card";
import { Locale } from "@/configs/i18n";
import eden from "@/libs/eden";
import { getDictionary } from "@/utils/directory";
import React from "react";
import PageC from "./page-c";

const NewsPage = async ({
  params,
}: {
  params: Promise<{ type: string; lang: Locale }>;
}) => {
  const { type, lang } = await params;

  const t = await getDictionary(lang);

  const { data } = await eden.news.get({
    query: {
      limit: 50,
      page: 1,
      filter: {
        lang,
        type: [type as any],
      },
    },
  });

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Container className="my-5">
        <Breadcrumb main_label={t.main_label} data={[t.news_label]} />
      </Container>
      <section id="standart-news" className="my-5 ">
        <Container className="my-5">
          {data?.data && <PageC data={data?.data} lang={lang} type={type} />}
        </Container>
      </section>
    </div>
  );
};

export default NewsPage;
