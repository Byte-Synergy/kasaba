"use server";

import eden from "@/libs/eden";
import { getUserSession } from "@/utils/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type NewsContent = {
  type: "text" | "photo" | "video" | "gallery" | string;
  value: string;
};

type NewsData = {
  type: "standard" | "video" | "photo";
  title: string;
  description: string;
  tags: string[];
  content: NewsContent[];
  files?: File[] | File | any[];
  isTop: boolean;
};

export async function getNews(
  filter: {
    type?: ("standard" | "photo" | "video")[];
    tags?: string[];
    isTop?: boolean;
    isArchived?: boolean;
    q?: string;
  },
  limit: number = 10,
  page: number = 1,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher.news.get({
    query: {
      limit,
      page,
      filter,
    },
    fetch,
  });

  return { data, error, status };
}
export async function getSingleNews(
  path: string,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher.news({ newsPath: path }).get({
    fetch,
  });
  console.log("Single: ", path);
  

  return { data, error, status };
}
export async function getNewsCategories(
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher.news.categories.get({
    fetch,
  });

  return { data, error, status };
}

export async function archiveNews(
  path: string,
  redirectTo: string,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const cookiesStore = await cookies();
  const session = await getUserSession(cookiesStore);

  const { response } = await fetcher.news({ newsPath: path }).put(
    {
      isArchived: true,
    },
    {
      fetch,
      headers: {
        authorization: `Bearer ${session}`,
      },
    },
  );

  if (response.ok) redirect(redirectTo);
}
export async function deleteNews(
  path: string,
  redirectTo: string,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const cookiesStore = await cookies();
  const session = await getUserSession(cookiesStore);

  const { response } = await fetcher
    .news({ newsPath: path })
    .delete(undefined, {
      fetch,
      headers: {
        authorization: `Bearer ${session}`,
      },
    });

  if (response.ok) redirect(redirectTo);
}
