import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import React from "react";
import { redirect } from "next/navigation";
import { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/directory";
// import PageC from "./page-c";
import PdfViewer from "@/components/shared/pdf-viewer";

const DocumentDetailPage = async ({
  searchParams,
  params,
}: {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ fileUrl: string }>;
}) => {
  const { lang } = await params;
  const { fileUrl } = await searchParams;
  const t = await getDictionary(lang);

  if (!fileUrl) redirect("/");
  console.log(fileUrl);

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Container className="my-5 max-md:hidden">
        <Breadcrumb main_label={t.main_label} data={["hujjatlar"]} />
      </Container>
      <Container>
        <div className="flex items-start justify-between gap-x-4">
          <div className="w-full max-md:w-full max-md:py-5">
            <PdfViewer DocumentName={fileUrl} />
            {/* {!fileUrl.includes(".pdf") ? (
              <iframe
                className="w-full min-h-[800px]"
                src={`https://view.officeapps.live.com/op/embed.aspx?src=${
                  new URL(fileUrl).protocol +
                  "//" +
                  new URL(fileUrl).host +
                  new URL(fileUrl).pathname
                }`}
              ></iframe>
            ) : (
              <PageC
                fileUrl={
                  new URL(fileUrl).protocol +
                  "//" +
                  new URL(fileUrl).host +
                  new URL(fileUrl).pathname
                }
              />
            )} */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DocumentDetailPage;
