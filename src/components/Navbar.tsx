import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const LINKS = [
  { href: "#about", fr: "À propos", en: "About" },
  { href: "#skills", fr: "Compétences", en: "Skills" },
  { href: "#projects", fr: "Projets", en: "Projects" },
  { href: "#awards", fr: "Distinctions", en: "Awards" },
  { href: "#experience", fr: "Expériences", en: "Experience" },
  { href: "#contact", fr: "Contact", en: "Contact" },
];

export function Navbar() {
  const { lang, toggle, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          Miali<span className="text-terracotta">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition hover:text-terracotta"
            >
              {t(l.fr, l.en)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="rounded-full border border-ink/15 bg-cream px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition hover:border-terracotta hover:text-terracotta"
          >
            {lang === "fr" ? "FR · EN" : "EN · FR"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md border border-ink/15 px-2 py-1 text-ink"
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-cream px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 text-sm font-medium text-ink/80 hover:bg-muted"
            >
              {t(l.fr, l.en)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
