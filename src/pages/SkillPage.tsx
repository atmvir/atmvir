import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { InternalLink } from "../components/Layout";
import { skills } from "../data/content";

export function SkillPage({ slug }: { slug: string }) {
  const skill = skills.find(item => item.slug === slug);

  if (!skill) {
    return (
      <div className="container not-found">
        <h1>Skill not found</h1>
        <InternalLink to="/">Back home</InternalLink>
      </div>
    );
  }

  return (
    <>
      <section className="skill-header container">
        <InternalLink to="/" className="back-link">
          <ArrowLeft size={15} /> Back home
        </InternalLink>
        <div className="skill-header-grid">
          <div>
            <p className="eyebrow">{skill.number} / {skill.eyebrow}</p>
            <h1>{skill.title}</h1>
          </div>
          <p className="skill-lead">{skill.description}</p>
        </div>
      </section>

      <section className="container detail-layout">
        <main>
          <p className="eyebrow">OVERVIEW</p>
          <p className="detail-lead">{skill.overview}</p>

          <div className="detail-block">
            <p className="eyebrow">FOCUS AREAS</p>
            <div className="focus-list">
              {skill.bullets.map(item => (
                <div key={item}>
                  <Check size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside>
          <div className="aside-block">
            <p className="eyebrow">TECHNOLOGIES</p>
            <div className="technology-list">
              {skill.stack.map(item => <span key={item}>{item}</span>)}
            </div>
          </div>

          <div className="aside-block">
            <p className="eyebrow">REFERENCES</p>
            <div className="reference-list">
              {skill.links.map(link => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="container page-next">
        <InternalLink to="/blog" className="underlined-link">
          Read engineering notes <ArrowUpRight size={15} />
        </InternalLink>
      </section>
    </>
  );
}
