import { SearchDataType } from "@/types";

export const SearchData: SearchDataType[] = Array.from(
  { length: 10 },
  (_, index) => ({
    id: `id-${index + 1}`,
    title: `O‘zbekiston Prezidenti BAA Vitse-prezidenti, Bosh vaziri bilan uchrashdi ${index}`,
    publishedAt: {
      date: "31 yanvar 2025",
      time: "15:14",
    },
    news_type: "Yangiliklar",
  }),
);
