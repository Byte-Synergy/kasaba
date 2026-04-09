import { getMenu } from "@/action/menu";
import { Container } from "@/components/shared";
import { Locale } from "@/configs/i18n";
import React from "react";
import Content from "@/components/root/content/Content";
import { getDictionary } from "@/utils/directory";

const PPage = async ({
  params,
}: {
  params: Promise<{ p: string; lang: string }>;
}) => {
  const { lang, p } = await params;
  const menu = await getMenu(p, lang);
  const t = await getDictionary(lang);

  if (!menu.data) {
    return (
      <Container className="my-10">
        <h1 className="text-2xl font-bold text-center">
          {t.search_results_empty_label}
        </h1>
      </Container>
    );
  }

  const totalDocs = (menu.data.content || []).reduce((acc: number, block: any) => {
    if (block.type === "document") {
      return acc + (block.documents?.length || 1);
    }
    return acc;
  }, 0);

  return (
    <div className="w-full mx-auto">
      <Container className="my-10">
        <h1 className="text-3xl font-bold mb-8 text-[#141348] border-b pb-4">
          {menu.data.title}
        </h1>
        <div className="flex flex-col gap-10">
          {(menu.data.content || []).map((block: any, index: number) => (
            <div key={`${block.type}-${index}`} className="w-full">
              <Content
                content={block}
                lang={lang as any}
                files={null}
                defaultOpen={totalDocs === 1}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PPage;
