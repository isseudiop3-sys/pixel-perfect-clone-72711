import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Lightbulb, ShieldCheck, Handshake, BellRing } from "lucide-react";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
import { b as banner } from "./photo-auditorium-CwDdhI6e.js";
import "@tanstack/react-router";
function ConferencesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageBanner, { title: "Nos conférences", subtitle: "Bienvenue sur le Portail CICOIDAF — Le moteur de vos initiatives pour l'Afrique.", image: banner }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x max-w-4xl", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-ink/80 leading-relaxed text-lg mb-8 text-center", children: [
        "Le CICOIDAF est votre sésame pour transformer vos idées en projets concrets. Au cœur du",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "Cercle des Œuvres pour les Initiatives de Développement Africain" }),
        ", notre plateforme vous connecte aux conférences internationales les plus influentes dédiées au progrès du continent. Que vous soyez expert, chercheur ou acteur de terrain, restez informé des rendez-vous stratégiques en Afrique et partout dans le monde."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx("iframe", { className: "w-full h-full", src: "https://www.youtube.com/embed/-INOP-DRj-s", title: "CICOIDAF conférences", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "4 raisons" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Pourquoi participer aux conférences du CICOIDAF ?" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [{
        I: Lightbulb,
        n: "01",
        t: "Des carrefours d'innovation",
        d: "Rejoindre nos événements en 2026, c'est s'attaquer aux véritables enjeux du développement. Nos conférences couvrent : Ingénierie et technologies durables ; Santé, sciences sociales et éducation ; Commerce, entrepreneuriat et actions humanitaires ; Sciences de la vie économique ; Projets multidisciplinaires et initiatives communautaires."
      }, {
        I: ShieldCheck,
        n: "02",
        t: "Une source fiable pour un impact réel",
        d: "En tant que leader dans l'organisation et le référencement d'événements de développement, le CICOIDAF s'engage à vous fournir des informations authentiques et vérifiées. Notre portail exhaustif vous permet de planifier vos soumissions, de suivre les séminaires et de participer à des webinaires de haut niveau."
      }, {
        I: Handshake,
        n: "03",
        t: "Pour les organisateurs et partenaires",
        d: "Collaborer avec le CICOIDAF, c'est garantir à vos événements une visibilité exclusive auprès d'un public ciblé, passionné par l'émergence africaine, assurant ainsi un rayonnement et un impact social optimal."
      }, {
        I: BellRing,
        n: "04",
        t: "Abonnez-vous dès aujourd'hui",
        d: "Ne manquez aucune opportunité de faire briller vos initiatives. Explorez les conférences dans votre domaine ou votre ville, développez votre réseau avec des leaders partageant vos valeurs et contribuez activement à la réussite collective."
      }].map(({
        I,
        n,
        t,
        d
      }) => /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "font-display text-3xl font-bold text-primary/30", children: n }),
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-accent text-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(I, { size: 22 }) })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: t }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm leading-relaxed", children: d })
      ] }, n)) })
    ] }) }),
    /* @__PURE__ */ jsx(FinalCta, { buttonLabel: "Voir les événements", buttonTo: "/evenements" })
  ] });
}
export {
  ConferencesPage as component
};
