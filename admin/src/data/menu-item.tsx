import { PiFlagBannerFoldFill } from "react-icons/pi";
import { IoHelpBuoy, IoNewspaper } from "react-icons/io5";
import { FaPager } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { FcNews } from "react-icons/fc";
import { FileBox } from "lucide-react";

export type MenuItemType = {
  pathname?: string;
  content: string;
  icon?: React.ReactElement<any, IconType>;
  children?: MenuItemType[];
  exact?: boolean;
  isNew: boolean
};

export const menuItems: MenuItemType[] = [
  {
    pathname: "/",
    content: "Dashboard",
    icon: <FaChartPie />,
    exact: true,
    isNew: false
  },
  {
    pathname: "/pages",
    content: "Sahifalar",
    icon: <FaPager />,
    exact: true,
    isNew: false
  },
  {
    content: "Yangiliklar",
    icon: <IoNewspaper />,
    children: [
      {
        exact: true,
        content: "Standard",
        pathname: "/news/standard",
        isNew: false
      },
      {
        pathname: "/news/photo",
        content: "Foto",
        isNew: false
      },
      {
        pathname: "/news/video",
        content: "Video",
        isNew: false
      },
      {
        pathname: "/news/archive",
        content: "Arxiv",
        isNew: true
      },
    ],
    isNew: false
  },
  {
    pathname: "/places",
    content: "Interaktiv hududlar",
    icon: <FaPager />,
    exact: true,
    isNew: false
  },
  {
    pathname: "/banners",
    content: "Bannerlar",
    icon: <PiFlagBannerFoldFill />,
    exact: true,
    isNew: false
  },
  {
    pathname: "/file-manager",
    content: "File manajer",
    icon: <FileBox />,
    exact: true,
    isNew: true
  },
  // {
  //   pathname: "/social-networks",
  //   content: "Ijtimoiy tarmoqlar",
  //   icon: <FaPager />,
  //   exact: true,
  // },
  // {
  //   pathname: "/partners",
  //   content: "Hamkorlar",
  //   icon: <FaPager />,
  //   exact: true,
  // },
];

export const supportItems: MenuItemType[] = [
  {
    pathname: "/support",
    content: "Support",
    icon: <IoHelpBuoy />,
    exact: true,
    isNew: true
  },
]