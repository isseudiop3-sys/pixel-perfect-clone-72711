import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube, Instagram, Twitter, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-cicoidaf.jpg";
import bg from "@/assets/footer-bg.jpg";

const SOCIALS = [
  { I: Linkedin, href: "https://www.linkedin.com/company/coidaf/", label: "LinkedIn" },
  { I: Facebook, href: "https://facebook.com/coidaf", label: "Facebook" },
  { I: MessageCircle, href: "https://wa.me/33766113647", label: "WhatsApp" },
  { I: Youtube, href: "https://youtube.com/@coidaf", label: "YouTube" },
  { I: Instagram, href: "https://instagram.com/coidaf", label: "Instagram" },
  { I: Twitter, href: "https://twitter.com/coidaf", label: "Twitter / X" },
];

export function Footer() {
  return (
    <footer className="relative text-white/85 mt-0 isolate">
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover -z-10" loading="lazy" />
      <div className="absolute inset-0 bg-black/65 -z-10" />
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="CICOIDAF" className="h-14 w-auto bg-white p-2 rounded" />
          <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-md">
            Cercle des Œuvres pour les Initiatives de Développement Africain.
            Une plateforme dédiée à l'émergence du continent.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SOCIALS.map(({ I, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition"
              >
                <I size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/a-propos" className="hover:text-primary">À propos</Link></li>
            <li><Link to="/conferences" className="hover:text-primary">Conférences</Link></li>
            <li><Link to="/evenements" className="hover:text-primary">Événements</Link></li>
            <li><Link to="/themes" className="hover:text-primary">Thèmes</Link></li>
            <li><Link to="/actualite" className="hover:text-primary">Actualité</Link></li>
            <li><Link to="/partenaires" className="hover:text-primary">Partenaires</Link></li>
            <li><Link to="/faire-un-don" className="hover:text-primary">Faire un don</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-primary" />62 Rue du Landy, Aubervilliers, Paris</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-primary" />+33 07 66 11 36 47</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-primary" />coidaf-france@outlook.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 relative">
        <div className="container-x text-xs text-white/60 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} CICOIDAF tous droits reservé — Le CICOIDAF est un bien privé enrigistré du COIDAF INTL.</span>
          <span>Édition 2026 — Le développement africain en marche</span>
        </div>
      </div>
    </footer>
  );
}
