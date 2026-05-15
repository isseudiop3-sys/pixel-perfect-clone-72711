import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, CheckCircle2, Upload, AlertCircle, Lock } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import banner from "@/assets/inscription-hero.jpg";

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
  "Importez vos documents",
  "Domaines d'intérêt",
  "Engagement & Networking",
];

const EVENTS = [
  "CICOIDAF — 14-28 Nov 2026",
  "RÉUSSITE D'AFRIQUE — 26-27 Nov 2026",
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
  "CICOIDAF — 17-25 Nov 2027",
  "RÉUSSITE D'AFRIQUE — 26-28 Nov 2027",
  "FESPASOL — 20-31 Déc 2027",
  "DANCE PEOPLE MUSIC — 30-31 Déc 2027",
];

const MAX_EVENTS = 2;
const CONTRIB_OPTIONS = ["Auditeur libre", "Auteur", "Exposant", "Panéliste"];
const CAN_UPLOAD = new Set(["Auteur", "Panéliste"]);

const STEP_TITLES = [
  "Informations personnelles",
  "Événement(s)",
  "Profil",
  "Contribution (seuls les auteurs et panélistes peuvent importer leurs documents)",
  "Importez vos documents",
  "Domaines d'intérêt",
  "Engagement & Networking",
];

function InscriptionPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [cvName, setCvName] = useState<string>("");
  const [contrib, setContrib] = useState<string>("");

  const canUpload = CAN_UPLOAD.has(contrib);

  const toggleEvent = (e: string) => {
    setSelected((prev) => {
      if (prev.includes(e)) return prev.filter((x) => x !== e);
      if (prev.length >= MAX_EVENTS) return prev;
      return [...prev, e];
    });
  };

  if (done) {
    return (
      <>
        <PageBanner title="Inscription confirmée" image={banner} />
        <section className="py-24">
          <div className="container-x max-w-2xl text-center">
            <CheckCircle2 className="text-primary mx-auto mb-6" size={64} />
            <h2 className="font-display text-3xl font-bold mb-3">Merci pour votre inscription !</h2>
            <p className="text-ink/75 text-lg">
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

      <section className="py-16 text-[1.05rem]">
        <div className="container-x max-w-4xl">
          <ol className="flex flex-wrap gap-2 mb-10 justify-center">
            {STEPS.map((s, i) => (
              <li key={s} className={`flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-full border ${
                i === step ? "bg-primary text-white border-primary"
                  : i < step ? "bg-accent text-primary border-accent"
                  : "bg-white text-ink/70 border-border"
              }`}>
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-white/30">
                  {i < step ? <Check size={12} /> : i + 1}
                </span>
                <span className="hidden md:inline">{s}</span>
              </li>
            ))}
          </ol>

          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="card-soft space-y-7"
          >
            <h2 className="font-display text-2xl md:text-3xl font-extrabold leading-snug">
              {step + 1}. {STEP_TITLES[step]}
            </h2>

            {step === 0 && (
              <div className="grid md:grid-cols-2 gap-5">
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
                <div className="flex items-start gap-2 p-4 mb-5 bg-accent text-primary-dark rounded-md text-base font-semibold">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <p>
                    <strong>Notez bien :</strong> veuillez cocher une ou deux cases selon l'événement.
                    La personne n'a le droit que de cocher au maximum <strong>deux</strong> cases.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {EVENTS.map((e) => {
                    const checked = selected.includes(e);
                    const disabled = !checked && selected.length >= MAX_EVENTS;
                    return (
                      <label
                        key={e}
                        className={`flex items-start gap-3 p-3 border rounded-md transition font-semibold ${
                          checked ? "border-primary bg-accent/30" : "border-border"
                        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-primary"}`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          disabled={disabled}
                          onChange={() => toggleEvent(e)}
                          className="mt-1 accent-primary"
                        />
                        <span className="text-sm md:text-base">{e}</span>
                      </label>
                    );
                  })}
                </div>
                <p className="mt-3 text-sm font-semibold text-ink/70">
                  {selected.length}/{MAX_EVENTS} événement(s) sélectionné(s).
                </p>
              </div>
            )}

            {step === 2 && (
              <RadioGroup name="profil" options={["Chercheur", "Entrepreneur", "ONG", "Décideur", "Étudiant", "Autre"]} />
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-base font-semibold text-ink/80">
                  Sélectionnez votre type de contribution. <em>Seuls les auteurs et panélistes pourront importer leurs documents à l'étape suivante.</em>
                </p>
                <RadioGroup
                  name="contrib"
                  options={CONTRIB_OPTIONS}
                  value={contrib}
                  onChange={setContrib}
                />
              </div>
            )}

            {step === 4 && (
              <div className="space-y-5">
                <div className="flex items-start gap-2 p-4 bg-accent text-primary-dark rounded-md text-base font-semibold">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <p>
                    <strong>Notez bien :</strong> seuls les <strong>auteurs</strong> et <strong>panélistes</strong> ont la possibilité d'importer leurs documents.
                    Si vous avez sélectionné une autre option à l'étape 4, vous ne pourrez pas importer de document.
                  </p>
                </div>

                {!canUpload ? (
                  <div className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-border rounded-md p-10 text-center">
                    <Lock size={32} className="text-ink/40" />
                    <p className="text-base font-semibold text-ink/70">
                      Import de documents non disponible pour votre profil de contribution.
                    </p>
                    <p className="text-sm text-ink/60">
                      Vous pouvez passer à l'étape suivante.
                    </p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-base font-semibold mb-2">Titre de votre initiative ou article *</label>
                      <input
                        required
                        placeholder="Ex : Initiative pour l'éducation numérique en Afrique de l'Ouest"
                        className="w-full px-4 py-3.5 rounded-md border border-input bg-white text-base font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold mb-2">Déposer votre CV (PDF) *</label>
                      <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-md p-8 cursor-pointer hover:border-primary transition">
                        <Upload size={28} className="text-primary" />
                        <span className="text-base font-semibold">
                          {cvName ? cvName : "Cliquez pour sélectionner un fichier PDF"}
                        </span>
                        <span className="text-sm text-ink/60">PDF uniquement — 10 Mo max</span>
                        <input
                          type="file"
                          accept="application/pdf"
                          className="hidden"
                          onChange={(e) => setCvName(e.target.files?.[0]?.name ?? "")}
                          required
                        />
                      </label>
                    </div>
                  </>
                )}
              </div>
            )}

            {step === 5 && (
              <CheckGroup options={[
                "Éducation et Formation de la jeunesse",
                "Santé et Bien-être social",
                "Technologies et Infrastructures durables",
                "Économie circulaire et Entrepreneuriat",
                "Agriculture et Sécurité alimentaire",
                "Culture, Arts et Patrimoine",
                "Diplomatie et Coopération internationale",
                "Environnement et Climat",
              ]} />
            )}

            {step === 6 && (
              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 border border-border rounded-md cursor-pointer text-base font-semibold">
                  <input type="checkbox" defaultChecked className="mt-1 accent-primary" />
                  <span>Je souhaite que mon profil soit visible par les autres participants pour favoriser le réseautage.</span>
                </label>
                <label className="flex items-start gap-3 p-4 border border-border rounded-md cursor-pointer text-base font-semibold">
                  <input type="checkbox" defaultChecked className="mt-1 accent-primary" />
                  <span>Je m'abonne à la Newsletter du CICOIDAF pour recevoir les alertes sur les prochaines conférences.</span>
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
      <label className="block text-base font-semibold mb-2">{label}{required && " *"}</label>
      <input type={type} required={required}
        className="w-full px-4 py-3.5 rounded-md border border-input bg-white text-base font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
    </div>
  );
}

function RadioGroup({ name, options, value, onChange }: { name: string; options: string[]; value?: string; onChange?: (v: string) => void }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {options.map((o) => (
        <label key={o} className={`flex items-center gap-3 p-4 border rounded-md cursor-pointer transition text-base font-semibold ${
          value === o ? "border-primary bg-accent/30" : "border-border hover:border-primary"
        }`}>
          <input
            type="radio"
            name={name}
            className="accent-primary"
            checked={value !== undefined ? value === o : undefined}
            onChange={onChange ? () => onChange(o) : undefined}
          />
          <span>{o}</span>
        </label>
      ))}
    </div>
  );
}

function CheckGroup({ options }: { options: string[] }) {
  return (
    <div className="grid gap-3">
      {options.map((o) => (
        <label key={o} className="flex items-center gap-3 p-4 border border-border rounded-md cursor-pointer hover:border-primary transition text-base font-semibold">
          <input type="checkbox" className="accent-primary" />
          <span>{o}</span>
        </label>
      ))}
    </div>
  );
}
