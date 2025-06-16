import { getBanners } from "@/actions/banner";
import PageView from "./components/view";

export default async function Page() {
  const { data } = await getBanners();

  console.log(data);

  const fitBanner = data?.filter((data) => data.type === "fit");
  const fullBanner = data?.filter((data) => data.type === "full");
  const hero1Banner = data?.filter((data) => data.type === "hero1")
  const hero2Banner = data?.filter((data) => data.type === "hero2")

  return (
    <>
      <PageView fitBanner={fitBanner || []} fullBanner={fullBanner || []}  hero1Banner={hero1Banner || []} hero2Banner={hero2Banner || []}/>
    </>
  );
}
