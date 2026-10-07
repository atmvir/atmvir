import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { InternalLink } from "../components/Layout";
import { posts } from "../data/content";

const body: Record<string, string[]> = {
  "from-llm-to-agent": [
    "An LLM becomes part of an agentic system when the software around it gives the model a loop, tools, state and a way to observe results.",
    "The interesting engineering work is not the prompt alone. It is the boundary between the model and deterministic software: schemas, permissions, retries, tool contracts, memory and evaluation.",
    "A useful mental model is simple: model for reasoning, code for guarantees, tools for action."
  ],
  "api-first-architecture": [
    "AI features still live inside software systems. APIs give the model a controlled surface through which it can read data, request actions and compose capabilities.",
    "Designing the API first forces you to clarify ownership, validation, errors and security boundaries before the interface becomes complicated.",
    "The result is easier integration: the same backend can serve a web client, an agent, an automation workflow or a future mobile app."
  ],
  "secure-by-design": [
    "Security should be a property of the system, not a final checklist.",
    "When building an API or AI workflow, I want to understand trust boundaries early: authentication, authorization, input validation, secrets, external integrations and dangerous tool permissions.",
    "The offensive mindset is useful even during development: assume an input is hostile, trace what it can reach, then reduce the blast radius."
  ]
};

export function Blog() {
  return (
    <div className="container blog-page">
      <section className="page-heading">
        <p className="eyebrow">BLOG / ENGINEERING NOTES</p>
        <h1>Things I learn<br /><em>while building.</em></h1>
        <p>Practical notes about AI systems, backend architecture, automation and security.</p>
      </section>

      <div className="post-list blog-list">
        {posts.map(post => (
          <InternalLink key={post.slug} to={`/blog/${post.slug}`} className="post-row">
            <span className="post-category">{post.category}</span>
            <div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
            <span className="post-date">{post.date}</span>
            <ArrowUpRight size={16} />
          </InternalLink>
        ))}
      </div>
    </div>
  );
}

export function BlogPost({ slug }: { slug: string }) {
  const post = posts.find(item => item.slug === slug);

  if (!post) {
    return (
      <div className="container not-found">
        <h1>Post not found</h1>
        <InternalLink to="/blog">Back to blog</InternalLink>
      </div>
    );
  }

  return (
    <article className="container article">
      <InternalLink to="/blog" className="back-link">
        <ArrowLeft size={15} /> All notes
      </InternalLink>
      <p className="eyebrow">{post.category} / {post.date} / {post.read}</p>
      <h1>{post.title}</h1>
      {body[post.slug].map((paragraph, index) => (
        <p key={index} className={index === 0 ? "article-lead" : ""}>{paragraph}</p>
      ))}
    </article>
  );
}
