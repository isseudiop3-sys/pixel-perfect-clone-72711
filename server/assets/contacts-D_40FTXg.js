import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { P as PageBanner } from "./PageBanner-D38DgoVt.js";
import { F as FinalCta } from "./FinalCta-CgHwNJy4.js";
import "@tanstack/react-router";
const banner = "/assets/contact-hero-C797HKVT.jpg";
function ContactsPage() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageBanner, { title: "Contacts", subtitle: "Une équipe à votre écoute pour toute demande.", image: banner }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-x grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "section-eyebrow", children: "Coordonnées" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title mt-3", children: "Restons en contact" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "text-primary mb-2" }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: "Adresse" }),
          /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm", children: "62 Rue du Landy, Aubervilliers — Paris, France" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
          /* @__PURE__ */ jsx(Phone, { className: "text-primary mb-2" }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: "Téléphones" }),
          /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm", children: "+33 07 66 11 36 47 (France)" }),
          /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm", children: "+228 79 93 83 98 (Togo)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
          /* @__PURE__ */ jsx(Mail, { className: "text-primary mb-2" }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: "Emails" }),
          /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm", children: "coidaf-france@outlook.com" }),
          /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm", children: "coidaforganisation@gmail.com" }),
          /* @__PURE__ */ jsx("p", { className: "text-ink/75 text-sm", children: "cicoidaf-conference@gmail.com" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "https://wa.me/33766113647?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20avec%20votre%20conseiller%20client%20IA.", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 p-4 rounded-lg bg-[#25D366] text-white font-semibold hover:opacity-95 transition shadow-lg", children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 22 }),
          /* @__PURE__ */ jsx("span", { children: "Discuter avec notre conseiller client IA sur WhatsApp" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "card-soft", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mb-1", children: "Envoyez-nous un message" }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/70 text-sm mb-6", children: "Nous vous répondrons sous 48h." }),
        sent ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-5 rounded-lg bg-accent text-primary-dark", children: [
          /* @__PURE__ */ jsx(CheckCircle2, {}),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Merci ! Votre message a été envoyé." }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Notre équipe vous recontacte rapidement." })
          ] })
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          setSent(true);
        }, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(Field, { label: "Nom complet", name: "name", required: true }),
            /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", required: true })
          ] }),
          /* @__PURE__ */ jsx(Field, { label: "Sujet", name: "subject", required: true }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Message *" }),
            /* @__PURE__ */ jsx("textarea", { required: true, rows: 6, className: "w-full px-4 py-3 rounded-md border border-input bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-primary", children: [
            /* @__PURE__ */ jsx(Send, { size: 16, className: "mr-2" }),
            " Envoyer le message"
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(FinalCta, {})
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium mb-1", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsx("input", { type, name, required, className: "w-full px-4 py-3 rounded-md border border-input bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" })
  ] });
}
export {
  ContactsPage as component
};
