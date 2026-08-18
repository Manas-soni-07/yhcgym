"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import FreeTrialModal from "@/components/ui/FreeTrialModal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-between pt-[calc(var(--header-height)+32px)] pb-12 overflow-hidden bg-[#F7F3E8]">
        <div className="container-luxury my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT COLUMN: Editorial Typography & CTAs */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center"
            >
              {/* Eyebrow */}
              <motion.div variants={lineVariants} className="mb-6">
                <span className="eyebrow-text font-mono text-[12px] sm:text-[13px] text-[#77736A] tracking-[0.2em] uppercase">
                  YHC / YOUR HEALTH CLUB
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={lineVariants}
                className="font-display h1-hero uppercase font-bold text-[#171717] tracking-tight mb-8"
              >
                YOUR HEALTH.
                <br />
                YOUR STRENGTH.
                <br />
                <span className="text-[#171717] italic font-normal">YOUR CLUB.</span>
              </motion.h1>

              {/* Editorial Description */}
              <motion.p
                variants={lineVariants}
                className="body-editorial text-base sm:text-lg lg:text-xl text-[#77736A] max-w-xl mb-10 leading-relaxed"
              >
                Premium training, expert coaching and a community built around better health. Designed for those who demand excellence in every rep.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={lineVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="champagne"
                  size="lg"
                  withArrow
                >
                  START FREE TRIAL
                </Button>

                <Button
                  href="/programs"
                  variant="outline-charcoal"
                  size="lg"
                >
                  EXPLORE PROGRAMS
                </Button>
              </motion.div>

              {/* Key Trust Signals */}
              <motion.div
                variants={lineVariants}
                className="pt-10 mt-10 border-t border-[#D8D2C4]/70 flex flex-wrap items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#77736A]"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8C766]" />
                  <span>24/7 BIOMETRIC ACCESS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8C766]" />
                  <span>MASTER COACH LED</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8C766]" />
                  <span>RECOVERY & SPA SUITE</span>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Cinematic Imagery */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
              className="lg:col-span-6 xl:col-span-5 relative"
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-[6px] overflow-hidden border border-[#D8D2C4] shadow-2xl bg-[#EBE5D6]">
                <Image
                  src="/images/gym1.jpeg"
                  alt="YHC Club Athlete Training"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[4px] bg-[#FFFDF7]/90 backdrop-blur-md border border-[#D8D2C4] flex items-center justify-between text-[#171717]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736A] block">
                      FLAGSHIP SANCTUARY
                    </span>
                    <p className="font-display text-sm font-semibold uppercase tracking-wider text-[#171717]">
                      MAYFAIR AVENUE / 15,000 SQ FT
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#E8C766] font-bold">EST. 2021</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="container-luxury pt-8 flex items-center justify-between text-xs font-mono text-[#77736A] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span>SCROLL TO DISCOVER</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
          <span className="hidden sm:inline">EXCLUSIVE MEMBERSHIP / LIMITED INTAKE</span>
        </div>
      </section>

      <FreeTrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
