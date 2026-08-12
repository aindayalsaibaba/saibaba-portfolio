import { useEffect, useState } from "react";

export default function Nav({ name }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: "Work" },
    { href: "#labs", label: "Labs" },
    { href: "#about", label: "About" },
  ];

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          {name}
          <span className="nav-logo-dot">.</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="/Saibaba_Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>

        <a href="#contact" className="nav-cta">
          Say hi 👋
        </a>

        <button
          className="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/Saibaba_Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Say hi 👋
          </a>
        </div>
      )}
    </header>
  );
}
