"use client";

import { formatDate } from "@/utils";
import { formatTime } from "@/utils/formatDate";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(formatDate(new Date()));

    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white text-sm font-semibold text-end p-1 rounded-md z-10 ">
      <div>{time}</div>
      <div>{formattedDate}</div>
    </div>
  );
}
