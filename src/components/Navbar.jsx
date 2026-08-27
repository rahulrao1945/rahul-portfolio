import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { profile } from "../data/profile";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/20 py-2.5 px-5" : "py-1"
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-semibold tracking-tight text-[var(--color-text)]"
        >
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-amber)]">
            <Terminal size={16} strokeWidth={2.2} />
          </span>
          <span className="font-mono text-sm text-[var(--color-text-muted)]">
            &lt;{profile.name.split(" ")[0]}
            <span className="text-[var(--color-amber)]">/</span>&gt;
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--color-amber)] text-[#141005] hover:brightness-110 transition"
        >
          Let's talk
        </a>

        <button
          className="md:hidden p-2 rounded-lg text-[var(--color-text)] hover:bg-white/5"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <nav className="relative mt-20 mx-5 glass rounded-2xl p-4 flex flex-col gap-1 font-mono">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-[var(--color-text)] hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-4 py-3 rounded-lg font-medium bg-[var(--color-amber)] text-[#141005]"
          >
            Let's talk
          </a>
        </nav>
      </div>
    </header>
  );
}
