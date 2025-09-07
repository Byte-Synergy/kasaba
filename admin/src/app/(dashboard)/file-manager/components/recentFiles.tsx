'use client'

import TableComponent from "@/components/share/list-table/tableComponent"
import TableHeader from "@/components/share/list-table/tableHeader"
import TableSpan from "@/components/share/list-table/tableSpan"
// import DataListItem from "./dataListItem";
import TableBody from "@/components/share/list-table/tableBody";
import { useState } from "react";
import FileItem from "./fileItem";

interface TableHeaderDataType {
    label: string;
    name: string
}

const TableHeaderData: TableHeaderDataType[] = [
    {
        label: "name",
        name: "File Name"
    },
    {
        label: "type",
        name: "Category"
    },
    {
        label: "size",
        name: "Size"
    },
    {
        label: "created_at",
        name: "Date Modified"
    },
    {
        label: "action",
        name: "Action"
    },

]

export interface RecentFileDataType {
    fileName: string;
    category: "Video" | "Image" | "Document";
    size: string;
    dateModified: string;
}

export const recentFilesData: RecentFileDataType[] = [
    {
        fileName: "Video_947954.mp4",
        category: "Video",
        size: "89 MB",
        dateModified: "12 Jan, 2027",
    },
    {
        fileName: "Travel.jpeg",
        category: "Image",
        size: "5 MB",
        dateModified: "19 Feb, 2027",
    },
    {
        fileName: "Document.pdf",
        category: "Document",
        size: "10 MB",
        dateModified: "15 Mar, 2027",
    },
    {
        fileName: "Video_947954_028.mp4",
        category: "Video",
        size: "489 MB",
        dateModified: "29 Apr, 2027",
    },
    {
        fileName: "Mountain.png",
        category: "Image",
        size: "8 MB",
        dateModified: "20 May, 2027",
    },
    {
        fileName: "CV.pdf",
        category: "Document",
        size: "12 MB",
        dateModified: "17 Jun, 2027",
    },
    {
        fileName: "Video_09783_882943.mp4",
        category: "Video",
        size: "309 MB",
        dateModified: "27 Jul, 2027",
    },
];

const RecentFiles = () => {
    return (
        <TableComponent className="">
            <TableHeader>
                <div className="w-full grid grid-cols-6 py-2 border-b">
                    {
                        TableHeaderData.map(thd => (
                            <TableSpan key={thd.label} className={`col-span-1 first:col-span-2 first:text-start first:px-5 font-bold uppercase`} title={thd.name}>{thd.name}</TableSpan>
                        ))
                    }
                </div>
            </TableHeader>
            <TableBody className="w-full">
                {
                    recentFilesData.map(td => (
                        <FileItem step={0} fileData={td} />
                    ))
                }
            </TableBody>
        </TableComponent>
    )
}

export default RecentFiles