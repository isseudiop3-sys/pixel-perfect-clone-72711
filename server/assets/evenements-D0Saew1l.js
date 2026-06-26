import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
const banner = "/assets/photo-conference-D0oXzuM3.jpg";
const logoCicoidaf = "/assets/logo-cicoidaf-event-Ptk4Apx_.jpg";
const logoFespasol = "/assets/logo-fespasol-CniIAh9h.jpg";
const logoDpm = "/assets/logo-dpm-CqCMZidn.jpg";
const logoReussite = "/assets/logo-reussite-DsNbLNl7.jpg";
const logoForum = "/assets/logo-coidaf-forum-CuRhMwmS.jpg";
const logoRacoidaf = "/assets/logo-racoidaf-mZvOHitX.jpg";
const EVENTS = [{
  slug: "cicoidaf",
  logo: logoCicoidaf,
  title: "CICOIDAF",
  sub: "Conférence Internationale",
  desc: "Conférence Internationale Continue pour l'Identité et le Développement Africain.",
  dates: ["14-28 Novembre 2026", "24-27 Mars 2027"]
}, {
  slug: "fespasol",
  logo: logoFespasol,
  title: "FESPASOL",
  sub: "Festival du Panier Solidaire",
  desc: "Économie sociale et solidaire au service des communautés.",
  dates: ["21-26 Décembre 2026", "12-13 Mars 2027", "16-21 Août 2027"]
}, {
  slug: "dpm",
  logo: logoDpm,
  title: "DANCE PEOPLE MUSIC",
  sub: "Actu Jeune International",
  desc: "Célébration culturelle de la jeunesse africaine.",
  dates: ["27-31 Décembre 2026", "27-30 Juin 2027", "27-28 Août 2027"]
}, {
  slug: "reussite-afrique",
  logo: logoReussite,
  title: "RÉUSSITE D'AFRIQUE",
  sub: "L'interview des icônes",
  desc: "Actu Jeune International — la voix des leaders africains.",
  dates: ["25-27 Février 2027"]
}, {
  slug: "coidaf-forum",
  logo: logoForum,
  title: "COIDAF FORUM",
  sub: "La Grande Rencontre des Investisseurs",
  desc: "Sommet des investisseurs et porteurs de projets africains.",
  dates: ["10-13 Février 2027"]
}, {
  slug: "racoidaf",
  logo: logoRacoidaf,
  title: "RACOIDAF",
  sub: "Rencontre Africaine des Collaborateurs",
  desc: "Du Cercle des Œuvres pour les Initiatives de Développement Africain.",
  dates: ["26-27 Novembre 2026", "21-26 Juin 2027"]
}];
function EvenementsPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageBanner, { title: "Nos événements", subtitle: "Mensuel, Trimestriel, Semestriel et Annuel — cliquez sur l'événement auquel vous souhaitez participer.", image: banner }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container-x grid md:grid-cols-2 gap-8", children: EVENTS.map((e) => /* @__PURE__ */ jsxs("article", { className: "card-soft flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-surface rounded-lg h-40 flex items-center justify-center mb-5 p-4", children: /* @__PURE__ */ jsx("img", { src: e.logo, alt: e.title, className: "max-h-full max-w-full object-contain", loading: "lazy" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-primary", children: e.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-ink/60 mb-2", children: e.sub }),
      /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm leading-relaxed mb-5 flex-1", children: e.desc }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: e.dates.map((d) => /* @__PURE__ */ jsxs(Link, { to: "/inscription", search: {
        event: `${e.slug}-${d}`
      }, className: "btn-outline text-xs px-3 py-2", children: [
        d,
        " — Inscrivez-vous"
      ] }, d)) })
    ] }, e.slug)) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "À découvrir en vidéo" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Nos événements en images" }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/70 mt-3 max-w-2xl mx-auto", children: "Plongez dans l'ambiance de nos rencontres internationales à travers une sélection de moments forts." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: ["_aXA1jRXWnk", "wNULQ75pGjE", "_HhbxSL3Swc", "A5PuNPjogC8", "diWNp9Fb5TU"].map((id) => /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-xl overflow-hidden shadow-xl bg-black", children: /* @__PURE__ */ jsx("iframe", { className: "w-full h-full", src: `https://www.youtube.com/embed/${id}`, title: `CICOIDAF vidéo ${id}`, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }, id)) })
    ] }) }),
    /* @__PURE__ */ jsx(FinalCta, { buttonLabel: "Voir le calendrier complet", buttonTo: "/calendriers" })
  ] });
}
export {
  EvenementsPage as component
};
