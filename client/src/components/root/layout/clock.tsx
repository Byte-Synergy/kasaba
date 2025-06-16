"use client";

import { Locale } from "@/configs/i18n";
import { formatTime } from "@/utils/formatDate";
import { useTranslations } from "@/utils/translation-provider";
import { useEffect, useState } from "react";

export default function Clock({ lang }: { lang: Locale }) {
  const [time, setTime] = useState("");
  const [formattedDate, setFormattedDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const t = useTranslations()

  useEffect(() => {
    const currentDate = new Date();
    setFormattedDate({
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    });

    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white text-sm font-semibold text-end p-1 rounded-md z-10">
      <div>{time}</div>
      <div>
        {formattedDate.day} - {t(`month.${formattedDate.month}`)}, {formattedDate.year}
      </div>
    </div>
  );
}
