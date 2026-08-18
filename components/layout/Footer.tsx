"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Phone, MapPin, Mail, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-[#FFFDF7] pt-20 md:pt-24 pb-28 md:pb-16 border-t border-white/10">
      <div className="container-luxury">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#FFFDF7] block">
                YHC
              </span>
              <span className="text-[11px] font-mono tracking-[0.24em] text-[#E8C766] uppercase block mt-1">
                YOUR HEALTH CLUB
              </span>
            </div>

            <p className="font-display text-xl sm:text-2xl text-[#FFFDF7] leading-snug tracking-wide uppercase max-w-md pt-2">
              YOUR HEALTH.
              <br />
              YOUR STRENGTH.
              <br />
              YOUR CLUB.
            </p>

            <p className="text-sm text-[#A39F93] leading-relaxed max-w-md">
              A private health sanctuary bringing together athletic biomechanics, luxury recovery modalities, and an uncompromising standard of coaching.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-[4px] bg-white/10 border border-white/20 text-[#FFFDF7] text-xs font-semibold tracking-wider uppercase hover:bg-[#E8C766] hover:text-[#171717] hover:border-[#E8C766] transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 text-[#E8C766] group-hover:text-[#171717]" />
                <span>CHAT WITH CONCIERGE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#E8C766] block">
              EXPLORE
            </span>
            <ul className="space-y-3 text-sm font-medium text-[#A39F93]">
              <li>
                <Link href="/about" className="hover:text-[#FFFDF7] transition-colors">
                  About YHC
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#FFFDF7] transition-colors">
                  All Programs
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-[#FFFDF7] transition-colors">
                  Master Coaches
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-[#FFFDF7] transition-colors">
                  Membership Tiers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FFFDF7] transition-colors">
                  Club Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFFDF7] transition-colors">
                  Location & Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Index */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#E8C766] block">
              DISCIPLINES
            </span>
            <ul className="space-y-3 text-sm font-medium text-[#A39F93]">
              <li>
                <Link href="/programs#strength-training" className="hover:text-[#FFFDF7] transition-colors">
                  Strength Training
                </Link>
              </li>
              <li>
                <Link href="/programs#muscle-building" className="hover:text-[#FFFDF7] transition-colors">
                  Muscle Building
                </Link>
              </li>
              <li>
                <Link href="/programs#weight-loss" className="hover:text-[#FFFDF7] transition-colors">
                  Metabolic Reset
                </Link>
              </li>
              <li>
                <Link href="/programs#personal-training" className="hover:text-[#FFFDF7] transition-colors">
                  Private Coaching
                </Link>
              </li>
              <li>
                <Link href="/programs#functional-fitness" className="hover:text-[#FFFDF7] transition-colors">
                  Functional Fitness
                </Link>
              </li>
              <li>
                <Link href="/programs#cardio-conditioning" className="hover:text-[#FFFDF7] transition-colors">
                  Cardio & Longevity
                </Link>
              </li>
            </ul>
          </div>

          {/* Club Info & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#E8C766] block">
              VISIT THE CLUB
            </span>
            <div className="space-y-3 text-sm text-[#A39F93]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E8C766] shrink-0 mt-1" />
                <span>Khandwa Rd, Chhegaon Makhan, Madhya Pradesh 450771</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E8C766] shrink-0 mt-1" />
                <div>
                  <p className="text-[#FFFDF7] font-semibold">24/7 Member Keycard Access</p>
                  <p className="text-xs text-[#A39F93]">Staffed: Mon-Fri 5:30AM�10PM | Sat-Sun 7AM�8PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E8C766] shrink-0" />
                <a href="tel:+15550198422" className="hover:text-[#FFFDF7] transition-colors">
                  +1 (555) 019-8422
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E8C766] shrink-0" />
                <a href="mailto:concierge@yhcgym.com" className="hover:text-[#FFFDF7] transition-colors">
                  concierge@yhcgym.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77736A] font-mono">
          <p>� {new Date().getFullYear()} YHC � YOUR HEALTH CLUB. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#FFFDF7] transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-[#FFFDF7] transition-colors cursor-pointer">TERMS OF MEMBERSHIP</span>
            <span className="hover:text-[#FFFDF7] transition-colors cursor-pointer">CLUB RULES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
