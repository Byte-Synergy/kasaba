"use client";
import { memo, useState, useEffect } from "react";
import { Download, FileText, AlertCircle, RefreshCw, FileSearch, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/utils/translation-provider";

const PdfViewer = memo(({ DocumentName, title }: { DocumentName: string, title?: string }) => {
  const [viewerUrl, setViewerUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const t = useTranslations() as any;

  // Better extension extraction
  const getExtension = (url: string) => {
    const parts = url.split('.');
    const lastPart = parts.length > 1 ? parts.pop()?.split('?')[0]?.toLowerCase() : "";
    // If extension looks like a real one (2-4 chars), use it, otherwise fallback to "pdf"
    if (lastPart && lastPart.length >= 2 && lastPart.length <= 4) return lastPart;
    return "pdf";
  };

  const extension = getExtension(DocumentName);
  const displayTitle = title || "Menu";
  const displayFileName = displayTitle.toLowerCase().endsWith(`.${extension}`) 
    ? displayTitle 
    : `${displayTitle}.${extension}`;

  useEffect(() => {
    if (DocumentName) {
      setLoading(true);
      const encodedUrl = encodeURIComponent(DocumentName);
      setViewerUrl(`https://docs.google.com/viewer?url=${encodedUrl}&embedded=true`);
      
      const timer = setTimeout(() => setLoading(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [DocumentName]);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  if (!DocumentName) return null;

  return (
    <div className="w-full flex flex-col gap-y-6">
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
            download 
            className="flex items-center gap-x-2 bg-[#ff8400] hover:bg-[#e67700] text-white px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 whitespace-nowrap text-sm"
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">{t.document_viewer?.download_label || "Yuklab olish"}</span>
          </a>
        </div>
      </motion.div>

      <div className="w-full h-[85vh] rounded-3xl overflow-hidden border border-gray-100 bg-[#EBEDF0] relative">
        <AnimatePresence mode="wait">
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
        
        {viewerUrl && (
          <iframe
            src={viewerUrl}
            onLoad={handleIframeLoad}
            className={`w-full h-full border-none bg-white transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
            title="Document Viewer"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
});

export default PdfViewer;
