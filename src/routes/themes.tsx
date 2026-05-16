import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase, HeartPulse, Landmark, GraduationCap, Cpu, TrendingUp, Users2, Building2,
} from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { FinalCta } from "@/components/site/FinalCta";
import banner from "@/assets/photo-auditorium.jpg";

export const Route = createFileRoute("/themes")({
  head: () => ({
    meta: [
      { title: "Thèmes — CICOIDAF" },
      { name: "description", content: "Huit grands axes thématiques structurent les travaux du CICOIDAF." },
    ],
  }),
  component: () => (
    <>
      <PageBanner title="Thèmes" subtitle="Huit thèmes structurent les travaux du CICOIDAF." image={banner} />

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow">Nos grands axes</p>
            <h2 className="section-title mt-3">Huit domaines, une ambition commune</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { I: Briefcase, t: "Entreprise", d: "Innovation entrepreneuriale et création de valeur" },
              { I: HeartPulse, t: "Santé & Médical", d: "Solutions de santé publique et accès aux soins" },
              { I: Landmark, t: "Banque & Économie", d: "Finance solidaire et inclusion financière" },
              { I: GraduationCap, t: "Éducation & Culture", d: "Formation, savoir et patrimoine africain" },
              { I: Cpu, t: "Ingénierie & Technologie", d: "Tech durable et infrastructures numériques" },
              { I: TrendingUp, t: "Investissement & Partenariats", d: "Capitaux et alliances pour le continent" },
              { I: Users2, t: "Sciences sociales & Humanitaire", d: "Recherche sociale et action solidaire" },
              { I: Building2, t: "Développement & Infrastructures", d: "Urbanisme, transport et énergies" },
            ].map(({ I, t, d }) => (
              <div key={t} className="card-soft text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-accent text-primary flex items-center justify-center mb-4">
                  <I size={26} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{t}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  ),
});
