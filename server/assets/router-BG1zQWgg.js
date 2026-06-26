import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useLocation, Link, useRouter, createRootRouteWithContext, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Heart, X, Menu, Linkedin, Facebook, MessageCircle, Youtube, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
const appCss = "/assets/styles-CDHhKe0o.css";
const logo = "/assets/logo-cicoidaf-Dvj-hWjz.jpg";
const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/conferences", label: "Conférences" },
  { to: "/evenements", label: "Événements" },
  { to: "/calendriers", label: "Calendriers" },
  { to: "/themes", label: "Thèmes" },
  { to: "/actualite", label: "Actualité" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/contacts", label: "Contacts" }
];
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/60 transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_20px_-8px_rgba(0,0,0,0.12)]" : "shadow-none"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-x flex items-center justify-between h-20 lg:h-24 gap-6", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: "flex items-center gap-2 shrink-0 transition-opacity hover:opacity-80",
              "aria-label": "CICOIDAF — Accueil",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: logo,
                  alt: "CICOIDAF",
                  className: "h-14 lg:h-16 w-auto object-contain"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("nav", { className: "hidden xl:flex flex-1 items-center justify-center gap-1", children: NAV.map((n) => {
            const active = pathname === n.to;
            return /* @__PURE__ */ jsxs(
              Link,
              {
                to: n.to,
                className: `relative px-3 py-2 text-[13.5px] font-medium tracking-tight whitespace-nowrap rounded-md transition-colors duration-200 hover:text-primary ${active ? "text-primary" : "text-foreground/80"}`,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: n.label }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-primary origin-center transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"}`,
                      "aria-hidden": true
                    }
                  )
                ]
              },
              n.to
            );
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden xl:flex items-center gap-3 shrink-0", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/faire-un-don",
                className: "inline-flex items-center gap-1.5 text-[13.5px] font-medium text-foreground/70 hover:text-primary whitespace-nowrap transition-colors duration-200",
                children: [
                  /* @__PURE__ */ jsx(Heart, { size: 15, className: "opacity-80" }),
                  /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: "Faire un don" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/inscription",
                className: "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-[13.5px] font-semibold text-primary-foreground shadow-[0_4px_14px_-4px_rgba(190,40,40,0.45)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_22px_-6px_rgba(190,40,40,0.55)] hover:-translate-y-0.5 active:translate-y-0",
                children: "S'inscrire"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-muted transition-colors",
              onClick: () => setOpen((o) => !o),
              "aria-label": open ? "Fermer le menu" : "Ouvrir le menu",
              "aria-expanded": open,
              children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `xl:hidden overflow-hidden border-t border-border/60 bg-white transition-[max-height,opacity] duration-300 ease-out ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`,
            children: /* @__PURE__ */ jsxs("nav", { className: "container-x py-4 flex flex-col", children: [
              NAV.map((n) => {
                const active = pathname === n.to;
                return /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: n.to,
                    className: `py-2.5 text-[15px] font-medium whitespace-nowrap border-b border-border/40 last:border-b-0 transition-colors ${active ? "text-primary" : "text-foreground/85 hover:text-primary"}`,
                    children: n.label
                  },
                  n.to
                );
              }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mt-4", children: [
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/faire-un-don",
                    className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors whitespace-nowrap",
                    children: [
                      /* @__PURE__ */ jsx(Heart, { size: 15 }),
                      "Faire un don"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/inscription",
                    className: "flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_4px_14px_-4px_rgba(190,40,40,0.45)] hover:bg-primary/90 transition-all",
                    children: "S'inscrire"
                  }
                )
              ] })
            ] })
          }
        )
      ]
    }
  );
}
const bg = "/assets/footer-bg-DetnRQkY.jpg";
const SOCIALS = [
  { I: Linkedin, href: "https://www.linkedin.com/company/coidaf/", label: "LinkedIn" },
  { I: Facebook, href: "https://facebook.com/coidaf", label: "Facebook" },
  { I: MessageCircle, href: "https://wa.me/33766113647", label: "WhatsApp" },
  { I: Youtube, href: "https://youtube.com/@coidaf", label: "YouTube" },
  { I: Instagram, href: "https://instagram.com/coidaf", label: "Instagram" },
  { I: Twitter, href: "https://twitter.com/coidaf", label: "Twitter / X" }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative text-white/85 mt-0 isolate", children: [
    /* @__PURE__ */ jsx("img", { src: bg, alt: "", className: "absolute inset-0 w-full h-full object-cover -z-10", loading: "lazy" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/45 -z-10" }),
    /* @__PURE__ */ jsxs("div", { className: "container-x py-8 grid gap-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("img", { src: logo, alt: "CICOIDAF", className: "h-20 w-auto bg-white p-2 rounded" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/80 max-w-md", children: "Cercle des Œuvres pour les Initiatives de Développement Africain. Une plateforme dédiée à l'émergence du continent." }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: SOCIALS.map(({ I, href, label }) => /* @__PURE__ */ jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
            className: "w-9 h-9 rounded-full bg-white/15 hover:bg-primary flex items-center justify-center transition",
            children: /* @__PURE__ */ jsx(I, { size: 16 })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white text-sm font-semibold uppercase tracking-wider mb-2", children: "Navigation" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-1.5 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/a-propos", className: "hover:text-primary", children: "À propos" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/conferences", className: "hover:text-primary", children: "Conférences" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/evenements", className: "hover:text-primary", children: "Événements" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/themes", className: "hover:text-primary", children: "Thèmes" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/actualite", className: "hover:text-primary", children: "Actualité" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/partenaires", className: "hover:text-primary", children: "Partenaires" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/faire-un-don", className: "hover:text-primary", children: "Faire un don" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white text-sm font-semibold uppercase tracking-wider mb-2", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16, className: "mt-0.5 shrink-0 text-primary" }),
            "62 Rue du Landy, Aubervilliers, Paris"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { size: 16, className: "mt-0.5 shrink-0 text-primary" }),
            "+33 07 66 11 36 47"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16, className: "mt-0.5 shrink-0 text-primary" }),
            "coidaf-france@outlook.com"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10 py-3 relative", children: /* @__PURE__ */ jsxs("div", { className: "container-x text-xs text-white/70 flex flex-wrap gap-x-4 gap-y-2 justify-between", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " CICOIDAF tous droits réservés — Le CICOIDAF est un bien privé enregistré du COIDAF INTL."
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Le développement du continent africain en marche" })
    ] }) })
  ] });
}
function useScrollReveal() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observed = /* @__PURE__ */ new WeakSet();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const scan = () => {
      const nodes = document.querySelectorAll("main section");
      nodes.forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add("is-visible");
        } else {
          io.observe(el);
        }
      });
    };
    scan();
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });
    const unsub = router.subscribe("onResolved", () => {
      setTimeout(scan, 50);
    });
    return () => {
      io.disconnect();
      mo.disconnect();
      unsub();
    };
  }, [router]);
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CICOIDAF — Cercle des Œuvres pour les Initiatives de Développement Africain" },
      { name: "description", content: "Portail officiel du CICOIDAF : conférences internationales, événements et initiatives pour l'émergence du continent africain." },
      { name: "author", content: "CICOIDAF" },
      { property: "og:title", content: "CICOIDAF — Cercle des Œuvres pour les Initiatives de Développement Africain" },
      { property: "og:description", content: "Portail officiel du CICOIDAF : conférences internationales, événements et initiatives pour l'émergence du continent africain." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "CICOIDAF — Cercle des Œuvres pour les Initiatives de Développement Africain" },
      { name: "twitter:description", content: "Portail officiel du CICOIDAF : conférences internationales, événements et initiatives pour l'émergence du continent africain." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/803bd8e7-fd62-4ca3-83f6-8a0e2d167f79/id-preview-14946057--696c4683-6588-42d5-a161-7ee46c36f829.lovable.app-1778875178798.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/803bd8e7-fd62-4ca3-83f6-8a0e2d167f79/id-preview-14946057--696c4683-6588-42d5-a161-7ee46c36f829.lovable.app-1778875178798.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  useScrollReveal();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$a = () => import("./themes-VRJjVLhd.js");
const Route$b = createFileRoute("/themes")({
  head: () => ({
    meta: [{
      title: "Thèmes — CICOIDAF"
    }, {
      name: "description",
      content: "Huit grands axes thématiques structurent les travaux du CICOIDAF."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const BASE_URL = "";
const Route$a = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/a-propos", "/conferences", "/evenements", "/calendriers", "/themes", "/actualite", "/partenaires", "/contacts", "/faire-un-don", "/inscription"];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$9 = () => import("./partenaires-yCfcRgMD.js");
const Route$9 = createFileRoute("/partenaires")({
  head: () => ({
    meta: [{
      title: "Partenaires — CICOIDAF"
    }, {
      name: "description",
      content: "Trois raisons concrètes de rejoindre l'aventure CICOIDAF en tant que partenaire."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./inscription-DRx4EiFQ.js");
const Route$8 = createFileRoute("/inscription")({
  head: () => ({
    meta: [{
      title: "S'inscrire — CICOIDAF"
    }, {
      name: "description",
      content: "Inscrivez-vous aux conférences CICOIDAF en 7 étapes."
    }]
  }),
  validateSearch: (s) => ({
    event: typeof s.event === "string" ? s.event : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./faire-un-don-Dt2hz61J.js");
const Route$7 = createFileRoute("/faire-un-don")({
  head: () => ({
    meta: [{
      title: "Faire un don — CICOIDAF"
    }, {
      name: "description",
      content: "Soutenez les initiatives de développement africain. Faites un don au CICOIDAF."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./evenements-D0Saew1l.js");
const Route$6 = createFileRoute("/evenements")({
  head: () => ({
    meta: [{
      title: "Nos événements — CICOIDAF"
    }, {
      name: "description",
      content: "6 sous-événements du CICOIDAF : FESPASOL, DPM, RÉUSSITE D'AFRIQUE, COIDAF FORUM, RACOIDAF. Inscrivez-vous."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contacts-D_40FTXg.js");
const Route$5 = createFileRoute("/contacts")({
  head: () => ({
    meta: [{
      title: "Contacts — CICOIDAF"
    }, {
      name: "description",
      content: "Coordonnées et formulaire de contact CICOIDAF — 62 Rue du Landy, Aubervilliers, Paris."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./conferences-6i6B8Trq.js");
const Route$4 = createFileRoute("/conferences")({
  head: () => ({
    meta: [{
      title: "Nos conférences — CICOIDAF"
    }, {
      name: "description",
      content: "Pourquoi participer aux conférences du CICOIDAF : carrefours d'innovation, source fiable, organisateurs et partenaires."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./calendriers-C6pXwy5Q.js");
const Route$3 = createFileRoute("/calendriers")({
  head: () => ({
    meta: [{
      title: "Calendriers — CICOIDAF"
    }, {
      name: "description",
      content: "Calendrier chronologique des conférences et événements du CICOIDAF de 2026 à 2027."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./actualite-Bb9bSNwl.js");
const Route$2 = createFileRoute("/actualite")({
  head: () => ({
    meta: [{
      title: "Actualité — CICOIDAF"
    }, {
      name: "description",
      content: "Actualité humanitaire et diplomatique : Banque mondiale, ONU, Union africaine, CEDEAO, CEMAC, AES, BAD."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./a-propos-C_zcBwsE.js");
const Route$1 = createFileRoute("/a-propos")({
  head: () => ({
    meta: [{
      title: "À propos — CICOIDAF"
    }, {
      name: "description",
      content: "Découvrez le Portail CICOIDAF, dédié à la communauté des administrations francophones et à l'émergence africaine."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BMsN0EOV.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "CICOIDAF — Portail des Initiatives de Développement Africain"
    }, {
      name: "description",
      content: "Bienvenue sur le Portail CICOIDAF — le moteur de vos initiatives pour l'Afrique. Édition 2026."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ThemesRoute = Route$b.update({
  id: "/themes",
  path: "/themes",
  getParentRoute: () => Route$c
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$c
});
const PartenairesRoute = Route$9.update({
  id: "/partenaires",
  path: "/partenaires",
  getParentRoute: () => Route$c
});
const InscriptionRoute = Route$8.update({
  id: "/inscription",
  path: "/inscription",
  getParentRoute: () => Route$c
});
const FaireUnDonRoute = Route$7.update({
  id: "/faire-un-don",
  path: "/faire-un-don",
  getParentRoute: () => Route$c
});
const EvenementsRoute = Route$6.update({
  id: "/evenements",
  path: "/evenements",
  getParentRoute: () => Route$c
});
const ContactsRoute = Route$5.update({
  id: "/contacts",
  path: "/contacts",
  getParentRoute: () => Route$c
});
const ConferencesRoute = Route$4.update({
  id: "/conferences",
  path: "/conferences",
  getParentRoute: () => Route$c
});
const CalendriersRoute = Route$3.update({
  id: "/calendriers",
  path: "/calendriers",
  getParentRoute: () => Route$c
});
const ActualiteRoute = Route$2.update({
  id: "/actualite",
  path: "/actualite",
  getParentRoute: () => Route$c
});
const AProposRoute = Route$1.update({
  id: "/a-propos",
  path: "/a-propos",
  getParentRoute: () => Route$c
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AProposRoute,
  ActualiteRoute,
  CalendriersRoute,
  ConferencesRoute,
  ContactsRoute,
  EvenementsRoute,
  FaireUnDonRoute,
  InscriptionRoute,
  PartenairesRoute,
  SitemapDotxmlRoute,
  ThemesRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
