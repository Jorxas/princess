import Bio from "../../components/Bio";
import Footer from "../../components/Footer";

export default function BioPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Bio />
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Douce & posée",
              text: "Toujours calme, même quand tout s'agite autour.",
            },
            {
              title: "Focus mission",
              text: "Études d'infirmière, cœur grand format.",
            },
            {
              title: "Vibe protectrice",
              text: "Jalousie à 100%… pour garder ce qui compte.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
            Portrait rapide
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/70 bg-white/70 p-5 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Ce qui la définit
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Bienveillance naturelle et écoute attentive.</li>
                <li>• Résilience calme, même quand ça s’accélère.</li>
                <li>• Un rire doux qui désarme tout le monde.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/70 p-5 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Ses super‑pouvoirs
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Transformer une mauvaise journée en moment léger.</li>
                <li>• Apaiser les gens juste par sa présence.</li>
                <li>• Détecter la bonne vibe en un regard.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Timeline rapide
            </h3>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                <p className="font-semibold text-slate-900">Aujourd’hui</p>
                <p>Études d’infirmière, énergie douce et ambition solide.</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                <p className="font-semibold text-slate-900">Demain</p>
                <p>Une pro respectée, au cœur grand comme sa patience.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Citation maison
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              “Le calme, c’est la vraie force. Et la sieste, c’est sacré.”
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Mini interview
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">
                  Son mood du matin :
                </span>{" "}
                thé ou sieste express.
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Sa force secrète :
                </span>{" "}
                rester douce, même quand tout va vite.
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Son super pouvoir :
                </span>{" "}
                transformer un silence en moment rassurant.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Petits repères
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Couleur vibe : rose poudré + lavande.</li>
              <li>• Énergie : calme, stable, rassurante.</li>
              <li>• Mot clé : douceur.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Anecdotes à compléter
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Ajoute ici vos moments préférés, les petites histoires et les
            souvenirs qui font sourire.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Souvenir 1", "Souvenir 2", "Souvenir 3"].map((label) => (
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
