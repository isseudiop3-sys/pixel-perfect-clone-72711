import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Video, Linkedin, Facebook, Youtube, Instagram, Twitter, MessageCircle, Music2 } from "lucide-react";
import { PageBanner } from "@/components/site/PageBanner";
import { FinalCta } from "@/components/site/FinalCta";
import banner from "@/assets/global-conference.jpg";

export const Route = createFileRoute("/actualite")({
  head: () => ({
    meta: [
      { title: "Actualité — CICOIDAF" },
      { name: "description", content: "Actualité humanitaire et diplomatique : Banque mondiale, ONU, Union africaine, CEDEAO, CEMAC, AES, BAD." },
    ],
  }),
  component: ActualitePage,
});

const SOCIALS = [
  { I: Linkedin, href: "https://www.linkedin.com/company/coidaf/", label: "LinkedIn" },
  { I: Facebook, href: "https://facebook.com/coidaf", label: "Facebook" },
  { I: MessageCircle, href: "https://wa.me/33766113647", label: "WhatsApp" },
  { I: Youtube, href: "https://youtube.com/@coidaf", label: "YouTube" },
  { I: Music2, href: "https://tiktok.com/@coidaf", label: "TikTok" },
  { I: Instagram, href: "https://instagram.com/coidaf", label: "Instagram" },
  { I: Twitter, href: "https://twitter.com/coidaf", label: "Twitter / X" },
];

const NEWS_LINKS = [
  { name: "Banque mondiale", url: "https://www.banquemondiale.org/ext/fr/news" },
  { name: "Nations Unies", url: "https://www.un.org/fr/events-and-news" },
  { name: "Union africaine", url: "https://au.int/fr/happening" },
  { name: "Union européenne", url: "https://european-union.europa.eu/news-and-events_en?prefLang=fr" },
  { name: "Organisation des États Américains", url: "https://www.oas.org/ext/fr/principal/oea/etats-membre/" },
  { name: "AES — Alliance des États du Sahel", url: "https://aes.ml/actualite/" },
  { name: "Banque africaine de développement", url: "https://www.afdb.org/fr/news-and-even" },
  { name: "CEDEAO", url: "https://www.ecowas.int/c/actualites/?lang=fr" },
  { name: "CEMAC", url: "https://cemac.int/news/" },
  { name: "COIDAF International", url: "https://coidafinternational.jimdofree.com/" },
];

function ActualitePage() {
  return (
    <>
      <PageBanner
        title="Actualité"
        subtitle="Actualité humanitaire, diplomatique et institutionnelle."
        image={banner}
      />

      {/* Réseaux sociaux */}
      <section className="py-16 bg-surface">
        <div className="container-x text-center">
          <p className="section-eyebrow">Suivez-nous</p>
          <h2 className="section-title mt-3 mb-3">Les réseaux sociaux du COIDAF</h2>
          <p className="text-ink/70 max-w-xl mx-auto mb-8">
            Restez connectés à toute l'actualité du Cercle des Œuvres pour les Initiatives de Développement Africain.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {SOCIALS.map(({ I, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-md hover:border-primary hover:text-primary transition"
              >
                <I size={18} /> <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Actualité institutionnelle */}
      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-eyebrow">Sources officielles</p>
            <h2 className="section-title mt-3">Actualité humanitaire & diplomatique</h2>
            <p className="text-ink/70 mt-3">
              Suivez en direct l'actualité des grandes institutions internationales et régionales partenaires du développement africain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEWS_LINKS.map((l) => (
              <a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-soft flex items-center justify-between gap-3 group"
              >
                <span className="font-semibold">{l.name}</span>
                <ExternalLink size={18} className="text-primary group-hover:translate-x-1 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Conférence Google Meet */}
      <section className="py-20 bg-surface">
        <div className="container-x text-center">
          <p className="section-eyebrow">Rejoindre la conférence</p>
          <h2 className="section-title mt-3 mb-6">Conférence en ligne</h2>
          <a
            href="https://meet.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Video size={18} className="mr-2" /> Rejoindre sur Google Meet
          </a>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
