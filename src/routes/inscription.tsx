import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import banner from "@/assets/hero-conference.jpg";

export const Route = createFileRoute("/inscription")({
  head: () => ({
    meta: [
      { title: "S'inscrire — CICOIDAF" },
      { name: "description", content: "Inscrivez-vous aux conférences CICOIDAF en 7 étapes." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>) => ({ event: typeof s.event === "string" ? s.event : undefined }),
  component: InscriptionPage,
});

const STEPS = [
  "Informations personnelles",
  "Événement(s)",
  "Profil",
  "Contribution",
  "Domaines d'intérêt",
  "Informations complémentaires",
  "Engagement & Networking",
];

const EVENTS = [
  "CICOIDAF — 14-28 Nov 2026",
  "RACOIDAF — 26-27 Nov 2026",
  "FESPASOL — 21-26 Déc 2026",
  "DANCE PEOPLE MUSIC — 27-31 Déc 2026",
  "COIDAF FORUM — 10-13 Fév 2027",
  "RÉUSSITE D'AFRIQUE — 25-27 Fév 2027",
  "FESPASOL — 12-13 Mars 2027",
  "CICOIDAF — 24-27 Mars 2027",
  "RACOIDAF — 21-26 Juin 2027",
  "DANCE PEOPLE MUSIC — 27-30 Juin 2027",
  "FESPASOL — 16-21 Août 2027",
  "DANCE PEOPLE MUSIC — 27-28 Août 2027",
];

function InscriptionPage() {
  const { event } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <>
        <PageBanner title="Inscription confirmée" image={banner} />
        <section className="py-24">
          <div className="container-x max-w-2xl text-center">
            <CheckCircle2 className="text-primary mx-auto mb-6" size={64} />
            <h2 className="font-display text-3xl font-bold mb-3">Merci pour votre inscription !</h2>
            <p className="text-ink/75">
              Un email de confirmation vous sera envoyé sous peu. À très bientôt sur les conférences du CICOIDAF.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageBanner title="S'inscrire" subtitle="Formulaire d'inscription en 7 étapes" image={banner} />

      <section className="py-16">
        <div className="container-x max-w-4xl">
          {/* Stepper */}
          <ol className="flex flex-wrap gap-2 mb-10 justify-center">
            {STEPS.map((s, i) => (
              <li key={s} className={`flex items-center gap-2 text-xs px-3 py-2 rounded-full border ${
                i === step ? "bg-primary text-white border-primary"
                  : i < step ? "bg-accent text-primary border-accent"
                  : "bg-white text-ink/60 border-border"
              }`}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-white/30">
                  {i < step ? <Check size={12} /> : i + 1}
                </span>
                <span className="hidden md:inline">{s}</span>
              </li>
            ))}
          </ol>

          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="card-soft space-y-6"
          >
            <h2 className="font-display text-2xl font-bold">{step + 1}. {STEPS[step]}</h2>

            {step === 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Prénom" required />
                <Input label="Nom" required />
                <Input label="Email personnel" type="email" required />
                <Input label="Téléphone (avec indicatif pays)" required />
                <Input label="Pays de résidence" required />
                <Input label="Organisation" />
                <div className="md:col-span-2"><Input label="Fonction" /></div>
              </div>
            )}

            {step === 1 && (
              <div>
                <p className="text-sm text-ink/70 mb-4">Sélectionnez les dates auxquelles vous souhaitez participer :</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {EVENTS.map((e) => (
                    <label key={e} className="flex items-start gap-3 p-3 border border-border rounded-md hover:border-primary cursor-pointer transition">
                      <input type="checkbox" defaultChecked={event ? e.includes(event.split("-")[0].toUpperCase()) : false}
                        className="mt-1 accent-primary" />
                      <span className="text-sm">{e}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <RadioGroup name="profil" options={["Chercheur", "Entrepreneur", "ONG", "Décideur", "Étudiant", "Autre"]} />
            )}

            {step === 3 && (
              <RadioGroup name="contrib" options={["Auditeur libre", "Auteur", "Exposant", "Panéliste"]} />
            )}

            {step === 4 && (
              <CheckGroup options={[
                "Éducation et Formation de la jeunesse",
                "Santé et Bien-être social",
                "Technologies et Infrastructures durables",
                "Économie circulaire et Entrepreneuriat",
                "Agriculture et Sécurité alimentaire",
              ]} />
            )}

            {step === 5 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Comment avez-vous connu le CICOIDAF ?</label>
                  <select className="w-full px-4 py-3 rounded-md border border-input bg-white">
                    <option>Réseaux sociaux</option><option>Email / Newsletter</option>
                    <option>Bouche à oreille</option><option>Presse</option><option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Attentes / Commentaires</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-md border border-input bg-white" />
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-3">
                <label className="flex items-start gap-3 p-3 border border-border rounded-md cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-1 accent-primary" />
                  <span className="text-sm">Je souhaite que mon profil soit visible par les autres participants pour favoriser le réseautage.</span>
                </label>
                <label className="flex items-start gap-3 p-3 border border-border rounded-md cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-1 accent-primary" />
                  <span className="text-sm">Je m'abonne à la Newsletter du CICOIDAF pour recevoir les alertes sur les prochaines conférences.</span>
                </label>
              </div>
            )}

            <div className="flex justify-between pt-6 border-t border-border">
              <button
                type="button" disabled={step === 0}
                onClick={() => setStep(s => Math.max(0, s - 1))}
                className="btn-outline disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronLeft size={16} /> Précédent
              </button>
              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))}
                  className="btn-primary"
                >
                  Suivant <ChevronRight size={16} className="ml-1" />
                </button>
              ) : (
                <button type="submit" className="btn-primary">Valider mon inscription</button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Input({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}{required && " *"}</label>
      <input type={type} required={required}
        className="w-full px-4 py-3 rounded-md border border-input bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
    </div>
  );
}

function RadioGroup({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {options.map((o) => (
        <label key={o} className="flex items-center gap-3 p-3 border border-border rounded-md cursor-pointer hover:border-primary transition">
          <input type="radio" name={name} className="accent-primary" />
          <span className="text-sm">{o}</span>
        </label>
      ))}
    </div>
  );
}

function CheckGroup({ options }: { options: string[] }) {
  return (
    <div className="grid gap-3">
      {options.map((o) => (
        <label key={o} className="flex items-center gap-3 p-3 border border-border rounded-md cursor-pointer hover:border-primary transition">
          <input type="checkbox" className="accent-primary" />
          <span className="text-sm">{o}</span>
        </label>
      ))}
    </div>
  );
}
