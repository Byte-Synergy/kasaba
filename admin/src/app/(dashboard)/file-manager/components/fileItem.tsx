"use client";

import { useLayoutEffect, useRef, useState } from "react";
import TableSpan from "@/components/share/list-table/tableSpan";
import { Badge } from "@/components/ui/badge";
import { Edit2, Eye, FileChartColumn, LayoutList, NotepadTextIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import { useModalStore } from "@/hooks/useModal";
import { getMenus } from "@/actions/menu";
import { cn } from "@/libs/utils";
import DeleteFnModal from "@/components/modals/deleteFnModal";
import ModalComponent from "@/components/modals/modal";
import { RecentFileDataType } from "./recentFiles";

// Ruxsat etilgan turlar
const MENU_TYPES = ["news", "photo", "text", "document", "member"] as const;
type MenuType = typeof MENU_TYPES[number];

// Serverdan keladigan child
type RawChild = {
    id: number;
    name: string;
    path: string;
    type: string;
    newsType: string;
    isPin: boolean;
    isVisible: boolean;
    sub_menus?: RawChild[];
};

// UI’da ishlatiladigan node
type MenuNode = {
    id: number;
    name: string;
    type: MenuType;
    sub_menus?: RawChild[];
};

type Props = {
    step: number;
    fileData: RecentFileDataType
};

// type ni toraytirish
function asMenuType(t: string): MenuType {
    return (MENU_TYPES as readonly string[]).includes(t)
        ? (t as MenuType)
        : "text";
}

// normalizator
function normalizeToMenuNode(raw: RawChild): MenuNode {
    return {
        id: raw.id,
        name: raw.name,
        type: asMenuType(raw.type),
        sub_menus: raw.sub_menus ?? [],
    };
}

const FileItem = ({ step, fileData }: Props) => {
    const { openModal } = useModalStore();

    const onDeleteHandle = (id: number) => {
        console.log("deleted item id: ", id);
    }

    return (
        <>
            {/* Qator */}
            <div className="w-full grid items-center grid-cols-6 border-b py-2 last:border-none group" role="list">
                {/* Name + chevron */}
                <TableSpan className="col-span-2 pl-5">
                    <div
                        className="flex items-center gap-2"
                        style={{ paddingLeft: `${step * 12}px` }}
                    >
                        <FileChartColumn size={16} />
                        <Link href={"/"} className="truncate font-medium text-sm hover:underline group-hover:text-blue-500 group-hover:pl-2">{fileData.fileName}</Link>
                    </div>
                </TableSpan>

                <TableSpan className="col-span-1 shrink-0">
                    <Badge variant={"light"} color={fileData.category ? "primary" : "light"} className="px-2 py-0.5 text-sm">
                        <Link href={`/pages`} className="hover:underline">
                            {fileData.category ? fileData.category : "webp"}
                        </Link>
                    </Badge>
                </TableSpan>

                <TableSpan className="col-span-1 shrink-0 text-sm">
                    {fileData.size ?? 1}
                </TableSpan>
                <TableSpan className="col-span-1 shrink-0 text-sm">11/12/2024</TableSpan>

                <TableSpan className="col-span-1 shrink-0 flex items-center justify-center gap-2 pr-2">
                    <button
                        className="p-1 rounded-sm border hover:bg-gray-50 cursor-pointer"
                        title="Ma'lumotni tahrirlash"
                    >
                        <Eye size={16} />
                    </button>
                    <button
                        className="p-1 rounded-sm border cursor-pointer group-hover:bg-red-600 group-hover:border-red-600 group"
                        title="Ma'lumotni o'chirish"
                        role="button"
                        onClick={(e) => {
                            e.stopPropagation()
                            openModal("deleteFn")
                        }}
                    >
                        <Trash2 size={16} className="text-red-600 group-hover:text-white" />
                    </button>
                </TableSpan>
            </div>

            {/* Delete va Edit modallari */}
            <ModalComponent>
                <DeleteFnModal onClickHandle={() => { }}>
                    <h3 className="text-slate-900 text-lg font-semibold">Are you sure you want to delete it?</h3>
                    <p className="text-slate-600 text-sm mt-2">Are you sure you want to delete it? This action cannot be undone.</p>
                </DeleteFnModal>
            </ModalComponent>
        </>
    );
};

export default FileItem;