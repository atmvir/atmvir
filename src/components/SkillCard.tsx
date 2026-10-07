import { ArrowUpRight } from "lucide-react";
import { Skill } from "../data/content";
import { InternalLink } from "./Layout";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <InternalLink to={`/${skill.slug}`} className={`skill-card ${skill.accent}`}>
      <div className="card-top"><span>{skill.number}</span><ArrowUpRight size={18}/></div>
      <div>
        <div className="eyebrow">{skill.eyebrow}</div>
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
      </div>
      <div className="stack-row">{skill.stack.slice(0, 5).map(x => <span key={x}>{x}</span>)}</div>
    </InternalLink>
  );
}