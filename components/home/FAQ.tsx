"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/data/faq";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Show top 6 FAQs on home page
  const homeFaqs = faqData.slice(0, 6);

  return (
    <section className="section-padding bg-[#FFFDF7] border-b border-[#D8D2C4]">
      <div className="container-luxury max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="COMMON QUESTIONS"
          title="FREQUENTLY ASKED."
          subtitle="Everything you need to know about joining YHC, our facility standards, and training philosophy."
        />

        {/* Minimal Accordion */}
        <div className="divide-y divide-[#D8D2C4] border-y border-[#D8D2C4]">
          {homeFaqs.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <Reveal key={item.id} delay={idx * 0.05}>
                <div className="py-6">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#171717] group-hover:text-[#77736A] transition-colors">
                      {item.question}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#D8D2C4] flex items-center justify-center shrink-0 text-[#171717] group-hover:border-[#171717] transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm sm:text-base text-[#77736A] leading-relaxed pr-8">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
