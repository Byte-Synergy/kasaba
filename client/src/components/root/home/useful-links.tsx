import SocailMediaLinks from "./socail-media-links";
import PartniersLink from "./partniers-links";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { getDictionary } from "@/utils/directory";
import { Locale } from "@/configs/i18n";
import { Container } from "@/components/shared";
import NewsTitle from "@/components/news/title";

const UsefulLinks = async ({ lang }: { lang: Locale }) => {
  const t = await getDictionary(lang);

  return (
    <Container>
      <ScrollAnimation>
        {/* <NewsTitle title={t.useful_links_label} lang={lang}  /> */}
        <NewsTitle
          lang={lang}
          title={t.useful_links_label}
          // button={all_label}
          href="/news/video"
          className="max-md:text-[#fff]"
          variant="titleWithoutLink"
        />
      </ScrollAnimation>
      <SocailMediaLinks lang={lang} />
      <PartniersLink />
    </Container>
  );
};

export default UsefulLinks;
