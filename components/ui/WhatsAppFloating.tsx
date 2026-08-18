"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloating() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-3">
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            className="bg-[#171717] text-[#FFFDF7] text-[12px] font-semibold tracking-wider uppercase px-3.5 py-2 rounded-[4px] border border-[#D8D2C4]/20 shadow-lg pointer-events-none whitespace-nowrap"
          >
            CHAT WITH YHC ?
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat with YHC on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#171717] text-[#FFFDF7] border border-[#E8C766]/30 flex items-center justify-center shadow-xl hover:bg-[#E8C766] hover:text-[#171717] transition-colors duration-300"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
