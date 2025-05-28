// import { AppType } from "@/types/server";
// import { create } from "zustand";

// export type StoreType = {
//   pages: AppType["_routes"]["api"]["rest"]["menus"]["get"]["response"]["200"]["data"];
//   createPageData: {
//     languageCode?: string;
//     name?: string;
//     type?: string;
//     parentId?: number;
//     newsType?: string;
//   };
//   //   groupSettigns: {
//   //     groupId: string;
//   //     adMessageRemover: boolean;
//   //     joinMessageRemover: boolean;
//   //     leaveMessageRemover: boolean;
//   //     autoApprove: boolean;
//   //   }[];
//   //   groups: {
//   //     groupId: string;
//   //     title: string;
//   //     profilePhoto?: string | null;
//   //   }[];
//   //   channelSettigns: {
//   //     channelId: string;
//   //     autoApprove: boolean;
//   //   }[];
//   //   channels: {
//   //     channelId: string;
//   //     title: string;
//   //     profilePhoto?: string | null;
//   //   }[];
// };
// export type ActionType = {
//   setCreatePageData: (pageData: StoreType["createPageData"]) => void;
// };

// export const useStore = create<StoreType & ActionType>()((set, get) => ({
//   pages: [],
//   createPageData: {},
//   setCreatePageData: (pageData) =>
//     set((state) => ({
//       createPageData: {
//         ...state.createPageData,
//         ...pageData,
//       },
//     })),
// }));
