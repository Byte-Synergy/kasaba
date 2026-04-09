import { Container } from "@/components/shared";
import Breadcrumb from "@/components/shared/breadcrumb";
import OtherContent from "@/components/shared/other-news";
import ShareCopy from "@/components/shared/share-copy";
import { formatDateToDateTime } from "@/utils/formatDate";
import { redirect } from "next/navigation";
import { CiCalendar } from "react-icons/ci";
import Content from "@/components/root/content/Content";
import SocialAds from "@/components/shared/social-ads";
import RelatedNews from "@/components/shared/related-news";
import { getDictionary } from "@/utils/directory";
import { Locale } from "@/configs/i18n";
import { getNews, getNewsBySlug } from "@/action/news";

const SingleNewsPage = async ({
  params,
}: {
  params: Promise<{ id: string; lang: string }>;
}) => {
  const { id, lang } = await params;
  const t = await getDictionary(lang);

  const { data: currentNews } = await getNewsBySlug(id, lang);

  const { data: otherNewsResp } = await getNews({
    limit: 4,
    page: 1,
    filter: {
      lang,
    },
  });
  const otherNews = otherNewsResp?.data || [];

  if (!currentNews) redirect("/");

  // AGAR: Till almashtirilganda slug eski tildagi bo'lib qolgan bo'lsa va 
  // yangi tilda boshqa slug bo'lsa, to'g'ri slugga redirect qilamiz.
  if (currentNews.path && currentNews.path !== id && !currentNews.isFallback) {
    redirect(`/${lang}/news/${currentNews.type}/${currentNews.path}`);
  }

  const breadcrumbs: Record<string, string> = {
    standard: t.single_news_label,
    area: t.areas_label,
    photo: t.photo_news_label,
    video: t.video_news_label,
  };

  return (
    <div className="">
      {currentNews.isFallback && (
        <div className="bg-amber-50 border-b border-amber-200 py-2">
          <Container>
            <p className="text-amber-800 text-sm font-medium">
              {t.fallback_message}
            </p>
          </Container>
        </div>
      )}
      <section className="max-w-[1780px] w-full mx-auto">
        <Container className="my-5">
          <Breadcrumb
            main_label={t.main_label}
            data={[t.news_label, breadcrumbs[currentNews.type] || t.single_news_label]}
          />
        </Container>
      </section>
      <section id="content" className="max-w-[1780px] w-full mx-auto mb-10">
        <Container>
          <div className="flex gap-9">
            <div className="w-3/4 max-md:w-full">
              <h1 className=" font-montserrat font-semibold text-2xl max-md:text-md max-md:text-center max-md:mt-5">
                {currentNews.title}
              </h1>
              <div className="flex items-center justify-start gap-6 mt-2 max-md:hidden">
                <p className=" font-raleway font-medium text-sm text-gray-600 capitalize">
                  {breadcrumbs[currentNews.type] || t.single_news_label}
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
                {currentNews.content?.map((content: any, idx: number) => (
                    <Content
                      key={"cotent-" + idx}
                      content={content as any}
                      lang={lang as any}
                      files={currentNews.files}
                    />
                ))}
              </div>
              <ShareCopy
                text={`https://davlat.kasaba.uz/news/${currentNews.type}/${currentNews.path}`}
              />
            </div>
            <div className=" w-1/4 max-md:hidden">
              {!!otherNews.length && (
                <OtherContent lang={lang as any} data={otherNews.slice(0, 3)} />
              )}
            </div>
          </div>
        </Container>
      </section>
      <section id="social-news" className="max-w-[1780px] w-full mx-auto">
        <SocialAds
          connect_button={t.link_sections.telegram.connect_button}
          description={t.link_sections.telegram.description}
          title={t.link_sections.telegram.title}
        />
      </section>
      <section id="related-news" className="max-w-[1780px] w-full mx-auto">
        {!!otherNews.length && (
          <RelatedNews
            lang={lang as any}
            all_label={t.all_label}
            news_on_the_topic_label={t.news_on_the_topic_label}
            data={otherNews}
          />
        )}
      </section>
    </div>
  );
};

export default SingleNewsPage;
