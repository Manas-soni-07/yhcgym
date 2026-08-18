"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  numericValue: number;
  suffix: string;
  label: string;
}

function StatCounter({ numericValue, suffix, label }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = numericValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="flex flex-col py-6 md:py-8">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-none mb-3">
        {count}
        {suffix}
      </div>
      <div className="font-mono text-xs sm:text-[13px] tracking-[0.18em] uppercase text-[#77736A]">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { numericValue: 500, suffix: "+", label: "ACTIVE MEMBERS" },
    { numericValue: 10, suffix: "+", label: "EXPERT TRAINERS" },
    { numericValue: 5, suffix: "+", label: "YEARS EXPERIENCE" },
    { numericValue: 25, suffix: "K+", label: "WORKOUTS COMPLETED" },
  ];

  return (
    <section className="bg-[#FFFDF7] border-y border-[#D8D2C4] py-8 sm:py-12">
      <div className="container-luxury">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D8D2C4]/70">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`px-4 sm:px-8 ${index % 2 === 0 ? "pr-4" : "pl-4"} ${
                index !== 0 ? "sm:pl-8" : ""
              }`}
            >
              <StatCounter
                numericValue={stat.numericValue}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
