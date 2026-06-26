import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Globe2, BookOpenCheck, Users, Headphones, GraduationCap, HeartHandshake } from "lucide-react";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
import { useState, useRef, useEffect } from "react";
import { n as networking } from "./photo-networking-BOBKGaHi.js";
function CountUp({ end, duration = 1800, prefix = "+", separator = " " }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.floor(eased * end));
            if (t < 1) requestAnimationFrame(animate);
            else setValue(end);
          };
          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.3 });
    io.observe(node);
    return () => io.disconnect();
  }, [end, duration]);
  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    prefix,
    formatted
  ] });
}
const hero = "/assets/hero-conference-d_auzhFl.jpg";
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: hero, alt: "Drapeaux internationaux", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-[rgba(139,0,0,0.7)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative container-x py-10 md:py-14 text-white text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display italic text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-3 max-w-3xl mx-auto", children: "« Plus vous apprenez, plus vous découvrirez d'endroits. »" }),
        /* @__PURE__ */ jsx("p", { className: "font-display text-base md:text-lg text-white/85 mb-6", children: "— Dr. Seuss" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto text-white", children: [
          "Bienvenue sur le Portail CICOIDAF —",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-[oklch(0.85_0.12_27)]", children: "le moteur de vos initiatives pour l'Afrique." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-base md:text-lg text-white/85 max-w-2xl mx-auto", children: "Cercle des Œuvres pour les Initiatives de Développement Africain." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/inscription", className: "btn-primary", children: "S'inscrire à la conférence" }),
          /* @__PURE__ */ jsx(Link, { to: "/conferences", className: "btn-ghost-light", children: "Découvrir nos conférences" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface py-16", children: /* @__PURE__ */ jsx("div", { className: "container-x grid grid-cols-1 md:grid-cols-3 gap-8 text-center", children: [{
      n: 32,
      l: "Pays représentés"
    }, {
      n: 3e3,
      l: "Participants"
    }, {
      n: 6e4,
      l: "Visiteurs"
    }].map((s) => /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-5xl font-bold text-primary", children: /* @__PURE__ */ jsx(CountUp, { end: s.n }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm uppercase tracking-widest text-ink/70", children: s.l })
    ] }, s.l)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-4xl md:text-5xl text-primary leading-tight", children: "Notre plateforme" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "L'outil de référence des administrations francophones" }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/80 leading-relaxed text-lg italic border-l-4 border-primary pl-5", children: "« La plateforme CICOIDAF est l'outil de référence dédié à la communauté des administrations francophones. Conçue pour optimiser la gestion de vos contributions scientifiques, elle simplifie chaque étape de votre participation à nos rencontres internationales. »" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-ink/60", children: "— Comité d'organisation" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: networking, alt: "Réseautage", className: "rounded-xl shadow-2xl w-full object-cover min-h-[300px] md:min-h-[500px]", loading: "lazy" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl max-w-xs hidden md:block", children: /* @__PURE__ */ jsx("p", { className: "font-display text-lg font-semibold text-white leading-snug", children: "Le développement du continent africain à portée de main." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Pourquoi le Portail CICOIDAF ?" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Un écosystème dédié à l'émergence du continent africain." }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/70 mt-4", children: "Accès privilégié aux conférences internationales 2026 couvrant les piliers du développement : santé, finance solidaire, entrepreneuriat, infrastructures et éducation." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        I: Globe2,
        t: "Portée internationale",
        d: "Une base de données actualisée en temps réel — dates, lieux, leaders d'opinion."
      }, {
        I: BookOpenCheck,
        t: "Excellence scientifique",
        d: "Comité de lecture rigoureux et publications référencées."
      }, {
        I: Users,
        t: "Réseautage solidaire",
        d: "Universitaires, chercheurs, doctorants et acteurs de terrain."
      }].map(({
        I,
        t,
        d
      }) => /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-accent text-primary flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(I, { size: 24 }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: t }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm leading-relaxed", children: d })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Accompagnement" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Un accompagnement sur mesure pour votre réussite." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        I: Headphones,
        t: "Assistance 24h/24, 7j/7",
        d: "Une équipe dédiée pour vos démarches d'inscription et de soumission."
      }, {
        I: GraduationCap,
        t: "Tutoriels & guides",
        d: "Ressources exclusives pour optimiser la présentation de vos articles."
      }, {
        I: HeartHandshake,
        t: "Soutien personnalisé",
        d: "Conseil sur mesure pour maximiser la visibilité de vos travaux."
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
    /* @__PURE__ */ jsx("section", { className: "bg-surface py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-x text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "À découvrir en vidéo" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title mt-3 mb-8", children: "CICOIDAF — Portail des Initiatives de Développement Africain" }),
      /* @__PURE__ */ jsx("div", { className: "aspect-video max-w-xl mx-auto rounded-xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx("iframe", { className: "w-full h-full", src: "https://www.youtube.com/embed/-INOP-DRj-s", title: "CICOIDAF présentation", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) })
    ] }) }),
    /* @__PURE__ */ jsx(FinalCta, {})
  ] });
}
export {
  HomePage as component
};
