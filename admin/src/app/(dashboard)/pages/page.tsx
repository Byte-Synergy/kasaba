import { getMenus } from "@/actions/menu";
import PageViewHeader from "./components/header";
import PageView from "./components/view";
import { ColumnDef } from "@tanstack/react-table";
import { Suspense } from "react";

async function PageContent() {
  const { data } = await getMenus({
    limit: 10,
    page: 1,
    filter: {
      parentId: null,
      orderBy: "desc",
    },
  });

  const columns: ColumnDef<Record<string, any>>[] = [
    {
      accessorKey: "name",
      header: "Menyu",
    },
    {
      accessorKey: "sub_menus",
      header: "Ichki menyular soni",
    },
  ];

  const menuData = data?.data.map((menuItem) => ({
    type: menuItem.type,
    id: menuItem.id,
    name: menuItem.name,
    sub_menus: `${menuItem.children?.length || 0} ta`,
  }));

  return (
    <section className="h-full">
      <div className="container min-h-full p-5">
        <div className="h-full rounded-lg bg-white p-5 shadow-lg shadow-slate-200">
          <PageViewHeader
            buttonChildren="Qo'shish"
            menus={data?.data
              .filter((menu) => !menu.type && !menu.parent)
              .map((menu) => ({
                id: menu.id,
                name: menu.name,
                path: menu.path,
              }))}
            title="Sahifalar"
          />
          {!menuData?.length ? (
            <div className="grid h-full min-h-40 w-full place-items-center">
              <p className="font-medium">Hech qanday ma'lumot mavjud emas</p>
            </div>
          ) : (
            <PageView data={menuData} columns={columns} />
          )}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <PageContent />
    </Suspense>
  );
}
