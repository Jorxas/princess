import Footer from "../../components/Footer";
import Media from "../../components/Media";

export default function GaleriePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Media />
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Album vivant
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Ajoute ici d&apos;autres photos et vidéos pour faire évoluer la
            galerie au fil du temps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {["Jour 1", "Jour 2", "Jour 3"].map((label) => (
            <div
              key={label}
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-slate-900">{label}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Un moment marquant, un sourire, une vibe.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
          <h3 className="text-lg font-semibold text-slate-900">
            À ajouter plus tard
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Une vidéo drôle en mode TikTok.</li>
            <li>• Une photo “flow validé à 100%”.</li>
            <li>• Un moment spontané à deux.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Polaroids
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                Mini‑photo 1 — à remplacer.
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                Mini‑photo 2 — à remplacer.
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                Mini‑photo 3 — à remplacer.
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Story du jour
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Ajoute une petite description pour chaque photo ou vidéo afin de
              raconter l&apos;histoire.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-3">
                “Ce jour‑là, on a…”
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-3">
                “Et ensuite, on a…”
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Ajouter des souvenirs
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Dépose de nouveaux fichiers dans `public/media` puis remplace les
            cartes ici avec tes visuels préférés.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
