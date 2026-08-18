"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Flame } from "lucide-react";
import { programsData } from "@/data/programs";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ProgramsSection() {
  const featured = programsData[0]; // Strength Training
  const others = programsData.slice(1);

  return (
    <section className="section-padding bg-[#F7F3E8]">
      <div className="container-luxury">
        <SectionHeading
          align="split"
          eyebrow="CURATED CURRICULUM"
          title="TRAIN WITH PURPOSE."
          subtitle="Every discipline is built on progressive physiological adaptation, guided by Master Coaches."
          action={
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#171717] hover:text-[#77736A] transition-colors"
            >
              <span>VIEW ALL 6 DISCIPLINES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Featured Large Card */}
          <div className="lg:col-span-7">
            <Reveal>
              <Link
                href="/programs#strength-training"
                className="group relative block w-full aspect-[4/3] sm:aspect-[16/11] rounded-[6px] overflow-hidden border border-[#D8D2C4] bg-[#171717] shadow-lg transition-all duration-500 hover:border-[#E8C766]"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-104 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/40 to-transparent" />

                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-[#E8C766] text-[#171717] text-[10px] font-mono font-bold uppercase tracking-widest rounded-[2px]">
                    SIGNATURE DISCIPLINE
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-[#FFFDF7]">
                  <div className="flex items-center gap-4 text-xs font-mono text-[#E8C766] mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {featured.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" /> {featured.intensity} Intensity
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#FFFDF7] group-hover:text-[#E8C766] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D8D2C4] max-w-lg mt-2 line-clamp-2">
                    {featured.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FFFDF7] uppercase group-hover:text-[#E8C766]">
                    <span>EXPLORE SYLLABUS</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Secondary Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {others.slice(0, 2).map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.15}>
                <Link
                  href={`/programs#${item.slug}`}
                  className="group relative block w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/8] rounded-[6px] overflow-hidden border border-[#D8D2C4] bg-[#171717] shadow-md transition-all duration-500 hover:border-[#E8C766]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-104 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/40 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-[#FFFDF7]">
                    <span className="text-[10px] font-mono text-[#E8C766] uppercase tracking-widest block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#FFFDF7] group-hover:text-[#E8C766] transition-colors">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-xs text-[#D8D2C4]">
                      <span>{item.duration} � {item.frequency}</span>
                      <ArrowRight className="w-4 h-4 text-[#E8C766] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom 3 Programs Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
          {others.slice(2).map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1}>
              <Link
                href={`/programs#${item.slug}`}
                className="group relative block w-full aspect-[4/3] rounded-[6px] overflow-hidden border border-[#D8D2C4] bg-[#171717] shadow-md transition-all duration-500 hover:border-[#E8C766]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-104 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/40 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-[#FFFDF7]">
                  <span className="text-[10px] font-mono text-[#E8C766] uppercase tracking-widest block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#FFFDF7] group-hover:text-[#E8C766] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-xs text-[#D8D2C4]">
                    <span>{item.duration} � {item.intensity}</span>
                    <ArrowRight className="w-4 h-4 text-[#E8C766] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
