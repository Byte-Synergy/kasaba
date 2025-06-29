import InteractiveAreaHandler from "../components/handler";
import { deleteArea, getInteractiveAreas, getPlace } from "@/actions/area";

export default async function Page({
  params,
}: {
  params: Promise<{ areaId: string }>;
}) {
  const { areaId } = await params;

  const place = await getPlace(+areaId);
  const interactiveAreas = await getInteractiveAreas(
    { limit: 20, page: 1 },
    +areaId,
  );

  const deletePlace = async (placeId: number) => {
    try {
      await deleteArea(placeId, "/dashboard")
    } catch (error) {
      console.log("Ma'lumot o'chirishda xatolik: ", error)
    }
  }

  if (!place.data) return <p>Hech qanday ma'lumot topilmadi</p>;

  return (
    <InteractiveAreaHandler
      placeId={+areaId}
      interactiveAreas={interactiveAreas.data?.data}
      placeData={{
        id: place.data?.id,
        name: place.data.name,
        title: place.data.title,
        areasCount: place.data.areasCount,
      }}
      // deletePlace={deletePlace}
    />
  );
}
