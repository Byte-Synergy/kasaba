import PdfViewer from "@/components/shared/pdf-viewer";
import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import React, { Suspense } from "react";
import { redirect } from "next/navigation";
import { getDictionary } from "@/utils/directory";
import { getMenu } from "@/action/menu";

const DocumentDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string; lang: string }>;
}) => {
  const { lang, id } = await params;
  const menu = await getMenu(id, lang);
  const data = menu.data;

  const t = await getDictionary(lang);

  if (!data) redirect("/");

  // Find document URL from content blocks
  const docBlock = data.content?.find((c: any) => c.type === "document");
  const firstDoc = docBlock?.documents?.[0];
  const fileUrl = firstDoc?.fileUrl;

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Container className="my-5 max-md:hidden">
        <Breadcrumb
          main_label={t.main_label}
          data={[t.document_label, data.title || ""]}
        />
      </Container>
      <Container className="">
        <div className="flex items-start justify-between gap-x-4">
          <div className="w-full max-md:w-full max-md:py-5">
            {fileUrl && (
              <Suspense>
                <PdfViewer DocumentName={fileUrl} />
              </Suspense>
            )}
            {!fileUrl && (
              <p className="text-center py-20 text-gray-500">
                Hujjat topilmadi
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DocumentDetailPage;
