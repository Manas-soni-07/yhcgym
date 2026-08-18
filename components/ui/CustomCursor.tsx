"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view" | "drag">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (cursorAttr === "view") {
        setCursorType("view");
      } else if (cursorAttr === "drag") {
        setCursorType("drag");
      } else if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest("textarea") ||
        target.closest("[role='button']")
      ) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-medium uppercase tracking-wider text-[10px]"
        animate={{
          x: mousePosition.x - (cursorType === "view" || cursorType === "drag" ? 38 : cursorType === "hover" ? 22 : 6),
          y: mousePosition.y - (cursorType === "view" || cursorType === "drag" ? 38 : cursorType === "hover" ? 22 : 6),
          width: cursorType === "view" || cursorType === "drag" ? 76 : cursorType === "hover" ? 44 : 12,
          height: cursorType === "view" || cursorType === "drag" ? 76 : cursorType === "hover" ? 44 : 12,
          backgroundColor:
            cursorType === "view" || cursorType === "drag"
              ? "rgba(23, 23, 23, 0.92)"
              : cursorType === "hover"
              ? "rgba(232, 199, 102, 0.25)"
              : "rgba(23, 23, 23, 0.8)",
          borderColor:
            cursorType === "view" || cursorType === "drag"
              ? "#E8C766"
              : cursorType === "hover"
              ? "#E8C766"
              : "transparent",
          color: cursorType === "view" || cursorType === "drag" ? "#FFFDF7" : "#171717",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 400,
          mass: 0.5,
        }}
        style={{
          borderRadius: "50%",
          borderWidth: cursorType === "hover" ? 1.5 : cursorType === "view" || cursorType === "drag" ? 1.5 : 0,
        }}
      >
        {cursorType === "view" && <span className="tracking-widest text-[#E8C766]">VIEW</span>}
        {cursorType === "drag" && <span className="tracking-widest text-[#E8C766]">DRAG</span>}
      </motion.div>
    </>
  );
}
