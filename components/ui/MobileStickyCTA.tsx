"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import FreeTrialModal from "./FreeTrialModal";

export default function MobileStickyCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-lg border-t border-[#D8D2C4] px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-3 gap-2">
          <a
            href="tel:+15550198422"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-[4px] bg-[#F7F3E8] border border-[#D8D2C4] text-[#171717] text-[11px] font-semibold uppercase tracking-wider active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 mb-1 text-[#171717]" />
            <span>CALL</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-[4px] bg-[#171717] text-[#FFFDF7] text-[11px] font-semibold uppercase tracking-wider active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4 mb-1 text-[#E8C766]" />
            <span>WHATSAPP</span>
          </a>

          <button
            onClick={() => setModalOpen(true)}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-[4px] bg-[#E8C766] text-[#171717] text-[11px] font-bold uppercase tracking-wider active:scale-95 transition-transform shadow-sm"
          >
            <Sparkles className="w-4 h-4 mb-1 text-[#171717]" />
            <span>FREE TRIAL</span>
          </button>
        </div>
      </div>

      <FreeTrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
