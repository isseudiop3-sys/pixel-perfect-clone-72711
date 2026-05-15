import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { FinalCta } from "@/components/site/FinalCta";
import banner from "@/assets/odd-banner.jpg";
import logoCicoidaf from "@/assets/logo-cicoidaf-event.jpg";
import logoFespasol from "@/assets/logo-fespasol.jpg";
import logoDpm from "@/assets/logo-dpm.jpg";
import logoReussite from "@/assets/logo-reussite.jpg";
import logoForum from "@/assets/logo-coidaf-forum.jpg";
import logoRacoidaf from "@/assets/logo-racoidaf.jpg";

export const Route = createFileRoute("/evenements")({
  head: () => ({
    meta: [
      { title: "Nos événements — CICOIDAF" },
      { name: "description", content: "6 sous-événements du CICOIDAF : FESPASOL, DPM, RÉUSSITE D'AFRIQUE, COIDAF FORUM, RACOIDAF. Inscrivez-vous." },
    ],
  }),
  component: EvenementsPage,
});

const EVENTS = [
  {
    slug: "cicoidaf",
    logo: logoCicoidaf,
    title: "CICOIDAF",
    sub: "Conférence Internationale",
    desc: "Conférence Internationale Continue pour l'Identité et le Développement Africain.",
    dates: ["14-28 Novembre 2026", "24-27 Mars 2027"],
  },
  {
    slug: "fespasol",
    logo: logoFespasol,
    title: "FESPASOL",
    sub: "Festival du Panier Solidaire",
    desc: "Économie sociale et solidaire au service des communautés.",
    dates: ["21-26 Décembre 2026", "12-13 Mars 2027", "16-21 Août 2027"],
  },
  {
    slug: "dpm",
    logo: logoDpm,
    title: "DANCE PEOPLE MUSIC",
    sub: "Actu Jeune International",
    desc: "Célébration culturelle de la jeunesse africaine.",
    dates: ["27-31 Décembre 2026", "27-30 Juin 2027", "27-28 Août 2027"],
  },
  {
    slug: "reussite-afrique",
    logo: logoReussite,
    title: "RÉUSSITE D'AFRIQUE",
    sub: "L'interview des icônes",
    desc: "Actu Jeune International — la voix des leaders africains.",
    dates: ["25-27 Février 2027"],
  },
  {
    slug: "coidaf-forum",
    logo: logoForum,
    title: "COIDAF FORUM",
    sub: "La Grande Rencontre des Investisseurs",
    desc: "Sommet des investisseurs et porteurs de projets africains.",
    dates: ["10-13 Février 2027"],
  },
  {
    slug: "racoidaf",
    logo: logoRacoidaf,
    title: "RACOIDAF",
    sub: "Rencontre Africaine des Collaborateurs",
    desc: "Du Cercle des Œuvres pour les Initiatives de Développement Africain.",
    dates: ["26-27 Novembre 2026", "21-26 Juin 2027"],
  },
];

function EvenementsPage() {
  return (
    <>
      <PageBanner
        title="Nos événements"
        subtitle="Mensuel, Trimestriel, Semestriel et Annuel — cliquez sur l'événement auquel vous souhaitez participer."
        image={banner}
      />

      <section className="py-20">
        <div className="container-x grid md:grid-cols-2 gap-8">
          {EVENTS.map((e) => (
            <article key={e.slug} className="card-soft flex flex-col">
              <div className="bg-surface rounded-lg h-40 flex items-center justify-center mb-5 p-4">
                <img src={e.logo} alt={e.title} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">{e.title}</h3>
              <p className="text-sm uppercase tracking-wider text-ink/60 mb-2">{e.sub}</p>
              <p className="text-ink/75 text-sm leading-relaxed mb-5 flex-1">{e.desc}</p>
              <div className="flex flex-wrap gap-2">
                {e.dates.map((d) => (
                  <Link
                    key={d}
                    to="/inscription"
                    search={{ event: `${e.slug}-${d}` } as never}
                    className="btn-outline text-xs px-3 py-2"
                  >
                    {d} — Inscrivez-vous
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="section-eyebrow">À découvrir en vidéo</p>
            <h2 className="section-title mt-3">Nos événements en images</h2>
            <p className="text-ink/70 mt-3 max-w-2xl mx-auto">
              Plongez dans l'ambiance de nos rencontres internationales à travers une sélection de moments forts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Ay6lDFINqFw",
              "_aXA1jRXWnk",
              "wNULQ75pGjE",
              "_HhbxSL3Swc",
              "A5PuNPjogC8",
              "diWNp9Fb5TU",
            ].map((id) => (
              <div key={id} className="aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`CICOIDAF vidéo ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta buttonLabel="Voir le calendrier complet" buttonTo="/calendriers" />
    </>
  );
}
