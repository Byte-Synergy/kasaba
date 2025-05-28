import eden from "@/libs/eden";

export async function getAreas(id: number | string) {
  const { data } = await eden.places({ placeId: id }).interactive_areas.get({
    query: { limit: 50, page: 1 },
  });
  return data;
}
