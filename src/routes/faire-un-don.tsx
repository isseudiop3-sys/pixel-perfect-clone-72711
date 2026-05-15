import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, CheckCircle2, CreditCard, Building2, Users } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { FinalCta } from "@/components/site/FinalCta";
import banner from "@/assets/photo-handshake.jpg";

export const Route = createFileRoute("/faire-un-don")({
  head: () => ({
    meta: [
      { title: "Faire un don — CICOIDAF" },
      { name: "description", content: "Soutenez les initiatives de développement africain. Faites un don au CICOIDAF." },
    ],
  }),
  component: DonPage,
});

const AMOUNTS = [25, 50, 100, 250, 500];

function DonPage() {
  const [sent, setSent] = useState(false);
  const [amount, setAmount] = useState<number | "custom">(50);
  const [custom, setCustom] = useState("");

  return (
    <>
      <PageBanner
        title="Faire un don"
        subtitle="Soutenez les initiatives de développement du continent africain."
        image={banner}
      />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="section-eyebrow">Votre soutien</p>
            <h2 className="section-title mt-3">Chaque don fait avancer l'Afrique</h2>
            <p className="text-ink/75 leading-relaxed mt-4">
              En soutenant le CICOIDAF, vous contribuez directement au financement de nos conférences,
              à la mobilité de jeunes chercheurs africains, et au déploiement d'initiatives de terrain
              dans la santé, l'éducation, l'entrepreneuriat et la culture.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { I: Users, t: "Mobilité jeunesse", d: "Bourses pour les jeunes participants." },
                { I: Building2, t: "Initiatives de terrain", d: "Projets santé, éducation, agriculture." },
                { I: Heart, t: "Solidarité africaine", d: "Une émergence portée par tous." },
              ].map(({ I, t, d }) => (
                <div key={t} className="card-soft">
                  <I className="text-primary mb-3" size={28} />
                  <h3 className="font-display text-lg font-semibold">{t}</h3>
                  <p className="text-sm text-ink/70 mt-1">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-soft">
            <h3 className="font-display text-2xl font-bold mb-1">Je fais un don</h3>
            <p className="text-ink/70 text-sm mb-6">Don sécurisé — défiscalisable.</p>

            {sent ? (
              <div className="flex items-center gap-3 p-5 rounded-lg bg-accent text-primary-dark">
                <CheckCircle2 />
                <div>
                  <p className="font-semibold">Merci pour votre générosité !</p>
                  <p className="text-sm">Un reçu fiscal vous sera envoyé.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Montant (€)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {AMOUNTS.map((a) => (
                      <button
                        type="button"
                        key={a}
                        onClick={() => setAmount(a)}
                        className={`py-3 rounded-md border font-semibold transition ${
                          amount === a
                            ? "bg-primary text-white border-primary"
                            : "bg-white border-border hover:border-primary"
                        }`}
                      >
                        {a} €
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setAmount("custom")}
                      className={`py-3 rounded-md border font-semibold transition ${
                        amount === "custom"
                          ? "bg-primary text-white border-primary"
                          : "bg-white border-border hover:border-primary"
                      }`}
                    >
                      Autre
                    </button>
                  </div>
                  {amount === "custom" && (
                    <input
                      type="number"
                      min={1}
                      placeholder="Votre montant en €"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      className="mt-3 w-full px-4 py-3 rounded-md border border-input bg-white"
                      required
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Nom complet *</label>
                  <input required className="w-full px-4 py-3 rounded-md border border-input bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-md border border-input bg-white" />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <CreditCard size={16} className="mr-2" /> Donner maintenant
                </button>
                <p className="text-xs text-ink/60 text-center">
                  Paiement sécurisé. Vos données ne sont jamais partagées.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <FinalCta
        title="Votre générosité change des vies."
        subtitle="Rejoignez les donateurs et partenaires du CICOIDAF."
        buttonLabel="Nous contacter"
        buttonTo="/contacts"
      />
    </>
  );
}
