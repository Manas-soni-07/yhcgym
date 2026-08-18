"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "champagne" | "charcoal" | "outline-charcoal" | "outline-champagne" | "ghost" | "dark-champagne";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

export default function Button({
  children,
  href,
  onClick,
  variant = "champagne",
  size = "md",
  withArrow = false,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2.5 text-[12px] tracking-[0.1em]",
    md: "px-6 py-3.5 text-[13px] tracking-[0.12em]",
    lg: "px-8 py-4 text-[14px] tracking-[0.14em]",
  };

  const variantStyles = {
    champagne:
      "bg-[#E8C766] text-[#171717] font-semibold border border-[#E8C766] hover:bg-[#D9C98A] hover:border-[#D9C98A] shadow-sm",
    charcoal:
      "bg-[#171717] text-[#FFFDF7] font-semibold border border-[#171717] hover:bg-[#2A2925] hover:border-[#2A2925]",
    "outline-charcoal":
      "bg-transparent text-[#171717] font-semibold border border-[#171717]/80 hover:bg-[#171717] hover:text-[#FFFDF7]",
    "outline-champagne":
      "bg-transparent text-[#E8C766] font-semibold border border-[#E8C766]/80 hover:bg-[#E8C766] hover:text-[#171717]",
    ghost:
      "bg-transparent text-[#171717] font-semibold hover:text-[#77736A] p-0 underline-offset-4 hover:underline",
    "dark-champagne":
      "bg-[#E8C766] text-[#171717] font-semibold border border-[#E8C766] hover:bg-[#FFFDF7] hover:text-[#171717]",
  };

  const baseStyles =
    "group inline-flex items-center justify-center gap-3 rounded-[4px] uppercase font-sans transition-all duration-300 select-none cursor-pointer";

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <MotionLink
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
    >
      {content}
    </motion.button>
  );
}
