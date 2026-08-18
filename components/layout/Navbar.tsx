"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import MobileMenu from "./MobileMenu";
import FreeTrialModal from "@/components/ui/FreeTrialModal";

const navLinks = [
  { name: "ABOUT", href: "/about" },
  { name: "PROGRAMS", href: "/programs" },
  { name: "TRAINERS", href: "/trainers" },
  { name: "MEMBERSHIP", href: "/membership" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-sm"
            : "bg-[#F7F3E8]/90 backdrop-blur-md border-b border-[#171717]/8"
        }`}
        style={{ height: "var(--header-height)" }}
      >
        <div className="container-luxury h-full flex items-center justify-between">
          {/* LEFT: Brand Logo */}
          <Link href="/" className="group flex flex-col items-start select-none">
            <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[#171717] group-hover:text-[#77736A] transition-colors leading-none">
              YHC
            </span>
            <span className="text-[9px] font-mono tracking-[0.22em] text-[#77736A] uppercase mt-1">
              YOUR HEALTH CLUB
            </span>
          </Link>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group text-[13px] font-semibold tracking-[0.05em] text-[#171717] hover:text-[#77736A] transition-colors py-1 select-none"
                >
                  <span>{link.name}</span>
                  {/* Hover & Active underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#E8C766] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* WhatsApp Link */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171717] hover:text-[#E8C766] px-3 py-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#171717] hover:text-[#E8C766]" />
              <span>WhatsApp</span>
            </a>

            {/* Start Free Trial CTA */}
            <motion.button
              onClick={() => setTrialModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3.5 bg-[#E8C766] text-[#171717] font-bold text-xs tracking-[0.14em] uppercase rounded-[4px] border border-[#E8C766] hover:bg-[#D9C98A] hover:border-[#D9C98A] shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>START FREE TRIAL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* MOBILE TOGGLE & WHATSAPP */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-[#D8D2C4] bg-[#FFFDF7] flex items-center justify-center text-[#171717] hover:bg-[#E8C766] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="w-11 h-11 rounded-[4px] border border-[#171717] bg-[#171717] flex items-center justify-center text-[#FFFDF7] hover:bg-[#242320] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenTrial={() => setTrialModalOpen(true)}
      />

      {/* Free Trial Modal */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </>
  );
}
