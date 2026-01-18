"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <motion.div
        className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-rose-200/40 blur-[120px]"
        animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-200/40 blur-[140px]"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.4),transparent_35%)]" />
    </div>
  );
}
