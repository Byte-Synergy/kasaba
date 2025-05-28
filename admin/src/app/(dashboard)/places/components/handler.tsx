"use client";

import { Input } from "@/components/ui/input";
import { extname } from "path";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppType } from "@/types/server";
import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Dropzone from "react-dropzone";
import Image from "next/image";
import { PlaceApi } from "@/utils/api/place";
import { useRouter } from "next/navigation";

type Type = {
  placeId?: number;
  chairmanFullName: string;
  chairmanPhoto: File;
  phoneNumber?: string;
  email?: string;
  workingTime?: string;
  address: string;
  membersCount: number;
};

export default function InteractiveAreaHandler({
  placeData,
  placeId,
  interactiveAreas,
}: {
  placeId: number;
  placeData: AppType["_routes"]["api"]["rest"]["places"]["get"]["response"]["200"]["data"][number];
  interactiveAreas?: AppType["_routes"]["api"]["rest"]["places"][":placeId"]["interactive_areas"]["get"]["response"]["200"]["data"];
}) {
  const router = useRouter();
  const {
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting, isValid },
    register,
  } = useForm<Type>({
    defaultValues: {
      placeId: placeData.id,
    },
  });

  const [showSaveButton, setShowSaveButton] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [chairmanPhotoUrl, setChairmanPhotoUrl] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const infoRef = useRef<NodeJS.Timeout | null>(null);

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

  const submit: SubmitHandler<Type> = async (data) => {
    try {
      let result: any = null;

      result = await PlaceApi.create(data, placeId);
      // result = await PageApi.updateMenu(menuId, {
      //   ...data,
      //   content: data.content.map((content) => {
      //     if ("filePreview" in content)
      //       return {
      //         ...content,
      //         filePreview: undefined,
      //       };
      //     if ("members" in content)
      //       return {
      //         ...content,
      //         members: content.members.map((member) =>
      //           "filePreview" in member
      //             ? {
      //                 ...member,
      //                 filePreview: undefined,
      //               }
      //             : member,
      //         ),
      //       };

      //     return content;
      //   }),
      //   files: files || undefined,
      // });
      if (result) {
        setOpen(false);
        reset();
        return router.refresh();
      }
    } catch (error) {
      if (typeof error === "string") return handleInfo(error);
      const message = {
        update:
          "Sahifani tahrirlashda xatolik yuz berdi. Iltimos keyinroq urunib ko'ring",
        create:
          "Sahifa yaratishda xatolik yuz berdi. Iltimos keyinroq urunib ko'ring",
      };
      handleInfo(message["create"]);
    }
  };

  return (
    <>
      <section>
        <div className="grid gap-3">
          <Card className="sticky top-0 z-20 rounded-none border-none py-2 shadow-none">
            <CardHeader className="flex flex-row items-center space-y-0 p-3 py-2">
              <CardTitle className="text-lg font-semibold capitalize">
                {placeData.name}
              </CardTitle>
              <div className="ml-auto flex gap-2">
                {showSaveButton && (
                  <Button
                    size="sm"
                    className="cursor-pointer"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Saqlash
                  </Button>
                )}
                <Dialog
                  open={isOpen}
                  onOpenChange={(value) => {
                    setOpen(value);
                    reset();
                    setChairmanPhotoUrl(null);
                  }}
                >
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="cursor-pointer bg-blue-500 px-4 py-3 text-xs font-semibold text-white uppercase transition-colors hover:bg-blue-600"
                    >
                      Qo'shish
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-scroll sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>
                        Hududga oid ma'lumotlarni to'ldiring
                      </DialogTitle>
                    </DialogHeader>
                    <form
                      onSubmit={handleSubmit(submit)}
                      className="grid gap-4"
                    >
                      {watch("placeId") && (
                        <>
                          {watch("chairmanPhoto") && chairmanPhotoUrl ? (
                            <>
                              <Image
                                width={1080}
                                height={1080}
                                src={chairmanPhotoUrl}
                                alt="Member"
                              />
                            </>
                          ) : (
                            <Dropzone
                              accept={{
                                "image/png": [".png"],
                                "image/jpeg": [".jpg", ".jpeg"],
                              }}
                              multiple={false}
                              onDrop={(e) => {
                                setChairmanPhotoUrl(URL.createObjectURL(e[0]));
                                setValue("chairmanPhoto", e[0]);
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
                          )}
                          <div className="grid gap-1">
                            <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Raisning to'liq ismi
                            </label>
                            <Input
                              placeholder="F.I.O."
                              {...register("chairmanFullName", {
                                required: true,
                              })}
                              className="w-full"
                            />
                          </div>
                          <div className="grid gap-1">
                            <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Telefon raqam
                            </label>
                            <Input
                              {...register("phoneNumber", { required: true })}
                              placeholder="Telefon raqamni kiriting"
                              className="w-full"
                            />
                          </div>
                          <div className="grid gap-1">
                            <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Elektron pochta
                            </label>
                            <Input
                              placeholder="Elektron pochta manzilini kiriting"
                              {...register("email")}
                              className="w-full"
                            />
                          </div>
                          <div className="grid gap-1">
                            <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Ish vaqti.{" "}
                              <span className="opacity-50">
                                (Masalan 08:00-20:00, Dushanbadan Jumagacha)
                              </span>
                            </label>
                            <Input
                              placeholder="Ish vaqtini kiriting"
                              {...register("workingTime", { required: true })}
                              className="w-full"
                            />
                          </div>
                          <div className="grid gap-1">
                            <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Manzil
                            </label>
                            <Input
                              placeholder="Manzilni kiriting"
                              {...register("address", { required: true })}
                              className="w-full"
                            />
                          </div>
                          <div className="grid gap-1">
                            <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              A'zolar soni
                            </label>
                            <Input
                              placeholder="A'zolar sonini kiriting"
                              {...register("membersCount", { required: true })}
                              className="w-full"
                            />
                          </div>
                        </>
                      )}

                      <DialogFooter>
                        <Button
                          disabled={
                            isSubmitting || !watch("placeId") || !isValid
                          }
                          className="cursor-pointer"
                        >
                          Qo'shish
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
          </Card>
          <div className="container px-5">
            {interactiveAreas ? (
              <div className="grid gap-3 p-5 md:grid-cols-3">
                {React.Children.toArray(
                  interactiveAreas.map((area, key) => (
                    <Card key={key}>
                      <CardContent className="p-0">
                        <Image
                          src={area.chairmanPhoto}
                          width={1080}
                          height={1080}
                          className="aspect-square object-cover"
                          alt=""
                        />
                        <div className="grid gap-2 p-5">
                          {React.Children.toArray(
                            [
                              {
                                label: "F.I.O.",
                                value: area.chairmanFullName,
                              },
                              {
                                label: "Manzil",
                                value: area.address,
                              },
                              {
                                label: "Email",
                                value: area.email,
                              },
                              {
                                label: "A'zolar soni",
                                value: area.membersCount,
                              },
                              {
                                label: "Telefon raqam",
                                value: area.phoneNumber,
                              },
                              {
                                label: "Ish vaqti",
                                value: area.workingTime,
                              },
                            ].map((item, key) => (
                              <div className="flex gap-2" key={key}>
                                <b>{item.label}</b>
                                <span className="ml-auto">{item.value}</span>
                              </div>
                            )),
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )),
                )}
              </div>
            ) : (
              <p className="py-20 text-center">Hech qanday hudud topilmadi.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
