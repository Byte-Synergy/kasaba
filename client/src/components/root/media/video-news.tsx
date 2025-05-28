import { Container } from "@/components/shared";
import VideoNewsCard from "@/components/shared/video-news-card";
import { NewsDataType } from "@/types";

const VideoNews = ({ data }: { data: NewsDataType[] }) => {
  return (
    <Container className="mb-5">
      <div className="flex items-start gap-x-4">
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {data.map((item: NewsDataType) => (
            <div className="w-[45%] max-md:w-full" key={item.id}>
              <VideoNewsCard data={item} key={item.id} variant="standart" />
            </div>
          ))}
        </div>
        {/* <div className='w-1/4'>
                    <OtherContent />
                </div> */}
      </div>
    </Container>
  );
};

export default VideoNews;
