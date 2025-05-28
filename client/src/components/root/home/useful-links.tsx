import { Container } from "@/components/shared";
import SocailMediaLinks from "./socail-media-links";
import PartniersLink from "./partniers-links";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { getDictionary } from "@/utils/directory";
import { Locale } from "@/configs/i18n";

const UsefulLinks = async ({ lang }: { lang: Locale }) => {
  const t = await getDictionary(lang);

  return (
    <Container>
      <ScrollAnimation>
        <div className="flex justify-between items-center gap-x-4  max-md:gap-1 my-10 max-md:my-5 uppercase">
          <div className=" max-md:w-4  max-md:h-4  max-md:bg-orange-500 hidden max-md:block "></div>
          <h3 className="text-[#ff8400] text-4xl font-bold  max-md:text-base max-md:text-[#000674]">
            {t.useful_links_label}
          </h3>
          <div className="flex-auto h-1 bg-[#ff8400] max-md:bg-[#000674] max-md:h-[1px]"></div>
        </div>
      </ScrollAnimation>
      <SocailMediaLinks lang={lang} />
      <PartniersLink />
    </Container>
  );
};

export default UsefulLinks;
