"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, CheckCircle2, ArrowRight, Quote, MessageSquare } from "lucide-react";
import { trainersData, Trainer } from "@/data/trainers";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import FreeTrialModal from "@/components/ui/FreeTrialModal";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function TrainersPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <InnerPageLayout
      breadcrumb="TRAINERS"
      eyebrow="FACULTY OF EXCELLENCE"
      title="MASTER COACHES & PRACTITIONERS."
      subtitle="Our coaches are elite practitioners with international athletic experience, advanced exercise science degrees, and proven client mastery."
    >
      <section className="section-padding bg-[#FFFDF7]">
        <div className="container-luxury">
          <div className="space-y-16 max-w-6xl mx-auto">
            {trainersData.map((coach, idx) => (
              <Reveal key={coach.id} delay={0.1}>
                <div className="bg-[#F7F3E8] border border-[#D8D2C4] rounded-[6px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                  {/* Coach Portrait */}
                  <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-[#1F1F1F]">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 bg-[#171717] text-[#E8C766] text-[10px] font-mono font-bold uppercase tracking-widest rounded-[2px] border border-[#E8C766]/30">
                        {coach.experience} EXPERIENCE
                      </span>
                    </div>
                  </div>

                  {/* Coach Credentials & Philosophy */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-[#E8C766] uppercase tracking-widest font-bold">
                          {coach.role}
                        </span>
                      </div>

                      <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[#171717]">
                        {coach.name}
                      </h2>
                      <p className="text-xs font-mono text-[#77736A] uppercase mt-1">
                        Specialty: {coach.specialization}
                      </p>

                      <p className="text-sm text-[#77736A] leading-relaxed mt-4">
                        {coach.bio}
                      </p>

                      {/* Philosophy Quote */}
                      <div className="my-6 p-5 rounded-[4px] bg-[#FFFDF7] border-l-2 border-[#E8C766]">
                        <p className="text-xs sm:text-sm italic text-[#171717]">
                          �{coach.philosophy}�
                        </p>
                      </div>

                      {/* Certifications & Achievements */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#D8D2C4]">
                        <div>
                          <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#171717] font-bold mb-2">
                            CERTIFICATIONS:
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[#77736A]">
                            {coach.certifications.map((c, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C766]" />
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#171717] font-bold mb-2">
                            CAREER HIGHLIGHTS:
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[#77736A]">
                            {coach.achievements.map((a, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C766] mt-1.5 shrink-0" />
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Book Action */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 mt-8 border-t border-[#D8D2C4]">
                      <Button
                        onClick={() => setModalOpen(true)}
                        variant="champagne"
                        size="md"
                        withArrow
                      >
                        REQUEST 1-ON-1 WITH {coach.name.split(" ")[0].toUpperCase()}
                      </Button>
                      <Button
                        href={getWhatsAppUrl(`Hi YHC, I would like to schedule a private coaching consultation with ${coach.name}.`)}
                        external
                        variant="outline-charcoal"
                        size="md"
                      >
                        INQUIRE ON WHATSAPP
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FreeTrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </InnerPageLayout>
  );
}
