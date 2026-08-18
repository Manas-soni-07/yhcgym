"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Mail, CheckCircle2, Navigation, Car, Shield } from "lucide-react";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "Full Club Tour",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <InnerPageLayout
      breadcrumb="CONTACT"
      eyebrow="RESERVATIONS & VISITS"
      title="COME TRAIN WITH US."
      subtitle="Schedule a private facility walkthrough or connect directly with our membership concierge team."
    >
      <section className="section-padding bg-[#FFFDF7]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* LEFT: Contact Logistics */}
            <div className="lg:col-span-5 space-y-8">
              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="tel:+15550198422"
                  className="flex flex-col items-center justify-center p-4 rounded-[4px] bg-[#F7F3E8] border border-[#D8D2C4] text-[#171717] hover:border-[#171717] transition-all"
                >
                  <Phone className="w-5 h-5 mb-2 text-[#171717]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">CALL</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-[4px] bg-[#171717] text-[#FFFDF7] border border-[#171717] hover:bg-[#242320] transition-all shadow-sm"
                >
                  <MessageSquare className="w-5 h-5 mb-2 text-[#E8C766]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">WHATSAPP</span>
                </a>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-[4px] bg-[#F7F3E8] border border-[#D8D2C4] text-[#171717] hover:border-[#171717] transition-all"
                >
                  <Navigation className="w-5 h-5 mb-2 text-[#171717]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">MAP</span>
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-[#F7F3E8] border border-[#D8D2C4] rounded-[6px] p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#E8C766] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#171717]">
                      FLAGSHIP ADDRESS
                    </h4>
                    <p className="text-sm text-[#77736A] mt-1 leading-relaxed">
                     Khandwa Rd, Chhegaon Makhan, Madhya Pradesh 450771
                      <br />
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4 pt-4 border-t border-[#D8D2C4]">
                  <Car className="w-5 h-5 text-[#E8C766] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#171717]">
                      MEMBER PARKING & VALET
                    </h4>
                    <p className="text-sm text-[#77736A] mt-1 leading-relaxed">
                      Complimentary 2-hour underground valet parking with EV charging stations for members and registered guests.
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start gap-4 pt-4 border-t border-[#D8D2C4]">
                  <Clock className="w-5 h-5 text-[#E8C766] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#171717]">
                      FACILITY HOURS
                    </h4>
                    <p className="text-sm text-[#171717] font-semibold mt-1">
                      24/7 Member Keycard Access
                    </p>
                    <p className="text-xs text-[#77736A] mt-0.5">
                      Staffed Concierge: Mon�Fri 05:30�22:00 | Sat�Sun 07:00�20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Inquiry Form */}
            <div className="lg:col-span-7 bg-[#F7F3E8] border border-[#D8D2C4] rounded-[6px] p-8 sm:p-10 shadow-sm">
              {!submitted ? (
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#171717] mb-2">
                    RESERVE A CONSULTATION
                  </h3>
                  <p className="text-sm text-[#77736A] mb-8 leading-relaxed">
                    Leave your contact details and our concierge will confirm your private walkthrough or trial pass.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Durgesh Patil"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#FFFDF7] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 95757 62143"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#FFFDF7] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="durgesh@yhcgym.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#FFFDF7] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                          Purpose of Visit
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full bg-[#FFFDF7] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                        >
                          <option value="Full Club Tour">Private Club Tour</option>
                          <option value="1-Day Free Trial">1-Day Complimentary Trial</option>
                          <option value="Personal Coaching Consultation">Personal Coaching Consultation</option>
                          <option value="Membership Enrollment">Membership Enrollment</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                        Notes / Preferred Dates
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Let us know your preferred visit date or questions for the concierge team..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#FFFDF7] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" variant="charcoal" size="lg" className="w-full" withArrow>
                        SEND VISIT REQUEST
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#E8C766]/20 border border-[#E8C766] flex items-center justify-center mx-auto mb-5 text-[#171717]">
                    <CheckCircle2 className="w-8 h-8 text-[#171717]" />
                  </div>
                  <span className="eyebrow-text text-[#E8C766] block mb-1">REQUEST RECORDED</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#171717] mb-2">
                    WE LOOK FORWARD TO MEETING YOU
                  </h3>
                  <p className="text-sm text-[#77736A] leading-relaxed max-w-md mx-auto mb-8">
                    Your visit inquiry for {formData.name} has been received. Our concierge will be in touch shortly.
                  </p>
                  <Button
                    href={getWhatsAppUrl(`Hi YHC, I just sent a visit request for ${formData.name} (${formData.interest}).`)}
                    external
                    variant="champagne"
                    size="md"
                  >
                    CHAT WITH CONCIERGE ON WHATSAPP
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
