"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

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

const bars = [12, 18, 24, 16, 28, 20, 14, 26];

export default function Playlist() {
  const [isHover, setIsHover] = useState(false);

  return (
    <section
      id="playlist"
      className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50 to-white py-20"
    >
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
            La Playlist
          </p>
          <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Rumba &amp; Chill, by Irice
          </h2>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            Un lecteur stylisé, une ambiance douce, et un seul roi&nbsp;: Fally
            Ipupa.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="relative mt-10 overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur before:absolute before:-right-20 before:top-4 before:h-28 before:w-28 before:rounded-full before:bg-white/70 before:blur-2xl"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-100 p-3">
                <Music2 className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Playlist</p>
                <h3 className="text-lg font-semibold text-slate-900">
                  Rumba &amp; Chill
                </h3>
                <p className="text-xs text-slate-500">
                  Lecture exclusive Fally Ipupa
                </p>
              </div>
            </div>

            <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow transition hover:bg-slate-800">
              Play
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-end gap-2">
            {bars.map((height, index) => (
              <motion.div
                key={`bar-${height}-${index}`}
                className="w-2 rounded-full bg-gradient-to-t from-rose-400 to-violet-400"
                animate={
                  isHover
                    ? { height: [height * 0.6, height * 1.6, height * 0.8] }
                    : { height }
                }
                transition={{
                  duration: 0.8,
                  repeat: isHover ? Infinity : 0,
                  repeatType: "mirror",
                  delay: index * 0.08,
                }}
                style={{ height }}
              />
            ))}
            <div className="ml-4 text-xs text-slate-500">
              Survole pour sentir les vibes.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
