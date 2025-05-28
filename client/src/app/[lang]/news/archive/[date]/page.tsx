import { getNews } from "@/action/news";
import { Container } from "@/components/shared";
import StandardNewsCard from "@/components/shared/standart-news-card";
import { Locale } from "@/configs/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{
    lang: Locale;
    date: string;
  }>;
}) {
  const { date, lang } = await params;

  const { data } = await getNews({
    limit: 10,
    page: 1,
    filter: {
      isArchived: true,
      lang,
      archivedAt: new Date(date),
    },
  });
  const news = data?.data;

  if (!news?.length)
    return "Bu kunda hech qanday arxiv yangiliklari mavjud emas!";

  return (
    <Container>
      <div className="grid gap-3 grid-cols-4">
        {news.map((item) => (
          <div key={item.id}>
            <StandardNewsCard data={item as any} key={item.title} />
          </div>
        ))}
      </div>
    </Container>
  );
}
