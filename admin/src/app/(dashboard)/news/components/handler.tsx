"use client";

import { LiaTimesSolid } from "react-icons/lia";
import { FaRegTrashAlt } from "react-icons/fa";
import { archiveNews, deleteNews } from "@/actions/news";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import getVideoId from "get-video-id";
import { extname } from "path";
import { v4 as uuidv4 } from "uuid";
import { NewsApi } from "@/utils/api/news";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Dropzone from "react-dropzone";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { DialogClose } from "@radix-ui/react-dialog";
import { ContentType } from "@/types/content";
import { AppType } from "@/types/server";

type Type = {
  title: string;
  description: string;
  categories: string[];
  type: string;
  isTop: boolean;
  languageCode: string;
  content: ContentType[];
};
type PageHandlerDataType =
  AppType["~Routes"]["api"]["rest"]["news"][":newsPath"]["get"]["response"]["200"];

type BaseProps = {
  title: string;
  type: string;
  categories: string[];
  data?: PageHandlerDataType;
};

type CreateModeProps = {
  mode: "create";
  path?: string;
} & BaseProps;

type UpdateModeProps = {
  mode: "update";
  path: string;
} & BaseProps;

type NewsHandlerProps = CreateModeProps | UpdateModeProps;

export default function NewsHandler({
  type,
  data,
  title,
  categories,
  mode,
  path,
}: NewsHandlerProps) {
  const {
    watch,
    handleSubmit,
    setValue,
    getValues,
    formState: { isSubmitting },
    register,
  } = useForm<Type>({
    defaultValues: data
      ? {
        type: data.type,
        isTop: data.isTop,
        content: data.content,
        categories: data.tags,
        description: data.description,
        title: data.title,
        languageCode: data.languageCode,
      }
      : {
        type,
        isTop: false,
        content: [],
        categories: [],
        // languageCode: ""
      },
  });

  const router = useRouter();
  const infoRef = useRef<NodeJS.Timeout | null>(null);

  const [categoryValue, setCategoryValue] = useState<string>("");
  const [files, setFiles] = useState<File[] | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [videoUrl, setVideUrl] = useState<null | string>(null);
  const [showEditButton, setShowEditButton] = useState<boolean>(false);

  const watchAllFields = watch();

  const onDrop = useCallback(
    (file: File[], index: number) => {
      const extension = extname(file[0].name);
      const filename = `${uuidv4()}${extension}`;

      const newFile = new File([file[0]], filename, {
        type: file[0].type,
      });
      if (!files) setFiles([newFile]);
      else setFiles([...files, newFile]);

      const fileUrl = URL.createObjectURL(newFile);

      addValueBlock(index, {
        type: "photo",
        fileId: filename,
        filePreview: fileUrl,
      });
    },
    [files],
  );

  const addCategory = () => {
    if (!categoryValue.length) return alert("Iltimos kategoriyani kiriting");
    if (categoryValue.length > 15)
      return alert("Eng ko'pida 15ta belgi bo'lishi kerak");
    setValue("categories", [
      ...new Set([...getValues("categories"), categoryValue]),
    ]);
    setCategoryValue("");
  };

  const handleInfo = (value: string | null, toTop: boolean = true) => {
    if (toTop) {
      const mainScroll = document.getElementById("main-scroll");
      mainScroll?.scrollTo({ top: 0 });
    }

    setInfo(value);

    // Clear previous timeout before setting a new one
    if (infoRef.current) {
      clearTimeout(infoRef.current);
    }

    infoRef.current = setTimeout(() => {
      setInfo(null);
      infoRef.current = null;
    }, 6000);
  };

  const addBlock = (data: ContentType) => {
    const content = getValues("content");
    setValue("content", [...content, data]);
  };

  const deleteBlock = (index: number) => {
    const content = getValues("content");

    setValue(
      "content",
      content.filter((_, key) => key !== index),
    );
  };

  const addValueBlock = (index: number, data: ContentType) => {
    const content = getValues("content");
    setValue(
      "content",
      content.map((content, key) => {
        if (index === key) return { ...content, ...data };

        return content;
      }),
    );
  };

  const submit: SubmitHandler<Type> = async (data) => {
    const contentPhoto = data.content.filter((data) => data.type === "photo");
    const contentVideoUrl = data.content.filter(
      (data) => data.type === "video-url",
    );
    const contentText = data.content.filter((data) => data.type === "text");

    if (type === "standard") {
      if (!(contentText.length >= 1))
        return handleInfo("Kamida bitta matn habar bo'lishi shart");
      const isEmptyTxt = contentText.find(
        (data) => !(data.type === "text" && data.value),
      );
      if (isEmptyTxt)
        return handleInfo("Iltimos matn blokiga ma'lumot kiriting");
      if (!(contentPhoto.length >= 1))
        return handleInfo("Kamida bitta rasm habar bo'lishi shart");

      const isEmptyPhoto = contentPhoto.find(
        (data) => !(data.type === "photo" && (data.fileId || data.filePreview)),
      );
      if (isEmptyPhoto)
        return handleInfo("Iltimos rasm blokiga ma'lumot kiriting");
    }

    if (type === "photo") {
      if (!(contentPhoto.length >= 2))
        return handleInfo("Kamida 2ta rasm habar bo'lishi shart");

      const isEmptyPhoto = contentPhoto.find(
        (data) => !(data.type === "photo" && (data.fileId || data.filePreview)),
      );
      if (isEmptyPhoto)
        return handleInfo("Iltimos rasm blokiga ma'lumot kiriting");
    }

    if (type === "video") {
      if (!(contentVideoUrl.length >= 1))
        return handleInfo("Kamida bitta video habar bo'lishi shart");

      const isEmptyVideo = contentVideoUrl.find(
        (data) => !(data.type === "video-url" && data.value),
      );

      if (isEmptyVideo)
        return handleInfo("Iltimos video blokiga ma'lumot kiriting");
    }

    if( !data.languageCode ) {
      return handleInfo("Iltimos tilini tanlang");
    }

    try {
      let result: any = null;
      // create news
      if (mode === "create") {
        result = await NewsApi.createNews({
          ...data,
          content: data.content.map((content) =>
            "filePreview" in content
              ? { ...content, filePreview: null }
              : content,
          ),
          files,
        });
      }

      // update news
      if (mode === "update")
        console.log("update", data);
        
        if (path) {
          result = await NewsApi.updateNews(path, {
            ...data,
            files,
          });
        } else {
          throw new Error("Path is undefined");
        }

      if (result) router.push(`/news/${type}`);
    } catch (error) {
      if (typeof error === "string") return handleInfo(error);
      const message = {
        update:
          "Yangilikni tahrirlashda xatolik yuz berdi. Iltimos keyinroq urunib ko'ring",
        create:
          "Yangilik yaratishda xatolik yuz berdi. Iltimos keyinroq urunib ko'ring",
      };
      handleInfo(message[mode]);
    }
  };

  useEffect(() => {
    if (data) {
      setShowEditButton(
        watchAllFields.title !== data.title ||
        JSON.stringify(watchAllFields.content) !==
        JSON.stringify(data.content) ||
        JSON.stringify(watchAllFields.categories) !==
        JSON.stringify(data.tags) ||
        watchAllFields.languageCode !== data.languageCode ||
        watchAllFields.description !== data.description ||
        watchAllFields.isTop !== data.isTop,
      );
    }
  }, [data, watchAllFields]);

  return (
    <section>
      <form onSubmit={handleSubmit(submit)} className="grid gap-3">
        <Card className="sticky top-0 z-20 rounded-none border-none py-2 shadow-none">
          <CardHeader className="flex flex-row items-center space-y-0 p-3 py-2">
            <CardTitle className="text-lg font-semibold capitalize">
              {title}
            </CardTitle>
            <div className="ml-auto flex gap-2">
              {mode === "update" && (
                <>
                  {type !== "archive" && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          className="cursor-pointer"
                          disabled={isSubmitting}
                        >
                          Arxivlash
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>
                            Yangilikni arxivlamoqchimisiz?
                          </DialogTitle>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button className="cursor-pointer" type="button">
                              Yo'q
                            </Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button
                              className="cursor-pointer"
                              type="button"
                              variant="outline"
                              onClick={() => archiveNews(path, `/news/${type}`)}
                            >
                              Ha
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="cursor-pointer"
                        disabled={isSubmitting}
                      >
                        O'chirish
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Yangilikni o'chirmoqchimisiz?</DialogTitle>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button className="cursor-pointer" type="button">
                            Yo'q
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button
                            className="cursor-pointer"
                            type="button"
                            variant="outline"
                            onClick={() => deleteNews(path, `/news/${type}`)}
                          >
                            Ha
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  {showEditButton && (
                    <Button
                      type="submit"
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                      disabled={isSubmitting}
                    >
                      Tahrirlash
                    </Button>
                  )}
                </>
              )}
              {mode === "create" && (
                <Button
                  type="submit"
                  size="sm"
                  className="cursor-pointer"
                  disabled={isSubmitting}
                >
                  Qo'shish
                </Button>
              )}
            </div>
          </CardHeader>
        </Card>
        <div className="container flex flex-col gap-3 p-5">
          {info && (
            <p className="border-l-2 border-red-500 bg-red-500/10 px-4 py-2 text-base font-medium text-red-500">
              {info}
            </p>
          )}
          <div className="flex flex-col items-start gap-3 lg:flex-row">
            <div className="grid w-full gap-2">
              <Card className="rounded-md border-none shadow-lg shadow-slate-300">
                <CardContent className="bg-cloud-white grid gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="title" className="flex items-center gap-2">
                      <span>Sarlavha</span>
                    </Label>
                    <Textarea
                      rows={4}
                      {...register("title", { required: true })}
                      placeholder="Yangilik sarlavhasi"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="description">Tavsif</Label>
                    <Textarea
                      rows={10}
                      placeholder="Yangilikning qisqacha tavsifi"
                      {...register("description", { required: true })}
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-md border-none shadow-lg shadow-slate-300">
                <CardHeader className="flex flex-row items-center space-y-0">
                  <CardTitle>Yangilik mazmuni</CardTitle>
                  <div className="ml-auto flex gap-1">
                    {/* {photos?.length && (
                      <Button onClick={() => setPhotos(null)}>
                        Delete all
                      </Button>
                    )} */}
                    <Button
                      onClick={() =>
                        addBlock({
                          type: "text",
                          value: null,
                        })
                      }
                      type="button"
                      className="cursor-pointer"
                      variant="outline"
                    >
                      Matn
                    </Button>
                    <Button
                      onClick={() =>
                        addBlock({
                          type: "quote",
                          value: null,
                        })
                      }
                      type="button"
                      className="cursor-pointer"
                      variant="outline"
                    >
                      Iqtibos
                    </Button>
                    {["standard", "photo"].includes(type) && (
                      <>
                        <Button
                          onClick={() =>
                            addBlock({
                              type: "photo",
                              fileId: null,
                              filePreview: null,
                            })
                          }
                          type="button"
                          className="cursor-pointer"
                          variant="outline"
                        >
                          Rasm
                        </Button>
                      </>
                    )}
                    {type === "video" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            type="button"
                            className="cursor-pointer"
                            variant="outline"
                          >
                            Video
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>
                              YouTube video manzilini kiriting
                            </DialogTitle>
                            <DialogDescription>
                              YouTube videosining linkini yuboring!
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                URL
                              </Label>
                              <Input
                                onChange={({ target: { value } }) =>
                                  setVideUrl(value)
                                }
                                id="name"
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button
                                className="cursor-pointer"
                                onClick={() =>
                                  addBlock({
                                    type: "video-url",
                                    value: `https://www.youtube.com/embed/${getVideoId(videoUrl || "").id}`,
                                  })
                                }
                                type="button"
                              >
                                Qo'shish
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="bg-cloud-white grid gap-4 pt-5">
                  {!Boolean(watch("content").length) && (
                    <div className="grid h-20 place-items-center text-center">
                      <span className="text-slate-gray font-medium">
                        Hech qanday yangilik mazmuni kiritilmagan
                      </span>
                    </div>
                  )}
                  <PhotoProvider>
                    {Boolean(watch("content").length) &&
                      React.Children.toArray(
                        watch("content").map((content, key) => (
                          <div
                            key={key}
                            className="group relative rounded-md border border-slate-100 p-5 pr-10"
                          >
                            <button
                              type="button"
                              onClick={() => deleteBlock(key)}
                              className="pointer-events-none absolute -top-3 -right-3 grid size-6 cursor-pointer place-items-center rounded-full bg-red-500 text-xs text-white opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100"
                            >
                              <FaRegTrashAlt />
                            </button>
                            {content.type === "photo" &&
                              !content.filePreview && (
                                <>
                                  <Dropzone
                                    accept={{
                                      "image/png": [".png"],
                                      "video/mp4": [".mp4"],
                                      "image/jpeg": [".jpg", ".jpeg"],
                                    }}
                                    multiple={false}
                                    onDrop={(e) => onDrop(e, key)}
                                  >
                                    {({
                                      getRootProps,
                                      isDragActive,
                                      getInputProps,
                                    }) => (
                                      <div
                                        {...getRootProps()}
                                        className="text-ice-white-text cursor-pointer border border-dashed p-10"
                                      >
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                          <div className="flex items-center justify-center gap-3 text-center">
                                            <p>Faylni shu yerga tashlang</p>
                                          </div>
                                        ) : (
                                          <div className="flex items-center justify-center gap-3 text-center">
                                            <p>Rasm yuklang</p>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </Dropzone>
                                </>
                              )}
                            {content.type === "photo" &&
                              content.filePreview && (
                                <PhotoView src={content.filePreview}>
                                  <Image
                                    width={1920}
                                    height={1080}
                                    alt={content.filePreview}
                                    className="aspect-square max-h-96 w-full rounded-md object-cover"
                                    src={content.filePreview}
                                  />
                                </PhotoView>
                              )}
                            {content.type === "quote" && (
                              <Textarea
                                rows={10}
                                value={content.value || ""}
                                onChange={({ target: { value } }) =>
                                  addValueBlock(key, {
                                    type: "quote",
                                    value,
                                  })
                                }
                                placeholder="Yangilik iqtibosini kiriting"
                              />
                            )}
                            {content.type === "text" && (
                              <Textarea
                                rows={10}
                                onChange={({ target: { value } }) =>
                                  addValueBlock(key, {
                                    type: "text",
                                    value,
                                  })
                                }
                                value={content.value || ""}
                                placeholder="Yangilik matnini kiriting"
                              />
                            )}
                            {content.type === "video-url" && content.value && (
                              <iframe
                                className="aspect-video size-full"
                                src={content.value}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              />
                            )}
                          </div>
                        )),
                      )}
                  </PhotoProvider>
                </CardContent>
              </Card>
            </div>
            <div className="sticky top-20 grid w-full gap-2 lg:max-w-72">
              {/* Languages */}
              <Card className="gap-3 rounded-md border-none shadow-lg shadow-slate-300">
                <CardHeader>
                  <CardTitle>Til</CardTitle>
                </CardHeader>
                <CardContent className="bg-cloud-white grid gap-4">
                  <Select
                    defaultValue={watch("languageCode") ? data?.languageCode : ""  }
                    onValueChange={(value) => setValue("languageCode", value ? value : "")}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uz">O'zbek</SelectItem>
                      <SelectItem value="uz-cyrl">Ўзбек</SelectItem>
                      <SelectItem value="ru">Русский</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
              {/* Is Top */}
              {type === "standard" && (
                <Card className="gap-3 rounded-md border-none shadow-lg shadow-slate-300">
                  <CardHeader>
                    <CardTitle>Yangilik turi</CardTitle>
                  </CardHeader>
                  <CardContent className="bg-cloud-white grid gap-4">
                    <Select
                      onValueChange={(value) =>
                        setValue("isTop", value !== "simple")
                      }
                      defaultValue={watch("isTop") ? "top" : "simple"}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simple">Oddiy yangilik</SelectItem>
                        <SelectItem value="top">Top yangilik</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              )}
              {/* Categories */}
              <Card className="flex flex-col gap-3 rounded-md border border-none py-6 shadow-lg shadow-slate-300">
                <CardHeader>
                  <CardTitle>
                    <h3>Kategoriyalar</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-cloud-white grid gap-4">
                  <div className="flex gap-1.5">
                    <Input
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addCategory();
                        }
                      }}
                      value={categoryValue}
                      onChange={({ target: { value } }) =>
                        setCategoryValue(value)
                      }
                      placeholder="Yangi kategoriya"
                    />
                    <Button type="button" onClick={addCategory} size="icon">
                      +
                    </Button>
                  </div>
                  <div className="grid gap-4">
                    {categories.filter(
                      (category) => !watch("categories").includes(category),
                    ).length > 0 && (
                        <div className="grid gap-2">
                          <h4 className="text-sm font-medium">
                            Kategoriya ro'yxati
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {categories
                              .filter(
                                (category) =>
                                  !watch("categories").includes(category),
                              )
                              .map((item, key) => (
                                <button
                                  key={key}
                                  type="button"
                                  onClick={() =>
                                    setValue("categories", [
                                      ...new Set([
                                        ...getValues("categories"),
                                        item,
                                      ]),
                                    ])
                                  }
                                  className="cursor-pointer rounded-full border border-slate-300 px-3 py-1 text-sm transition hover:bg-slate-100"
                                >
                                  {item}
                                </button>
                              ))}
                          </div>
                        </div>
                      )}
                    {!Boolean(watch("categories").length) && (
                      <div className="py-5">
                        <p className="text-center text-sm opacity-60">
                          Hech qanday kategoriyalar qo'shilmadi
                        </p>
                      </div>
                    )}
                    {Boolean(watch("categories").length) && (
                      <div className="flex flex-wrap gap-1">
                        {React.Children.toArray(
                          watch("categories").map((category, key) => (
                            <span
                              key={key}
                              className="group relative flex cursor-pointer items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-medium"
                              onClick={() => {
                                const updated = getValues("categories").filter(
                                  (_, i) => i !== key,
                                );
                                setValue("categories", updated);
                              }}
                            >
                              <span className="opacity-100 transition-opacity group-hover:opacity-0">
                                {category}
                              </span>
                              <div className="absolute left-1/2 -translate-x-1/2 text-xs text-red-500 opacity-0 transition-opacity group-hover:opacity-100">
                                <LiaTimesSolid />
                              </div>
                            </span>
                          )),
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
