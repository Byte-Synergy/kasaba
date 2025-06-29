"use client";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Dropzone from "react-dropzone";
import Image from "next/image";
import { BannerApi } from "@/utils/api/banner";

interface BannerUploaderProps {
  type: "fit" | "hero1" | "hero2" | "full";
  onUpload: (url: string, file: File) => void;
}

export default function BannerUploader({ type, onUpload }: BannerUploaderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [bannerUrl, setBannerUrl] = useState("");

  const handleUpload = async () => {
    if (!bannerFile || !bannerUrl) return;
    try {
      await BannerApi.create({ type, file: bannerFile, url: bannerUrl });
      onUpload(URL.createObjectURL(bannerFile), bannerFile);
      setModalOpen(false);
      setBannerFile(null);
      setBannerUrl("");
    } catch (error) {
      console.error("Banner upload failed:", error);
      alert("Banner yuklashda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
    }
  };

  const dropClass = type === "full" ? "h-[70px]" : "aspect-square";

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+ Qo‘shish</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Yangi banner qo‘shish</DialogTitle>
        <Dropzone
          accept={{ "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] }}
          multiple={false}
          onDrop={(e) => setBannerFile(e[0])}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              {...getRootProps()}
              className={`flex w-full items-center justify-center border border-dashed border-gray-400 ${dropClass}`}
            >
              <input {...getInputProps()} />
              {bannerFile ? (
                <Image
                  src={URL.createObjectURL(bannerFile)}
                  width={1080}
                  height={1080}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <p>{isDragActive ? "Faylni tashlang" : "Rasm yuklang"}</p>
              )}
            </div>
          )}
        </Dropzone>
        <input
          type="text"
          placeholder="URL kiriting"
          required
          value={bannerUrl}
          onChange={(e) => setBannerUrl(e.target.value)}
          className="mt-4 w-full border px-3 py-2"
        />
        <DialogClose asChild>
          <Button onClick={handleUpload} className="mt-4 w-full">Saqlash</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
