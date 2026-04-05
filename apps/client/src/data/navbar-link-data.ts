import { NavbarLinksType } from "@/types";
import { FormatToKebabCase } from "@/utils/formatToKebabCase";

export const NavbarLinkData: NavbarLinksType[] = [
  {
    id: "1",
    title: "Yangiliklar",
    sub_menu: [
      { id: "0", title: "Standard", path: "/news/standard" },
      { id: "1", title: "Foto", path: "/news/photo" },
      { id: "2", title: "Video", path: "/news/video" },
    ],
  }
];
