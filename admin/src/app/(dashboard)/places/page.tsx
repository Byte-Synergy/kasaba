import PageViewHeader from "./components/header";
import PageView from "./components/view";
import { ColumnDef } from "@tanstack/react-table";
import { getPlaces } from "@/actions/area";

export default async function Page() {
  const { data } = await getPlaces({
    limit: 50,
    page: 1,
  });

  const columns: ColumnDef<Record<string, any>>[] = [
    {
      accessorKey: "name",
      header: "Shahar/Viloyat",
    },
    {
      accessorKey: "areas",
      header: "Interaktiv hududlari",
    },
  ];

  const placeData = data?.data.map((place) => ({
    id: place.id,
    name: place.title,
    areas: place.areasCount,
  }));

  return (
    <>
      <section className="h-full">
        <div className="container min-h-full p-5">
          <div className="h-full rounded-lg bg-white p-5 shadow-lg shadow-slate-200">
            {!data?.data.length || !placeData?.length ? (
              <div className="grid h-full min-h-40 w-full place-items-center">
                <p className="font-medium">Hech qanday ma'lumot mavjud emas</p>
              </div>
            ) : (
              <>
                <PageViewHeader title="Shahar va viloyatlar" />
                <PageView data={placeData} columns={columns} />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
