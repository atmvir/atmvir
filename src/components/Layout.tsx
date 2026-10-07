import { NavLink, Outlet } from "react-router-dom";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { trackPortfolioEvent } from "../api/base44Client";

const links = [
  ["/", "Home"],
  ["/ai-engineering", "AI Engineering"],
  ["/full-stack", "Full-Stack"],
  ["/cybersecurity", "Cybersecurity"],
  ["/blog", "Blog"]
];

export function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Primary navigation">
          <NavLink
            to="/"
            className="brand"
            onClick={() => {
              setOpen(false);
              trackPortfolioEvent("nav_home");
            }}
          >
            <span className="brand-mark">A</span>
            <span>AMIR HOSSEIN</span>
          </NavLink>

          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen(value => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {links.map(([path, label]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <a
              href="https://github.com/atmvir"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackPortfolioEvent("github_click")}
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>
      </header>

      <main><Outlet /></main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Amir Hossein</strong>
            <span>AI Engineer · Full-Stack Developer · Cybersecurity</span>
          </div>
          <div className="footer-links">
            <a href="https://github.com/atmvir" target="_blank" rel="noreferrer">GitHub</a>
            <NavLink to="/blog">Blog</NavLink>
            <a href="mailto:hello@example.com">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function InternalLink({
  to,
  children,
  className = ""
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return <NavLink className={className} to={to}>{children}</NavLink>;
}
