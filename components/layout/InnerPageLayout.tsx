"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import FreeTrialModal from "@/components/ui/FreeTrialModal";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface InnerPageLayoutProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
  children: React.ReactNode;
}

export default function InnerPageLayout({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  children,
}: InnerPageLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full" style={{ paddingTop: "var(--header-height)" }}>
      {/* Header Banner */}
      <section className="bg-[#F7F3E8] border-b border-[#D8D2C4] py-14 sm:py-20 lg:py-24">
        <div className="container-luxury">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#77736A] mb-6">
            <Link href="/" className="hover:text-[#171717] transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#77736A]" />
            <span className="text-[#171717] font-semibold">{breadcrumb}</span>
          </div>

          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow-text block mb-3 text-[#77736A]"
            >
              {eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display h2-editorial uppercase tracking-tight text-[#171717]"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-[#77736A] leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </section>

      {/* Main Page Content */}
      <div className="w-full">{children}</div>

      {/* Reusable Bottom Conversion CTA */}
      <section className="bg-[#171717] text-[#FFFDF7] py-20 sm:py-28 border-t border-white/10">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <span className="eyebrow-text text-[#E8C766] block mb-3">EXPERIENCE THE YHC STANDARD</span>
          <h2 className="font-display h2-editorial uppercase tracking-tight text-[#FFFDF7] mb-6">
            READY TO ELEVATE YOUR TRAINING?
          </h2>
          <p className="text-base sm:text-lg text-[#A39F93] leading-relaxed mb-10">
            Book your 1-day complimentary experience or speak directly with our concierge team to find your optimal membership pathway.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setModalOpen(true)}
              variant="champagne"
              size="lg"
              withArrow
            >
              CLAIM 1-DAY FREE TRIAL
            </Button>
            <Button
              href={getWhatsAppUrl()}
              external
              variant="outline-champagne"
              size="lg"
            >
              WHATSAPP CONCIERGE
            </Button>
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
