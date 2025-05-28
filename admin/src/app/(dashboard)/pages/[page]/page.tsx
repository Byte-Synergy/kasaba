import { getMenu } from "@/actions/menu";
import { redirect } from "next/navigation";
import PageHandler from "../components/handler";
import PageView from "../components/view";
import { ColumnDef } from "@tanstack/react-table";
import PageViewHeader from "../components/header";
import { ContentType } from "@/types/content";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const columns: ColumnDef<Record<string, any>>[] = [
    {
      accessorKey: "name",
      header: "Menyu",
    },
    {
      accessorKey: "sub_menus",
      header: "Ichki menyular",
    },
  ];
  const { page } = await params;

  const { data } = await getMenu(+page);

  if (!data) redirect("/pages");

  const menuChildrenData = await Promise.all(
    data.children?.map((child) => getMenu(child.id)) || [],
  );

  const menuChildData = menuChildrenData.map((menuItem) => ({
    type: menuItem.data?.type,
    id: menuItem.data?.id,
    name: menuItem.data?.name,
    sub_menus: `${menuItem.data?.children?.length || 0} ta`,
  }));

  return (
    <>
      {!data.type ? (
        <section className="h-full">
          <div className="container min-h-full p-5">
            <div className="h-full rounded-lg bg-white p-5 shadow-lg shadow-slate-200">
              <PageViewHeader
                buttonChildren="Ichki menyu qo'shish"
                parent={data}
                title={data.name}
                currentMenu={data}
              />
              <PageView data={menuChildData} columns={columns} />
            </div>
          </div>
        </section>
      ) : (
        <PageHandler
          mode="update"
          menuId={data.id}
          type={data.type}
          data={{
            ...data,
            content: (data.content as ContentType[]).map((content) => {
              if ("fileId" in content && content.fileId) {
                const fileId = content.fileId;
                if (fileId)
                  return {
                    ...content,
                    filePreview: data.files?.find((file) =>
                      file.name.includes(fileId),
                    )?.href,
                  };
              }
              if ("members" in content) {
                return {
                  ...content,
                  members: content.members.map((member) => {
                    if ("fileId" in member) {
                      const fileId = member.fileId;
                      if (fileId)
                        return {
                          ...member,
                          filePreview: data.files?.find((file) =>
                            file.name.includes(fileId),
                          )?.href,
                        };
                    }
                    return member;
                  }),
                };
              }
              return content;
            }),
          }}
        />
      )}
    </>
  );
}
