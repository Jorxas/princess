import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-8 text-center shadow-xl backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
            Contact
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Envoyer un message à Irice
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Un petit mot, une attention ou un compliment, tout passe par ici.
          </p>
          <p className="mt-6 text-sm text-slate-600">
            Le bouton WhatsApp est en bas de page, dans le footer.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-20 sm:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">
              Idées de messages
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• “Petit message pour te souhaiter une belle journée.”</li>
              <li>• “Tu as un sourire qui calme tout.”</li>
              <li>• “Tu veux écouter Fally ensemble ?”</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-violet-50 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Petite attention
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Un mot doux, un compliment sincère, ou une blague légère : c&apos;est
              toujours le bon moment.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-12 sm:px-10">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">
            Ton du message
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
              Doux &amp; attentionné
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
              Drôle &amp; léger
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
              Romantique &amp; sincère
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
