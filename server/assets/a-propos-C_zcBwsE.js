import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Bell, Network, Headphones, GraduationCap, HeartHandshake } from "lucide-react";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
import { n as networking } from "./photo-networking-BOBKGaHi.js";
import "@tanstack/react-router";
const side = "/assets/photo-networking-event-C4xdgUjR.jpg";
const SplitComponent = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(PageBanner, { title: "À propos", subtitle: "« Plus vous apprenez, plus vous découvrirez d'endroits. » — Dr. Seuss", image: networking }),
  /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-ink/80 leading-relaxed", children: [
      /* @__PURE__ */ jsx("p", { children: "La plateforme CICOIDAF est l'outil de référence dédié à la communauté des administrations francophones. Conçue pour optimiser la gestion de vos contributions scientifiques, elle simplifie chaque étape de votre participation à nos rencontres internationales. De la coordination logistique à la soumission fluidifiée d'articles, notre portail offre une solution intégrée garantissant le succès des organisateurs comme des intervenants." }),
      /* @__PURE__ */ jsx("p", { children: "Planifiez vos soumissions et participez aux conférences du CICOIDAF en toute simplicité. Notre nouveau portail en ligne a été pensé pour vous offrir une expérience utilisateur fluide : participez à nos conférences en quelques clics et suivez l'organisation de nos événements en temps réel." }),
      /* @__PURE__ */ jsx("p", { children: "Simplifiez votre parcours au sein du CICOIDAF. Notre portail numérique accompagne les acteurs de l'administration francophone dans la planification de leurs soumissions et l'organisation de leurs grands événements annuels." })
    ] }),
    /* @__PURE__ */ jsx("img", { src: side, alt: "", className: "rounded-xl shadow-xl w-full", loading: "lazy" })
  ] }) }),
  /* @__PURE__ */ jsx("section", { className: "bg-surface py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
      /* @__PURE__ */ jsx(Bell, { className: "text-primary mb-3" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold mb-3", children: "Pourquoi choisir le Portail CICOIDAF ?" }),
      /* @__PURE__ */ jsxs("p", { className: "text-ink/80 leading-relaxed", children: [
        "Rejoindre le CICOIDAF, c'est intégrer un écosystème dynamique dédié à l'émergence du continent africain. Nous vous offrons un accès privilégié aux conférences internationales les plus stratégiques en 2026, couvrant les piliers du développement : ",
        /* @__PURE__ */ jsx("strong", { children: "santé" }),
        ", ",
        /* @__PURE__ */ jsx("strong", { children: "finance solidaire" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "entrepreneuriat" }),
        ", ",
        /* @__PURE__ */ jsx("strong", { children: "infrastructures" }),
        " et ",
        /* @__PURE__ */ jsx("strong", { children: "éducation" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-ink/80 leading-relaxed mt-3", children: [
        "Notre base de données est actualisée en temps réel pour vous garantir une place au cœur de l'action. En vous abonnant à nos ",
        /* @__PURE__ */ jsx("strong", { children: "Alertes Initiatives" }),
        ", vous recevez instantanément les dates clés, les lieux de rencontre et le profil des leaders d'opinion qui façonnent l'Afrique de demain."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
      /* @__PURE__ */ jsx(Network, { className: "text-primary mb-3" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold mb-3", children: "Boostez votre impact et votre réseau" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink/80 leading-relaxed", children: "Participer aux conférences du CICOIDAF, c'est l'opportunité unique d'interagir avec des experts mondiaux, des décideurs et des porteurs de projets innovants. Que vous soyez universitaire, chercheur, doctorant ou acteur de terrain, notre communauté vous ouvre les portes d'un réseautage solidaire et performant." })
    ] })
  ] }) }),
  /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Accompagnement sur mesure" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Notre engagement à vos côtés" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
      I: Headphones,
      t: "Assistance 24h/24, 7j/7",
      d: "Notre équipe dédiée est à votre entière disposition pour vos démarches d'inscription et de soumission."
    }, {
      I: GraduationCap,
      t: "Tutoriels & guides",
      d: "Profitez de nos ressources exclusives pour naviguer sur le portail et optimiser vos articles."
    }, {
      I: HeartHandshake,
      t: "Soutien personnalisé",
      d: "Nos experts vous offrent un conseil sur mesure pour maximiser la visibilité de vos travaux."
    }].map(({
      I,
      t,
      d
    }) => /* @__PURE__ */ jsxs("div", { className: "card-soft border-t-4 border-t-primary", children: [
      /* @__PURE__ */ jsx(I, { size: 28, className: "text-primary mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: t }),
      /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm leading-relaxed", children: d })
    ] }, t)) })
  ] }) }),
  /* @__PURE__ */ jsx(FinalCta, { buttonLabel: "Découvrir les conférences", buttonTo: "/conferences" })
] });
export {
  SplitComponent as component
};
