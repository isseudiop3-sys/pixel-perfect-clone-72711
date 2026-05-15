import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { FinalCta } from "@/components/site/FinalCta";
import banner from "@/assets/photo-networking.jpg";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Contacts — CICOIDAF" },
      { name: "description", content: "Coordonnées et formulaire de contact CICOIDAF — 62 Rue du Landy, Aubervilliers, Paris." },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageBanner title="Contacts" subtitle="Une équipe à votre écoute pour toute demande." image={banner} />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="section-eyebrow">Coordonnées</p>
              <h2 className="section-title mt-3">Restons en contact</h2>
            </div>

            <div className="card-soft">
              <MapPin className="text-primary mb-2" />
              <h3 className="font-semibold mb-1">Adresse</h3>
              <p className="text-ink/75 text-sm">62 Rue du Landy, Aubervilliers — Paris, France</p>
            </div>

            <div className="card-soft">
              <Phone className="text-primary mb-2" />
              <h3 className="font-semibold mb-1">Téléphones</h3>
              <p className="text-ink/75 text-sm">+33 07 66 11 36 47 (France)</p>
              <p className="text-ink/75 text-sm">+228 79 93 83 98 (Togo)</p>
            </div>

            <div className="card-soft">
              <Mail className="text-primary mb-2" />
              <h3 className="font-semibold mb-1">Emails</h3>
              <p className="text-ink/75 text-sm">coidaf-france@outlook.com</p>
              <p className="text-ink/75 text-sm">coidaforganisation@gmail.com</p>
              <p className="text-ink/75 text-sm">cicoidaf-conference@gmail.com</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card-soft">
              <h3 className="font-display text-2xl font-bold mb-1">Envoyez-nous un message</h3>
              <p className="text-ink/70 text-sm mb-6">Nous vous répondrons sous 48h.</p>

              {sent ? (
                <div className="flex items-center gap-3 p-5 rounded-lg bg-accent text-primary-dark">
                  <CheckCircle2 />
                  <div>
                    <p className="font-semibold">Merci ! Votre message a été envoyé.</p>
                    <p className="text-sm">Notre équipe vous recontacte rapidement.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Nom complet" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Sujet" name="subject" required />
                  <div>
                    <label className="block text-sm font-medium mb-1">Message *</label>
                    <textarea
                      required rows={6}
                      className="w-full px-4 py-3 rounded-md border border-input bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    <Send size={16} className="mr-2" /> Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}{required && " *"}</label>
      <input
        type={type} name={name} required={required}
        className="w-full px-4 py-3 rounded-md border border-input bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
      />
    </div>
  );
}
