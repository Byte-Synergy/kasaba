import Motto from "./Motto";
import Photo from "./Photo";
import Text from "./Text";
import Video from "./Video";
import type { ContentType } from "@/types/content";
import React from "react";
import MemberCards from "../../shared/member-card";
import DocumentsCard from "../../shared/documents-card";
import type { Locale } from "@/configs/i18n";

const Content = ({
  content,
  files,
  lang,
}: {
  content: ContentType;
  files: any;
  lang: Locale;
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
      case "photo":
        if (content.fileId)
          return <Photo data={content.fileId} files={files} />;
        break;
      case "document":
        if (content.fileId) {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <DocumentsCard
                lang={lang}
                fileId={content.fileId}
                name={content.docName || "Hujjat"}
              />
            </div>
          );
        }
        break;
      case "member":
        return <MemberCards data={content} files={files} />;
      default:
        return null;
    }
  };

  return <div className="w-full">{renderFn(content)}</div>;
};

export default Content;
