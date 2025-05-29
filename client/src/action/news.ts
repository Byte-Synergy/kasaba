"use server";

import eden from "@/libs/eden";
import { AppType } from "@/types/server";

export async function getNews(
  query: AppType["~Routes"]["api"]["rest"]["news"]["get"]["query"] = {
    page: 1,
    limit: 10,
  },
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden
) {
  const { data, error, status } = await fetcher.news.get({
    query,
    fetch,
  });

  return { data, error, status };
}

export async function getNewsCategories(
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden
) {
  const { data, error, status } = await fetcher.news.categories.get({
    fetch,
  });

  return { data, error, status };
}
