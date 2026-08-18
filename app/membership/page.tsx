"use client";

import React, { useState } from "react";
import { Check, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { pricingPlans, comparisonFeatures } from "@/data/pricing";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import FreeTrialModal from "@/components/ui/FreeTrialModal";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function MembershipPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <InnerPageLayout
      breadcrumb="MEMBERSHIP"
      eyebrow="TRANSPARENT VALUE"
      title="MEMBERSHIP ARCHITECTURE."
      subtitle="Experience full access to our multi-tiered athletic sanctuary. No initiation trickery, no long-term lock-in."
    >
      {/* 1. Pricing Cards */}
      <section className="section-padding bg-[#FFFDF7] border-b border-[#D8D2C4]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-20">
            {pricingPlans.map((plan, idx) => {
              const isRecommended = plan.featured;

              return (
                <Reveal key={plan.id} delay={idx * 0.15}>
                  <div
                    className={`h-full relative rounded-[6px] p-8 flex flex-col justify-between transition-all ${
                      isRecommended
                        ? "bg-[#171717] text-[#FFFDF7] border-2 border-[#E8C766] shadow-xl"
                        : "bg-[#F7F3E8] text-[#171717] border border-[#D8D2C4]"
                    }`}
                  >
                    {isRecommended && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 bg-[#E8C766] text-[#171717] text-[10px] font-mono font-bold uppercase tracking-widest rounded-full shadow-md">
                          BEST VALUE
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-xs font-mono uppercase tracking-widest font-bold ${
                            isRecommended ? "text-[#E8C766]" : "text-[#77736A]"
                          }`}
                        >
                          {plan.name}
                        </span>
                        {!isRecommended && plan.badge && (
                          <span className="text-[10px] font-mono text-[#77736A] border border-[#D8D2C4] px-2 py-0.5 rounded-[2px]">
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="font-display text-4xl sm:text-5xl font-bold">
                          $${plan.price}
                        </span>
                        <span
                          className={`text-sm font-mono ${
                            isRecommended ? "text-[#A39F93]" : "text-[#77736A]"
                          }`}
                        >
                          {plan.period}
                        </span>
                      </div>

                      <p
                        className={`text-xs font-mono mb-6 ${
                          isRecommended ? "text-[#A39F93]" : "text-[#77736A]"
                        }`}
                      >
                        {plan.billingText}
                      </p>

                      <p
                        className={`text-sm leading-relaxed pb-6 border-b mb-6 ${
                          isRecommended
                            ? "text-[#D8D2C4] border-white/10"
                            : "text-[#77736A] border-[#D8D2C4]"
                        }`}
                      >
                        {plan.description}
                      </p>

                      <ul className="space-y-3 text-xs sm:text-sm mb-8">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-[#E8C766] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-[#D8D2C4]/40">
                      <Button
                        onClick={() => setModalOpen(true)}
                        variant={isRecommended ? "champagne" : "charcoal"}
                        size="md"
                        className="w-full"
                        withArrow
                      >
                        SELECT {plan.name}
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* 2. Detailed Feature Matrix Table */}
          <div className="max-w-5xl mx-auto pt-10">
            <SectionHeading
              align="center"
              eyebrow="FULL COMPARISON"
              title="TIER COMPARISON MATRIX."
              subtitle="Review the full breakdown of facility privileges, guest policies, and recovery inclusions."
            />

            <div className="overflow-x-auto bg-[#F7F3E8] border border-[#D8D2C4] rounded-[6px] p-4 sm:p-6 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#D8D2C4] text-xs font-mono uppercase tracking-wider text-[#171717]">
                    <th className="py-4 px-4 font-bold">Privilege / Amenity</th>
                    <th className="py-4 px-4 text-center font-bold">Monthly</th>
                    <th className="py-4 px-4 text-center font-bold text-[#E8C766] bg-[#171717] rounded-t-[4px]">
                      Quarterly (Best Value)
                    </th>
                    <th className="py-4 px-4 text-center font-bold">Annual Patron</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8D2C4]/60">
                  {comparisonFeatures.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#FFFDF7]/60 transition-colors">
                      <td className="py-3.5 px-4 font-medium text-[#171717]">
                        {item.feature}
                      </td>

                      <td className="py-3.5 px-4 text-center text-[#77736A]">
                        {typeof item.monthly === "boolean" ? (
                          item.monthly ? (
                            <Check className="w-4 h-4 text-[#171717] mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-[#D8D2C4] mx-auto" />
                          )
                        ) : (
                          <span className="font-mono text-xs">{item.monthly}</span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-center font-semibold text-[#171717] bg-[#171717]/5">
                        {typeof item.quarterly === "boolean" ? (
                          item.quarterly ? (
                            <Check className="w-4 h-4 text-[#E8C766] mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-[#D8D2C4] mx-auto" />
                          )
                        ) : (
                          <span className="font-mono text-xs text-[#171717] font-bold">{item.quarterly}</span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-center text-[#171717] font-semibold">
                        {typeof item.yearly === "boolean" ? (
                          item.yearly ? (
                            <Check className="w-4 h-4 text-[#171717] mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-[#D8D2C4] mx-auto" />
                          )
                        ) : (
                          <span className="font-mono text-xs font-bold">{item.yearly}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </InnerPageLayout>
  );
}
