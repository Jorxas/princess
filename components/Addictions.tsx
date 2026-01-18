"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clapperboard, Glasses, Sparkles, MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Addictions() {
  const [isChatty, setIsChatty] = useState(false);

  return (
    <section id="addictions" className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
            Addictions &amp; Style
          </p>
          <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            TikTok, flow et humeur du jour
          </h2>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            Tout est dans les détails&nbsp;: la vibe, le look et les petits
            rituels.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl before:absolute before:-right-20 before:top-4 before:h-24 before:w-24 before:rounded-full before:bg-white/70 before:blur-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white p-3 shadow">
                <Clapperboard className="h-6 w-6 text-rose-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">TikTok</h3>
                <p className="text-sm text-slate-500">
                  Scroll infini, réactions 100% authentiques.
                </p>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
            >
              <Sparkles className="h-4 w-4 text-rose-300" />
              TikTok mood activé
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white p-3 shadow">
                <Glasses className="h-6 w-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Style</h3>
                <p className="text-sm text-slate-500">
                  Nouvelles lunettes + rastas = flow validé à 100%.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm">
              Accessoire star du moment&nbsp;: lunettes chic et attitude
              assumée.
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-2 rounded-3xl border border-rose-100 bg-gradient-to-r from-rose-50 via-white to-violet-50 p-6 shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 shadow">
                  <MessageCircle className="h-6 w-6 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Humeur
                  </h3>
                  <p className="text-sm text-slate-500">
                    Calme ou bavarde ? Elle change avec le feeling.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsChatty((prev) => !prev)}
                className="relative inline-flex h-10 w-24 items-center rounded-full bg-slate-200 transition"
              >
                <motion.span
                  animate={{ x: isChatty ? 48 : 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute h-8 w-8 rounded-full bg-white shadow"
                />
                <span className="absolute left-3 text-xs font-semibold text-slate-600">
                  Calme
                </span>
                <span className="absolute right-3 text-xs font-semibold text-slate-600">
                  Bavarde
                </span>
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              {isChatty
                ? "Mode bavarde activé : l'énergie est contagieuse."
                : "Mode calme : sourire doux, écoute attentive."}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
