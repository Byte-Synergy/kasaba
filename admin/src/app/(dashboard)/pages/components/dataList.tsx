'use client'

import TableComponent from "@/components/share/list-table/tableComponent"
import TableHeader from "@/components/share/list-table/tableHeader"
import TableSpan from "@/components/share/list-table/tableSpan"
import DataListItem from "./dataListItem";
import TableBody from "@/components/share/list-table/tableBody";
import { useState } from "react";

interface TableHeaderDataType {
    label: string;
    name: string
}

const TableHeaderData: TableHeaderDataType[] = [
    {
        label: "name",
        name: "Sahifa nomi"
    },
    {
        label: "type",
        name: "sahifa turi"
    },
    {
        label: "count",
        name: "soni"
    },
    {
        label: "created_at",
        name: "vaqti"
    }
]

const DataList = ({ menuData }: {
    menuData: {
        type: "news" | "photo" | "text" | "document" | "member";
        id: number;
        name: string;
        sub_menus: {
            id: number;
            name: string;
            path: string;
            type: string;
            newsType: string;
            isPin: false,
            isVisible: false
        }[]
    }[]
}) => {

    return (
        <TableComponent className="border rounded-sm mt-5">
            <TableHeader>
                <div className="w-full grid grid-cols-6 py-2 border-b">
                    {
                        TableHeaderData.map(thd => (
                            <TableSpan key={thd.label} className={`col-span-1 first:col-span-2 first:text-start first:px-10 font-bold uppercase`} title={thd.name}>{thd.name}</TableSpan>
                        ))
                    }
                    <span className="col-span-1"></span>
                </div>
            </TableHeader>
            <TableBody className="w-full">
                {
                    menuData.map(td => (
                        <DataListItem step={0} data={td} />
                    ))
                }
            </TableBody>
        </TableComponent>
    )
}

export default DataList