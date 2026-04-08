import { getMenu } from "@/action/menu";
import { Container } from "@/components/shared";
import { Locale } from "@/configs/i18n";
import React from "react";
import Content from "@/components/root/content/Content";

const PPage = async ({
  params,
}: {
  params: Promise<{ p: string; lang: Locale }>;
}) => {
  const { lang, p } = await params;
  const menu = await getMenu(p, lang);

  if (!menu.data) {
    return (
      <Container className="my-10">
        <h1 className="text-2xl font-bold text-center">Ma'lumot topilmadi</h1>
      </Container>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <Container className="my-10">
        <h1 className="text-3xl font-bold mb-8 text-[#141348] border-b pb-4">
          {menu.data.title}
        </h1>
        <div className="flex flex-col gap-8">
          {(menu.data.content || []).map((block: any, index: number) => (
            <Content
              key={`${block.type}-${index}`}
              content={block}
              lang={lang}
              files={null}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PPage;
