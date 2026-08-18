"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import FreeTrialModal from "@/components/ui/FreeTrialModal";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";

export default function FreeTrialCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-28 md:py-36 bg-[#171717] text-[#FFFDF7] overflow-hidden border-y border-white/10">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/gym1.jpeg"
            alt="YHC Training Floor"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/85 to-[#171717]" />

        <div className="relative z-10 container-luxury text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="eyebrow-text font-mono text-[12px] tracking-[0.22em] text-[#E8C766] uppercase block mb-4">
              START YOUR JOURNEY
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display h1-hero uppercase font-bold text-[#FFFDF7] tracking-tight mb-6">
              START YOUR
              <br />
              NEXT CHAPTER.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-[#A39F93] max-w-2xl mx-auto leading-relaxed mb-10">
              Experience YHC for yourself. Book your 1-day complimentary guest pass and discover what deliberate, coached physical training feels like.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setModalOpen(true)}
                variant="champagne"
                size="lg"
                withArrow
              >
                CLAIM FREE TRIAL
              </Button>

              <Button
                href={getWhatsAppUrl("Hi YHC, I would like to book a complimentary 1-day guest experience pass.")}
                external
                variant="outline-champagne"
                size="lg"
              >
                WHATSAPP YHC
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FreeTrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
