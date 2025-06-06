"use client";
import { CurrencyType } from "@/types/currency";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Curreny = ({ currency }: { currency: CurrencyType[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!currency || currency.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % currency.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currency]);

  return (
    <div className="relative w-max h-[40px] flex items-center overflow-hidden max-md:w-1/2">
      <AnimatePresence mode="wait">
        {currency.map((item, i) =>
          i === index ? (
            <motion.div
              key={item.Ccy}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex gap-2"
            >
              <div className="size-[30px] rounded-full overflow-hidden">
                <Image
                  width={30}
                  height={30}
                  src={`/img/${item.Ccy}.png`}
                  alt={item.Ccy}
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-[18.20px] max-md:text-black">
                  {item.Rate}
                </p>
                {+item.Diff > 0 ? (
                  <p className="text-xs font-medium leading-none flex items-center gap-x-1 text-[#16cc53]">
                    <ChevronUp className="w-3 h-3" />
                    <span>{item.Diff}</span>
                  </p>
                ) : (
                  <p className="text-xs font-medium leading-none flex items-center gap-x-1 text-[#dd3333]">
                    <ChevronDown className="w-3 h-3" />
                    <span>{item.Diff}</span>
                  </p>
                )}
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default Curreny;
