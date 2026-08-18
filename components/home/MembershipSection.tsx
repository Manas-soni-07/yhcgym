"use client";

import React, { useState } from "react";
import { Check, ArrowRight, MessageSquare } from "lucide-react";
import { pricingPlans } from "@/data/pricing";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FreeTrialModal from "@/components/ui/FreeTrialModal";

export default function MembershipSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-[#171717] text-[#F7F3E8] border-t border-white/10">
        <div className="container-luxury">
          <SectionHeading
            theme="dark"
            align="center"
            eyebrow="SANCTUARY ACCESS"
            title="MEMBERSHIP TIERS."
            subtitle="Transparent, value-driven memberships designed for serious athletes. No hidden maintenance fees."
          />

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => {
              const isRecommended = plan.featured;

              return (
                <Reveal key={plan.id} delay={idx * 0.15}>
                  <div
                    className={`relative rounded-[6px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 ${
                      isRecommended
                        ? "bg-[#1F1F1F] border-2 border-[#E8C766] shadow-[0_0_40px_rgba(232,199,102,0.15)] lg:scale-105 z-10"
                        : "bg-[#1A1917] border border-white/15 hover:border-white/30"
                    }`}
                  >
                    {/* Badge for Recommended */}
                    {isRecommended && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 bg-[#E8C766] text-[#171717] text-[11px] font-mono font-bold uppercase tracking-widest rounded-full shadow-md">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Tier Name */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-[#E8C766] uppercase tracking-widest font-semibold">
                          {plan.name}
                        </span>
                        {!isRecommended && plan.badge && (
                          <span className="text-[10px] font-mono text-[#A39F93] border border-white/20 px-2 py-0.5 rounded-[2px]">
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="font-display text-4xl sm:text-5xl font-bold text-[#FFFDF7]">
                          $${plan.price}
                        </span>
                        <span className="text-sm font-mono text-[#A39F93]">{plan.period}</span>
                      </div>

                      <p className="text-xs text-[#A39F93] font-mono mb-6">
                        {plan.billingText}
                      </p>

                      <p className="text-sm text-[#D8D2C4] leading-relaxed pb-6 border-b border-white/10 mb-6">
                        {plan.description}
                      </p>

                      {/* Inclusions List */}
                      <ul className="space-y-3.5 text-xs sm:text-sm text-[#FFFDF7] mb-8">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-[#E8C766] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Actions */}
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <button
                        onClick={() => setModalOpen(true)}
                        className={`w-full py-4 rounded-[4px] font-sans font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                          isRecommended
                            ? "bg-[#E8C766] text-[#171717] hover:bg-[#FFFDF7] shadow-lg"
                            : "bg-white/10 text-[#FFFDF7] border border-white/20 hover:bg-[#E8C766] hover:text-[#171717] hover:border-[#E8C766]"
                        }`}
                      >
                        <span>START MEMBERSHIP</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={getWhatsAppUrl(`Hi YHC, I would like to sign up for the ${plan.name} Membership plan.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 text-center text-xs font-mono text-[#A39F93] hover:text-[#E8C766] flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#E8C766]" />
                        <span>WHATSAPP YHC ?</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
