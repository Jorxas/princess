"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Moon, ShieldAlert } from "lucide-react";

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

export default function Bio() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="bio" className="relative overflow-hidden bg-white py-20">
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
            Bio & Dualité
          </p>
          <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Carte d&apos;identité, version double face
          </h2>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            Pro, douce et déterminée, mais avec un talent rare pour transformer
            une sieste en art contemporain.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-xl before:absolute before:-right-24 before:top-6 before:h-32 before:w-32 before:rounded-full before:bg-white/70 before:blur-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  Carte d&apos;identité
                </h3>
                <button
                  type="button"
                  onClick={() => setIsFlipped((prev) => !prev)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-rose-200 hover:text-rose-500"
                >
                  {isFlipped ? "Retour pro" : "Voir la vraie Irice"}
                </button>
              </div>

              <div className="mt-6 perspective-[1200px]">
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative h-64 w-full rounded-3xl bg-white shadow-lg [transform-style:preserve-3d]"
                >
                  <div className="absolute inset-0 flex h-full w-full flex-col justify-between rounded-3xl border border-white/60 bg-gradient-to-br from-white via-white to-rose-50 p-6 [backface-visibility:hidden]">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
                          Étudiante
                        </p>
                        <h4 className="mt-2 text-2xl font-semibold text-slate-900">
                          Soins infirmiers
                        </h4>
                      </div>
                      <HeartPulse className="h-8 w-8 text-rose-400" />
                    </div>

                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Stethoscope className="h-4 w-4 text-slate-500" />
                        Sérieuse, mature, focus sur la mission.
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4 text-slate-500" />
                        Calme, douce, mais toujours alerte.
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex h-full w-full flex-col justify-between rounded-3xl border border-white/60 bg-gradient-to-br from-violet-50 via-white to-rose-50 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                          Mode OFF
                        </p>
                        <h4 className="mt-2 text-2xl font-semibold text-slate-900">
                          Le sommeil, c&apos;est mon deuxième prénom.
                        </h4>
                      </div>
                      <Moon className="h-8 w-8 text-violet-400" />
                    </div>
                    <p className="text-sm text-slate-600">
                      Sieste instantanée, niveau légendaire. Réveil seulement
                      pour les choses importantes (et Fally Ipupa).
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-violet-50 p-6 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white p-2 shadow">
                <ShieldAlert className="h-5 w-5 text-rose-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Niveau de Jalousie / Possessivité
                </p>
                <p className="text-xs text-slate-500">
                  Touche pas, c&apos;est à moi.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>0%</span>
                <span>100%</span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/70">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-violet-500 shadow"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Verrouillé à 100% pour protéger le trésor.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
