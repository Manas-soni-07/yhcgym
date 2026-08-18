"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import Reveal from "@/components/ui/Reveal";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonialsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="section-padding bg-[#FFFDF7] border-b border-[#D8D2C4]">
      <div className="container-luxury max-w-5xl">
        <div className="text-center mb-12">
          <span className="eyebrow-text font-mono text-[12px] tracking-[0.2em] text-[#77736A] uppercase block mb-3">
            VERIFIED EXPERIENCES
          </span>
          <h2 className="font-display h2-editorial uppercase tracking-tight text-[#171717]">
            MEMBER STORIES.
          </h2>
        </div>

        {/* Main Single Testimonial Carousel */}
        <Reveal>
          <div className="relative bg-[#F7F3E8] border border-[#D8D2C4] rounded-[6px] p-8 sm:p-14 lg:p-16 shadow-sm overflow-hidden">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-[#D8D2C4]/40 -z-0 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 flex flex-col justify-between"
              >
                {/* 5 Champagne Stars */}
                <div className="flex items-center gap-1.5 mb-8">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E8C766] text-[#E8C766]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-[#171717] leading-snug tracking-normal mb-10">
                  �{current.quote}�
                </blockquote>

                {/* Author Info & Counter Navigation */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-[#D8D2C4]">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#E8C766]">
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#171717]">
                        {current.name}
                      </h3>
                      <p className="text-xs text-[#77736A] font-semibold">{current.role}</p>
                      <p className="text-[11px] font-mono text-[#E8C766] uppercase mt-0.5 font-bold">
                        {current.duration} � {current.highlight}
                      </p>
                    </div>
                  </div>

                  {/* 01 / 04 Navigation */}
                  <div className="flex items-center gap-4 self-end sm:self-auto">
                    <span className="text-xs font-mono font-bold text-[#77736A] tracking-widest">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(testimonialsData.length).padStart(2, "0")}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="w-10 h-10 rounded-full border border-[#D8D2C4] bg-[#FFFDF7] flex items-center justify-center text-[#171717] hover:bg-[#171717] hover:text-[#FFFDF7] hover:border-[#171717] transition-all"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="w-10 h-10 rounded-full border border-[#D8D2C4] bg-[#FFFDF7] flex items-center justify-center text-[#171717] hover:bg-[#171717] hover:text-[#FFFDF7] hover:border-[#171717] transition-all"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
