import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, ShieldCheck, Workflow } from "lucide-react";
import { SkillCard } from "../components/SkillCard";
import { InternalLink } from "../components/Layout";
import { skills, posts } from "../data/content";
import { trackPortfolioEvent } from "../api/base44Client";

const icons = [BrainCircuit, Code2, ShieldCheck, Workflow];

export function Home() {
  return <div>
    <section className="hero container">
      <div className="hero-copy">
        <div className="status"><span className="pulse"/> AI Engineer · Full-Stack Developer · Cybersecurity</div>
        <h1>I Build<br/><span>Intelligent Systems.</span></h1>
        <p className="hero-lead">I design and build intelligent, automated, and secure software systems — combining AI Agents, LLMs, Backend Architecture, Modern Web Technologies, Automation, and Offensive Security.</p>
        <div className="hero-actions">
          <InternalLink to="/ai-engineering" className="btn btn-primary" onClick={() => trackPortfolioEvent("hero_explore")}>Explore my work <ArrowUpRight size={17}/></InternalLink>
          <a className="btn btn-ghost" href="https://github.com/atmvir" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17}/></a>
        </div>
      </div>
      <div className="hero-orbit" aria-hidden="true">
        <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="core"><BrainCircuit size={48}/><span>AI<br/>SYSTEM</span></div>
        <div className="orb orb-1">LLM</div><div className="orb orb-2">API</div><div className="orb orb-3">DB</div><div className="orb orb-4">SEC</div>
      </div>
    </section>

    <section className="principle-band">
      <div className="container principle">
        <span>MY SYSTEMS THINKING</span>
        <strong>Build <i>→</i> Connect <i>→</i> Automate <i>→</i> Secure</strong>
        <span className="principle-note">The goal isn't just code. It's a system that works.</span>
      </div>
    </section>

    <section className="section container">
      <div className="section-heading"><div><span className="kicker">01 / CAPABILITIES</span><h2>Four angles.<br/><em>One engineer.</em></h2></div><p>From model orchestration to database design and offensive testing, I work across the boundaries where systems become useful.</p></div>
      <div className="skill-grid">{skills.map((s, i) => { const Icon = icons[i]; return <div key={s.slug} className="skill-wrap"><div className="icon-badge"><Icon size={20}/></div><SkillCard skill={s}/></div>; })}</div>
    </section>

    <section className="section container split-section">
      <div><span className="kicker">02 / ABOUT</span><h2>Engineering with<br/><em>context.</em></h2></div>
      <div className="about-copy">
        <p>I don't see AI, backend, frontend, automation and security as separate silos. A production system is a chain of decisions: architecture determines how components connect; implementation determines how they behave; security determines what can go wrong.</p>
        <p>My focus is building software that can reason, communicate with external systems, execute tools, persist data and remain maintainable as it grows.</p>
        <div className="quote">“Build. Automate. Secure. Scale.”</div>
      </div>
    </section>

    <section className="section container">
      <div className="section-heading compact"><div><span className="kicker">03 / LATEST NOTES</span><h2>Writing & experiments.</h2></div><InternalLink to="/blog" className="text-link">View all <ArrowUpRight size={15}/></InternalLink></div>
      <div className="post-grid">{posts.map(p => <InternalLink key={p.slug} to={`/blog/${p.slug}`} className="post-card"><div><span>{p.category}</span><span>{p.date}</span></div><h3>{p.title}</h3><small>{p.read} read <ArrowUpRight size={13}/></small></InternalLink>)}</div>
    </section>

    <section className="cta container">
      <div><span className="kicker">LET'S BUILD</span><h2>Have a hard problem?<br/><em>Let's turn it into a system.</em></h2></div>
      <a href="mailto:hello@example.com" className="btn btn-primary">Start a conversation <ArrowUpRight size={17}/></a>
    </section>
    <div className="scroll-hint"><ArrowDown size={15}/> Scroll to explore</div>
  </div>;
}