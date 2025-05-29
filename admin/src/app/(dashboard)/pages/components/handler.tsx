"use client";

import { useQueryState } from "nuqs";
import { AppType } from "@/types/server";
import { FaRegTrashAlt } from "react-icons/fa";
import { extname } from "path";
import { v4 as uuidv4 } from "uuid";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Dropzone from "react-dropzone";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { DialogClose } from "@radix-ui/react-dialog";
import { ContentType } from "@/types/content";
import { PageApi } from "@/utils/api/page";
import { deleteMenu } from "@/actions/menu";

type PageHandlerDataType =
  AppType["~Routes"]["api"]["rest"]["menus"][":menuId"]["get"]["response"]["200"];

type Type = {
  name: string;
  content: ContentType[];
  parentId?: number;
};

export default function PageHandler({
  data,
  mode,
  type,
  menuId,
}: {
  menuId?: number;
  mode: "create" | "update";
  type?: "text" | "news" | "document" | "member" | "photo";
  data?: PageHandlerDataType;
}) {
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
          content: data.content,
          name: data.name,
          parentId: data.parent?.id,
        }
      : {
          content: [],
        },
  });

  const router = useRouter();

  const [parentId, setParentId] = useQueryState("parentId");
  const [dType, setDType] = useQueryState("type");
  const [languageCode, setLanguageCode] = useQueryState("languageCode");
  const [name, setName] = useQueryState("name");

  const infoRef = useRef<NodeJS.Timeout | null>(null);

  // const [categoryValue, setCategoryValue] = useState<string>("");
  const [files, setFiles] = useState<File[] | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [isDocumentDialogOpen, setDocumentDialogOpen] =
    useState<boolean>(false);
  const [documentData, setDocumentData] = useState<{
    fileName?: string;
    docName?: string;
  } | null>(null);
  const [showEditButton, setShowEditButton] = useState<boolean>(false);

  const watchAllFields = watch();

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
    const contentText = data.content.filter((data) => data.type === "text");
    const contentMember = data.content.filter((data) => data.type === "member");
    const contentDocument = data.content.filter(
      (data) => data.type === "document",
    );

    if (type === "text") {
      if (!(contentText.length >= 1))
        return handleInfo("Kamida bitta matn habar bo'lishi shart");
      const isEmptyTxt = contentText.find(
        (data) => !(data.type === "text" && data.value),
      );
      if (isEmptyTxt)
        return handleInfo("Iltimos matn blokiga ma'lumot kiriting");
    }
    if (type === "member") {
      if (!(contentMember.length >= 1))
        return handleInfo("Kamida bitta a'zo ma'lumotlari bo'lishi shart");

      const isEmptyMember = contentMember.find(
        (data) =>
          data.type === "member" &&
          data.members.find(
            (member) =>
              !member.fileId ||
              !member.filePreview ||
              !member.fullName ||
              !member.phoneNumber,
          ),
      );

      if (isEmptyMember)
        return handleInfo("Iltimos a'zolarning ma'lumotlarini to'liq kiriting");
    }
    if (type === "document") {
      if (!(contentDocument.length >= 1))
        return handleInfo("Kamida bitta hujjat ma'lumoti bo'lishi shart");
      const isEmptyDocument = contentDocument.find(
        (document) => document.type === "document" && !document.fileId,
      );

      if (isEmptyDocument)
        return handleInfo("Iltimos hujjatlarni to'liq kiriting");
    }

    try {
      let result: any = null;
      if (mode === "create" && dType && languageCode)
        result = await PageApi.createMenu({
          ...data,
          languageCode,
          type: dType as any,
          parentId: parentId ? +parentId : undefined,
          content: data.content.map((content) => {
            if ("filePreview" in content)
              return {
                ...content,
                filePreview: undefined,
              };
            if ("members" in content)
              return {
                ...content,
                members: content.members.map((member) =>
                  "filePreview" in member
                    ? {
                        ...member,
                        filePreview: undefined,
                      }
                    : member,
                ),
              };

            return content;
          }),
          files: files || undefined,
        });
      if (mode === "update" && menuId)
        result = await PageApi.updateMenu(menuId, {
          ...data,
          parentId: parentId ? +parentId : undefined,
          content: data.content.map((content) => {
            if ("filePreview" in content)
              return {
                ...content,
                filePreview: undefined,
              };
            if ("members" in content)
              return {
                ...content,
                members: content.members.map((member) =>
                  "filePreview" in member
                    ? {
                        ...member,
                        filePreview: undefined,
                      }
                    : member,
                ),
              };

            return content;
          }),
          files: files || undefined,
        });

      if (result)
        if (parentId) {
          router.push("/pages/" + parentId);
        } else {
          router.push("/pages");
        }
    } catch (error) {
      setLanguageCode(null);
      setDType(null);
      setParentId(null);
      setName(null);
      if (typeof error === "string") return handleInfo(error);
      const message = {
        update:
          "Sahifani tahrirlashda xatolik yuz berdi. Iltimos keyinroq urunib ko'ring",
        create:
          "Sahifa yaratishda xatolik yuz berdi. Iltimos keyinroq urunib ko'ring",
      };
      handleInfo(message[mode]);
    }
  };

  useEffect(() => {
    if (data) {
      setShowEditButton(
        watchAllFields.name !== data.name ||
          JSON.stringify(watchAllFields.content) !==
            JSON.stringify(data.content) ||
          data.parent?.id !== watchAllFields.parentId,
      );
    }
  }, [data, watchAllFields]);

  useEffect(() => {
    if (name) setValue("name", name);
  }, [name]);

  const buttons = {
    text: (
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
    ),
    document: (
      <Dialog open={isDocumentDialogOpen} onOpenChange={setDocumentDialogOpen}>
        <DialogTrigger asChild>
          <Button type="button" className="cursor-pointer" variant="outline">
            Hujjat
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Fayl yuklang</DialogTitle>
          </DialogHeader>
          {!documentData?.fileName && (
            <Dropzone
              accept={{
                "application/pdf": [".pdf"],
                "application/msword": [".doc"],
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                  [".docx"],
              }}
              multiple={false}
              onDrop={(e) => {
                const extension = extname(e[0].name);
                const filename = `${uuidv4()}${extension}`;

                const newFile = new File([e[0]], filename, {
                  type: e[0].type,
                });
                if (!files) setFiles([newFile]);
                else setFiles([...files, newFile]);

                setDocumentData({
                  ...documentData,
                  fileName: filename,
                });
              }}
            >
              {({ getRootProps, isDragActive, getInputProps }) => (
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
                      <p>Fayl yuklang</p>
                    </div>
                  )}
                </div>
              )}
            </Dropzone>
          )}
          <Input
            value={documentData?.docName || ""}
            onChange={({ target: { value } }) =>
              setDocumentData({
                ...documentData,
                docName: value,
              })
            }
            placeholder="Hujjat nomi"
          />
          {documentData?.fileName && (
            <div className="flex gap-2">
              <b>File:</b> <p>{documentData?.fileName}</p>
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="cursor-pointer"
                type="button"
                variant="outline"
              >
                Bekor qilish
              </Button>
            </DialogClose>
            {documentData?.fileName && documentData.docName && (
              <Button
                disabled={!documentData?.fileName || !documentData.docName}
                className="cursor-pointer"
                type="button"
                onClick={() => {
                  addBlock({
                    type: "document",
                    fileId: documentData.fileName || null,
                    docName: documentData.docName || null,
                  });
                  setDocumentData(null);
                  setDocumentDialogOpen(false);
                }}
              >
                Qo'shish
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
    member: (
      <Button
        onClick={() =>
          addBlock({
            type: "member",
            members: [],
          })
        }
        type="button"
        className="cursor-pointer"
        variant="outline"
      >
        A'zo
      </Button>
    ),
    photo: (
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
        Foto
      </Button>
    ),
    news: null,
  };

  return (
    <section>
      <form onSubmit={handleSubmit(submit)} className="grid gap-3">
        <Card className="sticky top-0 z-20 rounded-none border-none py-2 shadow-none">
          <CardHeader className="flex flex-row items-center space-y-0 p-3 py-2">
            <CardTitle className="text-lg font-semibold capitalize">
              {data?.name || "Sarlavha yaratish"}
            </CardTitle>
            <div className="ml-auto flex gap-2">
              {menuId && mode === "update" && (
                <>
                  {/* <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="cursor-pointer"
                        disabled={isSubmitting}
                      >
                        Berkitish
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Sahifani berkitmoqchimisiz?</DialogTitle>
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
                            onClick={() =>
                              menuVisibility(menuId, !data?.isVisible, "/pages")
                            }
                          >
                            Ha
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog> */}
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
                        <DialogTitle>Sahifani o'chirmoqchimisiz?</DialogTitle>
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
                            onClick={() => deleteMenu(menuId, `/pages`)}
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
                  size="sm"
                  className="cursor-pointer"
                  disabled={isSubmitting}
                  type="submit"
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
                      <span>Sahifa</span>
                    </Label>
                    <Input
                      {...register("name", { required: true })}
                      placeholder="Sahifa nomi"
                    />
                  </div>
                </CardContent>
              </Card>
              {type !== "news" && (
                <Card className="rounded-md border-none shadow-lg shadow-slate-300">
                  <CardHeader className="flex flex-row items-center space-y-0">
                    <CardTitle>Sahifa mazmuni</CardTitle>
                    <div className="ml-auto flex gap-1">
                      {/* {photos?.length && (
                      <Button onClick={() => setPhotos(null)}>
                        Delete all
                      </Button>
                    )} */}
                      {type &&
                        (type === "member" && watch("content").length > 0
                          ? null
                          : buttons[type])}
                    </div>
                  </CardHeader>
                  <CardContent className="bg-cloud-white grid gap-4 pt-5">
                    {!Boolean(watch("content").length) && (
                      <div className="grid h-20 place-items-center text-center">
                        <span className="text-slate-gray font-medium">
                          Hech qanday sahifa mazmuni kiritilmagan
                        </span>
                      </div>
                    )}
                    <PhotoProvider>
                      {Boolean(watch("content").length) &&
                        React.Children.toArray(
                          watch("content").map((content, contentIndex) => (
                            <div
                              key={contentIndex}
                              className="group relative rounded-md border border-slate-100 p-5 pr-10"
                            >
                              <button
                                type="button"
                                onClick={() => deleteBlock(contentIndex)}
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
                                      onDrop={(e) => {
                                        const extension = extname(e[0].name);
                                        const filename = `${uuidv4()}${extension}`;

                                        const newFile = new File(
                                          [e[0]],
                                          filename,
                                          {
                                            type: e[0].type,
                                          },
                                        );
                                        if (!files) setFiles([newFile]);
                                        else setFiles([...files, newFile]);

                                        const fileUrl =
                                          URL.createObjectURL(newFile);

                                        addValueBlock(contentIndex, {
                                          type: "photo",
                                          fileId: filename,
                                          filePreview: fileUrl,
                                        });
                                      }}
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
                              {content.type === "text" && (
                                <Textarea
                                  rows={10}
                                  onChange={({ target: { value } }) =>
                                    addValueBlock(contentIndex, {
                                      type: "text",
                                      value,
                                    })
                                  }
                                  value={content.value || ""}
                                  placeholder="Sahifa matnini kiriting"
                                />
                              )}
                              {content.type === "member" && (
                                <div className="grid items-start gap-5 md:grid-cols-4">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      addValueBlock(contentIndex, {
                                        ...content,
                                        members: [
                                          {
                                            fileId: null,
                                            filePreview: null,
                                            fullName: null,
                                            phoneNumber: null,
                                            position: null,
                                          },
                                          ...content.members,
                                        ],
                                      })
                                    }
                                    className="cursor-pointer rounded-md border border-dashed border-slate-400 p-2 transition-colors hover:bg-slate-100"
                                  >
                                    +
                                  </button>
                                  {React.Children.toArray(
                                    content.members.map(
                                      (member, currentMemberIndex) => (
                                        <div
                                          key={currentMemberIndex}
                                          className="group/member relative rounded-md border border-slate-200 p-2"
                                        >
                                          <button
                                            type="button"
                                            onClick={() => {
                                              setValue(
                                                "content",
                                                getValues("content").map(
                                                  (content) =>
                                                    content.type === "member"
                                                      ? {
                                                          ...content,
                                                          members:
                                                            content.members.filter(
                                                              (_, memberKey) =>
                                                                memberKey !==
                                                                currentMemberIndex,
                                                            ),
                                                        }
                                                      : content,
                                                ),
                                              );
                                            }}
                                            className="pointer-events-none absolute -top-3 -right-3 grid size-6 cursor-pointer place-items-center rounded-full bg-red-500 text-xs text-white opacity-0 transition-opacity group-hover/member:pointer-events-auto group-hover/member:opacity-100"
                                          >
                                            <FaRegTrashAlt />
                                          </button>
                                          <div className="grid gap-1.5">
                                            {member.filePreview ? (
                                              <PhotoView
                                                src={member.filePreview}
                                              >
                                                <Image
                                                  width={1920}
                                                  height={1080}
                                                  alt={member.filePreview}
                                                  className="aspect-square max-h-96 w-full rounded-md object-cover"
                                                  src={member.filePreview}
                                                />
                                              </PhotoView>
                                            ) : (
                                              <Dropzone
                                                accept={{
                                                  "image/png": [".png"],
                                                  "video/mp4": [".mp4"],
                                                  "image/jpeg": [
                                                    ".jpg",
                                                    ".jpeg",
                                                  ],
                                                }}
                                                multiple={false}
                                                onDrop={(e) => {
                                                  const extension = extname(
                                                    e[0].name,
                                                  );
                                                  const filename = `${uuidv4()}${extension}`;

                                                  const newFile = new File(
                                                    [e[0]],
                                                    filename,
                                                    {
                                                      type: e[0].type,
                                                    },
                                                  );
                                                  if (!files)
                                                    setFiles([newFile]);
                                                  else
                                                    setFiles([
                                                      ...files,
                                                      newFile,
                                                    ]);

                                                  const fileUrl =
                                                    URL.createObjectURL(
                                                      newFile,
                                                    );

                                                  addValueBlock(contentIndex, {
                                                    ...content,
                                                    members:
                                                      content.members.map(
                                                        (
                                                          member,
                                                          memberIndex,
                                                        ) => {
                                                          if (
                                                            memberIndex ===
                                                            currentMemberIndex
                                                          ) {
                                                            return {
                                                              ...member,
                                                              fileId: filename,
                                                              filePreview:
                                                                fileUrl,
                                                            };
                                                          }
                                                          return member;
                                                        },
                                                      ),
                                                  });
                                                }}
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
                                                    <input
                                                      {...getInputProps()}
                                                    />
                                                    {isDragActive ? (
                                                      <div className="flex items-center justify-center gap-3 text-center">
                                                        <p>
                                                          Faylni shu yerga
                                                          tashlang
                                                        </p>
                                                      </div>
                                                    ) : (
                                                      <div className="flex items-center justify-center gap-3 text-center">
                                                        <p>Rasm yuklang</p>
                                                      </div>
                                                    )}
                                                  </div>
                                                )}
                                              </Dropzone>
                                            )}
                                            <Input
                                              value={member.fullName || ""}
                                              onChange={({
                                                target: { value },
                                              }) =>
                                                addValueBlock(contentIndex, {
                                                  ...content,
                                                  members: content.members.map(
                                                    (member, memberIndex) => ({
                                                      ...member,
                                                      fullName:
                                                        currentMemberIndex ===
                                                        memberIndex
                                                          ? value
                                                          : member.fullName,
                                                    }),
                                                  ),
                                                })
                                              }
                                              placeholder="To'liq ismni kiriting"
                                            />
                                            <Input
                                              value={member.position || ""}
                                              onChange={({
                                                target: { value },
                                              }) =>
                                                addValueBlock(contentIndex, {
                                                  ...content,
                                                  members: content.members.map(
                                                    (member, memberIndex) => ({
                                                      ...member,
                                                      position:
                                                        currentMemberIndex ===
                                                        memberIndex
                                                          ? value
                                                          : member.position,
                                                    }),
                                                  ),
                                                })
                                              }
                                              placeholder="Lavozimini kiriting"
                                            />
                                            <Input
                                              value={member.phoneNumber || ""}
                                              onChange={({
                                                target: { value },
                                              }) =>
                                                addValueBlock(contentIndex, {
                                                  ...content,
                                                  members: content.members.map(
                                                    (member, memberIndex) => ({
                                                      ...member,
                                                      phoneNumber:
                                                        currentMemberIndex ===
                                                        memberIndex
                                                          ? value
                                                          : member.phoneNumber,
                                                    }),
                                                  ),
                                                })
                                              }
                                              placeholder="Telefon raqamini kiriting"
                                            />
                                            <Input
                                              value={member.email || ""}
                                              onChange={({
                                                target: { value },
                                              }) =>
                                                addValueBlock(contentIndex, {
                                                  ...content,
                                                  members: content.members.map(
                                                    (member, memberIndex) => ({
                                                      ...member,
                                                      email:
                                                        currentMemberIndex ===
                                                        memberIndex
                                                          ? value
                                                          : member.email,
                                                    }),
                                                  ),
                                                })
                                              }
                                              placeholder="Email kiriting"
                                            />
                                            <Input
                                              value={member.acceptanceDay || ""}
                                              onChange={({
                                                target: { value },
                                              }) =>
                                                addValueBlock(contentIndex, {
                                                  ...content,
                                                  members: content.members.map(
                                                    (member, memberIndex) => ({
                                                      ...member,
                                                      acceptanceDay:
                                                        currentMemberIndex ===
                                                        memberIndex
                                                          ? value
                                                          : member.acceptanceDay,
                                                    }),
                                                  ),
                                                })
                                              }
                                              placeholder="Qabul kuni"
                                            />
                                            <Input
                                              value={member.address || ""}
                                              onChange={({
                                                target: { value },
                                              }) =>
                                                addValueBlock(contentIndex, {
                                                  ...content,
                                                  members: content.members.map(
                                                    (member, memberIndex) => ({
                                                      ...member,
                                                      address:
                                                        currentMemberIndex ===
                                                        memberIndex
                                                          ? value
                                                          : member.address,
                                                    }),
                                                  ),
                                                })
                                              }
                                              placeholder="Manzil"
                                            />
                                            <Input
                                              value={member.workingTime || ""}
                                              onChange={({
                                                target: { value },
                                              }) =>
                                                addValueBlock(contentIndex, {
                                                  ...content,
                                                  members: content.members.map(
                                                    (member, memberIndex) => ({
                                                      ...member,
                                                      workingTime:
                                                        currentMemberIndex ===
                                                        memberIndex
                                                          ? value
                                                          : member.workingTime,
                                                    }),
                                                  ),
                                                })
                                              }
                                              placeholder="Ish vaqti"
                                            />
                                          </div>
                                        </div>
                                      ),
                                    ),
                                  )}
                                </div>
                              )}
                              {content.type === "document" && (
                                <div>
                                  <div className="flex gap-2">
                                    <b>File:</b> <p>{content.fileId}</p>
                                  </div>
                                  <div className="flex gap-2">
                                    <b>Hujjat nomi:</b> <p>{content.docName}</p>
                                  </div>
                                </div>
                              )}
                              {content.type === "video-url" &&
                                content.value && (
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
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
