"use client";

import { useState, useLayoutEffect, useRef } from "react";
import TableSpan from "@/components/share/list-table/tableSpan";
import { Edit2, Trash2, Plus, MapPinned, MapPin } from "lucide-react";
import { TableDataType } from "./view";
import { PlaceApi } from "../../../../utils/api/place";

type Props = {
    step: number;
    placeData: TableDataType; // { id, name, areas, ... }
};

type AreaChild = {
    id: number;
    address: string;
    members: number;
};

type ApiListResp<T> = {
    count: number;
    total: number;
    data: T[];
};

const DataListItem = ({ step, placeData }: Props) => {
    const [open, setOpen] = useState(false);
    const [children, setChildren] = useState<AreaChild[]>([]);
    const [loading, setLoading] = useState(false);

    const hasChildren = !!placeData?.areas && Number(placeData.areas) > 0;

    // height animatsiya uchun
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

    async function fetchData(id: number) {
        try {
            setLoading(true);

            // API { count, total, data } qaytaradi
            const { data: resp, error } = await PlaceApi.getInteractiveAreasByFetch({}, id);
            if (error) {
                console.error("getInteractiveAreas error:", error);
                return;
            }

            const payload = resp as ApiListResp<any> | undefined;
            const list = Array.isArray(payload?.data) ? payload!.data : [];

            // Faqat kerakli maydonlar: id, address, membersCount -> members
            const normalized: AreaChild[] = list.map((item: any) => ({
                id: Number(item?.id),
                address: String(item?.address ?? ""),
                members: Number(item?.membersCount ?? 0),
            }));

            setChildren(normalized);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    const onToggle = () => {
        const next = !open;
        setOpen(next);
        if (next && hasChildren && children.length === 0 && !loading) {
            fetchData(placeData.id);
        }
    };

    return (
        <>
            {/* Qator (parent) */}
            <div className="w-full grid items-center grid-cols-7 border-b py-2">
                <TableSpan className="col-span-2 pl-2">
                    <div
                        className="flex items-center gap-2"
                        style={{ paddingLeft: `${step * 24}px` }}
                    >
                        {hasChildren ? (
                            <button
                                type="button"
                                onClick={onToggle}
                                aria-expanded={open}
                                className="size-6 grid place-items-center rounded hover:bg-gray-100"
                                title={open ? "Yopish" : "Ochish"}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={`size-4 transition-transform ${open ? "rotate-90" : ""}`}
                                >
                                    <path d="M9.29 6.71a1 1 0 0 1 1.42 0l4.59 4.59a1 1 0 0 1 0 1.41l-4.59 4.59a1 1 0 1 1-1.42-1.41L13.17 12 9.29 8.12a1 1 0 0 1 0-1.41z" />
                                </svg>
                            </button>
                        ) : (
                            <span className="inline-block size-6" />
                        )}
                        <span className={"p-2 border rounded-md bg-gray-50"}>
                            <MapPinned size={20} />
                        </span>
                        <span className="truncate font-medium">{placeData?.name}</span>
                    </div>
                </TableSpan>

                <TableSpan className="col-span-1 shrink-0">
                    {placeData?.areas}
                </TableSpan>
                <TableSpan className="col-span-1 shrink-0">56</TableSpan>
                <TableSpan className="col-span-1 shrink-0">11/12/2023</TableSpan>
                <TableSpan className="col-span-1 shrink-0">11/12/2023</TableSpan>

                <TableSpan className="col-span-1 shrink-0 flex items-center justify-end gap-2 pr-2">
                    <button
                        className="p-2 rounded-sm border border-black bg-black hover:bg-black/75 cursor-pointer text-white"
                        title="Interaktiv hudud qo‘shish"
                    >
                        <Plus size={16} />
                    </button>
                    <button
                        className="p-2 rounded-sm border border-gray-50 hover:bg-gray-50 cursor-pointer"
                        title="Tahrirlash"
                    >
                        <Edit2 size={16} />
                    </button>
                    <button
                        className="p-2 rounded-sm border border-red-600 bg-red-600 hover:bg-red-500/75 cursor-pointer"
                        title="O‘chirish"
                    >
                        <Trash2 size={16} className="text-white " />
                    </button>
                </TableSpan>
            </div>

            {/* Sublist — faqat ma'lumotlar (header yo‘q) */}
            {hasChildren && (
                <div
                    className="overflow-hidden transition-[height] duration-300 ease-in-out border-b last:border-none"
                    style={{ height: open ? measuredH : 0 }}
                >
                    <div ref={wrapRef}>
                        {loading && (
                            <div
                                className="px-4 py-2 text-sm text-gray-500"
                                style={{ paddingLeft: `${(step + 1) * 24}px` }}
                            >
                                Yuklanmoqda...
                            </div>
                        )}

                        {!loading &&
                            children.map((child) => (
                                <div
                                    key={child.id}
                                    className="grid grid-cols-7 items-center border-t py-2 first:border-none"

                                >
                                    <TableSpan className="col-span-2 pl-2">
                                        <div
                                            className="flex items-center gap-2"
                                            style={{ paddingLeft: `${(step + 1) * 24}px` }}
                                        >
                                            <span className="inline-block size-6" />
                                            <span className={"p-2 border rounded-md bg-gray-50"}>
                                                <MapPin size={20} />
                                            </span>
                                            <span className="truncate font-medium">{child.address}</span>
                                        </div>
                                    </TableSpan>

                                    <TableSpan className="col-span-1 shrink-0">
                                        {placeData?.areas}
                                    </TableSpan>
                                    <TableSpan className="col-span-1 shrink-0">{child.members}</TableSpan>
                                    <TableSpan className="col-span-1 shrink-0">11/12/2023</TableSpan>
                                    <TableSpan className="col-span-1 shrink-0">11/12/2023</TableSpan>

                                    <TableSpan className="col-span-1 shrink-0 flex items-center justify-end gap-2 pr-2">
                                        <button
                                            className="p-2 rounded-sm border border-gray-50 hover:bg-gray-50 cursor-pointer"
                                            title="Tahrirlash"
                                        >
                                            <Edit2 size={16} />
                                        </button>
                                        <button
                                            className="p-2 rounded-sm border border-red-600 bg-red-600 hover:bg-red-500/75 cursor-pointer"
                                            title="O‘chirish"
                                        >
                                            <Trash2 size={16} className="text-white " />
                                        </button>
                                    </TableSpan>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default DataListItem;