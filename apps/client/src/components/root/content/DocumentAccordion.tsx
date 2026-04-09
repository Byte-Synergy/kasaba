"use client";

import React, { useState } from "react";
import { FileText, Eye, EyeOff, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PdfViewer from "@/components/shared/pdf-viewer";

interface DocumentAccordionProps {
  fileUrl: string;
  name: string;
}

const DocumentAccordion: React.FC<DocumentAccordionProps> = ({ fileUrl, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all hover:shadow-md mb-4">
      {/* Header / Trigger */}
      <div 
        className="flex items-center justify-between p-4 md:p-5 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-x-4">
          <div className="w-10 h-10 bg-[#00057308] rounded-lg flex items-center justify-center border border-[#00057310]">
            <FileText className="text-[#000573] w-5 h-5" />
          </div>
          <h3 className="text-[#000573] font-bold text-base md:text-lg transition-colors group-hover:text-[#ff8400]">
            {name}
          </h3>
        </div>

        <div className="flex items-center gap-x-3">
          <a 
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#ff8400] transition-all"
            title="Yuklab olish"
          >
            <Download className="w-5 h-5" />
          </a>
          <button 
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
              isOpen 
                ? "bg-[#ff8400] text-white shadow-lg shadow-[#ff840020]" 
                : "bg-[#00057308] text-[#000573] hover:bg-[#00057310]"
            }`}
          >
            {isOpen ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-gray-100"
          >
            <div className="p-4 md:p-6 bg-gray-50">
              <PdfViewer 
                DocumentName={fileUrl} 
                title={name} 
                hideHeader={true} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DocumentAccordion;
