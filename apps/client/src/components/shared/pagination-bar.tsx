import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type Props = {
  prev: () => void;
  next: () => void;
  currentPage: number;
  totalPages: number;
};

function PaginationBar({ prev, next, currentPage, totalPages }: Props) {
  return (
    <Pagination className="my-4 w-full">
      <PaginationContent className="flex gap-5">
        <PaginationItem>
          <button
            className="group flex items-center justify-center h-11 w-11 cursor-pointer select-none bg-gray-300 hover:bg-white "
            onClick={prev}
          >
            <FaArrowLeft className=" w-5 h-5 text-zinc-500 group-hover:text-black " />
          </button>
        </PaginationItem>
        <PaginationItem className={currentPage >= 3 ? "" : "hidden"}>
          <PaginationEllipsis className="flex items-center justify-center w-11 h-11 text-zinc-500 cursor-pointer select-none bg-gray-300 rounded-none" />
        </PaginationItem>
        <PaginationItem className={currentPage >= 2 ? "" : "hidden"}>
          <PaginationLink
            className="flex items-center justify-center w-11 h-11 cursor-pointer select-none font-montserrat font-bold text-2xl text-zinc-500 bg-gray-300 rounded-none"
            onClick={prev}
          >
            {currentPage - 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className=" rounded-none flex items-center justify-center w-16 h-16 bg-orange-500 border-none select-none font-montserrat font-bold text-4xl text-white"
            isActive
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem
          className={totalPages >= currentPage + 1 ? "" : "hidden"}
        >
          <PaginationLink
            className=" flex items-center justify-center w-11 h-11 cursor-pointer select-none font-montserrat font-bold text-2xl text-zinc-500 bg-gray-300 rounded-none"
            onClick={next}
          >
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem
          className={totalPages >= currentPage + 2 ? "" : "hidden"}
        >
          <PaginationEllipsis className="flex items-center justify-center w-11 h-11 text-zinc-500 cursor-pointer select-none bg-gray-300 rounded-none" />
        </PaginationItem>
        <PaginationItem>
          <button
            className="group flex items-center justify-center h-11 w-11 cursor-pointer select-none bg-gray-300 hover:bg-white "
            onClick={next}
          >
            <FaArrowRight className=" w-5 h-5 text-zinc-500 group-hover:text-black " />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationBar;
