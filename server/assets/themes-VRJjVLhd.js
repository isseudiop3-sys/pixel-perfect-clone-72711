import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Briefcase, HeartPulse, Landmark, GraduationCap, Cpu, TrendingUp, Users2, Building2 } from "lucide-react";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
import { b as banner } from "./photo-auditorium-CwDdhI6e.js";
import "@tanstack/react-router";
const SplitComponent = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(PageBanner, { title: "Thèmes", subtitle: "Huit thèmes structurent les travaux du CICOIDAF.", image: banner }),
  /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Nos grands axes" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Huit domaines, une ambition commune" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: [{
      I: Briefcase,
      t: "Entreprise",
      d: "Innovation entrepreneuriale et création de valeur"
    }, {
      I: HeartPulse,
      t: "Santé & Médical",
      d: "Solutions de santé publique et accès aux soins"
    }, {
      I: Landmark,
      t: "Banque & Économie",
      d: "Finance solidaire et inclusion financière"
    }, {
      I: GraduationCap,
      t: "Éducation & Culture",
      d: "Formation, savoir et patrimoine africain"
    }, {
      I: Cpu,
      t: "Ingénierie & Technologie",
      d: "Tech durable et infrastructures numériques"
    }, {
      I: TrendingUp,
      t: "Investissement & Partenariats",
      d: "Capitaux et alliances pour le continent"
    }, {
      I: Users2,
      t: "Sciences sociales & Humanitaire",
      d: "Recherche sociale et action solidaire"
    }, {
      I: Building2,
      t: "Développement & Infrastructures",
      d: "Urbanisme, transport et énergies"
    }].map(({
      I,
      t,
      d
    }) => /* @__PURE__ */ jsxs("div", { className: "card-soft text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 mx-auto rounded-full bg-accent text-primary flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(I, { size: 26 }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold mb-2", children: t }),
      /* @__PURE__ */ jsx("p", { className: "text-ink/70 text-sm leading-relaxed", children: d })
    ] }, t)) })
  ] }) }),
  /* @__PURE__ */ jsx(FinalCta, {})
] });
export {
  SplitComponent as component
};
