import Footer from "../../components/Footer";
import Playlist from "../../components/Playlist";

export default function PlaylistPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Playlist />
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
            Top 3
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">
            Les titres qui reviennent en boucle
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Tokooos", "Afsana", "Un coup"].map((title) => (
              <div
                key={title}
                className="rounded-2xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{title}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Fally Ipupa — approved
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Playlist mood
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Un mix entre douceur, énergie et rumba romantique. La bande‑son
              idéale pour une soirée chill, un trajet ou une sieste élégante.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Énergie: 8/10</li>
              <li>• Romance: 10/10</li>
              <li>• Vibes calmantes: 9/10</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Les règles d’écoute
            </h3>
            <ol className="mt-3 space-y-2 text-sm text-slate-600">
              <li>1. Mets le son, et laisse‑toi porter.</li>
              <li>2. Pas de skip quand c’est Fally.</li>
              <li>3. Sourire obligatoire.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Suggestions du jour
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {["Juste une fois", "Likolo", "Amore"].map((title) => (
              <div
                key={title}
                className="rounded-2xl border border-white/70 bg-white/80 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{title}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Ajoute à la playlist
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Setlist idéal
            </h3>
            <ol className="mt-3 space-y-2 text-sm text-slate-600">
              <li>1. Intro douce pour s&apos;installer.</li>
              <li>2. Rumba romantique en plein cœur.</li>
              <li>3. Final lumineux pour finir en souriant.</li>
            </ol>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Ambiance parfaite
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Lumière douce, boisson fraîche, et un coin confortable. La musique
              fait le reste.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Mini quiz musical
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Devine la chanson en 3 indices (version fun, à compléter).
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Indice 1", "Indice 2", "Indice 3"].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-white/70 bg-white/80 p-4 text-sm text-slate-600"
              >
                {label} — à écrire.
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
