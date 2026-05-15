import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, BookOpenCheck, Users, Headphones, GraduationCap, HeartHandshake } from "lucide-react";
import { FinalCta } from "@/components/site/FinalCta";
import hero from "@/assets/hero-conference.jpg";
import networking from "@/assets/photo-networking.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CICOIDAF — Portail des Initiatives de Développement Africain" },
      { name: "description", content: "Bienvenue sur le Portail CICOIDAF — le moteur de vos initiatives pour l'Afrique. Édition 2026." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Conférence CICOIDAF" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-[rgba(139,0,0,0.7)]" />
        <div className="relative container-x py-28 md:py-40 text-white text-center">
          <p className="font-script text-5xl md:text-7xl text-white leading-tight mb-4">
            « Plus vous apprenez, plus vous découvrirez d'endroits. »
          </p>
          <p className="font-script text-3xl md:text-4xl text-white/90 mb-6">— Dr. Seuss</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-white">
            Bienvenue sur le Portail CICOIDAF —<br />
            <span className="text-[oklch(0.85_0.12_27)]">le moteur de vos initiatives pour l'Afrique.</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto">
            Cercle des Œuvres pour les Initiatives de Développement Africain.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/inscription" className="btn-primary">S'inscrire à la conférence</Link>
            <Link to="/conferences" className="btn-ghost-light">Découvrir nos conférences</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface py-16">
        <div className="container-x grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { n: "+32", l: "Pays représentés" },
            { n: "+3 000", l: "Participants" },
            { n: "+60 000", l: "Visiteurs" },
          ].map((s) => (
            <div key={s.l} className="card-soft">
              <div className="font-display text-5xl font-bold text-primary">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-ink/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NOTRE PLATEFORME */}
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-script text-4xl md:text-5xl text-primary leading-tight">Notre plateforme</p>
            <h2 className="section-title mt-3">L'outil de référence des administrations francophones</h2>
            <p className="text-ink/80 leading-relaxed text-lg italic border-l-4 border-primary pl-5">
              « La plateforme CICOIDAF est l'outil de référence dédié à la communauté des administrations francophones.
              Conçue pour optimiser la gestion de vos contributions scientifiques, elle simplifie chaque étape
              de votre participation à nos rencontres internationales. »
            </p>
            <p className="mt-4 text-sm text-ink/60">— Comité d'organisation</p>
          </div>
          <div className="relative">
            <img src={networking} alt="Réseautage" className="rounded-xl shadow-2xl w-full" loading="lazy" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-display text-xl font-semibold">Édition 2026</p>
              <p className="text-sm text-white/85">L'émergence africaine en marche.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow">Pourquoi le Portail CICOIDAF ?</p>
            <h2 className="section-title mt-3">Un écosystème dédié à l'émergence du continent africain.</h2>
            <p className="text-ink/70 mt-4">
              Accès privilégié aux conférences internationales 2026 couvrant les piliers du développement :
              santé, finance solidaire, entrepreneuriat, infrastructures et éducation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { I: Globe2, t: "Portée internationale", d: "Une base de données actualisée en temps réel — dates, lieux, leaders d'opinion." },
              { I: BookOpenCheck, t: "Excellence scientifique", d: "Comité de lecture rigoureux et publications référencées." },
              { I: Users, t: "Réseautage solidaire", d: "Universitaires, chercheurs, doctorants et acteurs de terrain." },
            ].map(({ I, t, d }) => (
              <div key={t} className="card-soft">
                <div className="w-12 h-12 rounded-lg bg-accent text-primary flex items-center justify-center mb-4">
                  <I size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{t}</h3>
                <p className="text-ink/75 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT */}
      <section className="py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow">Accompagnement</p>
            <h2 className="section-title mt-3">Un accompagnement sur mesure pour votre réussite.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { I: Headphones, t: "Assistance 24h/24, 7j/7", d: "Une équipe dédiée pour vos démarches d'inscription et de soumission." },
              { I: GraduationCap, t: "Tutoriels & guides", d: "Ressources exclusives pour optimiser la présentation de vos articles." },
              { I: HeartHandshake, t: "Soutien personnalisé", d: "Conseil sur mesure pour maximiser la visibilité de vos travaux." },
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

      {/* VIDEO */}
      <section className="bg-surface py-24">
        <div className="container-x text-center">
          <p className="section-eyebrow">À découvrir en vidéo</p>
          <h2 className="section-title mt-3 mb-8">CICOIDAF — Portail des Initiatives de Développement Africain</h2>
          <div className="aspect-video max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-INOP-DRj-s"
              title="CICOIDAF présentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
