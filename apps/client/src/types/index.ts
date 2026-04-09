import { Locale } from "@/configs/i18n";
import { ContentType } from "./content";

export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type WithRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export type WithOut<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface NewsDataType {
  id: number;
  title: string;
  description: string;
  type: "standard" | "photo" | "video" | "area";
  createdAt: string;
  path: string;
  languageCode: string;
  isFallback?: boolean;
  authorId?: number | null;
  tags?: string[];
  files?: {
    name: string;
    mimeType: string;
    extension: string;
    href: string;
  }[];
  content?: ContentType[];
}

export interface SearchDataType {
  id: string;
  title: string;
  publishedAt: {
    date: string;
    time: string;
  };
  news_type: string;
}

export interface Option {
  id: number;
  name: string;
  value: string;
}

export interface PartniersType {
  id: string | number;
  title: string;
  img: string;
  link: string;
  lang: string;
}

export interface FooterLinkType {
  id?: string | number;
  title: string;
  link: string;
}

export type sub_menu = {
  id: string;
  title: string;
  path: string;
};
export interface NavbarLinksType {
  id: string;
  title: string;
  path?: string;
  sub_menu: sub_menu[];
}

export interface NewsFilter {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  startDate?: string;
  endDate?: string;
  filter?: {
    type?: string[];
    lang?: Locale;
    isTop?: boolean;
    isArchive?: boolean;
    q?: string;
  };
  tags?: string[];
  sortBy?: "date" | "title" | "views";
  sortOrder?: "asc" | "desc";
}

export interface MenuItem {
  id: string;
  title: string;
  path: string;
  docCount?: number;
  sub_menu: MenuItem[];
  type?: "photo" | "text" | "news" | "document" | "member";
  newsType?: "standard" | "photo" | "video" | "area";
}