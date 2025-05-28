"use client";

import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import NoResultsFound from "@/components/shared/no-results-found";
import SearchCard from "@/components/shared/search-card";
import { Locale } from "@/configs/i18n";
import { AppType } from "@/types/server";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

function SearchPageClient({
  lang,
  no_result_description,
  no_result_label,
  loading_label,
  result_label,
  main_label,
  search_engine,
}: {
  loading_label: string;
  result_label: string;
  search_engine: string;
  main_label: string;
  lang: Locale;
  no_result_description: string;
  no_result_label: string;
}) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<
    AppType["_routes"]["api"]["rest"]["news"]["get"]["response"]["200"]["data"]
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setItems([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
        const sanitizedQuery = query
          .replace(/\\/g, "\\\\")
          .replace(/"/g, '\\"');

        const response = await fetch(
          `${API_BASE_URL}/api/rest/news?page=1&limit=10&filter=${encodeURIComponent(JSON.stringify({ q: sanitizedQuery, limit: 50, page: 1, lang }))}`
        );
        const result = await response.json();
        setItems(result.data || []);
      } catch (error) {
        console.error("Search error:", error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const clearInput = useCallback(() => {
    setQuery("");
    setItems([]);
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <div className=" max-md:hidden">
        <Breadcrumb main_label={main_label} data={[search_engine]} />
      </div>
      <div className=" w-3/4 max-md:w-full my-5">
        <div className=" flex items-center justify-between border gap-2 ">
          <Image
            src={"/icon/search-icon.svg"}
            width={24}
            height={24}
            alt="icon"
            className="ml-2"
          />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" outline-hidden w-full py-2"
          />
          {query && (
            <button onClick={clearInput} className=" py-2 px-3 ">
              ✕
            </button>
          )}
        </div>
        {loading ? (
          <p className="text-gray-500">{loading_label}...</p>
        ) : (
          <div>
            <div className="flex items-center justify-start gap-2 py-3">
              <p className="text-gray-500 font-medium text-sm">
                {result_label}:
              </p>
              <p className="text-black font-medium text-sm">
                {filteredItems.length}
              </p>
            </div>
            {filteredItems.length > 0 ? (
              <div className=" flex flex-col gap-4">
                {filteredItems.map((item) => (
                  <SearchCard
                    data={{
                      id: item.id.toString(),
                      news_type: item.type,
                      href: `/news/${item.type}/${item.path}`,
                      publishedAt: {
                        date: `${new Date(item.createdAt).getDate()}/${new Date(item.createdAt).getMonth() + 1}/${new Date(item.createdAt).getFullYear()}`,
                        time: `${new Date(item.createdAt).getHours()}:${new Date(item.createdAt).getMinutes()}`,
                      },
                      title: item.title,
                    }}
                    key={item.id}
                    query={query}
                  />
                ))}
              </div>
            ) : (
              <NoResultsFound
                no_result_label={no_result_label}
                no_result_description={no_result_description}
              />
            )}
          </div>
        )}
      </div>
    </Container>
  );
}

export default SearchPageClient;
