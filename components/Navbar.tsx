"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/bio", label: "Bio" },
  { href: "/playlist", label: "Playlist" },
  { href: "/addictions", label: "Addictions" },
  { href: "/inside", label: "Secrets" },
  { href: "/galerie", label: "Galerie" },
  { href: "/mini-jeu", label: "Mini-jeu" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-4 z-40 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-lg backdrop-blur md:px-6"
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-semibold text-slate-900"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100">
          <Heart className="h-4 w-4 text-rose-500" />
        </span>
        Irice
      </Link>

      <nav className="hidden items-center gap-4 text-xs font-semibold text-slate-600 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition hover:text-rose-500"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/contact"
        className="rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
      >
        Écrire
      </Link>
    </motion.header>
  );
}
