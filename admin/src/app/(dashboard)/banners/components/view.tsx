"use client";

import { AppType } from "@/types/server";
import PageViewHeader from "./header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteBanner } from "@/actions/banner";
import BannerUploader from "./banner-upload-modal";
import BannerList from "./banner-list";
import { cn } from "@/libs/utils";

export default function PageView({
  fitBanner,
  fullBanner,
  hero1Banner,
  hero2Banner
}: {
  fitBanner: AppType["~Routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
  fullBanner: AppType["~Routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
  hero1Banner: AppType["~Routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
  hero2Banner: AppType["~Routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
}) {
  const router = useRouter();

  const [fitBanners, setFitBanners] = useState(fitBanner.map(b => b.file.href));
  const [fullBanners, setFullBanners] = useState(fullBanner.map(b => b.file.href));
  const [hero1Banners, setHero1Banners] = useState(hero1Banner.map(b => b.file.href));
  const [hero2Banners, setHero2Banners] = useState(hero2Banner.map(b => b.file.href));

  const deleteBannerImage = async (bannerHref: string) => {
    const allBanners = [...fitBanner, ...fullBanner];
    const banner = allBanners.find(b => b.file.href === bannerHref);
    if (!banner) return alert("O'chirishda xatolik yuz berdi.");
    await deleteBanner(banner.id);
    router.refresh();
  };

  const bannerConfigs = [
    { title: "link", type: "fit", list: fitBanners, setList: setFitBanners },
    { title: "hero-1", type: "hero1", list: hero1Banners, setList: setHero1Banners },
    { title: "hero-2", type: "hero2", list: hero2Banners, setList: setHero2Banners },
    { title: "horizontal", type: "full", list: fullBanners, setList: setFullBanners },
  ];

  return (
    <section className="h-full">
      <div className="container flex flex-wrap gap-3 p-5">
        {bannerConfigs.map(({ title, type, list, setList }) => (
          <div
            key={type}
            className={cn(`h-full w-full rounded-lg bg-white p-5 shadow-lg`, type === "full" ? "" : "max-w-[310px]", type.includes("hero") ? "max-w-[410px]" : "" )}
          >
            <PageViewHeader type={title as "link" | "horizontal" | "hero-1" | "hero-2"} />
            <div className="mt-10 flex flex-col gap-5">
              <BannerUploader
                type={type as any}
                onUpload={(url, file) => setList(prev => [...prev, url])}
              />
              <BannerList
                banners={list}
                onDelete={deleteBannerImage}
                type={type as "fit" | "full" | "hero1" | "hero2"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}