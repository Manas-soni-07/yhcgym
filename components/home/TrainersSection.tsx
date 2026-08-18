"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trainersData } from "@/data/trainers";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function TrainersSection() {
  const featured = trainersData[0]; // Marcus Vance
  const support1 = trainersData[1]; // Elena Rostova
  const support2 = trainersData[2]; // David Chen

  return (
    <section className="section-padding bg-[#FFFDF7] border-t border-[#D8D2C4]">
      <div className="container-luxury">
        <SectionHeading
          align="split"
          eyebrow="FACULTY OF EXCELLENCE"
          title="MEET YOUR COACHES."
          subtitle="World-class strength practitioners with international credentials and decades of elite client results."
          action={
            <Link
              href="/trainers"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#171717] hover:text-[#77736A] transition-colors"
            >
              <span>VIEW FULL FACULTY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* 3 Trainers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Featured Trainer: Marcus Vance */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="group relative h-full flex flex-col rounded-[6px] overflow-hidden border border-[#D8D2C4] bg-[#F7F3E8] transition-all duration-500 hover:border-[#171717] shadow-sm">
                <div className="relative w-full aspect-[4/4.6] overflow-hidden bg-[#1F1F1F]">
                  <Image
                    src={featured.image}
                    alt={featured.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover grayscale contrast-105 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-104"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 bg-[#171717] text-[#E8C766] text-[10px] font-mono font-bold uppercase tracking-widest rounded-[2px] border border-[#E8C766]/30">
                      HEAD COACH
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#77736A] uppercase tracking-wider">
                        {featured.experience}
                      </span>
                      <span className="text-xs font-mono text-[#E8C766] uppercase font-semibold">
                        CSCS / USAW L3
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#171717]">
                      {featured.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#77736A] uppercase tracking-wider mt-0.5">
                      {featured.role}
                    </p>

                    <p className="text-sm text-[#77736A] mt-4 leading-relaxed line-clamp-3">
                      {featured.bio}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#D8D2C4] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#171717] uppercase tracking-wider">
                      Specialty: {featured.specialization}
                    </span>
                    <Link
                      href="/trainers"
                      className="text-xs font-mono font-bold uppercase text-[#171717] group-hover:text-[#E8C766] flex items-center gap-1 transition-colors"
                    >
                      <span>PROFILE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Supporting Trainers */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[support1, support2].map((coach, idx) => (
              <Reveal key={coach.id} delay={idx * 0.15}>
                <div className="group relative h-full flex flex-col rounded-[6px] overflow-hidden border border-[#D8D2C4] bg-[#F7F3E8] transition-all duration-500 hover:border-[#171717] shadow-sm">
                  <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-[#1F1F1F]">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover grayscale contrast-105 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-104"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-[#77736A] uppercase">
                          {coach.experience}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#171717]">
                        {coach.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#77736A] uppercase tracking-wider mt-0.5">
                        {coach.role}
                      </p>

                      <p className="text-xs text-[#77736A] mt-3 leading-relaxed line-clamp-3">
                        {coach.specialization}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#D8D2C4]">
                      <Link
                        href="/trainers"
                        className="text-xs font-mono font-bold uppercase text-[#171717] group-hover:text-[#E8C766] flex items-center justify-between transition-colors"
                      >
                        <span>VIEW CREDENTIALS</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
