import Footer from "../../components/Footer";
import MiniGame from "../../components/MiniGame";

export default function MiniJeuPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <MiniGame />
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Règles du jeu
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Chaque tap augmente l&apos;énergie.</li>
              <li>• Le combo monte jusqu&apos;à 12.</li>
              <li>• Atteins 100% pour le mode VIP.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Tips &amp; secrets
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Clique vite, puis ralentis pour garder un rythme doux. C&apos;est
              la stratégie Irice.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Classement local
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            À venir : enregistrement du meilleur score sur l&apos;appareil.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Badges à débloquer
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• “Vibe douce” — 30% d&apos;énergie.</li>
              <li>• “Rumba ready” — 60% d&apos;énergie.</li>
              <li>• “Mode Irice” — 100% d&apos;énergie.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Défi quotidien
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Atteins 80% en moins de 15 taps. Challenge accepté ?
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Conseils de pro
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Clique en rythme, puis ralentis pour stabiliser le combo. C&apos;est
            la technique parfaite.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
