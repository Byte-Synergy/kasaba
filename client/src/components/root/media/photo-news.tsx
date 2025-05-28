import { Container } from "@/components/shared";
import PhotoNewsCard from "./photo-news-card";
import { NewsDataType } from "@/types";

const PhotoNews = ({ data }: { data: NewsDataType[] }) => {
  return (
    <Container>
      <div className=" my-10 grid grid-cols-3 max-md:grid-cols-1 gap-8">
        {data.map((item) => (
          <PhotoNewsCard data={item} key={item.title} />
        ))}
      </div>
    </Container>
  );
};

export default PhotoNews;
