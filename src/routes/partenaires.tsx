import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { FinalCta } from "@/components/site/FinalCta";
import banner from "@/assets/photo-handshake.jpg";
import r1 from "@/assets/partner-strategic.jpg";
import r2 from "@/assets/partner-impact.jpg";
import r3 from "@/assets/partner-network.jpg";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Partenaires — CICOIDAF" },
      { name: "description", content: "Trois raisons concrètes de rejoindre l'aventure CICOIDAF en tant que partenaire." },
    ],
  }),
  component: PartenairesPage,
});

const REASONS = [
  {
    n: "Raison 1",
    img: r1,
    title: "Opportunité stratégique d'un marché en pleine expansion",
    text: "Investir dans le CICOIDAF, c'est choisir de se positionner au cœur d'un carrefour d'innovation unique dédié à la croissance du continent africain. Notre plateforme rassemble l'élite des décideurs, des chercheurs et des entrepreneurs qui façonnent les marchés de demain. En devenant partenaire, vous bénéficiez d'une visibilité de premier plan auprès d'une audience qualifiée et d'un accès exclusif à des projets à fort potentiel de rendement. Le Cercle ne se contente pas d'organiser des rencontres ; il structure des opportunités d'affaires concrètes et durables.",
  },
  {
    n: "Raison 2",
    img: r2,
    title: "Levier d'impact social et de responsabilité (RSE)",
    text: "Le soutien au CICOIDAF représente un levier puissant pour affirmer votre engagement envers un développement inclusif et responsable. En finançant nos initiatives, vous participez directement à l'éclosion de solutions locales pour des défis mondiaux : santé, éducation, ingénierie durable. Nous offrons une traçabilité claire de l'impact de vos contributions, transformant chaque don en avancée tangible pour les communautés africaines.",
  },
  {
    n: "Raison 3",
    img: r3,
    title: "Plateforme de réseautage et d'innovation sans frontières",
    text: "Le CICOIDAF est bien plus qu'un cycle de conférences : c'est un incubateur de partenariats internationaux où se scellent les alliances de demain. Nos événements 2026-2028 seront le théâtre de signatures de protocoles d'accord et de lancements de projets d'envergure. Investir ici, c'est garantir à votre structure une longueur d'avance sur la concurrence en captant les tendances émergentes dès leur genèse.",
  },
];

function PartenairesPage() {
  return (
    <>
      <PageBanner title="Partenaires" subtitle="Trois raisons concrètes de rejoindre l'aventure CICOIDAF." image={banner} />

      <section className="py-20">
        <div className="container-x text-center max-w-2xl mx-auto mb-16">
          <p className="section-eyebrow">Confiance & Engagement</p>
          <h2 className="section-title mt-3">Pourquoi nos partenaires nous font confiance</h2>
        </div>

        <div className="space-y-20">
          {REASONS.map((r, i) => (
            <div key={r.n} className="container-x">
              <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <img src={r.img} alt="" className="rounded-xl shadow-2xl w-full aspect-video object-cover" loading="lazy" />
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <p className="section-eyebrow">{r.n}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4">{r.title}</h3>
                  <p className="text-ink/80 leading-relaxed">{r.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCta buttonLabel="Devenir partenaire" buttonTo="/contacts" />
    </>
  );
}
