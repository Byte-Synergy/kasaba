import { getNewsCategories, getSingleNews } from "@/actions/news";
import NewsHandler from "../../../components/handler";

export default async function Page({
  params,
}: {
  params: Promise<{ path: string; type: string }>;
}) {
  const { path, type } = await params;
  
  const { data } = await getSingleNews(decodeURIComponent(path));
  const { data: categoriesData } = await getNewsCategories();
  
  console.log(data);
  console.log(decodeURIComponent(path));

  return (
    <>
      {data && (
        <NewsHandler
          categories={categoriesData?.map((category) => category.name) || []}
          mode="update"
          path={path}
          data={{
            ...data,
            content: data.content.map((content) => {
              if ("fileId" in content) {
                return {
                  ...content,
                  filePreview: data.files?.find((file) =>
                    file.name.includes(content.fileId),
                  )?.href,
                };
              }

              return content;
            }),
          }}
          title="Yangilik ma'lumotlari"
          type={type}
        />
      )}
    </>
  );
}
