"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Clock, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { transformationsData } from "@/data/transformations";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function TransformationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const current = transformationsData[currentIndex];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  return (
    <section className="section-padding bg-[#F7F3E8] border-b border-[#D8D2C4]">
      <div className="container-luxury">
        <SectionHeading
          align="split"
          eyebrow="PROVEN OUTCOMES"
          title="REAL PEOPLE. REAL RESULTS."
          subtitle="Measurable biological transformations achieved through scientific periodization, recovery, and nutritional adherence."
          action={
            <div className="flex items-center gap-3">
              {transformationsData.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-[3px] border transition-all ${
                    idx === currentIndex
                      ? "bg-[#171717] text-[#FFFDF7] border-[#171717]"
                      : "bg-[#FFFDF7] text-[#77736A] border-[#D8D2C4] hover:text-[#171717]"
                  }`}
                >
                  {t.name.split(" ")[0]}
                </button>
              ))}
            </div>
          }
        />

        {/* Transformation Showcase Box */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFDF7] border border-[#D8D2C4] rounded-[6px] p-6 sm:p-10 shadow-sm">
            {/* Interactive Image Slider */}
            <div className="lg:col-span-7">
              <div
                data-cursor="drag"
                className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[4px] overflow-hidden select-none cursor-ew-resize border border-[#D8D2C4] bg-[#171717]"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER Image (Full background) */}
                <Image
                  src={current.afterImage}
                  alt={`${current.name} After Transformation`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#171717]/80 backdrop-blur-sm text-[#E8C766] text-[10px] font-mono font-bold uppercase tracking-widest rounded-[2px]">
                  AFTER: {current.timeFrame}
                </div>

                {/* BEFORE Image (Clipped Left Layer) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full" style={{ width: "100%", minWidth: "100%" }}>
                    <Image
                      src={current.beforeImage}
                      alt={`${current.name} Before Transformation`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover grayscale"
                      priority
                    />
                  </div>
                </div>

                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#171717]/80 backdrop-blur-sm text-[#FFFDF7] text-[10px] font-mono uppercase tracking-widest rounded-[2px]"
                  style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
                >
                  BEFORE
                </div>

                {/* Draggable Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-[#FFFDF7] z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#171717] border-2 border-[#E8C766] flex items-center justify-center text-[#E8C766]">
                    <span className="text-[10px] font-mono font-bold tracking-tighter">?</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center text-xs font-mono text-[#77736A] uppercase tracking-wider">
                DRAG SLIDER TO COMPARE BEFORE & AFTER
              </div>
            </div>

            {/* Results Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#E8C766] font-semibold block mb-1">
                      {current.profession} � AGE {current.age}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#171717]">
                      {current.name}
                    </h3>
                    <p className="text-xs font-mono text-[#77736A] uppercase mt-1">
                      Program: {current.program}
                    </p>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#D8D2C4]">
                    <div className="text-center p-2 rounded-[3px] bg-[#F7F3E8]">
                      <span className="text-[10px] font-mono text-[#77736A] uppercase block">
                        WEIGHT LOST
                      </span>
                      <span className="font-display text-lg font-bold text-[#171717]">
                        {current.weightLost}
                      </span>
                    </div>

                    <div className="text-center p-2 rounded-[3px] bg-[#F7F3E8]">
                      <span className="text-[10px] font-mono text-[#77736A] uppercase block">
                        TIMEFRAME
                      </span>
                      <span className="font-display text-lg font-bold text-[#171717]">
                        {current.timeFrame}
                      </span>
                    </div>

                    <div className="text-center p-2 rounded-[3px] bg-[#F7F3E8]">
                      <span className="text-[10px] font-mono text-[#77736A] uppercase block">
                        MUSCLE GAIN
                      </span>
                      <span className="font-display text-lg font-bold text-[#171717]">
                        {current.muscleGained}
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#171717] italic leading-relaxed">
                    �{current.quote}�
                  </p>

                  <div className="text-xs text-[#77736A] leading-relaxed pt-2">
                    <strong>Coached by:</strong> {current.coach}
                    <br />
                    <strong>Outcome:</strong> {current.details}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
