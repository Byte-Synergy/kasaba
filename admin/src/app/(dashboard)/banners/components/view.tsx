"use client";

import { AppType } from "@/types/server";
import { BannerApi } from "@/utils/api/banner";
import React, { useState } from "react";
import PageViewHeader from "./header";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Dropzone from "react-dropzone";
import Image from "next/image";
import { deleteBanner } from "@/actions/banner";
import { useRouter } from "next/navigation";

export default function PageView({
  fitBanner,
  fullBanner,
}: {
  fitBanner: AppType["~Routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
  fullBanner: AppType["~Routes"]["api"]["rest"]["banner"]["get"]["response"]["200"];
}) {
  const router = useRouter();

  const [fitBanners, setFitBanners] = useState<string[]>(
    fitBanner.map((banner) => banner.file.href),
  );
  const [fitBannersFile, setFitBannersFile] = useState<File[]>([]);
  const [fullBanners, setFullBanners] = useState<string[]>(
    fullBanner.map((banner) => banner.file.href),
  );
  const [fullBannersFile, setFullBannersFile] = useState<File[]>([]);
  const [fitBannerModalOpen, setFitBannerModalOpen] = useState(false);
  const [fitBannerUrl, setFitBannerUrl] = useState("");
  const [fitBannerFile, setFitBannerFile] = useState<File | null>(null);
  const [fullBannerModalOpen, setFullBannerModalOpen] = useState(false);
  const [fullBannerUrl, setFullBannerUrl] = useState("");
  const [fullBannerFile, setFullBannerFile] = useState<File | null>(null);

  const deleteBannerImage = async (bannerHref: string) => {
    const banners = [...fitBanner, ...fullBanner];

    const banner = banners.find((banner) => banner.file.href === bannerHref);

    if (!banner) return alert("O'chirishda xatolik yuz berdi.");
    await deleteBanner(banner.id);
    router.refresh();
  };

  return (
    <>
      <section className="h-full">
        <div className="container flex min-h-full flex-col gap-5 p-5 md:flex-row">
          <div className="h-full w-full max-w-[350px] rounded-lg bg-white p-5 shadow-lg shadow-slate-200">
            <PageViewHeader title="Bannerlar" />
            <div className="mt-10 flex flex-col gap-5">
              <Dialog
                open={fitBannerModalOpen}
                onOpenChange={setFitBannerModalOpen}
              >
                <DialogTrigger asChild>
                  <Button variant="outline">+ Qo‘shish</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Yangi banner qo‘shish</DialogTitle>
                  <Dropzone
                    accept={{
                      "image/png": [".png"],
                      "image/jpeg": [".jpg", ".jpeg"],
                    }}
                    multiple={false}
                    onDrop={(e) => {
                      setFitBannerFile(e[0]);
                    }}
                  >
                    {({ getRootProps, getInputProps, isDragActive }) => (
                      <div
                        {...getRootProps()}
                        className="flex aspect-square w-full items-center justify-center border border-dashed border-gray-400"
                      >
                        <input {...getInputProps()} />
                        {fitBannerFile ? (
                          <Image
                            src={URL.createObjectURL(fitBannerFile)}
                            width={1080}
                            height={1080}
                            alt="Preview"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <p>
                            {isDragActive ? "Faylni tashlang" : "Rasm yuklang"}
                          </p>
                        )}
                      </div>
                    )}
                  </Dropzone>
                  <input
                    type="text"
                    placeholder="URL kiriting"
                    value={fitBannerUrl}
                    onChange={(e) => setFitBannerUrl(e.target.value)}
                    className="mt-4 w-full border px-3 py-2"
                  />
                  <DialogClose asChild>
                    <Button
                      onClick={async () => {
                        if (!fitBannerFile || !fitBannerUrl) return;
                        await BannerApi.create({
                          type: "fit",
                          file: fitBannerFile,
                          url: fitBannerUrl,
                        });
                        setFitBanners([
                          ...fitBanners,
                          URL.createObjectURL(fitBannerFile),
                        ]);
                        setFitBannersFile([...fitBannersFile, fitBannerFile]);
                        setFitBannerModalOpen(false);
                        setFitBannerFile(null);
                        setFitBannerUrl("");
                      }}
                      className="mt-4 w-full"
                    >
                      {"Saqlash"}
                    </Button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <div className="mt-4 grid gap-2">
                {React.Children.toArray(
                  fitBanners.map((banner, key) => (
                    <div className="group relative" key={key}>
                      <Image
                        width={1080}
                        height={1080}
                        alt="Banner"
                        src={banner}
                        key={key}
                        className="aspect-square size-full object-cover"
                      />
                      <button
                        className="absolute top-2 right-2 hidden cursor-pointer rounded bg-red-500 px-2 py-1 text-xs text-white group-hover:block"
                        onClick={() => deleteBannerImage(banner)}
                      >
                        O'chirish
                      </button>
                    </div>
                  )),
                )}
              </div>
            </div>
          </div>
          <div className="h-full w-full rounded-lg bg-white p-5 shadow-lg shadow-slate-200">
            <PageViewHeader title="Bannerlar" />
            <div className="mt-10 flex flex-col gap-5">
              <Dialog
                open={fullBannerModalOpen}
                onOpenChange={setFullBannerModalOpen}
              >
                <DialogTrigger asChild>
                  <Button variant="outline">+ Qo‘shish</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Yangi banner qo‘shish</DialogTitle>
                  <Dropzone
                    accept={{
                      "image/png": [".png"],
                      "image/jpeg": [".jpg", ".jpeg"],
                    }}
                    multiple={false}
                    onDrop={(e) => {
                      setFullBannerFile(e[0]);
                    }}
                  >
                    {({ getRootProps, getInputProps, isDragActive }) => (
                      <div
                        {...getRootProps()}
                        className="flex h-[70px] w-full items-center justify-center border border-dashed border-gray-400"
                      >
                        <input {...getInputProps()} />
                        {fullBannerFile ? (
                          <Image
                            src={URL.createObjectURL(fullBannerFile)}
                            width={1920}
                            height={300}
                            alt="Preview"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <p>
                            {isDragActive ? "Faylni tashlang" : "Rasm yuklang"}
                          </p>
                        )}
                      </div>
                    )}
                  </Dropzone>
                  <input
                    type="text"
                    placeholder="URL kiriting"
                    value={fullBannerUrl}
                    onChange={(e) => setFullBannerUrl(e.target.value)}
                    className="mt-4 w-full border px-3 py-2"
                  />
                  <DialogClose asChild>
                    <Button
                      onClick={async () => {
                        if (!fullBannerFile || !fullBannerUrl) return;
                        await BannerApi.create({
                          type: "full",
                          file: fullBannerFile,
                          url: fullBannerUrl,
                        });
                        setFullBanners([
                          ...fullBanners,
                          URL.createObjectURL(fullBannerFile),
                        ]);
                        setFullBannersFile([
                          ...fullBannersFile,
                          fullBannerFile,
                        ]);
                        setFullBannerModalOpen(false);
                        setFullBannerFile(null);
                        setFullBannerUrl("");
                      }}
                      // disabled={fullBannerLoading}
                      className="mt-4 w-full"
                    >
                      {"Saqlash"}
                    </Button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <div className="mt-4 grid gap-2">
                {React.Children.toArray(
                  fullBanners.map((banner, key) => (
                    <div className="group relative" key={key}>
                      <Image
                        width={1920}
                        height={300}
                        alt="Banner"
                        src={banner}
                        key={key}
                        className="h-[70px] w-full object-cover"
                      />
                      <button
                        className="absolute top-2 right-2 hidden cursor-pointer rounded bg-red-500 px-2 py-1 text-xs text-white group-hover:block"
                        onClick={() => deleteBannerImage(banner)}
                      >
                        O'chirish
                      </button>
                    </div>
                  )),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
