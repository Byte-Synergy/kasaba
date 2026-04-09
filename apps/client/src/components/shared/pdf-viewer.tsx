"use client";
import { memo, useState, useEffect, useMemo } from "react";
import { Download, FileText, FileSearch } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/utils/translation-provider";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

const PdfViewer = memo(({ DocumentName, title, hideHeader = false }: { DocumentName: string, title?: string, hideHeader?: boolean }) => {
  const [loading, setLoading] = useState(true);
  const t = useTranslations() as any;

  const getExtension = (url: string) => {
    const parts = url.split('.');
    const lastPart = parts.length > 1 ? parts.pop()?.split('?')[0]?.toLowerCase() : "";
    if (lastPart && lastPart.length >= 2 && lastPart.length <= 4) return lastPart;
    return "pdf";
  };

  const extension = useMemo(() => getExtension(DocumentName), [DocumentName]);
  const isPdf = extension === "pdf";
  const displayTitle = title || "Menu";
  const displayFileName = displayTitle.toLowerCase().endsWith(`.${extension}`) 
    ? displayTitle 
    : `${displayTitle}.${extension}`;

  // For DocViewer
  const docs = useMemo(() => [{ uri: DocumentName }], [DocumentName]);

  useEffect(() => {
    setLoading(true);
  }, [DocumentName]);

  if (!DocumentName) return null;

  return (
    <div className="w-full flex flex-col gap-y-6">
      {!hideHeader && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 flex items-center justify-between gap-x-4"
        >
          <div className="flex items-center gap-x-4 overflow-hidden">
            <div className="w-12 h-12 bg-[#00057308] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#00057310]">
               <FileText className="text-[#000573] w-6 h-6" />
            </div>
            <div className="flex flex-col min-w-0">
               <h2 className="text-[#000573] font-bold text-lg md:text-xl truncate leading-tight">
                 {displayTitle}
               </h2>
               <span className="text-gray-400 text-sm font-medium truncate">
                  {displayFileName}
               </span>
            </div>
          </div>

          <div className="flex items-center gap-x-3">
            <a 
              href={DocumentName} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 bg-[#ff8400] hover:bg-[#e67700] text-white px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 whitespace-nowrap text-sm"
            >
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">{t.document_viewer?.download_label || "Yuklab olish"}</span>
            </a>
          </div>
        </motion.div>
      )}

      <div className="w-full min-h-[600px] h-[85vh] rounded-3xl overflow-hidden border border-gray-100 bg-white relative">
        <AnimatePresence>
          {loading && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 border-4 border-[#00057310] rounded-full"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#000573] border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-[#000573] font-bold text-lg">
                {t.document_viewer?.preparing_label || "Hujjat yuklanmoqda..."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <iframe
            src={`https://docs.google.com/viewer?embedded=true&url=${encodeURIComponent(DocumentName)}`}
            className="w-full h-full border-none"
            onLoad={() => setLoading(false)}
            title={displayTitle}
        />
      </div>
      
      <style jsx global>{`
        .doc-viewer-wrapper #rt-doc-viewer-header {
            display: none !important;
        }
        .doc-viewer-wrapper #proxy-renderer {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
        }
      `}</style>
    </div>
  );
});

export default PdfViewer;
