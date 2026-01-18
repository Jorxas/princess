"use client";

import { motion } from "framer-motion";
import { Moon, Music2, ShieldAlert, Sparkles } from "lucide-react";

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

export default function InsideJokes() {
  return (
    <section id="inside" className="relative overflow-hidden py-20">
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
            Inside Jokes
          </p>
          <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Les petits secrets d&apos;Irice
          </h2>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            Un mini bento pour résumer la légende en 4 punchlines.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            className="col-span-1 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-100 p-2">
                <Moon className="h-5 w-5 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Sieste pro</h3>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Record officiel : 3 micro‑siestes en une journée, sans perdre le
              sourire.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="col-span-1 rounded-3xl border border-white/70 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white p-2 shadow">
                <Music2 className="h-5 w-5 text-violet-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Fally forever
              </h3>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Dès qu&apos;une note de rumba commence, tout le reste disparaît.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="col-span-1 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-100 p-2">
                <ShieldAlert className="h-5 w-5 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">100%</h3>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Jalousie contrôlée, mais jamais désactivée.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="col-span-1 rounded-3xl border border-white/70 bg-gradient-to-br from-white via-violet-50 to-rose-50 p-6 shadow-xl md:col-span-2 lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white p-2 shadow">
                <Sparkles className="h-5 w-5 text-violet-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Bonus secret
              </h3>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Quand elle est à l&apos;aise, elle parle beaucoup… et c&apos;est
              impossible de s&apos;ennuyer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
