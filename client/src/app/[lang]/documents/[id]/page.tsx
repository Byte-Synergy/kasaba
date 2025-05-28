import PdfViewer from "@/components/shared/pdf-viewer";
import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import React, { Suspense } from "react";
import eden from "@/libs/eden";
import { redirect } from "next/navigation";
import { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/directory";
// import PageC from "./page-c";

const DocumentDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string; lang: Locale }>;
}) => {
  const { lang, id } = await params;
  const { data } = await eden.menus({ menuId: +id }).get();

  const t = await getDictionary(lang);

  if (!data) redirect("/");

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Container className="my-5 max-md:hidden">
        <Breadcrumb
          main_label={t.main_label}
          data={[t.document_label, data.name]}
        />
      </Container>
      <Container className="">
        <div className="flex items-start justify-between gap-x-4">
          <div className="w-full max-md:w-full max-md:py-5">
            {data.files?.length && (
              <Suspense>
                <PdfViewer DocumentName={data.files[0].href} />
                {/* <PageC
                  fileUrl={
                    new URL(data.files[0].href).protocol +
                    "//" +
                    new URL(data.files[0].href).host +
                    new URL(data.files[0].href).pathname
                  }
                /> */}
              </Suspense>
            )}
          </div>
          {/* <div className="w-1/4 max-md:hidden">
            <OtherContent />
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default DocumentDetailPage;
