"use client";

import { Option } from "@/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SelectProps {
  options: Option[];
  selected?: string;
  onChange: (option: Option) => void;
  id: string;
  select_application_type_label:string
}

export default function Select({
  options,
  selected,
  onChange,
  select_application_type_label,
  id,
}: SelectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className="relative select-container" id={id} ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full cursor-pointer flex py-2 px-3 text-left bg-zinc-100 border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
      >
        <p className="w-full font-medium text-base">{selected|| select_application_type_label}</p>
        <Image src={"/icon/arrow-down.svg"} alt="icon" width={20} height={20} />
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-hidden font-normal text-base">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="cursor-pointer select-none relative py-2 pl-3 pr-4 hover:bg-blue-100"
              data-value={option.value}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
