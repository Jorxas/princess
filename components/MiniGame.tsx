"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Zap } from "lucide-react";

const messages = [
  "Vibe douce +10",
  "Sieste imminente 😴",
  "Fally approved",
  "Flow validé",
  "Mode bavarde activé",
];

export default function MiniGame() {
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);

  const progress = Math.min(score, 100);
  const message = useMemo(
    () => messages[score % messages.length],
    [score]
  );

  const handleTap = () => {
    setScore((prev) => Math.min(prev + 8, 100));
    setCombo((prev) => Math.min(prev + 1, 12));
  };

  const reset = () => {
    setScore(0);
    setCombo(0);
  };

  return (
    <div className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-xl backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
            Mini‑jeu
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">
            Tap &amp; Vibes
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Clique sur le cœur pour faire monter l&apos;énergie d&apos;Irice.
          </p>
        </div>
        <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-slate-700">
          Combo&nbsp;: <span className="text-rose-500">{combo}</span>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>0%</span>
          <span>100%</span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/80">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-violet-500"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
          />
        </div>
      </div>

      <motion.button
        type="button"
        onClick={handleTap}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800"
      >
        <Heart className="h-4 w-4 text-rose-300" />
        Tap the vibe
      </motion.button>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
        <div className="inline-flex items-center gap-2">
          <Zap className="h-4 w-4 text-rose-400" />
          {message}
        </div>
        <button
          type="button"
          onClick={reset}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 transition hover:text-rose-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
