export type Skill = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  bullets: string[];
  accent: string;
};

export const skills: Skill[] = [
  {
    slug: "ai-engineering",
    number: "01",
    title: "AI Engineering",
    eyebrow: "LLMs · Agents · RAG · Automation",
    description: "I turn models into usable systems by connecting LLMs to APIs, databases, tools, memory and real workflows.",
    stack: ["Python", "LLMs", "RAG", "Vector DBs", "Tool Calling", "MCP", "LangChain", "LangGraph", "n8n"],
    bullets: [
      "LLM applications and prompt engineering",
      "RAG pipelines and vector search",
      "Tool calling, MCP and agentic workflows",
      "Business automation and AI agents",
      "Evaluation, observability and deployment thinking"
    ],
    accent: "violet"
  },
  {
    slug: "full-stack",
    number: "02",
    title: "Full-Stack Development",
    eyebrow: "Backend · APIs · Data · Web",
    description: "I build reliable backend systems and modern interfaces that communicate cleanly across APIs, databases and AI services.",
    stack: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "SQL", "Docker", "HTML", "CSS", "JavaScript", "React"],
    bullets: [
      "API architecture and HTTP fundamentals",
      "PostgreSQL data modeling and SQL",
      "Containerized services with Docker",
      "Responsive React interfaces",
      "Integration between frontend, backend and AI services"
    ],
    accent: "blue"
  },
  {
    slug: "cybersecurity",
    number: "03",
    title: "Cybersecurity",
    eyebrow: "Red Team · Web · API · OWASP",
    description: "I approach software from an offensive-security perspective: understand the attack surface, test assumptions and harden the system.",
    stack: ["Web Security", "API Security", "OWASP", "Red Team", "Pentesting", "Vulnerability Assessment", "Linux", "CLI"],
    bullets: [
      "Web application security testing",
      "API attack-surface analysis",
      "OWASP-oriented vulnerability assessment",
      "Reconnaissance and security validation",
      "Secure-by-design thinking during development"
    ],
    accent: "red"
  },
  {
    slug: "automation",
    number: "04",
    title: "Automation & Systems",
    eyebrow: "Workflow · Integration · Architecture",
    description: "I connect software components into practical systems that reduce repetitive work and keep business processes moving.",
    stack: ["n8n", "Webhooks", "REST", "PostgreSQL", "Telegram", "OAuth", "Docker", "Workflow Design"],
    bullets: [
      "Event-driven workflow design",
      "API and webhook integrations",
      "Database-backed automations",
      "AI-assisted business processes",
      "Architecture that can grow from workflow to product"
    ],
    accent: "green"
  }
];

export const posts = [
  { slug: "from-llm-to-agent", title: "From LLM to Agent: what actually changes?", category: "AI", date: "2026-10-07", read: "6 min" },
  { slug: "api-first-architecture", title: "Why API-first thinking makes AI systems easier to scale", category: "Backend", date: "2026-10-05", read: "5 min" },
  { slug: "secure-by-design", title: "Build it, then attack it: secure-by-design development", category: "Security", date: "2026-10-02", read: "7 min" }
];