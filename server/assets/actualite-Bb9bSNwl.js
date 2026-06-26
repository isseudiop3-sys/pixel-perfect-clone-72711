import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Linkedin, Facebook, MessageCircle, Youtube, Music2, Instagram, Twitter, ExternalLink, Video } from "lucide-react";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
import "@tanstack/react-router";
const banner = "/assets/odd-banner-B4EmEoMs.jpg";
const SOCIALS = [{
  I: Linkedin,
  href: "https://www.linkedin.com/company/coidaf/",
  label: "LinkedIn"
}, {
  I: Facebook,
  href: "https://facebook.com/coidaf",
  label: "Facebook"
}, {
  I: MessageCircle,
  href: "https://wa.me/33766113647",
  label: "WhatsApp"
}, {
  I: Youtube,
  href: "https://youtube.com/@coidaf",
  label: "YouTube"
}, {
  I: Music2,
  href: "https://tiktok.com/@coidaf",
  label: "TikTok"
}, {
  I: Instagram,
  href: "https://instagram.com/coidaf",
  label: "Instagram"
}, {
  I: Twitter,
  href: "https://twitter.com/coidaf",
  label: "Twitter / X"
}];
const NEWS_LINKS = [{
  name: "Banque mondiale",
  url: "https://www.banquemondiale.org/ext/fr/news"
}, {
  name: "Nations Unies",
  url: "https://www.un.org/fr/events-and-news"
}, {
  name: "Union africaine",
  url: "https://au.int/fr/happening"
}, {
  name: "Union européenne",
  url: "https://european-union.europa.eu/news-and-events_en?prefLang=fr"
}, {
  name: "Organisation des États Américains",
  url: "https://www.oas.org/ext/fr/principal/oea/etats-membre/"
}, {
  name: "AES — Alliance des États du Sahel",
  url: "https://aes.ml/actualite/"
}, {
  name: "Banque africaine de développement",
  url: "https://www.afdb.org/fr/news-and-even"
}, {
  name: "CEDEAO",
  url: "https://www.ecowas.int/c/actualites/?lang=fr"
}, {
  name: "CEMAC",
  url: "https://cemac.int/news/"
}, {
  name: "COIDAF International",
  url: "https://coidafinternational.jimdofree.com/"
}];
function ActualitePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageBanner, { title: "Actualité", subtitle: "Actualité humanitaire, diplomatique et institutionnelle.", image: banner }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Suivez-nous" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title mt-3 mb-3", children: "Les réseaux sociaux du COIDAF" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink/70 max-w-xl mx-auto mb-8", children: "Restez connectés à toute l'actualité du Cercle des Œuvres pour les Initiatives de Développement Africain." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: SOCIALS.map(({
        I,
        href,
        label
      }) => /* @__PURE__ */ jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-md hover:border-primary hover:text-primary transition", children: [
        /* @__PURE__ */ jsx(I, { size: 18 }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: label })
      ] }, label)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Sources officielles" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Actualité humanitaire & diplomatique" }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/70 mt-3", children: "Suivez en direct l'actualité des grandes institutions internationales et régionales partenaires du développement africain." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: NEWS_LINKS.map((l) => /* @__PURE__ */ jsxs("a", { href: l.url, target: "_blank", rel: "noopener noreferrer", className: "card-soft flex items-center justify-between gap-3 group", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: l.name }),
        /* @__PURE__ */ jsx(ExternalLink, { size: 18, className: "text-primary group-hover:translate-x-1 transition" })
      ] }, l.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Rejoindre la conférence" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title mt-3 mb-6", children: "Conférence en ligne" }),
      /* @__PURE__ */ jsxs("a", { href: "https://meet.google.com/", target: "_blank", rel: "noopener noreferrer", className: "btn-primary", children: [
        /* @__PURE__ */ jsx(Video, { size: 18, className: "mr-2" }),
        " Rejoindre sur Google Meet"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(FinalCta, {})
  ] });
}
export {
  ActualitePage as component
};
