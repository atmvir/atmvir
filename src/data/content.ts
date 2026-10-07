export type SkillLink = { label: string; href: string };

export type Skill = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  overview: string;
  stack: string[];
  bullets: string[];
  links: SkillLink[];
};

export const skills: Skill[] = [
  {
    slug: "ai-engineering",
    number: "01",
    title: "AI Engineering",
    eyebrow: "Artificial Intelligence · LLMs · Agents",
    description: "I build practical AI systems that connect models with APIs, databases, tools and real workflows.",
    overview: "My main focus is turning LLM capabilities into reliable software. I work across LLM applications, prompt engineering, RAG, vector search, tool calling, MCP, AI agents and agentic workflows.",
    stack: ["Python", "LLMs", "RAG", "Vector Databases", "Tool Calling", "MCP", "LangChain", "LangGraph", "n8n"],
    bullets: [
      "LLM applications and prompt engineering",
      "RAG pipelines, embeddings and vector search",
      "Tool calling, MCP and agentic workflows",
      "AI agents connected to real APIs and databases",
      "Automation systems that turn AI into useful actions"
    ],
    links: [
      { label: "LangChain", href: "https://www.langchain.com/" },
      { label: "LangGraph", href: "https://www.langchain.com/langgraph" },
      { label: "Model Context Protocol", href: "https://modelcontextprotocol.io/" },
      { label: "n8n", href: "https://n8n.io/" },
      { label: "Hugging Face", href: "https://huggingface.co/" }
    ]
  },
  {
    slug: "full-stack",
    number: "02",
    title: "Full-Stack Development",
    eyebrow: "Backend · APIs · Databases · Web",
    description: "I design backend services and modern web interfaces that communicate cleanly across APIs, data and AI services.",
    overview: "My backend work is centered on Python, FastAPI, REST APIs, PostgreSQL, SQL and Docker. On the frontend I use HTML, CSS, JavaScript and React to build responsive interfaces that integrate with those systems.",
    stack: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "SQL", "Docker", "HTML", "CSS", "JavaScript", "React"],
    bullets: [
      "REST API architecture and HTTP fundamentals",
      "PostgreSQL data modeling and SQL",
      "Containerized services with Docker",
      "Responsive React interfaces",
      "Integration between frontend, backend and AI services"
    ],
    links: [
      { label: "Python", href: "https://www.python.org/" },
      { label: "FastAPI", href: "https://fastapi.tiangolo.com/" },
      { label: "PostgreSQL", href: "https://www.postgresql.org/" },
      { label: "Docker", href: "https://www.docker.com/" },
      { label: "React", href: "https://react.dev/" }
    ]
  },
  {
    slug: "cybersecurity",
    number: "03",
    title: "Cybersecurity",
    eyebrow: "Red Team · Web Security · API Security",
    description: "I approach software from an offensive-security perspective: understand the attack surface, test assumptions and improve the system.",
    overview: "Cybersecurity is an important part of my technical path. I focus on Red Team concepts, Web Security, API Security, Vulnerability Assessment and OWASP-oriented testing.",
    stack: ["Web Security", "API Security", "OWASP", "Red Team", "Penetration Testing", "Vulnerability Assessment", "Linux", "CLI"],
    bullets: [
      "Web application security testing",
      "API attack-surface analysis",
      "OWASP-oriented vulnerability assessment",
      "Reconnaissance and security validation",
      "Secure-by-design thinking during development"
    ],
    links: [
      { label: "OWASP", href: "https://owasp.org/" },
      { label: "OWASP Top 10", href: "https://owasp.org/www-project-top-ten/" },
      { label: "PortSwigger Web Security Academy", href: "https://portswigger.net/web-security" },
      { label: "Kali Linux", href: "https://www.kali.org/" }
    ]
  }
];

export const posts = [
  {
    slug: "from-llm-to-agent",
    title: "From LLM to Agent: what actually changes?",
    category: "AI",
    date: "2026-10-07",
    read: "6 min",
    excerpt: "The engineering boundary between a language model and a system that can actually take action."
  },
  {
    slug: "api-first-architecture",
    title: "Why API-first thinking makes AI systems easier to scale",
    category: "Backend",
    date: "2026-10-05",
    read: "5 min",
    excerpt: "How clear API boundaries make AI features easier to integrate, test and maintain."
  },
  {
    slug: "secure-by-design",
    title: "Build it, then attack it: secure-by-design development",
    category: "Security",
    date: "2026-10-02",
    read: "7 min",
    excerpt: "Using an offensive mindset while designing APIs, integrations and AI workflows."
  }
];
