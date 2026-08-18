"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";

export default function BrandIntro() {
  return (
    <section className="section-padding bg-[#F7F3E8]">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow-text font-mono text-[12px] tracking-[0.2em] text-[#77736A] uppercase block mb-4">
              THE YHC EXPERIENCE
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display h2-editorial uppercase tracking-tight text-[#171717] mb-8 leading-[1.05]">
              MORE THAN
              <br />
              A GYM.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-[#171717] font-normal leading-relaxed max-w-3xl mx-auto">
              �YHC brings together expert coaching, premium facilities and a community built around better health.�
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="w-16 h-[1.5px] bg-[#E8C766] mx-auto mt-10 mb-8" />
            <p className="text-sm sm:text-base text-[#77736A] leading-relaxed max-w-2xl mx-auto">
              We reject the chaotic, overcrowded model of standard commercial fitness. At YHC, every detail�from our custom variable-resistance equipment to our filtered Finnish saunas�is curated to support lifelong athletic vitality.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
