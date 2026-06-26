import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { MapPin, Calendar } from "lucide-react";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
const banner = "/assets/photo-auditorium-2-CA_HMdHb.jpg";
const PERIODS = [{
  n: "01",
  month: "Novembre 2026",
  countries: "FRANCE",
  events: [{
    name: "CICOIDAF",
    date: "14-28 Novembre 2026",
    price: "250 €",
    slug: "cicoidaf-2026-11"
  }, {
    name: "RACOIDAF",
    date: "26-27 Novembre 2026",
    price: "310 €",
    slug: "racoidaf-2026-11"
  }]
}, {
  n: "02",
  month: "Décembre 2026",
  countries: "FRANCE, CÔTE D'IVOIRE, CAMEROUN, SÉNÉGAL",
  events: [{
    name: "FESPASOL",
    date: "21-26 Décembre 2026",
    price: "25 €",
    slug: "fespasol-2026-12"
  }, {
    name: "DANCE PEOPLE MUSIC",
    date: "27-31 Décembre 2026",
    price: "5,5 €",
    slug: "dpm-2026-12"
  }]
}, {
  n: "03",
  month: "Février 2027",
  countries: "CAMEROUN, CÔTE D'IVOIRE",
  events: [{
    name: "COIDAF FORUM",
    date: "10-13 Février 2027",
    price: "450 €",
    slug: "forum-2027-02"
  }, {
    name: "RÉUSSITE D'AFRIQUE",
    date: "25-27 Février 2027",
    price: "310 €",
    slug: "reussite-2027-02"
  }]
}, {
  n: "04",
  month: "Mars 2027",
  countries: "CAMEROUN, CÔTE D'IVOIRE, CANADA",
  events: [{
    name: "FESPASOL",
    date: "12-13 Mars 2027",
    price: "25 €",
    slug: "fespasol-2027-03"
  }, {
    name: "CICOIDAF",
    date: "24-27 Mars 2027",
    price: "250 €",
    slug: "cicoidaf-2027-03"
  }]
}, {
  n: "05",
  month: "Juin 2027",
  countries: "CÔTE D'IVOIRE, SÉNÉGAL, FRANCE",
  events: [{
    name: "RACOIDAF",
    date: "21-26 Juin 2027",
    price: "60 €",
    slug: "racoidaf-2027-06"
  }, {
    name: "DANCE PEOPLE MUSIC",
    date: "27-30 Juin 2027",
    price: "5,5 €",
    slug: "dpm-2027-06"
  }]
}, {
  n: "06",
  month: "Août 2027",
  countries: "CAMEROUN, CÔTE D'IVOIRE, SÉNÉGAL",
  events: [{
    name: "FESPASOL",
    date: "16-21 Août 2027",
    price: "25 €",
    slug: "fespasol-2027-08"
  }, {
    name: "DANCE PEOPLE MUSIC",
    date: "27-28 Août 2027",
    price: "105,5 €",
    slug: "dpm-2027-08"
  }]
}, {
  n: "07",
  month: "Novembre 2027",
  countries: "CANADA, TOGO",
  events: [{
    name: "CICOIDAF",
    date: "17-25 Novembre 2027",
    price: "250 €",
    slug: "cicoidaf-2027-11"
  }, {
    name: "RÉUSSITE D'AFRIQUE",
    date: "26-28 Novembre 2027",
    price: "310 €",
    slug: "reussite-2027-11"
  }]
}, {
  n: "08",
  month: "Décembre 2027",
  countries: "BURKINA FASO, CAMEROUN, MAROC",
  events: [{
    name: "FESPASOL",
    date: "20-31 Décembre 2027",
    price: "25 €",
    slug: "fespasol-2027-12"
  }, {
    name: "DANCE PEOPLE MUSIC",
    date: "30-31 Décembre 2027",
    price: "5,5 €",
    slug: "dpm-2027-12"
  }]
}];
function CalendriersPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageBanner, { title: "Calendriers", subtitle: "Tous les rendez-vous du Cercle des Œuvres pour les Initiatives de Développement Africain.", image: banner }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Nos rendez-vous" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Calendrier de nos événements" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: PERIODS.map((p) => /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold", children: p.n }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold", children: p.month }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink/60 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 12 }),
              " ",
              p.countries
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 mt-4", children: p.events.map((ev) => /* @__PURE__ */ jsxs("li", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border pt-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: ev.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink/60 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { size: 12 }),
              " ",
              ev.date
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold text-primary mt-1", children: [
              "Frais de participation : ",
              ev.price
            ] })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/inscription", search: {
            event: ev.slug
          }, className: "btn-primary text-xs px-4 py-2", children: "S'inscrire" })
        ] }, ev.slug)) })
      ] }, p.n)) })
    ] }) }),
    /* @__PURE__ */ jsx(FinalCta, {})
  ] });
}
export {
  CalendriersPage as component
};
