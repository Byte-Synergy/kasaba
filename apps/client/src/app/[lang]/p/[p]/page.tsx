import { getMenu } from "@/action/menu";
import Text from "@/components/root/content/Text";
import { Container } from "@/components/shared";
import DocumentsCard from "@/components/shared/documents-card";
import { Locale } from "@/configs/i18n";
import { ContentType } from "@/types/content";
import Image from "next/image";
import React from "react";

const PPage = async ({
  params,
}: {
  params: Promise<{ p: string; lang: Locale }>;
}) => {
  const { lang, p } = await params;
  const menu = await getMenu(p, lang);

  return (
    <div className="max-x-[1440px] mx-auto">
      <Container className="my-5">
        <div className="flex items-center gap-5 flex-wrap">
          {menu.data && (
            <>
              {menu.data.type === "document" && (
                <div className="gap-5 grid grid-cols-4 pb-5 w-full">
                  {(menu.data?.content || []).map((docFile: any, key: number) => {
                    if (docFile.type === "document" || docFile.type === "text") {
                      // Hozirgi Directus bloklarida hujjatlar richtext ichida bo'lishi mumkin
                      // Lekin agar document turi bo'lsa:
                      if (docFile.href) {
                        return (
                          <DocumentsCard
                            lang={lang}
                            key={key}
                            fileId={docFile.href}
                            name={docFile.docName || docFile.value || "Hujjat"}
                          />
                        );
                      }
                    }
                    return null;
                  })}
                </div>
              )}
              {menu.data.type === "member" &&
                (menu.data?.content || []).map(
                  (member: any, key: number) =>
                    member.type === "member" && (
                      <div
                        className="grid md:grid-cols-4 w-full gap-5"
                        key={key}
                      >
                        {member.members.map((mem: any, mk: number) => {
                          if (!mem.href) return null;

                          return (
                            <div
                              key={mk}
                              className="bg-white min-h-[500px] relative"
                            >
                              <Image
                                src={mem.href}
                                alt={mem.fullName}
                                width={1080}
                                height={1080}
                                className="size-full object-cover"
                              />
                              <div className="size-full absolute top-0 left-0 z-10 flex flex-col">
                                <div className="w-full min-h-1/2 bg-gradient-to-t from-[#000443] via-[#000443] to-transparent absolute bottom-0 left-0" />
                                <div className="relative z-20 text-white min-h-[150px] p-5 mt-auto grid gap-1 font-medium">
                                  <h3 className="font-bold">{mem.fullName}</h3>
                                  <div className="text-[#FF8500]">
                                    <p className="leading-4.5">
                                      {mem.position}
                                    </p>
                                    <hr className="border-2 mt-1.5 border-[#FF8500]" />
                                  </div>
                                  <div className="mt-2">
                                    <p>Tel: {mem.phoneNumber}</p>
                                    {mem.email && <p>Email: {mem.email}</p>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )
                )}
              {menu.data.type === "text" && (
                <div className="grid gap-5 max-w-[1000px] mx-auto w-full prose prose-lg">
                  {(menu.data?.content || []).map(
                    (txt: any, key: number) =>
                      txt.type === "text" && (
                        <div key={key} dangerouslySetInnerHTML={{ __html: txt.value }} />
                      )
                  )}
                </div>
              )}
              {menu.data.type === "photo" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
                  {(menu.data?.content || []).map((pic: any, key: number) => {
                    if (pic.type !== "photo" || !pic.href) return null;
                    return (
                      <Image
                        key={key}
                        src={pic.href}
                        alt="photo"
                        width={800}
                        height={600}
                        className="rounded-lg object-cover aspect-video"
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PPage;
