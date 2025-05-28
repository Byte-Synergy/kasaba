"use client";

import "./calendar.css";

import { DateTime } from "luxon";
import { useEffect, useMemo, useState } from "react";
import { NewsApi } from "@/utils/newsApi";
import { NewsDataType, NewsFilter } from "@/types";
import dynamic from "next/dynamic";
import Link from "../link";
import { useParams } from "next/navigation";
import { Locale } from "@/configs/i18n";

const CalendarDynamic = dynamic(() => import("react-calendar"), { ssr: false });

const fetchEvents = async (filter: NewsFilter) => {
  try {
    const res = await NewsApi.getNewsList(filter);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const uzbekMonths = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

const wDays = {
  uz: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"], // Yakshanba, Dushanba, Seshanba, Chorshanba, Payshanba, Juma, Shanba
  "uz-cyrl": ["Яш", "Дш", "Сш", "Чш", "Пш", "Жм", "Шн"], // Якшанба, Душанба, Сешанба, Чоршанба, Пайшанба, Жума, Шанба
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], // Воскресенье, Понедельник, Вторник, Среда, Четверг, Пятница, Суббота
  en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], // Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
};

const EventCalendar = ({
  archive_label,
  search_label,
}: {
  search_label: string;
  archive_label: string;
}) => {
  const [events, setEvents] = useState<NewsDataType[]>([]);
  const { lang } = useParams<{ lang: Locale }>();
  useEffect(() => {
    fetchEvents({
      page: 1,
      limit: 50,
      filter: { type: ["standard"], isArchive: true },
    }).then((res) => {
      setEvents(res);
    });
  }, []);

  const highlightedDates = useMemo(() => {
    return new Set(
      events?.map(
        (event) => new Date(event.createdAt).toISOString().split("T")[0]
      )
    );
  }, [events]);

  const [date, setDate] = useState(new Date());
  const [data, setData] = useState<any[]>([]);

  return (
    <div className="flex flex-col gap-y-2 w-full py-4 px-5 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <h3 className="w-full py-3 px-4 bg-[#ff8400]/90 text-white text-center text-lg font-bold leading-tight">
        {archive_label}
      </h3>
      <CalendarDynamic
        onChange={(value) => setDate(value as Date)}
        value={date}
        formatMonthYear={(_, date) =>
          `${uzbekMonths[date.getMonth()]} ${date.getFullYear()}`
        }
        formatShortWeekday={(_, date) => wDays[lang][date.getDay()]}
        className={"w-full"}
        // tileContent={({ date }) => {
        //   const dateString = date.toISOString().split("T")[0];
        //   return highlightedDates.has(dateString) ? (
        //     <div className="w-4 h-1 bg-black mx-auto rounded"></div>
        //   ) : null;
        // }}
      />
      <Link
        lang={lang}
        className="w-full py-2 px-3 bg-[#ff8400]/90 text-white text-center"
        href={
          `/news/archive/` + DateTime.fromJSDate(date).toFormat("yyyy-MM-dd")
        }
      >
        {search_label}
      </Link>
    </div>
  );
};

export default EventCalendar;
