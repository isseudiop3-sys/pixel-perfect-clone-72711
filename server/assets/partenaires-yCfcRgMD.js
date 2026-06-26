import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
import "@tanstack/react-router";
const banner = "/assets/partners-banner-ins-2ctK.jpg";
const r1 = "/assets/partner-strategic-DTTig_xi.jpg";
const r2 = "/assets/partner-impact-lWEKzrWB.jpg";
const r3 = "/assets/partner-network-CgPB7Czg.jpg";
const REASONS = [{
  n: "Raison 1",
  img: r1,
  title: "Opportunité stratégique d'un marché en pleine expansion",
  text: "Investir dans le CICOIDAF, c'est choisir de se positionner au cœur d'un carrefour d'innovation unique dédié à la croissance du continent africain. Notre plateforme rassemble l'élite des décideurs, des chercheurs et des entrepreneurs qui façonnent les marchés de demain. En devenant partenaire, vous bénéficiez d'une visibilité de premier plan auprès d'une audience qualifiée et d'un accès exclusif à des projets à fort potentiel de rendement. Le Cercle ne se contente pas d'organiser des rencontres ; il structure des opportunités d'affaires concrètes et durables."
}, {
  n: "Raison 2",
  img: r2,
  title: "Levier d'impact social et de responsabilité (RSE)",
  text: "Le soutien au CICOIDAF représente un levier puissant pour affirmer votre engagement envers un développement inclusif et responsable. En finançant nos initiatives, vous participez directement à l'éclosion de solutions locales pour des défis mondiaux : santé, éducation, ingénierie durable. Nous offrons une traçabilité claire de l'impact de vos contributions, transformant chaque don en avancée tangible pour les communautés africaines."
}, {
  n: "Raison 3",
  img: r3,
  title: "Plateforme de réseautage et d'innovation sans frontières",
  text: "Le CICOIDAF est bien plus qu'un cycle de conférences : c'est un incubateur de partenariats internationaux où se scellent les alliances de demain. Nos événements 2026-2028 seront le théâtre de signatures de protocoles d'accord et de lancements de projets d'envergure. Investir ici, c'est garantir à votre structure une longueur d'avance sur la concurrence en captant les tendances émergentes dès leur genèse."
}];
function PartenairesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageBanner, { title: "Partenaires", subtitle: "Trois raisons concrètes de rejoindre l'aventure CICOIDAF.", image: banner }),
    /* @__PURE__ */ jsxs("section", { className: "py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-x text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Confiance & Engagement" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Pourquoi nos partenaires nous font confiance" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-20", children: REASONS.map((r, i) => /* @__PURE__ */ jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxs("div", { className: `grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`, children: [
        /* @__PURE__ */ jsx("img", { src: r.img, alt: "", className: "rounded-xl shadow-2xl w-full aspect-video object-cover", loading: "lazy" }),
        /* @__PURE__ */ jsxs("div", { className: i % 2 === 1 ? "lg:[direction:ltr]" : "", children: [
          /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: r.n }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl font-bold mt-2 mb-4", children: r.title }),
          /* @__PURE__ */ jsx("p", { className: "text-ink/80 leading-relaxed", children: r.text })
        ] })
      ] }) }, r.n)) })
    ] }),
    /* @__PURE__ */ jsx(FinalCta, { buttonLabel: "Devenir partenaire", buttonTo: "/contacts" })
  ] });
}
export {
  PartenairesPage as component
};
