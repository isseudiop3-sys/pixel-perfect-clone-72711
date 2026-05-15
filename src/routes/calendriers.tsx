import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Calendar } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { FinalCta } from "@/components/site/FinalCta";
import banner from "@/assets/photo-auditorium-2.jpg";

export const Route = createFileRoute("/calendriers")({
  head: () => ({
    meta: [
      { title: "Calendriers — CICOIDAF" },
      { name: "description", content: "Calendrier chronologique des conférences et événements du CICOIDAF de 2026 à 2027." },
    ],
  }),
  component: CalendriersPage,
});

const PERIODS = [
  {
    n: "01", month: "Novembre 2026", countries: "FRANCE",
    events: [
      { name: "CICOIDAF", date: "14-28 Novembre 2026", slug: "cicoidaf-2026-11" },
      { name: "RÉUSSITE D'AFRIQUE", date: "26-27 Novembre 2026", slug: "reussite-2026-11" },
    ],
  },
  {
    n: "02", month: "Décembre 2026", countries: "FRANCE, CÔTE D'IVOIRE, CAMEROUN, SÉNÉGAL",
    events: [
      { name: "FESPASOL", date: "21-26 Décembre 2026", slug: "fespasol-2026-12" },
      { name: "DANCE PEOPLE MUSIC", date: "27-31 Décembre 2026", slug: "dpm-2026-12" },
    ],
  },
  {
    n: "03", month: "Février 2027", countries: "CAMEROUN, CÔTE D'IVOIRE, TOGO, BURKINA FASO",
    events: [
      { name: "COIDAF FORUM", date: "10-13 Février 2027", slug: "forum-2027-02" },
      { name: "RÉUSSITE D'AFRIQUE", date: "25-27 Février 2027", slug: "reussite-2027-02" },
    ],
  },
  {
    n: "04", month: "Mars 2027", countries: "CAMEROUN, CÔTE D'IVOIRE, MAROC, SÉNÉGAL",
    events: [
      { name: "FESPASOL", date: "12-13 Mars 2027", slug: "fespasol-2027-03" },
      { name: "CICOIDAF", date: "24-27 Mars 2027", slug: "cicoidaf-2027-03" },
    ],
  },
  {
    n: "05", month: "Juin 2027", countries: "CÔTE D'IVOIRE, SÉNÉGAL, FRANCE",
    events: [
      { name: "RACOIDAF", date: "21-26 Juin 2027", slug: "racoidaf-2027-06" },
      { name: "DANCE PEOPLE MUSIC", date: "27-30 Juin 2027", slug: "dpm-2027-06" },
    ],
  },
  {
    n: "06", month: "Août 2027", countries: "CAMEROUN, CÔTE D'IVOIRE, SÉNÉGAL",
    events: [
      { name: "FESPASOL", date: "16-21 Août 2027", slug: "fespasol-2027-08" },
      { name: "DANCE PEOPLE MUSIC", date: "27-28 Août 2027", slug: "dpm-2027-08" },
    ],
  },
  {
    n: "07", month: "Novembre 2027", countries: "CANADA, TOGO",
    events: [
      { name: "CICOIDAF", date: "17-25 Novembre 2027", slug: "cicoidaf-2027-11" },
      { name: "RÉUSSITE D'AFRIQUE", date: "26-28 Novembre 2027", slug: "reussite-2027-11" },
    ],
  },
  {
    n: "08", month: "Décembre 2027", countries: "BURKINA FASO, CAMEROUN, MAROC",
    events: [
      { name: "FESPASOL", date: "20-31 Décembre 2027", slug: "fespasol-2027-12" },
      { name: "DANCE PEOPLE MUSIC", date: "30-31 Décembre 2027", slug: "dpm-2027-12" },
    ],
  },
];

function CalendriersPage() {
  return (
    <>
      <PageBanner
        title="Calendriers"
        subtitle="Tous les rendez-vous du Cercle des Œuvres pour les Initiatives de Développement Africain."
        image={banner}
      />

      <section className="py-20">
        <div className="container-x">
          <div className="text-center mb-14">
            <p className="section-eyebrow">Nos rendez-vous</p>
            <h2 className="section-title mt-3">Chronologie 2026 — 2027</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PERIODS.map((p) => (
              <div key={p.n} className="card-soft">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{p.month}</h3>
                    <p className="text-xs text-ink/60 flex items-center gap-1">
                      <MapPin size={12} /> {p.countries}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mt-4">
                  {p.events.map((ev) => (
                    <li key={ev.slug} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border pt-3">
                      <div>
                        <p className="font-semibold text-foreground">{ev.name}</p>
                        <p className="text-xs text-ink/60 flex items-center gap-1">
                          <Calendar size={12} /> {ev.date}
                        </p>
                      </div>
                      <Link
                        to="/inscription"
                        search={{ event: ev.slug } as never}
                        className="btn-primary text-xs px-4 py-2"
                      >
                        S'inscrire
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
