"use client";

import { motion } from "framer-motion";
import { Camera, Film, Sparkles } from "lucide-react";

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

export default function Media() {
  return (
    <section id="media" className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Galerie
          </p>
          <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Moments capturés, vibe authentique
          </h2>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            Quelques instants d&apos;Irice pour compléter l&apos;histoire.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-xl backdrop-blur"
          >
            <div className="flex items-center gap-3 border-b border-white/60 px-5 py-4">
              <div className="rounded-2xl bg-rose-100 p-2">
                <Camera className="h-5 w-5 text-rose-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Portrait</p>
                <p className="text-xs text-slate-500">Irice, en mode star.</p>
              </div>
            </div>
            <img
              src="/media/placeholder.svg"
              alt="Emplacement pour portrait"
              className="h-[420px] w-full object-cover"
            />
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl before:absolute before:-right-16 before:top-4 before:h-24 before:w-24 before:rounded-full before:bg-white/70 before:blur-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white p-2 shadow">
                  <Sparkles className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Moodboard
                  </p>
                  <p className="text-xs text-slate-500">
                    Élégance douce &amp; rire facile.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Des moments simples qui racontent beaucoup&nbsp;: de la douceur,
                du style, et ce petit sourire qui dit tout.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-xl backdrop-blur"
            >
              <div className="flex items-center gap-3 border-b border-white/60 px-5 py-4">
                <div className="rounded-2xl bg-violet-100 p-2">
                  <Film className="h-5 w-5 text-violet-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Video</p>
                  <p className="text-xs text-slate-500">
                    Ajoute une vidéo perso ici.
                  </p>
                </div>
              </div>
              <div className="flex h-[220px] items-center justify-center bg-gradient-to-br from-white via-rose-50 to-violet-50">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Contenu privé non publié
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
