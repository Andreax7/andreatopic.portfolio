import React from "react";
import { motion } from "framer-motion";

export default function AnimatedSVG() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
    <motion.svg
  width="500"
  height="500"
  viewBox="0 0 500 500"
  initial={{ opacity: 1 }}
  animate={{ opacity: 0 }}
  transition={{ duration: 2 }}
>
  {/* Define Outer Glow Filter */}
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4.5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  {/* Pulsing Dots with Glow & Opacity Animation */}
  <motion.circle
    cx="100"
    cy="100"
    r="5"
    fill="cyan"
    filter="url(#glow)"
    animate={{
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1] // 🔥 Opacity effect
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</motion.svg>

    </div>
  );
}
