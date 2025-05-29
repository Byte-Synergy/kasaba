import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import OtherContent from "@/components/shared/other-news";
import ShareCopy from "@/components/shared/share-copy";
import eden from "@/libs/eden";
import { formatDateToDateTime } from "@/utils/formatDate";
import { redirect } from "next/navigation";
import { CiCalendar } from "react-icons/ci";
import Content from "@/components/root/content/Content";
import SocialAds from "@/components/shared/social-ads";
import RelatedNews from "@/components/shared/related-news";
import { getDictionary } from "@/utils/directory";
import { Locale } from "@/configs/i18n";

// const Content = dynamic(() => import("@/components/root/content/Content"), {
//   ssr: false,
// });

// const fetchNews = async (title: string) => {
//   try {
//     const res = await NewsApi.getSingleNews(title);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchOtherNews = async (type: string[]) => {
//   try {
//     const res = await NewsApi.getNewsList({
//       page: 1,
//       limit: 4,
//       filter: { type },
//     });
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const SingleNewsPage = async ({
  params,
}: {
  params: Promise<{ id: string; lang: Locale }>;
}) => {
  const { id, lang } = await params;
  const t = await getDictionary(lang);

  const { data: currentNews } = await eden.news({ newsPath: id }).get();
  const { data: otherNews } = await eden.news.get({
    query: { limit: 4, page: 1 },
  });

  if (!currentNews) redirect("/");

  const breadcrumbs: Record<typeof currentNews.type, string> = {
    standard: t.single_news_label,
    area: t.areas_label,
    photo: t.photo_news_label,
    video: t.video_news_label,
  };
  return (
    <div className="">
      <section className="max-w-[1440px] w-full mx-auto">
        <Container className="my-5">
          <Breadcrumb
            main_label={t.main_label}
            data={[t.news_label, breadcrumbs[currentNews.type]]}
          />
        </Container>
      </section>
      <section id="content" className="max-w-[1440px] w-full mx-auto mb-10">
        <Container>
          <div className="flex gap-9">
            <div className="w-3/4 max-md:w-full">
              <h1 className=" font-montserrat font-semibold text-2xl max-md:text-base max-md:text-center max-md:mt-5">
                {currentNews.title}
              </h1>
              <div className="flex items-center justify-start gap-6 mt-2 max-md:hidden">
                <p className=" font-raleway font-medium text-sm text-gray-600 capitalize">
                  {breadcrumbs[currentNews.type]}
                </p>
                <div className="flex items-center justify-start gap-2">
                  <CiCalendar className="w-5 h-5 text-gray-600" />
                  <p className=" font-raleway font-medium text-sm text-gray-600">
                    {formatDateToDateTime(
                      currentNews.createdAt || new Date().toISOString()
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-5 py-4">
                {currentNews.content?.map((content, idx) => (
                  <>
                    <Content
                      key={"cotent-" + idx}
                      content={content as any}
                      files={currentNews.files}
                    />
                  </>
                ))}
              </div>
              <ShareCopy
                text={`https://davlat.kasaba.uz/news/${currentNews.type}/${currentNews.path}`}
              />
            </div>
            <div className=" w-1/4 max-md:hidden">
              {otherNews?.data.length && (
                <OtherContent lang={lang} data={otherNews?.data.slice(0, 3)} />
              )}
            </div>
          </div>
        </Container>
      </section>
      <section id="social-news" className="max-w-[1440px] w-full mx-auto">
        <SocialAds
          connect_button={t.link_sections.telegram.connect_button}
          description={t.link_sections.telegram.description}
          title={t.link_sections.telegram.title}
        />
      </section>
      <section id="related-news" className="max-w-[1440px] w-full mx-auto">
        {otherNews?.data.length && (
          <RelatedNews
            all_label={t.all_label}
            news_on_the_topic_label={t.news_on_the_topic_label}
            data={otherNews.data}
          />
        )}
      </section>
    </div>
  );
};

export default SingleNewsPage;
