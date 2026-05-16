import { Link } from "@tanstack/react-router";
import globalImg from "@/assets/global-conference.jpg";

interface CtaProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonTo?: string;
}

export function FinalCta({
  title = "Ensemble, bâtissons l'avenir du continent africain.",
  subtitle = "Rejoignez la communauté CICOIDAF et participez aux rencontres internationales 2026-2027.",
  buttonLabel = "Réserver ma place",
  buttonTo = "/calendriers",
}: CtaProps) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={globalImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(139,0,0,0.55)] via-[rgba(139,0,0,0.45)] to-[rgba(0,0,0,0.35)]" />
      <div className="relative container-x py-20 md:py-28 text-center text-white">
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-8">
          <Link to={buttonTo} className="btn-ghost-light">{buttonLabel} →</Link>
        </div>
      </div>
    </section>
  );
}
