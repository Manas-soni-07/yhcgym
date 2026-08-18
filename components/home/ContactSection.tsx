"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, Clock, Mail, CheckCircle2, ArrowRight, Navigation } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "Membership Inquiry",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-[#F7F3E8]" id="contact">
      <div className="container-luxury">
        <SectionHeading
          align="split"
          eyebrow="LOCATION & VISIT"
          title="COME TRAIN WITH US."
          subtitle="Our Mayfair flagship is conveniently located in the city center with private valet parking."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Contact Channels & Hours */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="tel:+91 95757 62143"
                className="flex flex-col items-center justify-center p-4 rounded-[4px] bg-[#FFFDF7] border border-[#D8D2C4] text-[#171717] hover:border-[#171717] transition-all group"
              >
                <Phone className="w-5 h-5 mb-2 text-[#171717] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">CALL</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-[4px] bg-[#171717] border border-[#171717] text-[#FFFDF7] hover:bg-[#242320] transition-all group shadow-sm"
              >
                <MessageSquare className="w-5 h-5 mb-2 text-[#E8C766] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">WHATSAPP</span>
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-[4px] bg-[#FFFDF7] border border-[#D8D2C4] text-[#171717] hover:border-[#171717] transition-all group"
              >
                <Navigation className="w-5 h-5 mb-2 text-[#171717] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">DIRECTIONS</span>
              </a>
            </div>

            {/* Detailed Info Cards */}
            <div className="bg-[#FFFDF7] border border-[#D8D2C4] rounded-[6px] p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#E8C766] shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#171717]">
                    FLAGSHIP LOCATION
                  </h4>
                  <p className="text-sm text-[#77736A] mt-1 leading-relaxed">
                   Khandwa Rd, Chhegaon Makhan, Madhya Pradesh 450771
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#D8D2C4]">
                <Clock className="w-5 h-5 text-[#E8C766] shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#171717]">
                    CLUB HOURS
                  </h4>
                  <p className="text-sm text-[#171717] font-semibold mt-1">
                    24/7 Biometric Member Access
                  </p>
                  <p className="text-xs text-[#77736A] mt-0.5">
                    Concierge & Coaching: Mon�Fri 05:30�22:00 | Sat�Sun 07:00�20:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#D8D2C4]">
                <Mail className="w-5 h-5 text-[#E8C766] shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#171717]">
                    DIRECT INQUIRIES
                  </h4>
                  <p className="text-sm text-[#77736A] mt-1">
                    <br />
                    +91 95757 62143
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FFFDF7] border border-[#D8D2C4] rounded-[6px] p-8 sm:p-10 shadow-sm">
            {!submitted ? (
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#171717] mb-2">
                  SCHEDULE A PRIVATE TOUR
                </h3>
                <p className="text-sm text-[#77736A] mb-8 leading-relaxed">
                  Fill out your details below and our membership concierge will connect with you within 2 business hours.
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
                        placeholder="Jonathan Sterling"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
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
                        placeholder="jonathan@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                      >
                        <option value="Membership Inquiry">Club Membership</option>
                        <option value="1-on-1 Private Coaching">1-on-1 Private Coaching</option>
                        <option value="Complimentary Free Trial">Complimentary Free Trial</option>
                        <option value="Corporate Wellness">Corporate Wellness</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                      Your Message / Fitness Background (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current training routine, goals, or preferred visit times..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="charcoal" size="lg" className="w-full" withArrow>
                      SUBMIT INQUIRY
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E8C766]/20 border border-[#E8C766] flex items-center justify-center mx-auto mb-5 text-[#171717]">
                  <CheckCircle2 className="w-8 h-8 text-[#171717]" />
                </div>
                <span className="eyebrow-text text-[#E8C766] block mb-1">MESSAGE RECEIVED</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#171717] mb-2">
                  THANK YOU, {formData.name.toUpperCase()}
                </h3>
                <p className="text-sm text-[#77736A] leading-relaxed max-w-md mx-auto mb-8">
                  Your inquiry has been routed to our Head Concierge. We will contact you at {formData.phone} shortly.
                </p>
                <Button
                  href={getWhatsAppUrl(`Hi YHC, I just submitted an inquiry on the website for ${formData.name}.`)}
                  external
                  variant="champagne"
                  size="md"
                >
                  MESSAGE ON WHATSAPP NOW
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
