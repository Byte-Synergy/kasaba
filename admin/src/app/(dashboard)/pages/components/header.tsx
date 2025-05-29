"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { createMenu, deleteMenu } from "@/actions/menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckedState } from "@radix-ui/react-checkbox";
import { AppType } from "@/types/server";
import { cn } from "@/libs/utils";
import { PageApi } from "@/utils/api/page";
import { parseAsInteger, useQueryState } from "nuqs";

export default function PageViewHeader({
  title,
  buttonChildren,
  parent,
  currentMenu,
}: {
  buttonChildren?: React.ReactNode;
  title: string;
  currentMenu?: NonNullable<
    AppType["~Routes"]["api"]["rest"]["menus"][":menuId"]["get"]["response"]["200"]["parent"]
  >;
  menus?: NonNullable<
    AppType["~Routes"]["api"]["rest"]["menus"][":menuId"]["get"]["response"]["200"]["parent"]
  >[];
  parent?: NonNullable<
    AppType["~Routes"]["api"]["rest"]["menus"][":menuId"]["get"]["response"]["200"]["parent"]
  >;
}) {
  const router = useRouter();

  const [parentId, setParentId] = useQueryState("parentId", {
    ...parseAsInteger,
    defaultValue: parent ? parent.id + "" : "",
  });
  const [dType, setDType] = useQueryState("type");
  const [languageCode, setLanguageCode] = useQueryState("languageCode", {
    defaultValue: "uz",
  });
  const [name, setName] = useQueryState("name");
  const [newsType, setNewsType] = useQueryState("newsType");
  // const createPageData = useStore((state) => state.createPageData);
  // const setCreatePageData = useStore((state) => state.setCreatePageData);

  const [currentName, setCurrentName] = useState<string | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [pageForContent, setPageForContent] = useState<CheckedState>(false);

  const handleCreateMenu = async () => {
    if (!name) return alert("Iltimos menyu nomini kiriting");

    setOpen(false);
    if ((pageForContent && !dType) || (dType === "news" && !newsType))
      return alert("Iltimos sahifa turini tanlang");

    if (!pageForContent || newsType) {
      const { data } = await createMenu({
        languageCode: languageCode || undefined,
        name: name,
        parentId: parentId ? +parentId : undefined,
        type: dType as any,
        newsType: newsType as any,
        content: [],
      });

      if (!data)
        return alert(
          "Menyu yaratishda xatolik yuz berdi. Iltimos keyinroq urunib ko'ring.",
        );
      setLanguageCode(null);
      setDType(null);
      setParentId(null);
      setName(null);
      setPageForContent(false);
      return router.refresh();
    }

    const params = new URLSearchParams();

    if (parentId) params.set("parentId", parentId);
    if (dType) params.set("type", dType);
    if (languageCode) params.set("languageCode", languageCode);
    if (name) params.set("name", name);
    if (newsType) params.set("newsType", newsType);

    router.push(`/pages/create?${params.toString()}`);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold capitalize">{title}</h1>
        <div className="flex gap-2">
          {currentMenu && (
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    className="cursor-pointer bg-green-500 hover:bg-green-600"
                    // disabled={isSubmitting}
                  >
                    Tahrirlash
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Sahifani tahrirlash</DialogTitle>
                  </DialogHeader>
                  <Input
                    defaultValue={currentMenu.name}
                    onChange={({ target: { value } }) => setCurrentName(value)}
                  />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button className="cursor-pointer" type="button">
                        Bekor qilish
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      {currentName && currentName !== currentMenu.name && (
                        <Button
                          className="cursor-pointer"
                          type="button"
                          variant="outline"
                          onClick={async () => {
                            await PageApi.updateMenu(currentMenu.id, {
                              name: currentName,
                            });
                            setCurrentName(null);
                            router.refresh();
                          }}
                        >
                          Tahrirlash
                        </Button>
                      )}
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    className="cursor-pointer"
                    // disabled={isSubmitting}
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
                        onClick={async () => {
                          if (currentMenu) {
                            await deleteMenu(currentMenu.id);
                            router.refresh();
                          }
                        }}
                      >
                        Ha
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          )}

          <Dialog
            open={isOpen}
            onOpenChange={(value) => {
              if (!value) {
                setPageForContent(false);
                setLanguageCode(null);
                setDType(null);
                setParentId(null);
                setName(null);
                setPageForContent(false);
              }
              setOpen(value);
            }}
          >
            <DialogTrigger asChild>
              {buttonChildren && (
                <Button
                  type="button"
                  className="cursor-pointer bg-blue-500 transition-colors hover:bg-blue-600"
                >
                  {buttonChildren}
                </Button>
              )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Menyuga oid ma'lumotlarni to'ldiring</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Menyu
                  </label>
                  <Input
                    placeholder="Menyu nomi"
                    onChange={({ target: { value } }) => setName(value)}
                    className="w-full"
                    value={name || ""}
                  />
                </div>
                <div className="grid gap-1">
                  <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Tilni tanlang
                  </label>
                  <Select
                    defaultValue={languageCode}
                    onValueChange={(value) => setLanguageCode(value)}
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
                </div>
                {(!parent || dType !== "news") && (
                  <div className="flex space-x-2">
                    <Checkbox
                      checked={pageForContent}
                      onCheckedChange={setPageForContent}
                      id="page-content"
                      className="cursor-pointer"
                    />
                    <div
                      className={cn(
                        "grid gap-1.5 leading-none",
                        parentId && "opacity-60",
                      )}
                    >
                      <label
                        htmlFor="page-content"
                        className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Menyu uchun ma'lumot qo'shish
                      </label>
                      <p className="text-muted-foreground text-sm">
                        Siz menyuni yaratganingizdan so'ng bu menyu uchun sahifa
                        yaratishingiz mumkin.
                      </p>
                    </div>
                  </div>
                )}
                {pageForContent && (
                  <div className="grid gap-1">
                    <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Menyu turini tanlang
                    </label>
                    <Select
                      defaultValue={dType || undefined}
                      onValueChange={(value) => setDType(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Menyu turlari" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Matn</SelectItem>
                        <SelectItem value="member">A'zo</SelectItem>
                        <SelectItem value="document">Hujjat</SelectItem>
                        <SelectItem value="news">Yangilik</SelectItem>
                        <SelectItem value="photo">Foto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                {dType === "news" && (
                  <div className="grid gap-1">
                    <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Yangilik turini tanlang
                    </label>
                    <Select onValueChange={(value) => setNewsType(value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Yangilik turlari" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="photo">Foto</SelectItem>
                        <SelectItem value="area">Hudud</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <DialogFooter>
                <Button
                  disabled={
                    !name ||
                    (pageForContent && !dType) ||
                    (dType === "news" && !newsType)
                  }
                  onClick={handleCreateMenu}
                  className="cursor-pointer"
                  type="button"
                >
                  Qo'shish
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
