import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, ShieldCheck, Handshake, BellRing } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { FinalCta } from "@/components/site/FinalCta";
import banner from "@/assets/photo-auditorium.jpg";

export const Route = createFileRoute("/conferences")({
  head: () => ({
    meta: [
      { title: "Nos conférences — CICOIDAF" },
      { name: "description", content: "Pourquoi participer aux conférences du CICOIDAF : carrefours d'innovation, source fiable, organisateurs et partenaires." },
    ],
  }),
  component: ConferencesPage,
});

function ConferencesPage() {
  return (
    <>
      <PageBanner
        title="Nos conférences"
        subtitle="Bienvenue sur le Portail CICOIDAF — Le moteur de vos initiatives pour l'Afrique."
        image={banner}
      />

      <section className="py-20">
        <div className="container-x max-w-4xl">
          <p className="text-ink/80 leading-relaxed text-lg mb-8 text-center">
            Le CICOIDAF est votre sésame pour transformer vos idées en projets concrets. Au cœur du{" "}
            <strong>Cercle des Œuvres pour les Initiatives de Développement Africain</strong>, notre plateforme
            vous connecte aux conférences internationales les plus influentes dédiées au progrès du continent.
            Que vous soyez expert, chercheur ou acteur de terrain, restez informé des rendez-vous stratégiques
            en Afrique et partout dans le monde.
          </p>
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-INOP-DRj-s"
              title="CICOIDAF conférences"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow">4 raisons</p>
            <h2 className="section-title mt-3">Pourquoi participer aux conférences du CICOIDAF ?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                I: Lightbulb,
                n: "01",
                t: "Des carrefours d'innovation",
                d: "Rejoindre nos événements en 2026, c'est s'attaquer aux véritables enjeux du développement. Nos conférences couvrent : Ingénierie et technologies durables ; Santé, sciences sociales et éducation ; Commerce, entrepreneuriat et actions humanitaires ; Sciences de la vie économique ; Projets multidisciplinaires et initiatives communautaires.",
              },
              {
                I: ShieldCheck,
                n: "02",
                t: "Une source fiable pour un impact réel",
                d: "En tant que leader dans l'organisation et le référencement d'événements de développement, le CICOIDAF s'engage à vous fournir des informations authentiques et vérifiées. Notre portail exhaustif vous permet de planifier vos soumissions, de suivre les séminaires et de participer à des webinaires de haut niveau.",
              },
              {
                I: Handshake,
                n: "03",
                t: "Pour les organisateurs et partenaires",
                d: "Collaborer avec le CICOIDAF, c'est garantir à vos événements une visibilité exclusive auprès d'un public ciblé, passionné par l'émergence africaine, assurant ainsi un rayonnement et un impact social optimal.",
              },
              {
                I: BellRing,
                n: "04",
                t: "Abonnez-vous dès aujourd'hui",
                d: "Ne manquez aucune opportunité de faire briller vos initiatives. Explorez les conférences dans votre domaine ou votre ville, développez votre réseau avec des leaders partageant vos valeurs et contribuez activement à la réussite collective.",
              },
            ].map(({ I, n, t, d }) => (
              <div key={n} className="card-soft">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-3xl font-bold text-primary/30">{n}</span>
                  <div className="w-12 h-12 rounded-lg bg-accent text-primary flex items-center justify-center">
                    <I size={22} />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{t}</h3>
                <p className="text-ink/75 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta buttonLabel="Voir les événements" buttonTo="/evenements" />
    </>
  );
}
