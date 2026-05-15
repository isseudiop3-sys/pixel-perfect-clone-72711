import { createFileRoute } from "@tanstack/react-router";
import { Bell, Network, Headphones, GraduationCap, HeartHandshake } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { FinalCta } from "@/components/site/FinalCta";
import banner from "@/assets/photo-conference.jpg";
import side from "@/assets/photo-networking-event.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — CICOIDAF" },
      { name: "description", content: "Découvrez le Portail CICOIDAF, dédié à la communauté des administrations francophones et à l'émergence africaine." },
    ],
  }),
  component: () => (
    <>
      <PageBanner
        title="À propos"
        subtitle="« Plus vous apprenez, plus vous découvrirez d'endroits. » — Dr. Seuss"
        image={banner}
      />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-ink/80 leading-relaxed">
            <p>
              La plateforme CICOIDAF est l'outil de référence dédié à la communauté des administrations francophones.
              Conçue pour optimiser la gestion de vos contributions scientifiques, elle simplifie chaque étape
              de votre participation à nos rencontres internationales. De la coordination logistique à la soumission
              fluidifiée d'articles, notre portail offre une solution intégrée garantissant le succès des organisateurs
              comme des intervenants.
            </p>
            <p>
              Planifiez vos soumissions et participez aux conférences du CICOIDAF en toute simplicité.
              Notre nouveau portail en ligne a été pensé pour vous offrir une expérience utilisateur fluide :
              participez à nos conférences en quelques clics et suivez l'organisation de nos événements en temps réel.
            </p>
            <p>
              Simplifiez votre parcours au sein du CICOIDAF. Notre portail numérique accompagne les acteurs de
              l'administration francophone dans la planification de leurs soumissions et l'organisation de leurs
              grands événements annuels.
            </p>
          </div>
          <img src={side} alt="" className="rounded-xl shadow-xl w-full" loading="lazy" />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div className="card-soft">
            <Bell className="text-primary mb-3" />
            <h2 className="font-display text-2xl font-bold mb-3">Pourquoi choisir le Portail CICOIDAF ?</h2>
            <p className="text-ink/80 leading-relaxed">
              Rejoindre le CICOIDAF, c'est intégrer un écosystème dynamique dédié à l'émergence du continent africain.
              Nous vous offrons un accès privilégié aux conférences internationales les plus stratégiques en 2026,
              couvrant les piliers du développement : <strong>santé</strong>, <strong>finance solidaire</strong>,{" "}
              <strong>entrepreneuriat</strong>, <strong>infrastructures</strong> et <strong>éducation</strong>.
            </p>
            <p className="text-ink/80 leading-relaxed mt-3">
              Notre base de données est actualisée en temps réel pour vous garantir une place au cœur de l'action.
              En vous abonnant à nos <strong>Alertes Initiatives</strong>, vous recevez instantanément les dates clés,
              les lieux de rencontre et le profil des leaders d'opinion qui façonnent l'Afrique de demain.
            </p>
          </div>
          <div className="card-soft">
            <Network className="text-primary mb-3" />
            <h2 className="font-display text-2xl font-bold mb-3">Boostez votre impact et votre réseau</h2>
            <p className="text-ink/80 leading-relaxed">
              Participer aux conférences du CICOIDAF, c'est l'opportunité unique d'interagir avec des experts mondiaux,
              des décideurs et des porteurs de projets innovants. Que vous soyez universitaire, chercheur, doctorant
              ou acteur de terrain, notre communauté vous ouvre les portes d'un réseautage solidaire et performant.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow">Accompagnement sur mesure</p>
            <h2 className="section-title mt-3">Notre engagement à vos côtés</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { I: Headphones, t: "Assistance 24h/24, 7j/7", d: "Notre équipe dédiée est à votre entière disposition pour vos démarches d'inscription et de soumission." },
              { I: GraduationCap, t: "Tutoriels & guides", d: "Profitez de nos ressources exclusives pour naviguer sur le portail et optimiser vos articles." },
              { I: HeartHandshake, t: "Soutien personnalisé", d: "Nos experts vous offrent un conseil sur mesure pour maximiser la visibilité de vos travaux." },
            ].map(({ I, t, d }) => (
              <div key={t} className="card-soft border-t-4 border-t-primary">
                <I size={28} className="text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{t}</h3>
                <p className="text-ink/75 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta buttonLabel="Découvrir les conférences" buttonTo="/conferences" />
    </>
  ),
});
