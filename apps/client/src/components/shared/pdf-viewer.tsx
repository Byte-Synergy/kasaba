"use client";
import { memo, useState, useEffect } from "react";
import { Download, FileText, AlertCircle, RefreshCw, FileSearch, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/utils/translation-provider";

const PdfViewer = memo(({ DocumentName, title }: { DocumentName: string, title?: string }) => {
  const [viewerUrl, setViewerUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const t = useTranslations() as any;

  const fileName = DocumentName.split('/').pop()?.split('?')[0] || "Hujjat";

  useEffect(() => {
    if (DocumentName) {
      setLoading(true);
      const encodedUrl = encodeURIComponent(DocumentName);
      setViewerUrl(`https://docs.google.com/viewer?url=${encodedUrl}&embedded=true`);
      
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [DocumentName]);

  if (!DocumentName) return null;

  return (
    <div className="w-full flex flex-col gap-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-white rounded-2xl p-5 md:p-7 shadow-[0px_4px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center justify-between gap-x-4"
      >
        <div className="flex items-center gap-x-5 overflow-hidden">
          <div className="w-14 h-14 bg-[#00057308] rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#00057310]">
             <FileText className="text-[#000573] w-7 h-7" />
          </div>
          <div className="flex flex-col min-w-0">
             <h2 className="text-[#000573] font-bold text-xl md:text-2xl truncate leading-tight">
               {title || t.document_viewer?.title || "Hujjatni ko'rish"}
             </h2>
             <div className="flex items-center gap-x-2 text-gray-400 text-sm mt-1">
                <span className="truncate max-w-[200px] md:max-w-md font-medium">{fileName}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="font-bold text-gray-500 uppercase">
                  {DocumentName.split('.').pop()?.toUpperCase() || "DOC"}
                </span>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <a 
            href={DocumentName} 
            download 
            className="flex items-center gap-x-2 bg-[#ff8400] hover:bg-[#e67700] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-200 active:scale-95 whitespace-nowrap"
          >
            <Download className="w-5 h-5" />
            <span className="hidden md:inline">{t.document_viewer?.download_label || "Yuklab olish"}</span>
          </a>
        </div>
      </motion.div>

      <div className="w-full h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#EBEDF0] relative p-4 md:p-10">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md z-20"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 border-4 border-[#00057310] rounded-full"></div>
                <div className="absolute top-0 left-0 w-20 h-20 border-4 border-[#000573] border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-[#000573] font-extrabold text-xl tracking-tight">
                {t.document_viewer?.preparing_label || "Hujjat tayyorlanmoqda..."}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {t.document_viewer?.preparing_description || "Bu bir necha soniya vaqt olishi mumkin"}
              </p>
            </motion.div>
          ) : (
            <motion.div 
               key="content"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="w-full h-full"
            >
               {viewerUrl && (
                 <iframe
                   src={viewerUrl}
                   className="w-full h-full border-none rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white"
                   title="Document Viewer"
                   allowFullScreen
                 />
               )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-x-2 text-gray-400 text-xs font-medium">
         <FileSearch className="w-4 h-4 text-[#000573]" />
         {t.document_viewer?.view_modes_label || "PDF, DOC va DOCX fayllarini ko'rish rejimi yoqilgan."}
      </div>
    </div>
  );
});

export default PdfViewer;
