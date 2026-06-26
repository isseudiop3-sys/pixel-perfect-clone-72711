import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Users, Building2, Heart, CheckCircle2, CreditCard } from "lucide-react";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
import "@tanstack/react-router";
const banner = "/assets/photo-handshake-IhMilbyi.jpg";
const AMOUNTS = [25, 50, 100, 250, 500];
function DonPage() {
  const [sent, setSent] = useState(false);
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageBanner, { title: "Faire un don", subtitle: "Soutenez les initiatives de développement du continent africain.", image: banner }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Votre soutien" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Chaque don fait avancer l'Afrique" }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/75 leading-relaxed mt-4", children: "En soutenant le CICOIDAF, vous contribuez directement au financement de nos conférences, à la mobilité de jeunes chercheurs africains, et au déploiement d'initiatives de terrain dans la santé, l'éducation, l'entrepreneuriat et la culture." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid sm:grid-cols-3 gap-4", children: [{
          I: Users,
          t: "Mobilité jeunesse",
          d: "Bourses pour les jeunes participants."
        }, {
          I: Building2,
          t: "Initiatives de terrain",
          d: "Projets santé, éducation, agriculture."
        }, {
          I: Heart,
          t: "Solidarité africaine",
          d: "Une émergence portée par tous."
        }].map(({
          I,
          t,
          d
        }) => /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
          /* @__PURE__ */ jsx(I, { className: "text-primary mb-3", size: 28 }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: t }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-ink/70 mt-1", children: d })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mb-1", children: "Je fais un don" }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/70 text-sm mb-6", children: "Don sécurisé — défiscalisable." }),
        sent ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-5 rounded-lg bg-accent text-primary-dark", children: [
          /* @__PURE__ */ jsx(CheckCircle2, {}),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Merci pour votre générosité !" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Un reçu fiscal vous sera envoyé." })
          ] })
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          setSent(true);
        }, className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-2", children: "Montant (€)" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
              AMOUNTS.map((a) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setAmount(a), className: `py-3 rounded-md border font-semibold transition ${amount === a ? "bg-primary text-white border-primary" : "bg-white border-border hover:border-primary"}`, children: [
                a,
                " €"
              ] }, a)),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setAmount("custom"), className: `py-3 rounded-md border font-semibold transition ${amount === "custom" ? "bg-primary text-white border-primary" : "bg-white border-border hover:border-primary"}`, children: "Autre" })
            ] }),
            amount === "custom" && /* @__PURE__ */ jsx("input", { type: "number", min: 1, placeholder: "Votre montant en €", value: custom, onChange: (e) => setCustom(e.target.value), className: "mt-3 w-full px-4 py-3 rounded-md border border-input bg-white", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Nom complet *" }),
            /* @__PURE__ */ jsx("input", { required: true, className: "w-full px-4 py-3 rounded-md border border-input bg-white" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Email *" }),
            /* @__PURE__ */ jsx("input", { type: "email", required: true, className: "w-full px-4 py-3 rounded-md border border-input bg-white" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-primary w-full", children: [
            /* @__PURE__ */ jsx(CreditCard, { size: 16, className: "mr-2" }),
            " Donner maintenant"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-ink/60 text-center", children: "Paiement sécurisé. Vos données ne sont jamais partagées." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(FinalCta, { title: "Votre générosité change des vies.", subtitle: "Rejoignez les donateurs et partenaires du CICOIDAF.", buttonLabel: "Nous contacter", buttonTo: "/contacts" })
  ] });
}
export {
  DonPage as component
};
