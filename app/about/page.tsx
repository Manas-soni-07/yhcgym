"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Compass, Sparkles, HeartPulse, Check, ArrowRight } from "lucide-react";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import FreeTrialModal from "@/components/ui/FreeTrialModal";

const values = [
  {
    title: "BIOMECHANICAL PRECISION",
    desc: "Every exercise is prescribed with purpose. We respect anatomy, progressive overload, and joint longevity over reckless exhaustion.",
  },
  {
    title: "QUIET LUXURY HOSPITALITY",
    desc: "A clutter-free, unhurried atmosphere with immaculate cleanliness, filtered air, artisanal espresso, and thoughtful concierge care.",
  },
  {
    title: "HOLISTIC ADAPTATION",
    desc: "Physical output is only half the equation. We integrate cold immersion, infrared heat, and cellular recovery to maximize long-term vitality.",
  },
  {
    title: "A CULTURE OF STANDARDS",
    desc: "Our members include entrepreneurs, surgeons, architects, and high performers who value discipline, mutual respect, and focused effort.",
  },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <InnerPageLayout
      breadcrumb="ABOUT YHC"
      eyebrow="OUR PHILOSOPHY & HERITAGE"
      title="THE PURSUIT OF PHYSICAL MASTERY."
      subtitle="Founded in 2021, YHC was born out of a desire to eliminate the noise, crowding, and superficiality of commercial fitness."
    >
      {/* 1. Origin & Story Section */}
      <section className="section-padding bg-[#FFFDF7] border-b border-[#D8D2C4]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow-text block mb-3 text-[#77736A]">THE FOUNDATION</span>
                <h2 className="font-display h2-editorial uppercase tracking-tight text-[#171717] mb-6">
                  REDESIGNING THE HEALTH CLUB.
                </h2>
                <p className="body-editorial mb-6">
                  For decades, mainstream fitness promised results through chaotic group classes, crowded weight rooms, and generic machines designed for mass turnover rather than biological performance.
                </p>
                <p className="body-editorial mb-8">
                  YHC was founded as an architectural and coaching counterweight. We combined the precision of Olympic weightlifting labs with the refined tranquility of a boutique sanctuary. Here, high-torque athletic output and quiet recovery coexist seamlessly.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#D8D2C4]">
                  <div>
                    <span className="font-display text-3xl font-bold text-[#171717] block">15,000</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#77736A]">SQUARE FEET</span>
                  </div>
                  <div>
                    <span className="font-display text-3xl font-bold text-[#171717] block">100%</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#77736A]">SWEDISH ELEIKO STEEL</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="relative w-full aspect-[4/5] rounded-[6px] overflow-hidden border border-[#D8D2C4] shadow-xl bg-[#171717]">
                  <Image
                    src="/images/gym9.jpeg"
                    alt="YHC Health Club Architecture"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars & Values */}
      <section className="section-padding bg-[#F7F3E8] border-b border-[#D8D2C4]">
        <div className="container-luxury">
          <SectionHeading
            align="center"
            eyebrow="UNCOMPROMISING PRINCIPLES"
            title="THE YHC STANDARD."
            subtitle="The four foundational tenets that guide our coaching curriculum and member experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="h-full p-8 bg-[#FFFDF7] border border-[#D8D2C4] rounded-[6px] hover:border-[#171717] transition-colors flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#E8C766] uppercase tracking-widest block mb-2">
                      PILLAR {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#171717] mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#77736A] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Facility Tour Preview */}
      <section className="section-padding bg-[#FFFDF7] border-b border-[#D8D2C4]">
        <div className="container-luxury">
          <SectionHeading
            align="split"
            eyebrow="THE SANCTUARY FLOORS"
            title="PURPOSE-BUILT SPACES."
            subtitle="Explore our three specialized tiers dedicated to strength, metabolic power, and thermal restoration."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="group rounded-[6px] overflow-hidden border border-[#D8D2C4] bg-[#F7F3E8]">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/gym4.jpeg"
                    alt="Strength Floor"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono text-[#E8C766] font-bold uppercase tracking-widest block mb-1">
                    LEVEL 02
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-[#171717]">
                    THE OLYMPIC STRENGTH FLOOR
                  </h3>
                  <p className="text-xs text-[#77736A] mt-2 leading-relaxed">
                    Custom deadlift platforms, calibrated Swedish steel plates, and Arsenal Strength variable resistance stations.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group rounded-[6px] overflow-hidden border border-[#D8D2C4] bg-[#F7F3E8]">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/gym5.jpeg"
                    alt="Athletic Turf"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono text-[#E8C766] font-bold uppercase tracking-widest block mb-1">
                    LEVEL 03
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-[#171717]">
                    ATHLETIC TURF & CONDITIONING
                  </h3>
                  <p className="text-xs text-[#77736A] mt-2 leading-relaxed">
                    50-meter indoor turf sprint lanes, torque sleds, Woodway curve treadmills, and Concept2 ergometers.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group rounded-[6px] overflow-hidden border border-[#D8D2C4] bg-[#F7F3E8]">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/gym6.jpeg"
                    alt="Thermal Spa"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono text-[#E8C766] font-bold uppercase tracking-widest block mb-1">
                    LEVEL 04
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-[#171717]">
                    RECOVERY & THERMAL SUITE
                  </h3>
                  <p className="text-xs text-[#77736A] mt-2 leading-relaxed">
                    Cedarwood Finnish saunas, 42°F glacier cold plunge baths, rainfall steam showers, and private lounge.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </InnerPageLayout>
  );
}
