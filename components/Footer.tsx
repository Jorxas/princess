"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:px-10 sm:text-left">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-sm text-slate-600"
        >
          Codé avec ❤️ (et un peu de fatigue) par Jordan
        </motion.p>
        <motion.a
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="https://wa.me/4915156684392"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-slate-800"
        >
          <MessageCircle className="h-4 w-4 text-rose-300" />
          Envoyer un message
        </motion.a>
      </div>
    </footer>
  );
}
