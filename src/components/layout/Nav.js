import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "../ui/Icon";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export const Nav = ({ onHome, onOpenContact }) => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container-x">
          <div
            className={`flex items-center justify-between rounded-full border border-white/10 px-4 py-2.5 transition-all ${
              scrolled ? "bg-ink-950/80 backdrop-blur-xl" : "bg-white/[0.02] backdrop-blur"
            }`}
          >
            <button
              onClick={onHome}
              className="flex items-center gap-2 pl-2 font-display text-xl font-semibold tracking-tight text-ink-50"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#5eead4]" />
              pratik<span className="text-accent">.</span>
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={onHome}
                  className="rounded-full px-3 py-1.5 text-sm text-ink-200 transition hover:bg-white/5 hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-full border border-white/10 p-2 text-ink-100 transition hover:border-accent/60 hover:text-accent"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                onClick={onOpenContact}
                className="hidden md:inline-flex btn-primary"
              >
                Book a call
              </button>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Menu"
                className="rounded-full border border-white/10 p-2 text-ink-100 md:hidden"
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-20 z-30 md:hidden">
          <div className="container-x">
            <div className="rounded-2xl border border-white/10 bg-ink-950/95 p-6 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setOpen(false);
                      onHome();
                    }}
                    className="rounded-lg px-3 py-3 text-lg text-ink-100 hover:bg-white/5 hover:text-accent"
                  >
                    {l.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setOpen(false);
                    onOpenContact();
                  }}
                  className="mt-3 btn-primary justify-center"
                >
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
