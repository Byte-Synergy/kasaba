import Motto from "./Motto";
import Photo from "./Photo";
import Text from "./Text";
import Video from "./Video";
import Gallery from "./Gallery";
import type { ContentType } from "@/types/content";
import React from "react";
import MemberCards from "../../shared/member-card";
import DocumentsCard from "../../shared/documents-card";
import PdfViewer from "@/components/shared/pdf-viewer";
import DocumentAccordion from "./DocumentAccordion";
import type { Locale } from "@/configs/i18n";

const Content = ({
  content,
  files,
  lang,
  menuTitle,
  showViewer = false,
  defaultOpen = false,
}: {
  content: ContentType;
  files: any;
  lang: Locale;
  menuTitle?: string;
  showViewer?: boolean;
  defaultOpen?: boolean;
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
        if (content.fileUrl || content.fileId)
          return <Photo data={content.fileUrl || content.fileId || ""} files={files} />;
        break;
      case "gallery":
        if (content.images) return <Gallery images={content.images} />;
        break;
      case "document":
        if (content.documents || content.fileId || content.fileUrl) {
          const docs = content.documents || [
            { fileUrl: content.fileUrl, fileId: content.fileId, name: content.docName || "Hujjat" },
          ];
          return (
            <div className="flex flex-col gap-4">
              {docs.map((doc: any, idx: number) => (
                <DocumentAccordion 
                   key={idx}
                   fileUrl={doc.fileUrl || doc.fileId} 
                   name={doc.name || "Hujjat"} 
                   showViewer={showViewer}
                   defaultOpen={defaultOpen}
                />
              ))}
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
