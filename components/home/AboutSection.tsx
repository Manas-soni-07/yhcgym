"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const pillars = [
  {
    num: "01",
    title: "EXPERT COACHING",
    desc: "NSCA and Olympic certified master trainers delivering scientific biomechanical programming.",
  },
  {
    num: "02",
    title: "PREMIUM EQUIPMENT",
    desc: "Bespoke Swedish Eleiko barbells, custom Arsenal Strength selectorized machines, and Woodway treadmills.",
  },
  {
    num: "03",
    title: "PERSONALIZED TRAINING",
    desc: "Biometric assessments, DEXA body scans, and tailored progressive overload schedules.",
  },
  {
    num: "04",
    title: "COMMUNITY",
    desc: "A focused, private collective of driven professionals holding one another to the highest standard.",
  },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#FFFDF7] border-y border-[#D8D2C4]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Large Asymmetric Image */}
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="relative w-full aspect-[4/5] rounded-[6px] overflow-hidden border border-[#D8D2C4] shadow-xl bg-[#EBE5D6]">
                <Image
                  src="/images/gym9.jpeg"
                  alt="YHC Health Club Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#171717]/10" />
              </div>
            </Reveal>

            {/* Small accent floating box */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 p-5 rounded-[4px] bg-[#171717] text-[#FFFDF7] border border-[#E8C766]/30 shadow-2xl z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8C766] block mb-1">
                OUR PHILOSOPHY
              </span>
              <p className="text-xs text-[#A39F93] leading-snug">
                Where elite athletic science meets quiet luxury hospitality.
              </p>
            </div>
          </div>

          {/* RIGHT: About Details & 4 Numbered Features */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow-text font-mono text-[12px] tracking-[0.2em] text-[#77736A] uppercase block mb-3">
                ABOUT YHC
              </span>
              <h2 className="font-display h2-editorial uppercase tracking-tight text-[#171717] mb-6 leading-tight">
                BUILT AROUND
                <br />
                YOUR HEALTH.
              </h2>
              <p className="text-base sm:text-lg text-[#77736A] leading-relaxed mb-10">
                Founded on the premise that physical strength is the bedrock of cognitive clarity and longevity, YHC provides an uncompromised training sanctuary.
              </p>
            </Reveal>

            {/* 4 Features List */}
            <div className="divide-y divide-[#D8D2C4]">
              {pillars.map((item, index) => (
                <Reveal key={item.num} delay={index * 0.1}>
                  <div className="group py-5 flex items-start gap-6 hover:bg-[#F7F3E8]/60 transition-colors px-2 rounded-[2px]">
                    <span className="font-mono text-sm font-bold text-[#E8C766] group-hover:text-[#171717] transition-colors pt-1">
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-[#171717] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#77736A] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4} className="mt-10">
              <Button href="/about" variant="charcoal" size="md" withArrow>
                READ OUR FULL STORYS
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
