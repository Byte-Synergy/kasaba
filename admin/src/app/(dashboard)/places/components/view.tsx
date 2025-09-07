"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import TableComponent from "../../../../components/share/list-table/tableComponent";
import TableHeader from "../../../../components/share/list-table/tableHeader";
import TableSpan from "../../../../components/share/list-table/tableSpan";
import TableBody from "../../../../components/share/list-table/tableBody";
import DataListItem from "./DataListItem";

export interface TableDataType {
  id: number;
  name: string;
  areas: number;
}

export default function PageView({
  data,
  columns,
}: {
  columns: ColumnDef<Record<string, any>>[];
  data: Record<string, any>[];
}) {
  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableComponent className="border rounded-sm">
      <TableHeader>
        <div className={"grid grid-cols-7 text-start py-5 border-b rounded-sm"}>
          <TableSpan className="col-span-2 text-start pl-10 font-bold uppercase">Hududlar</TableSpan>
          <TableSpan className="col-span-1 font-bold uppercase">Hududlar soni</TableSpan>
          <TableSpan className="col-span-1 font-bold uppercase">A'zolar</TableSpan>
          <TableSpan className="col-span-1 font-bold uppercase">Qo'shilgan vaqti</TableSpan>
          <TableSpan className="col-span-1 font-bold uppercase">Yangilangan vaqti</TableSpan>
          <TableSpan className="col-span-1 font-bold uppercase"></TableSpan>
        </div>
      </TableHeader>
      <TableBody className="">
        {
          data.map(p => (
            <DataListItem placeData={p} step={0} key={p.id} />
          ))
        }
      </TableBody>
    </TableComponent>
  );
}
