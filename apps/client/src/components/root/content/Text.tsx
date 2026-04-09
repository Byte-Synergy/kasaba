"use client";

import DOMPurify from "isomorphic-dompurify";
import parse, { domToReact, Element, HTMLReactParserOptions } from "html-react-parser";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cn } from "@/libs/utils";
function Text({ data }: { data: string }) {
  if (typeof data !== "string") return <>error</>;

  const options: HTMLReactParserOptions = {
    replace: (domNode: any) => {
      if (domNode.type === "tag" && domNode.name === "img") {
        const { src, alt, class: className } = domNode.attribs || {};
        return (
          <LazyLoadImage
            src={src}
            alt={alt}
            className={className}
            effect="blur"
            wrapperClassName="w-full inline-block"
          />
        );
      }

      if (domNode.type === "tag" && domNode.name === "iframe") {
        const { src, title, class: className } = domNode.attribs || {};
        return (
          <div className="aspect-video w-full my-4">
            <iframe
              src={src}
              title={title}
              className={cn("w-full h-full rounded-lg", className)}
              allowFullScreen
            />
          </div>
        );
      }
    },
  };

  const purifiedData = DOMPurify.sanitize(data);

  return (
    <div className="rich-text">
       {parse(purifiedData, options)}
    </div>
  );
}

export default Text;
