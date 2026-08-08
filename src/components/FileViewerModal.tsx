import { motion, AnimatePresence } from "motion/react";
import { X, Download, FileText, Video } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface FileViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl?: string;
  fileType?: "pdf" | "video" | "image";
  fileName?: string;
}

const Spinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0c]">
    <motion.div
      className="w-16 h-16 border-4 border-[#EBFF57] border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// Inner content is keyed by fileUrl in the parent, so its useState
// initial value resets cleanly each time a new file is shown — no
// setState-in-effect needed.
const FileViewerContent = ({
  fileUrl,
  fileType,
  fileName,
}: {
  fileUrl?: string;
  fileType: "pdf" | "video" | "image";
  fileName: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!fileUrl) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400">
        <FileText className="w-20 h-20 mb-4" />
        <p className="text-xl font-['Clash_Grotesk',_sans-serif] font-medium text-white">
          Available on request
        </p>
        <p className="text-base text-gray-500 mt-2 max-w-md text-center">
          This file isn't hosted here yet. Email{" "}
          <a
            href={`mailto:stefan01@stanford.edu?subject=${encodeURIComponent(`Requesting: ${fileName}`)}`}
            className="text-[#EBFF57] underline underline-offset-4 hover:opacity-80"
          >
            stefan01@stanford.edu
          </a>{" "}
          and it will be shared directly.
        </p>
      </div>
    );
  }

  switch (fileType) {
    case "pdf":
      return (
        <div className="w-full h-full bg-white rounded-lg overflow-hidden">
          <iframe
            src={fileUrl}
            className="w-full h-full"
            title={fileName}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && <Spinner />}
        </div>
      );

    case "video":
      return (
        <div className="w-full h-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
          <video
            src={fileUrl}
            controls
            className="max-w-full max-h-full"
            onLoadedData={() => setIsLoading(false)}
          >
            Your browser does not support the video tag.
          </video>
          {isLoading && <Spinner />}
        </div>
      );

    case "image":
      return (
        <div className="w-full h-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={fileUrl}
            alt={fileName}
            className="max-w-full max-h-full object-contain"
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && <Spinner />}
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center h-full text-gray-400">
          <p className="text-lg">Unsupported file type</p>
        </div>
      );
  }
};

export function FileViewerModal({
  isOpen,
  onClose,
  fileUrl,
  fileType = "pdf",
  fileName = "Document",
}: FileViewerModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; });

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  const handleDownload = () => {
    if (!fileUrl) return;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={fileName}
              className="relative w-full max-w-[1400px] h-[90vh] bg-[#0a0a0c] rounded-2xl border border-[rgba(255,255,255,0.1)] overflow-hidden pointer-events-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-[#0a0a0c] border-b border-[rgba(255,255,255,0.1)] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {fileType === "video" ? (
                    <Video className="w-6 h-6 text-[#EBFF57]" />
                  ) : (
                    <FileText className="w-6 h-6 text-[#EBFF57]" />
                  )}
                  <h3 className="font-['Clash_Grotesk',_sans-serif] font-semibold text-2xl text-white">
                    {fileName}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  {fileUrl && (
                    <motion.button
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-4 py-2 bg-[#EBFF57] text-black rounded-lg hover:bg-[#d4e84f] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-5 h-5" />
                      <span className="font-['Clash_Grotesk',_sans-serif] font-medium text-base">
                        Download
                      </span>
                    </motion.button>
                  )}

                  <motion.button
                    ref={closeButtonRef}
                    onClick={onClose}
                    aria-label="Close"
                    className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* File Content */}
              <div className="w-full h-full pt-[72px] p-6 relative">
                <FileViewerContent
                  key={fileUrl ?? "no-file"}
                  fileUrl={fileUrl}
                  fileType={fileType}
                  fileName={fileName}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
