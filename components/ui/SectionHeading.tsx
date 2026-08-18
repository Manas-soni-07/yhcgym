"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "split";
  theme?: "light" | "dark";
  className?: string;
  action?: React.ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
  action,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  if (align === "split") {
    return (
      <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 md:mb-16", className)}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-7"
        >
          {eyebrow && (
            <span className={cn("eyebrow-text block mb-3 font-mono text-[12px]", isDark ? "text-[#E8C766]" : "text-[#77736A]")}>
              {eyebrow}
            </span>
          )}
          <h2
            className={cn(
              "font-display h2-editorial uppercase tracking-tight",
              isDark ? "text-[#FFFDF7]" : "text-[#171717]"
            )}
          >
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-5 flex flex-col justify-end"
        >
          {subtitle && (
            <p className={cn("text-base md:text-lg leading-relaxed", isDark ? "text-[#A39F93]" : "text-[#77736A]")}>
              {subtitle}
            </p>
          )}
          {action && <div className="mt-6">{action}</div>}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow-text block mb-3 font-mono text-[12px]", isDark ? "text-[#E8C766]" : "text-[#77736A]")}>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display h2-editorial uppercase tracking-tight",
          isDark ? "text-[#FFFDF7]" : "text-[#171717]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-5 text-base md:text-lg leading-relaxed", isDark ? "text-[#A39F93]" : "text-[#77736A]")}>
          {subtitle}
        </p>
      )}
      {action && <div className="mt-8">{action}</div>}
    </motion.div>
  );
}
