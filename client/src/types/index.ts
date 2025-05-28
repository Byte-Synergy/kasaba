import { Locale } from "@/configs/i18n";
import { ContentType } from "./content";
import { AppType } from "./server";

export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type WithRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export type WithOut<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface ChildrenProps {
  children: React.ReactNode;
}

export type NewsDataType =
  AppType["_routes"]["api"]["rest"]["news"][":newsPath"]["get"]["response"]["200"];
//  & {
//   content: ContentType[];
// };
//  {
//   files?:
//     | {
//         name: string;
//         mimeType: string;
//         extension: string;
//         href: string;
//       }[]
//     | undefined;
//   type: "standard" | "photo" | "video";
//   content: {
//     [x: string]: any;
//   }[];
//   title: string;
//   description: string;
//   tags: string[];
//   isTop: boolean;
//   path: string;
//   id: number;
//   createdAt: string;
//   authorId: number;
// }

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
  };
  tags?: string[];
  sortBy?: "date" | "title" | "views";
  sortOrder?: "asc" | "desc";
}
