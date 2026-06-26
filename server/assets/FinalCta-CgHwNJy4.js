import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const globalImg = "/assets/global-conference-DkYxj28x.jpg";
function FinalCta({
  title = "Ensemble, bâtissons l'avenir du continent africain.",
  subtitle = "Rejoignez la communauté CICOIDAF et participez aux rencontres internationales 2026-2027.",
  buttonLabel = "Réserver ma place",
  buttonTo = "/calendriers"
}) {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: globalImg,
        alt: "",
        className: "absolute inset-0 w-full h-full object-cover",
        loading: "lazy"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[rgba(139,0,0,0.55)] via-[rgba(139,0,0,0.45)] to-[rgba(0,0,0,0.35)]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative container-x py-20 md:py-28 text-center text-white", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/90 max-w-2xl mx-auto", children: subtitle }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(Link, { to: buttonTo, className: "btn-ghost-light", children: [
        buttonLabel,
        " →"
      ] }) })
    ] })
  ] });
}
export {
  FinalCta as F
};
