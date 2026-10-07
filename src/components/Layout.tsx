import { NavLink, Outlet } from "react-router-dom";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { trackPortfolioEvent } from "../api/base44Client";

const links = [
  ["/", "Home"],
  ["/ai-engineering", "AI"],
  ["/full-stack", "Full-Stack"],
  ["/cybersecurity", "Security"],
  ["/automation", "Automation"],
  ["/blog", "Blog"]
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const navigate = (path: string) => {
    setOpen(false);
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <NavLink to="/" className="brand" onClick={() => trackPortfolioEvent("nav_home")}>
            <span className="brand-mark">A</span>
            <span>AMIR / SYSTEMS</span>
          </NavLink>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
          <div className={`nav-links ${open ? "open" : ""}`}>
            {links.map(([path, label]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>
            ))}
            <a className="nav-github" href="https://github.com/atmvir" target="_blank" rel="noreferrer">
              <Github size={16}/> GitHub <ArrowUpRight size={14}/>
            </a>
          </div>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="footer container">
        <div><span className="dot" /> Available for interesting systems work</div>
        <div className="footer-links">
          <a href="https://github.com/atmvir" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/blog">Writing</a>
          <a href="mailto:hello@example.com">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export function InternalLink({ to, children, className = "" }: { to: string; children: React.ReactNode; className?: string }) {
  return <NavLink className={className} to={to}>{children}</NavLink>;
}