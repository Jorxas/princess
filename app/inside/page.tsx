import Footer from "../../components/Footer";
import InsideJokes from "../../components/InsideJokes";

export default function InsidePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <InsideJokes />
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Notes secrètes
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Une page pour garder les petites anecdotes qui font sourire — et
            qui ne s&apos;expliquent qu&apos;entre vous.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Nos petites règles
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Toujours un message “bonne nuit”.</li>
              <li>• Sieste = respect absolu.</li>
              <li>• Fally Ipupa = non négociable.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Petits surnoms
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Princesse, Reine de la sieste, et la plus chic de la timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Citation préférée
          </h3>
          <p className="mt-4 text-sm text-slate-600">
            “Quand je suis à l&apos;aise, je parle beaucoup… et je ris encore
            plus.”
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Moments iconiques
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Un fou rire qui dure 10 minutes.</li>
              <li>• Une soirée chill qui finit en sieste.</li>
              <li>• Un message qui change la journée.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Phrases cultes
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Ajoute les phrases qui reviennent souvent et qui vous font rire.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-3">
                “Phrase 1”
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-3">
                “Phrase 2”
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Timeline secrète
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-slate-600">
            {["Moment 1", "Moment 2", "Moment 3"].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-white/70 bg-white/80 p-4"
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
