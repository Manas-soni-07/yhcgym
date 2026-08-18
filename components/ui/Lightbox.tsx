"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export default function Lightbox({ item, items, onClose, onSelect }: LightboxProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171717]/95 backdrop-blur-xl p-4 md:p-8"
        onClick={onClose}
      >
        {/* Controls */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close Lightbox"
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full border border-white/20 bg-white/10 text-[#FFFDF7] flex items-center justify-center hover:bg-[#E8C766] hover:text-[#171717] hover:border-[#E8C766] transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous Image"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/20 bg-white/10 text-[#FFFDF7] flex items-center justify-center hover:bg-[#E8C766] hover:text-[#171717] transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next Image"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/20 bg-white/10 text-[#FFFDF7] flex items-center justify-center hover:bg-[#E8C766] hover:text-[#171717] transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
        >
          <div className="relative w-full h-[60vh] md:h-[70vh] rounded-[6px] overflow-hidden border border-white/15 bg-[#1F1F1F]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-5 text-[#FFFDF7]">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8C766] px-2.5 py-1 rounded-[3px] bg-[#E8C766]/10 border border-[#E8C766]/30">
                  {item.categoryLabel}
                </span>
                <span className="text-xs text-[#A39F93] font-mono">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide mt-2 text-[#FFFDF7]">
                {item.title}
              </h3>
              <p className="text-sm text-[#A39F93] max-w-2xl mt-1">{item.caption}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
