import { ArrowUpRight } from "lucide-react";
import { Skill } from "../data/content";
import { InternalLink } from "./Layout";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <InternalLink to={`/${skill.slug}`} className="skill-card">
      <div className="skill-card-number">{skill.number}</div>
      <div>
        <p className="eyebrow">{skill.eyebrow}</p>
        <h3>{skill.title}</h3>
        <p className="skill-card-description">{skill.description}</p>
      </div>
      <div className="skill-card-footer">
        <span>View skill</span>
        <ArrowUpRight size={16} />
      </div>
    </InternalLink>
  );
}
