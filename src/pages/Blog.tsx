import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { InternalLink } from "../components/Layout";
import { posts } from "../data/content";

export function Blog() {
  return <div className="container blog-page">
    <section className="page-intro"><span className="kicker">04 / BLOG</span><h1>Engineering<br/><em>Notes.</em></h1><p>Short practical notes about AI systems, backend architecture, automation and security.</p></section>
    <div className="blog-list">{posts.map((p, i) => <InternalLink to={`/blog/${p.slug}`} className="blog-row" key={p.slug}><span className="blog-index">0{i+1}</span><div><span className="kicker">{p.category}</span><h2>{p.title}</h2><div className="meta"><span><Calendar size={13}/> {p.date}</span><span><Clock size={13}/> {p.read}</span></div></div><ArrowUpRight size={20}/></InternalLink>)}</div>
  </div>;
}

export function BlogPost({ slug }: { slug: string }) {
  const post = posts.find(p => p.slug === slug);
  if (!post) return <div className="container not-found"><h1>Post not found</h1><InternalLink to="/blog">Back to blog</InternalLink></div>;
  const body: Record<string, string[]> = {
    "from-llm-to-agent": ["An LLM becomes an agent when the system around it gives the model a loop, tools, state and a way to observe results.", "The interesting engineering work is not the prompt alone. It is the boundary between the model and deterministic software: schemas, permissions, retries, tool contracts, memory and evaluation.", "A useful mental model is simple: model for reasoning, code for guarantees, tools for action."],
    "api-first-architecture": ["AI features still live inside software systems. APIs give the model a controlled surface through which it can read data, request actions and compose capabilities.", "Designing the API first forces you to clarify ownership, validation, errors and security boundaries before the interface becomes complicated.", "The result is easier integration: the same backend can serve a web client, an agent, an automation workflow or a future mobile app."],
    "secure-by-design": ["Security should be a property of the system, not a final checklist.", "When building an API or AI workflow, I want to understand the trust boundaries early: authentication, authorization, input validation, secrets, external integrations and dangerous tool permissions.", "The offensive mindset is useful even during development: assume an input is hostile, trace what it can reach, then reduce the blast radius."]
  };
  return <article className="container article"><InternalLink to="/blog" className="back-link"><ArrowUpRight size={15}/> All notes</InternalLink><span className="kicker">{post.category} · {post.date}</span><h1>{post.title}</h1><p className="article-lead">{body[post.slug][0]}</p>{body[post.slug].slice(1).map(x => <p key={x}>{x}</p>)}</article>;
}