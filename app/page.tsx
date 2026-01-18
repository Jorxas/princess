import Link from "next/link";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/bio",
              title: "Bio & Dualité",
              desc: "La carte d'identité double face d'Irice.",
            },
            {
              href: "/playlist",
              title: "La Playlist",
              desc: "Fally Ipupa en boucle, ambiance Rumba & Chill.",
            },
            {
              href: "/addictions",
              title: "Addictions & Style",
              desc: "TikTok, lunettes, rastas et humeur du jour.",
            },
            {
              href: "/inside",
              title: "Inside Jokes",
              desc: "Petits secrets et punchlines privées.",
            },
            {
              href: "/galerie",
              title: "Galerie",
              desc: "Moments capturés, vibe authentique.",
            },
            {
              href: "/mini-jeu",
              title: "Mini‑jeu",
              desc: "Un petit défi fun pour tester tes vibes.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-rose-200"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
                Ouvrir
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Pourquoi ce site ?
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Un portfolio affectif, drôle et élégant, pour célébrer Irice et
              sa vibe unique.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Chaque page raconte une facette : ses passions, ses habitudes,
              ses inside jokes, et ses moments forts.
            </p>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              À explorer
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Bio &amp; dualité : son côté pro et son côté fun.</li>
              <li>• Playlist : la bande‑son officielle.</li>
              <li>• Mini‑jeu : fun rapide, vibe garantie.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
