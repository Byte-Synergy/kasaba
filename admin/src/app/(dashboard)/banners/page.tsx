import { getBanners } from "@/actions/banner";
import PageView from "./components/view";

export default async function Page() {
  const { data } = await getBanners();

  const fitBanner = data?.filter((data) => data.type === "fit");
  const fullBanner = data?.filter((data) => data.type === "full");

  return (
    <>
      <PageView fitBanner={fitBanner || []} fullBanner={fullBanner || []} />
    </>
  );
}
