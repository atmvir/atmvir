import { ArrowUpRight } from "lucide-react";
import { SkillCard } from "../components/SkillCard";
import { InternalLink } from "../components/Layout";
import { skills, posts } from "../data/content";

export function Home() {
  return (
    <>
      <section className="home-intro container">
        <div className="intro-meta">
          <span>AI Engineer · Full-Stack Developer · Cybersecurity</span>
          <span>Independent Software Engineer</span>
        </div>

        <div className="intro-grid">
          <div>
            <p className="eyebrow">HELLO, I'M AMIR HOSSEIN</p>
            <h1>I build <em>intelligent systems.</em></h1>
          </div>
          <div className="intro-copy">
            <p>
              I design and build intelligent, automated, and secure software systems —
              combining AI Agents, LLMs, backend architecture, modern web technologies,
              automation and offensive security.
            </p>
            <div className="link-row">
              <InternalLink to="/ai-engineering" className="underlined-link">
                Explore my skills <ArrowUpRight size={15} />
              </InternalLink>
              <a href="https://github.com/atmvir" target="_blank" rel="noreferrer" className="underlined-link">
                GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="container statement-inner">
          <p className="eyebrow">HOW I THINK ABOUT SOFTWARE</p>
          <p className="statement-text">Build it → Connect it → Automate it → Secure it</p>
          <p className="statement-note">
            The goal is not just to write code. It is to design systems that work in the real world.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <div>
            <p className="eyebrow">01 / SKILLS</p>
            <h2>What I work on</h2>
          </div>
          <p>
            Three connected disciplines. Each page goes deeper into the technologies,
            problems and engineering approach behind the work.
          </p>
        </div>

        <div className="skill-list">
          {skills.map(skill => <SkillCard key={skill.slug} skill={skill} />)}
        </div>
      </section>

      <section className="section container about-section">
        <div>
          <p className="eyebrow">02 / ABOUT</p>
          <h2>One system,<br /><em>multiple perspectives.</em></h2>
        </div>
        <div className="long-copy">
          <p>
            My main focus is Artificial Intelligence, LLMs, AI Agents and Automation.
            I connect models to APIs, databases, tools and workflows so they can do more
            than generate text: they can reason about a task, call tools and participate
            in real processes.
          </p>
          <p>
            On the backend I work with Python, FastAPI, REST APIs, PostgreSQL, SQL and Docker.
            On the frontend I use HTML, CSS, JavaScript and React to build interfaces that
            communicate cleanly with those services.
          </p>
          <p>
            Security completes the picture. I use an offensive mindset to understand attack
            surfaces, test assumptions and build software with security in mind from the start.
          </p>
          <div className="principles">
            <span>AI</span><span>+</span><span>BACKEND</span><span>+</span><span>WEB</span><span>+</span><span>SECURITY</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <div>
            <p className="eyebrow">03 / WRITING</p>
            <h2>Notes from the work</h2>
          </div>
          <InternalLink to="/blog" className="underlined-link">All posts <ArrowUpRight size={15} /></InternalLink>
        </div>

        <div className="post-list">
          {posts.map(post => (
            <InternalLink key={post.slug} to={`/blog/${post.slug}`} className="post-row">
              <span className="post-category">{post.category}</span>
              <div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              <span className="post-date">{post.date}</span>
              <ArrowUpRight size={16} />
            </InternalLink>
          ))}
        </div>
      </section>

      <section className="contact-section container">
        <p className="eyebrow">04 / CONTACT</p>
        <h2>Let's build something<br /><em>useful.</em></h2>
        <p>If you want to discuss an AI system, backend project, automation or security problem, get in touch.</p>
        <a className="underlined-link large-link" href="mailto:hello@example.com">
          Start a conversation <ArrowUpRight size={17} />
        </a>
      </section>
    </>
  );
}
