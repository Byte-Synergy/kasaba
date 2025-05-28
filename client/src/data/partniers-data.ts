import { PartniersType } from "@/types";
import { partnerData } from "./partner";

export const PartniersData: PartniersType[] = partnerData.map(
  (partner, key) => ({
    id: `id-${key + 1}`,
    title: partner.name,
    img: partner.image,
    link: partner.href,
    lang: partner.lang,
  })
);
