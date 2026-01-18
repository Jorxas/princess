import Addictions from "../../components/Addictions";
import Footer from "../../components/Footer";

export default function AddictionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Addictions />
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Routine vibes
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>1. TikTok pour se mettre bien.</li>
              <li>2. Lunettes + rastas = flow automatique.</li>
              <li>3. Mode calme jusqu&apos;à ce qu&apos;elle soit à l&apos;aise.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/70 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Petit défi
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Peux‑tu deviner son humeur du jour ? Spoiler : ça dépend du vibe
              et du niveau de confort.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Playlist TikTok du moment
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                “Trend du jour” — mood léger, sourire automatique.
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                “Audio coup de cœur” — replay toutes les 20 minutes.
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                “Sound du soir” — parfait pour chill.
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Style check
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Lunettes: chic + mystérieuse.</li>
              <li>• Rastas: signature iconique.</li>
              <li>• Couleurs préférées: rose doux &amp; violet lavande.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Mood du jour (version fun)
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              "Calme + sourire doux",
              "Bavarde + rires",
              "Concentrée + vibes studieuses",
            ].map((mood) => (
              <div
                key={mood}
                className="rounded-2xl border border-white/70 bg-white/80 p-4 text-sm text-slate-600"
              >
                {mood}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Bento des petites habitudes
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                Scroller TikTok en mode “encore une vidéo”.
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                Ajuster les lunettes avant un selfie parfait.
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                Playlist douce pour se recentrer.
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Défis du jour
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Défi sourire: 3 sourires, 3 compliments.</li>
              <li>• Défi style: une tenue qui fait tourner les têtes.</li>
              <li>• Défi chill: 10 minutes de calme absolu.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Notes perso
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Ajoute des détails sur ses goûts, ses couleurs préférées ou ses
            petits rituels du quotidien.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Préférence 1", "Préférence 2", "Préférence 3"].map((label) => (
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
