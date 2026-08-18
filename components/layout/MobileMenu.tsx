"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
}

const navLinks = [
  { name: "ABOUT", href: "/about" },
  { name: "PROGRAMS", href: "/programs" },
  { name: "TRAINERS", href: "/trainers" },
  { name: "MEMBERSHIP", href: "/membership" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose, onOpenTrial }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          className="fixed inset-0 z-50 bg-[#FFFDF7] flex flex-col justify-between p-6 sm:p-10 pt-24 overflow-y-auto"
        >
          {/* Top Bar inside Menu */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between border-b border-[#D8D2C4]/40 pb-4">
            <Link href="/" onClick={onClose} className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-[#171717]">YHC</span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-[#77736A] uppercase">YOUR HEALTH CLUB</span>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close Navigation Menu"
              className="w-11 h-11 rounded-full bg-[#F7F3E8] border border-[#D8D2C4] flex items-center justify-center text-[#171717] hover:bg-[#E8C766] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-5 my-auto py-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center justify-between text-2xl sm:text-3xl font-display font-medium text-[#171717] hover:text-[#77736A] transition-colors py-1"
                  >
                    <span className="relative">
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E8C766]" />
                      )}
                    </span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#E8C766]" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="pt-6 border-t border-[#D8D2C4]/60 space-y-3 pb-8"
          >
            <button
              onClick={() => {
                onClose();
                onOpenTrial();
              }}
              className="w-full py-4 bg-[#E8C766] text-[#171717] font-sans font-bold text-sm tracking-[0.14em] uppercase rounded-[4px] flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform"
            >
              <Sparkles className="w-4 h-4" />
              <span>START FREE TRIAL ?</span>
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#171717] text-[#FFFDF7] font-sans font-semibold text-xs tracking-[0.12em] uppercase rounded-[4px] flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#E8C766]" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
