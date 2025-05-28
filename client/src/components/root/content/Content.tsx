import Motto from "./Motto";
import Photo from "./Photo";
import Text from "./Text";
import Video from "./Video";
import Section from "./Section";
import { ContentType } from "@/types/content";
import { AppType } from "@/types/server";
import React from "react";

export interface dataType {
  data?:
    | string
    | { author: string; job: string; description: string }
    | string[];
}

const Content = ({
  content,
  files,
}: {
  content: ContentType;
  files: AppType["_routes"]["api"]["rest"]["news"][":newsPath"]["get"]["response"]["200"]["files"];
}) => {
  const renderFn = (content: ContentType) => {
    switch (content.type) {
      case "text":
        if (content.value) return <Text data={content.value} />;
        break;
      case "video-url":
        if (content.value) return <Video data={content.value} />;
        break;
      case "quote":
        if (content.value) return <Motto data={content.value} />;
        break;
      // case "gallery":
      //   return <Gallery data={content.value[]} />;
      case "photo":
        if (content.fileId)
          return <Photo data={content.fileId} files={files} />;
        break;
      case "document":
        return <Section data={content} />;
      case "member":
        return <Section data={content} />;
      default:
        return <>Ma'lumot turi topilmadi...</>;
    }
  };

  return <div className="">{renderFn(content)}</div>;
};

export default Content;
