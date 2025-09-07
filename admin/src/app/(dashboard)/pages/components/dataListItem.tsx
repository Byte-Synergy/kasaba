"use client";

import { useLayoutEffect, useRef, useState } from "react";
import TableSpan from "@/components/share/list-table/tableSpan";
import { Badge } from "@/components/ui/badge";
import { Edit2, LayoutList, NotepadTextIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import { useModalStore } from "@/hooks/useModal";
import { getMenus } from "@/actions/menu";
import { cn } from "@/libs/utils";
import DeleteFnModal from "@/components/modals/deleteFnModal";
import ModalComponent from "@/components/modals/modal";

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
    data: MenuNode;
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

const DataListItem = ({ step, data }: Props) => {
    const [open, setOpen] = useState(false);
    const [children, setChildren] = useState<MenuNode[]>([]);
    const [loadingChildren, setLoadingChildren] = useState(false);
    const hasChildren = (data.sub_menus?.length ?? 0) > 0;

    const { openModal } = useModalStore();

    // Height o'lchash
    const wrapRef = useRef<HTMLDivElement>(null);
    const [measuredH, setMeasuredH] = useState(0);

    useLayoutEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        const measure = () => setMeasuredH(el.scrollHeight);
        measure();

        const ro = new ResizeObserver(measure);
        ro.observe(el);

        return () => ro.disconnect();
    }, [open, children]);

    // Toggle va children yuklash
    const handleToggle = async () => {
        const next = !open;
        setOpen(next);

        if (next && hasChildren && children.length === 0 && !loadingChildren) {
            try {
                setLoadingChildren(true);
                const { data: fetched, error } = await getMenus({
                    limit: 10,
                    page: 1,
                    filter: { parentId: data.id, orderBy: "desc" },
                });

                if (error) {
                    console.error("Ichki sahifalarni olishda xatolik:", error);
                } else {
                    const rawList: unknown =
                        (fetched && (fetched.data || fetched.items || fetched.list)) ??
                        fetched;

                    const arr = Array.isArray(rawList) ? rawList : [];
                    const normalized: MenuNode[] = arr.map((item: RawChild) =>
                        normalizeToMenuNode(item)
                    );

                    setChildren(normalized);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoadingChildren(false);
            }
        }
    };

    const onDeleteHandle = (id: number) => {
        console.log("deleted item id: ", id);
    }

    return (
        <>
            {/* Qator */}
            <div className="w-full grid items-center grid-cols-6 border-b py-2 last:border-none" role="list"
                onClick={(e) => {
                    e.stopPropagation()
                    handleToggle()
                }}>
                {/* Name + chevron */}
                <TableSpan className="col-span-2 pl-2">
                    <div
                        className="flex items-center gap-2"
                        style={{ paddingLeft: `${step * 12}px` }}
                    >
                        {hasChildren ? (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleToggle()
                                }}
                                aria-expanded={open}
                                className="size-6 grid place-items-center rounded hover:bg-gray-100"
                                title={open ? "Yopish" : "Ochish"}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={`size-4 transition-transform ${open ? "rotate-90" : ""
                                        }`}
                                >
                                    <path d="M9.29 6.71a1 1 0 0 1 1.42 0l4.59 4.59a1 1 0 0 1 0 1.41l-4.59 4.59a1 1 0 1 1-1.42-1.41L13.17 12 9.29 8.12a1 1 0 0 1 0-1.41z" />
                                </svg>
                            </button>
                        ) : (
                            <span className="inline-block size-6" />
                        )}

                        <span className={cn("inline-block p-2  rounded-md border", data.type ? "bg-[#2b7fff]/25 border-[#2b7fff] text-[#2b7fff]" : "bg-gray-50")}>
                            {
                                data.type ? (
                                    <NotepadTextIcon size={24} className={""} />
                                ) : (
                                    <LayoutList />
                                )
                            }
                        </span>
                        <span className="truncate font-medium">{data.name}</span>
                    </div>
                </TableSpan>

                <TableSpan className="col-span-1 shrink-0">
                    <Badge variant={"light"} color={data.type ? "primary" : "light"}>
                        <Link href={`/pages`} className="hover:underline">
                            {data.type ? data.type : "webp"}
                        </Link>
                    </Badge>
                </TableSpan>

                <TableSpan className="col-span-1 shrink-0">
                    {data.sub_menus?.length ?? 1} ta
                </TableSpan>
                <TableSpan className="col-span-1 shrink-0">11/12/2024</TableSpan>

                <TableSpan className="col-span-1 shrink-0 flex items-center justify-end gap-2 pr-2">
                    <button
                        className="px-2 py-2 rounded-md border hover:bg-gray-50 cursor-pointer"
                        title="Ma'lumotni tahrirlash"
                    >
                        <Edit2 size={16} />
                    </button>
                    <button
                        className="px-2 py-2 rounded-md border border-red-600 bg-red-600 hover:bg-red-500/75 cursor-pointer"
                        title="Ma'lumotni o'chirish"
                        role="button"
                        onClick={(e) => {
                            e.stopPropagation()
                            openModal("deleteFn")
                        }}
                    >
                        <Trash2 size={16} className="text-white" />
                    </button>
                    {/* <DeleteFnModal onClickHandle={() => onDeleteHandle(data.id)}>
                        <h3 className="text-slate-900 text-lg font-semibold">Are you sure you want to delete it?</h3>
                        <p className="text-slate-600 text-sm mt-2">Are you sure you want to delete it? This action cannot be undone.</p>
                    </DeleteFnModal> */}
                </TableSpan>
            </div>

            {/* Bolalar (smooth ochilish) */}
            {hasChildren && (
                <div
                    className="overflow-hidden transition-[height] duration-300 ease-in-out border-b last:border-none"
                    style={{ height: open ? measuredH : 0 }}
                >
                    <div ref={wrapRef}>
                        {loadingChildren && (
                            <div className="px-4 py-2 text-sm text-gray-500">
                                Yuklanmoqda...
                            </div>
                        )}
                        {!loadingChildren &&
                            children.map((child) => (
                                <DataListItem key={child.id} step={step + 1} data={child} />
                            ))}
                    </div>
                </div>
            )}

            {/* Delete va Edit modallari */}
            <ModalComponent>
                <DeleteFnModal onClickHandle={() => onDeleteHandle(data.id)}>
                    <h3 className="text-slate-900 text-lg font-semibold">Are you sure you want to delete it?</h3>
                    <p className="text-slate-600 text-sm mt-2">Are you sure you want to delete it? This action cannot be undone.</p>
                </DeleteFnModal>
            </ModalComponent>
        </>
    );
};

export default DataListItem;