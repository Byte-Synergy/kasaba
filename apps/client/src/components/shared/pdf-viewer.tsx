"use client";
import { memo, useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

const PdfViewer = memo(({ DocumentName }: { DocumentName: string }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      WebViewer(
        {
          licenseKey:
            "demo:1746609248089:61117fdd0300000000aefb6ae426612925241542c6cbf8ac50b5065616",
          path: "/webviewer/lib",
          initialDoc: DocumentName,
        },
        viewerRef.current
      )
        .then((instance) => {
          const { documentViewer, annotationManager } = instance.Core;
          console.log("PDF Viewer Loaded:", documentViewer, annotationManager);
        })
        .catch((err) => {
          console.error("Failed to load WebViewer or document:", err);
        });
    } else {
      console.error("viewerRef is not ready");
    }
  }, [DocumentName]);

  return (
    <div className="w-full h-[95vh] overflow-hidden max-md:h-[100vh]">
      {/* <Suspense fallback={<><p className="text-black text-3xl">"Yuklanmoqda..."</p></>}> */}
      <div ref={viewerRef} />
      {/* </Suspense> */}
    </div>
  );
});

export default PdfViewer;
