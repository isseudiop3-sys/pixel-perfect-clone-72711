import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-cicoidaf.jpg";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.01_0)] text-white/85 mt-0">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="CICOIDAF" className="h-14 w-auto bg-white p-2 rounded" />
          <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-md">
            Cercle des Œuvres pour les Initiatives de Développement Africain.
            Une plateforme dédiée à l'émergence du continent.
          </p>
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
            <li><Link to="/partenaires" className="hover:text-primary">Partenaires</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-primary" />62 Rue du Landy, Aubervilliers, Paris</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-primary" />+33 07 66 11 36 47</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-primary" />cicoidaf-conference@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-x text-xs text-white/50 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} CICOIDAF — COIDAF INTL. Tous droits réservés.</span>
          <span>Édition 2026 — L'émergence africaine en marche</span>
        </div>
      </div>
    </footer>
  );
}
