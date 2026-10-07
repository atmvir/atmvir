import { ArrowLeft, ArrowUpRight, Check, Cpu } from "lucide-react";
import { InternalLink } from "../components/Layout";
import { skills } from "../data/content";

export function SkillPage({ slug }: { slug: string }) {
  const skill = skills.find(s => s.slug === slug);
  if (!skill) return <div className="container not-found"><h1>Skill not found</h1><InternalLink to="/">Back home</InternalLink></div>;
  return <div className="skill-page">
    <section className={`skill-hero ${skill.accent}`}>
      <div className="container">
        <InternalLink to="/" className="back-link"><ArrowLeft size={15}/> Back to overview</InternalLink>
        <div className="big-number">{skill.number}</div>
        <span className="kicker">{skill.eyebrow}</span>
        <h1>{skill.title}</h1>
        <p>{skill.description}</p>
      </div>
    </section>
    <section className="container detail-grid">
      <div className="detail-main">
        <span className="kicker">WHAT I FOCUS ON</span>
        <h2>Turning technical pieces into <em>working systems.</em></h2>
        <div className="bullet-list">{skill.bullets.map(b => <div key={b}><Check size={17}/><span>{b}</span></div>)}</div>
      </div>
      <aside className="detail-side">
        <div className="side-card"><Cpu size={20}/><span>TECH STACK</span><div className="tag-cloud">{skill.stack.map(x => <span key={x}>{x}</span>)}</div></div>
        <InternalLink to="/blog" className="side-link">Read engineering notes <ArrowUpRight size={15}/></InternalLink>
      </aside>
    </section>
  </div>;
}