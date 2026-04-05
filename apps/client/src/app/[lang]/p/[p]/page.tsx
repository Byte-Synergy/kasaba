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
  const menu = await getMenu(+p);

  return (
    <div className="max-x-[1440px] mx-auto">
      <Container className="my-5">
        <div className="flex items-center gap-5 flex-wrap">
          {menu.data && (
            <>
              {menu.data.type === "document" && (
                <div className="gap-5 grid grid-cols-4 pb-5 w-full">
                  {(menu.data?.content as ContentType[]).map((docFile, key) => {
                    if (docFile.type === "document") {
                      const fileId = menu.data?.files?.find(
                        (file) => file.name === docFile.fileId
                      );
                      if (fileId && docFile.docName)
                        return (
                          <DocumentsCard
                            lang={lang}
                            key={key}
                            fileId={fileId.href}
                            name={docFile.docName}
                          />
                        );
                      return null;
                    }
                  })}
                </div>
              )}
              {menu.data.type === "member" &&
                (menu.data?.content as ContentType[]).map(
                  (member, key) =>
                    member.type === "member" && (
                      <div
                        className="grid md:grid-cols-4 w-full gap-5"
                        key={key}
                      >
                        {member.members.reverse().map((mem, key) => {
                          const fileId = menu.data?.files?.find(
                            (file) => file.name === mem.fileId
                          );
                          if (!fileId) return null;

                          return (
                            <div
                              key={key}
                              className="bg-white min-h-[500px] relative"
                            >
                              <Image
                                src={fileId.href}
                                alt={fileId.name}
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
                                    {mem.acceptanceDay && (
                                      <div className="flex gap-1">
                                        <p className="text-nowrap">
                                          Qabul kuni:
                                        </p>
                                        <p className="w-full">
                                          {mem.acceptanceDay} {mem.workingTime}
                                        </p>
                                      </div>
                                    )}
                                    {/* {mem.acceptanceDay ? (
                                      <>
                                        <p>
                                          {mem.acceptanceDay} {mem.workingTime}
                                        </p>
                                        <p>{mem.address}</p>
                                      </>
                                    ) : (
                                      <>
                                        <p>{mem.address}</p>
                                      </>
                                    )} */}
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
                <div className="grid gap-5 max-w-[1000px] mx-auto">
                  {(menu.data?.content as ContentType[]).map(
                    (txt, key) =>
                      txt.type === "text" && (
                        <p key={key}>
                          {txt.value &&
                            txt.value.split("\n").map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                        </p>
                      )
                  )}
                </div>
              )}
              {menu.data.type === "photo" && (
                <div className="grid gap-5 max-w-[1000px] mx-auto">
                  {(menu.data?.content as ContentType[]).map((txt, key) => {
                    if (txt.type !== "photo") return null;

                    const fileId = menu.data?.files?.find(
                      (file) => file.name === txt.fileId
                    );
                    if (!fileId) return null;

                    return (
                      <Image
                        src={fileId.href}
                        alt={fileId.name}
                        width={1920}
                        height={1080}
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
