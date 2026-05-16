import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
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
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/60 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_-8px_rgba(0,0,0,0.12)]" : "shadow-none"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20 lg:h-24 gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 transition-opacity hover:opacity-80"
          aria-label="CICOIDAF — Accueil"
        >
          <img
            src={logo}
            alt="CICOIDAF"
            className="h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden xl:flex flex-1 items-center justify-center gap-1">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-3 py-2 text-[13.5px] font-medium tracking-tight whitespace-nowrap rounded-md transition-colors duration-200 hover:text-primary ${
                  active ? "text-primary" : "text-foreground/80"
                }`}
              >
                <span className="whitespace-nowrap">{n.label}</span>
                <span
                  className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-primary origin-center transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Link
            to="/faire-un-don"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-foreground/70 hover:text-primary whitespace-nowrap transition-colors duration-200"
          >
            <Heart size={15} className="opacity-80" />
            <span className="whitespace-nowrap">Faire un don</span>
          </Link>
          <Link
            to="/inscription"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-[13.5px] font-semibold text-primary-foreground shadow-[0_4px_14px_-4px_rgba(190,40,40,0.45)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_22px_-6px_rgba(190,40,40,0.55)] hover:-translate-y-0.5 active:translate-y-0"
          >
            S'inscrire
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-muted transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden overflow-hidden border-t border-border/60 bg-white transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x py-4 flex flex-col">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`py-2.5 text-[15px] font-medium whitespace-nowrap border-b border-border/40 last:border-b-0 transition-colors ${
                  active ? "text-primary" : "text-foreground/85 hover:text-primary"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-3 mt-4">
            <Link
              to="/faire-un-don"
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors whitespace-nowrap"
            >
              <Heart size={15} />
              Faire un don
            </Link>
            <Link
              to="/inscription"
              className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_4px_14px_-4px_rgba(190,40,40,0.45)] hover:bg-primary/90 transition-all"
            >
              S'inscrire
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
