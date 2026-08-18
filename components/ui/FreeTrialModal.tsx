"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, Phone, Mail, User, Sparkles } from "lucide-react";
import Button from "./Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeTrialModal({ isOpen, onClose }: FreeTrialModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "Strength Training",
    date: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[110] flex items-center justify-center bg-[#171717]/80 backdrop-blur-md p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-[#FFFDF7] border border-[#D8D2C4] rounded-[6px] p-6 sm:p-10 shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F7F3E8] text-[#171717] flex items-center justify-center hover:bg-[#E8C766] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="eyebrow-text text-[#E8C766] block mb-1">COMPLIMENTARY PASS</span>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#171717]">
                  EXPERIENCE YHC
                </h3>
                <p className="text-sm text-[#77736A] mt-2">
                  Enjoy a 1-day pass with a full facility tour, movement screening, and recovery suite access.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#77736A]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Croft"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] pl-10 pr-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#77736A]" />
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] pl-10 pr-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#77736A]" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] pl-10 pr-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] px-3.5 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                    >
                      <option value="Strength Training">Strength Training</option>
                      <option value="Hypertrophy & Muscle">Hypertrophy & Muscle</option>
                      <option value="Fat Loss & Conditioning">Fat Loss & Conditioning</option>
                      <option value="Private 1-on-1 Coaching">Private 1-on-1 Coaching</option>
                      <option value="Longevity & Recovery">Longevity & Recovery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#77736A] mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#77736A]" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#F7F3E8] border border-[#D8D2C4] rounded-[4px] pl-10 pr-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <Button type="submit" variant="champagne" size="lg" className="w-full" withArrow>
                    CONFIRM FREE TRIAL PASS
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#E8C766]/20 border border-[#E8C766] flex items-center justify-center mx-auto mb-5 text-[#171717]">
                <CheckCircle2 className="w-8 h-8 text-[#171717]" />
              </div>
              <span className="eyebrow-text text-[#E8C766] block mb-1">PASS CONFIRMED</span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#171717] mb-2">
                WELCOME, {formData.name.split(" ")[0].toUpperCase()}
              </h3>
              <p className="text-sm text-[#77736A] leading-relaxed max-w-md mx-auto mb-6">
                Your guest pass has been reserved. Our concierge will reach out via WhatsApp/SMS to confirm your preferred arrival time.
              </p>
              <div className="space-y-3">
                <Button
                  href={getWhatsAppUrl(`Hi YHC, I just requested a free trial pass for ${formData.name} (${formData.goal}). Looking forward to visiting!`)}
                  external
                  variant="charcoal"
                  size="md"
                  className="w-full"
                >
                  MESSAGE CONCIERGE ON WHATSAPP
                </Button>
                <Button onClick={onClose} variant="ghost" size="sm" className="w-full">
                  CLOSE WINDOW
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
