"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Flame, Check, ArrowRight, User } from "lucide-react";
import { programsData, Program } from "@/data/programs";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import FreeTrialModal from "@/components/ui/FreeTrialModal";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ProgramsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const categories = [
    { id: "all", label: "ALL DISCIPLINES" },
    { id: "strength", label: "STRENGTH & POWER" },
    { id: "hypertrophy", label: "HYPERTROPHY" },
    { id: "conditioning", label: "CONDITIONING" },
    { id: "coaching", label: "1-ON-1 COACHING" },
    { id: "wellness", label: "LONGEVITY" },
  ];

  const filteredPrograms =
    filter === "all"
      ? programsData
      : programsData.filter((p) => p.category === filter);

  return (
    <InnerPageLayout
      breadcrumb="PROGRAMS"
      eyebrow="PERIODIZED DISCIPLINES"
      title="TRAINING DESIGNED FOR PURPOSE."
      subtitle="Discover our 6 master disciplines. Every program combines biological overload, movement testing, and direct coaching oversight."
    >
      <section className="section-padding bg-[#FFFDF7]">
        <div className="container-luxury">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  filter === cat.id
                    ? "bg-[#171717] text-[#FFFDF7] border border-[#171717] shadow-sm"
                    : "bg-[#F7F3E8] text-[#77736A] border border-[#D8D2C4] hover:text-[#171717]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Programs In-Depth Cards */}
          <div className="space-y-16">
            {filteredPrograms.map((program, idx) => (
              <Reveal key={program.id} delay={0.1}>
                <div
                  id={program.slug}
                  className="bg-[#F7F3E8] border border-[#D8D2C4] rounded-[6px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
                >
                  {/* Left Imagery Column */}
                  <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 bg-[#171717] text-[#E8C766] text-[10px] font-mono font-bold uppercase tracking-widest rounded-[2px] border border-[#E8C766]/30">
                        {program.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Right Details Column */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      {/* Meta badges */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#77736A] uppercase mb-3">
                        <span className="flex items-center gap-1.5 font-bold text-[#171717]">
                          <Clock className="w-3.5 h-3.5 text-[#E8C766]" /> {program.duration}
                        </span>
                        <span>�</span>
                        <span className="flex items-center gap-1.5 font-bold text-[#171717]">
                          <Flame className="w-3.5 h-3.5 text-[#E8C766]" /> {program.intensity} Intensity
                        </span>
                        <span>�</span>
                        <span>{program.frequency}</span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#171717]">
                        {program.title}
                      </h2>

                      <p className="text-sm sm:text-base text-[#77736A] leading-relaxed mt-4">
                        {program.longDescription}
                      </p>

                      {/* Highlights */}
                      <div className="my-6 pt-6 border-t border-[#D8D2C4]">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold mb-3">
                          CURRICULUM HIGHLIGHTS:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {program.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#171717]">
                              <Check className="w-4 h-4 text-[#E8C766] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Coach Lead */}
                      <div className="flex items-center gap-3 py-3 px-4 rounded-[4px] bg-[#FFFDF7] border border-[#D8D2C4]">
                        <User className="w-4 h-4 text-[#E8C766]" />
                        <span className="text-xs text-[#77736A]">
                          Lead Coach: <strong className="text-[#171717]">{program.trainer}</strong> ({program.trainerRole})
                        </span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 mt-8 border-t border-[#D8D2C4]">
                      <Button
                        onClick={() => setTrialModalOpen(true)}
                        variant="champagne"
                        size="md"
                        withArrow
                      >
                        BOOK ASSESSMENT SESSION
                      </Button>
                      <Button
                        href={getWhatsAppUrl(`Hi YHC, I would like to consult with coach ${program.trainer} regarding the ${program.title} program.`)}
                        external
                        variant="outline-charcoal"
                        size="md"
                      >
                        INQUIRE VIA WHATSAPP
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={trialModalOpen} onClose={() => setTrialModalOpen(false)} />
    </InnerPageLayout>
  );
}
