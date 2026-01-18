"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const subtitles = [
  "Infirmière de demain",
  "Fan n°1 de Fally",
  "Championne olympique de Sieste",
];

function useTypewriter(words: string[], speedMs = 70, pauseMs = 1200) {
  const [index, setIndex] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = useMemo(() => words[index] ?? "", [words, index]);

  useEffect(() => {
    const tick = () => {
      if (!isDeleting && cursor === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseMs);
        return;
      }

      if (isDeleting && cursor === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      setCursor((prev) => prev + (isDeleting ? -1 : 1));
    };

    const timeout = setTimeout(tick, speedMs);
    return () => clearTimeout(timeout);
  }, [currentWord.length, cursor, isDeleting, pauseMs, speedMs, words.length]);

  return currentWord.slice(0, cursor);
}

export default function Hero() {
  const typedText = useTypewriter(subtitles);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bubbleY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bubbleYSlow = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-rose-100 via-white to-violet-100"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <motion.div
          style={{ y: bubbleY }}
          className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-rose-200 blur-3xl"
        />
        <motion.div
          style={{ y: bubbleYSlow }}
          className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-violet-200 blur-3xl"
        />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-start justify-center px-6 py-20 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-lg backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-rose-400" />
          Portfolio d&apos;Irice
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-8 font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          L&apos;Univers d&apos;Irice
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl"
        >
          <span className="text-slate-500">Je suis&nbsp;</span>
          <span className="font-semibold text-slate-900">{typedText}</span>
          <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-slate-900 align-middle" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/bio"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:translate-y-[-2px] hover:bg-slate-800"
          >
            Découvrir le phénomène
            <Heart className="h-4 w-4 text-rose-300 transition group-hover:scale-110" />
          </Link>
          <span className="text-sm text-slate-500">
            Spoiler: charme, humour, et vibes infinies.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
