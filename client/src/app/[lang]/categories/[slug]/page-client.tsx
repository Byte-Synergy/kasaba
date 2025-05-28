"use client";

import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import StandardNewsCard from "@/components/shared/standart-news-card";
import { Locale } from "@/configs/i18n";
import eden from "@/libs/eden";
import { NewsDataType } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const fetchData = async (name: string) => {
  try {
    const res = await eden.news.get({
      query: {
        limit: 50,
        page: 1,
        filter: {
          tags: [name],
        },
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const NewsPageClient = ({
  main_label,
  news_label,
  data,
}: {
  data: NewsDataType[];
  news_label: string;
  main_label: string;
}) => {
  // const params = useParams();
  // const [data, setData] = useState<NewsDataType[]>([]);

  // useEffect(() => {
  //   fetchData(params.slug as string).then((res) => {
  //     if (res?.data) setData(res?.data as any);
  //   });
  // }, []);

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Container className="my-5">
        <Breadcrumb main_label={main_label} data={[news_label]} />
      </Container>
      <section id="standart-news" className="my-5 ">
        <Container className="my-5">
          <div className="flex items-start gap-3 flex-wrap">
            {data?.map((item) => (
              <div className="w-[24%]" key={item.id}>
                <StandardNewsCard data={item} key={item.title} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default NewsPageClient;
