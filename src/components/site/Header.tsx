import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-cicoidaf.jpg";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/conferences", label: "Conférences" },
  { to: "/evenements", label: "Événements" },
  { to: "/calendriers", label: "Calendriers" },
  { to: "/themes", label: "Thèmes" },
  { to: "/actualite", label: "Actualité" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/contacts", label: "Contacts" },
  { to: "/faire-un-don", label: "Faire un don" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="CICOIDAF" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  active ? "text-primary" : "text-ink"
                }`}
              >
                {n.label}
                {active && (
                  <span className="block h-0.5 bg-primary mt-1" aria-hidden />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/inscription" className="btn-primary">S'inscrire</Link>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`py-2 text-base font-medium ${
                  pathname === n.to ? "text-primary" : "text-ink"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/inscription"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              S'inscrire
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
