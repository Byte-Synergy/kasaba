import { PiFlagBannerFoldFill } from "react-icons/pi";
import { IoNewspaper } from "react-icons/io5";
import { FaPager } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type MenuItemType = {
  pathname?: string;
  content: string;
  icon?: React.ReactElement<any, IconType>;
  children?: MenuItemType[];
  exact?: boolean;
};

export const menuItems: MenuItemType[] = [
  {
    pathname: "/",
    content: "Dashboard",
    icon: <FaChartPie />,
    exact: true,
  },
  {
    pathname: "/pages",
    content: "Sahifalar",
    icon: <FaPager />,
    exact: true,
  },
  {
    content: "Yangiliklar",
    icon: <IoNewspaper />,
    children: [
      {
        exact: true,
        content: "Standard",
        pathname: "/news/standard",
      },
      {
        pathname: "/news/photo",
        content: "Foto",
      },
      {
        pathname: "/news/video",
        content: "Video",
      },
      {
        pathname: "/news/archive",
        content: "Arxiv",
      },
    ],
  },
  {
    pathname: "/places",
    content: "Interaktiv hududlar",
    icon: <FaPager />,
    exact: true,
  },
  {
    pathname: "/banners",
    content: "Bannerlar",
    icon: <PiFlagBannerFoldFill />,
    exact: true,
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
