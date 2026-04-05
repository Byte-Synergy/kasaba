"use client";

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

export default function PageC({ fileUrl }: { fileUrl: string }) {
  return (
    <>
      <DocViewer
        config={{
          header: { disableFileName: true },
        }}
        style={{ backgroundColor: "gray", height: 700 }}
        pluginRenderers={DocViewerRenderers}
        documents={[{ uri: fileUrl }]}
      />
    </>
  );
}
