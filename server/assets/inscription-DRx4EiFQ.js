import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { CheckCircle2, Check, AlertCircle, Lock, Upload, ChevronLeft, ChevronRight } from "lucide-react";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
const banner = "/assets/inscription-hero-DDW03sQc.jpg";
const STEPS = ["Informations personnelles", "Événement(s)", "Profil", "Contribution", "Importez vos documents", "Domaines d'intérêt", "Engagement & Networking"];
const EVENTS = ["CICOIDAF — 14-28 Nov 2026", "RÉUSSITE D'AFRIQUE — 26-27 Nov 2026", "FESPASOL — 21-26 Déc 2026", "DANCE PEOPLE MUSIC — 27-31 Déc 2026", "COIDAF FORUM — 10-13 Fév 2027", "RÉUSSITE D'AFRIQUE — 25-27 Fév 2027", "FESPASOL — 12-13 Mars 2027", "CICOIDAF — 24-27 Mars 2027", "RACOIDAF — 21-26 Juin 2027", "DANCE PEOPLE MUSIC — 27-30 Juin 2027", "FESPASOL — 16-21 Août 2027", "DANCE PEOPLE MUSIC — 27-28 Août 2027", "CICOIDAF — 17-25 Nov 2027", "RÉUSSITE D'AFRIQUE — 26-28 Nov 2027", "FESPASOL — 20-31 Déc 2027", "DANCE PEOPLE MUSIC — 30-31 Déc 2027"];
const MAX_EVENTS = 2;
const CONTRIB_OPTIONS = ["Auditeur libre", "Auteur", "Exposant", "Panéliste"];
const CAN_UPLOAD = /* @__PURE__ */ new Set(["Auteur", "Panéliste"]);
const STEP_TITLES = ["Informations personnelles", "Événement(s)", "Profil", "Contribution (seuls les auteurs et panélistes peuvent importer leurs documents)", "Importez vos documents", "Domaines d'intérêt", "Engagement & Networking"];
function InscriptionPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState([]);
  const [cvName, setCvName] = useState("");
  const [contrib, setContrib] = useState("");
  const canUpload = CAN_UPLOAD.has(contrib);
  const toggleEvent = (e) => {
    setSelected((prev) => {
      if (prev.includes(e)) return prev.filter((x) => x !== e);
      if (prev.length >= MAX_EVENTS) return prev;
      return [...prev, e];
    });
  };
  if (done) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(PageBanner, { title: "Inscription confirmée", image: banner }),
      /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "text-primary mx-auto mb-6", size: 64 }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-bold mb-3", children: "Merci pour votre inscription !" }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-lg", children: "Un email de confirmation vous sera envoyé sous peu. À très bientôt sur les conférences du CICOIDAF." })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageBanner, { title: "S'inscrire", subtitle: "Formulaire d'inscription en 7 étapes", image: banner }),
    /* @__PURE__ */ jsx("section", { className: "py-16 text-[1.05rem]", children: /* @__PURE__ */ jsxs("div", { className: "container-x max-w-4xl", children: [
      /* @__PURE__ */ jsx("ol", { className: "flex flex-wrap gap-2 mb-10 justify-center", children: STEPS.map((s, i) => /* @__PURE__ */ jsxs("li", { className: `flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-full border ${i === step ? "bg-primary text-white border-primary" : i < step ? "bg-accent text-primary border-accent" : "bg-white text-ink/70 border-border"}`, children: [
        /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-white/30", children: i < step ? /* @__PURE__ */ jsx(Check, { size: 12 }) : i + 1 }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: s })
      ] }, s)) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setDone(true);
      }, className: "card-soft space-y-7", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-extrabold leading-snug", children: [
          step + 1,
          ". ",
          STEP_TITLES[step]
        ] }),
        step === 0 && /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(Input, { label: "Prénom", required: true }),
          /* @__PURE__ */ jsx(Input, { label: "Nom", required: true }),
          /* @__PURE__ */ jsx(Input, { label: "Email personnel", type: "email", required: true }),
          /* @__PURE__ */ jsx(Input, { label: "Téléphone (avec indicatif pays)", required: true }),
          /* @__PURE__ */ jsx(Input, { label: "Pays de résidence", required: true }),
          /* @__PURE__ */ jsx(Input, { label: "Organisation" }),
          /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx(Input, { label: "Fonction" }) })
        ] }),
        step === 1 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-4 mb-5 bg-accent text-primary-dark rounded-md text-base font-semibold", children: [
            /* @__PURE__ */ jsx(AlertCircle, { size: 20, className: "shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Notez bien :" }),
              " veuillez cocher une ou deux cases selon l'événement. La personne n'a le droit que de cocher au maximum ",
              /* @__PURE__ */ jsx("strong", { children: "deux" }),
              " cases."
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: EVENTS.map((e) => {
            const checked = selected.includes(e);
            const disabled = !checked && selected.length >= MAX_EVENTS;
            return /* @__PURE__ */ jsxs("label", { className: `flex items-start gap-3 p-3 border rounded-md transition font-semibold ${checked ? "border-primary bg-accent/30" : "border-border"} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-primary"}`, children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked, disabled, onChange: () => toggleEvent(e), className: "mt-1 accent-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm md:text-base", children: e })
            ] }, e);
          }) }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm font-semibold text-ink/70", children: [
            selected.length,
            "/",
            MAX_EVENTS,
            " événement(s) sélectionné(s)."
          ] })
        ] }),
        step === 2 && /* @__PURE__ */ jsx(RadioGroup, { name: "profil", options: ["Chercheur", "Entrepreneur", "ONG", "Décideur", "Étudiant", "Autre"] }),
        step === 3 && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base font-semibold text-ink/80", children: [
            "Sélectionnez votre type de contribution. ",
            /* @__PURE__ */ jsx("em", { children: "Seuls les auteurs et panélistes pourront importer leurs documents à l'étape suivante." })
          ] }),
          /* @__PURE__ */ jsx(RadioGroup, { name: "contrib", options: CONTRIB_OPTIONS, value: contrib, onChange: setContrib })
        ] }),
        step === 4 && /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-4 bg-accent text-primary-dark rounded-md text-base font-semibold", children: [
            /* @__PURE__ */ jsx(AlertCircle, { size: 20, className: "shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Notez bien :" }),
              " seuls les ",
              /* @__PURE__ */ jsx("strong", { children: "auteurs" }),
              " et ",
              /* @__PURE__ */ jsx("strong", { children: "panélistes" }),
              " ont la possibilité d'importer leurs documents. Si vous avez sélectionné une autre option à l'étape 4, vous ne pourrez pas importer de document."
            ] })
          ] }),
          !canUpload ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-3 border-2 border-dashed border-border rounded-md p-10 text-center", children: [
            /* @__PURE__ */ jsx(Lock, { size: 32, className: "text-ink/40" }),
            /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-ink/70", children: "Import de documents non disponible pour votre profil de contribution." }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-ink/60", children: "Vous pouvez passer à l'étape suivante." })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-base font-semibold mb-2", children: "Titre de votre initiative ou article *" }),
              /* @__PURE__ */ jsx("input", { required: true, placeholder: "Ex : Initiative pour l'éducation numérique en Afrique de l'Ouest", className: "w-full px-4 py-3.5 rounded-md border border-input bg-white text-base font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-base font-semibold mb-2", children: "Déposer votre CV (PDF) *" }),
              /* @__PURE__ */ jsxs("label", { className: "flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-md p-8 cursor-pointer hover:border-primary transition", children: [
                /* @__PURE__ */ jsx(Upload, { size: 28, className: "text-primary" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-semibold", children: cvName ? cvName : "Cliquez pour sélectionner un fichier PDF" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-ink/60", children: "PDF uniquement — 10 Mo max" }),
                /* @__PURE__ */ jsx("input", { type: "file", accept: "application/pdf", className: "hidden", onChange: (e) => setCvName(e.target.files?.[0]?.name ?? ""), required: true })
              ] })
            ] })
          ] })
        ] }),
        step === 5 && /* @__PURE__ */ jsx(CheckGroup, { options: ["Éducation et Formation de la jeunesse", "Santé et Bien-être social", "Technologies et Infrastructures durables", "Économie circulaire et Entrepreneuriat", "Agriculture et Sécurité alimentaire", "Culture, Arts et Patrimoine", "Diplomatie et Coopération internationale", "Environnement et Climat"] }),
        step === 6 && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 p-4 border border-border rounded-md cursor-pointer text-base font-semibold", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", defaultChecked: true, className: "mt-1 accent-primary" }),
            /* @__PURE__ */ jsx("span", { children: "Je souhaite que mon profil soit visible par les autres participants pour favoriser le réseautage." })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 p-4 border border-border rounded-md cursor-pointer text-base font-semibold", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", defaultChecked: true, className: "mt-1 accent-primary" }),
            /* @__PURE__ */ jsx("span", { children: "Je m'abonne à la Newsletter du CICOIDAF pour recevoir les alertes sur les prochaines conférences." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-6 border-t border-border", children: [
          /* @__PURE__ */ jsxs("button", { type: "button", disabled: step === 0, onClick: () => setStep((s) => Math.max(0, s - 1)), className: "btn-outline disabled:opacity-40 disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(ChevronLeft, { size: 16 }),
            " Précédent"
          ] }),
          step < STEPS.length - 1 ? /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setStep((s) => Math.min(STEPS.length - 1, s + 1)), className: "btn-primary", children: [
            "Suivant ",
            /* @__PURE__ */ jsx(ChevronRight, { size: 16, className: "ml-1" })
          ] }) : /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-primary", children: "Valider mon inscription" })
        ] })
      ] })
    ] }) })
  ] });
}
function Input({
  label,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { className: "block text-base font-semibold mb-2", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsx("input", { type, required, className: "w-full px-4 py-3.5 rounded-md border border-input bg-white text-base font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" })
  ] });
}
function RadioGroup({
  name,
  options,
  value,
  onChange
}) {
  const controlled = value !== void 0 && onChange !== void 0;
  return /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: options.map((o) => /* @__PURE__ */ jsxs("label", { className: `flex items-center gap-3 p-4 border rounded-md cursor-pointer transition text-base font-semibold ${controlled && value === o ? "border-primary bg-accent/30" : "border-border hover:border-primary"}`, children: [
    controlled ? /* @__PURE__ */ jsx("input", { type: "radio", name, className: "accent-primary", checked: value === o, onChange: () => onChange(o) }) : /* @__PURE__ */ jsx("input", { type: "radio", name, className: "accent-primary" }),
    /* @__PURE__ */ jsx("span", { children: o })
  ] }, o)) });
}
function CheckGroup({
  options
}) {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: options.map((o) => /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-4 border border-border rounded-md cursor-pointer hover:border-primary transition text-base font-semibold", children: [
    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "accent-primary" }),
    /* @__PURE__ */ jsx("span", { children: o })
  ] }, o)) });
}
export {
  InscriptionPage as component
};
