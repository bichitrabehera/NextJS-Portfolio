import {
  React,
  NextJs,
  TailwindCSS,
  ShadcnUI,
  FramerLight,
  NodeJs,
  ExpressJsLight,
  PostgreSQL,
  MongoDB,
  Redis,
  Prisma,
  Docker,
  Git,
  GitHubLight,
  OpenAI,
  VercelLight,
  Figma,
  TypeScript,
  JavaScript,
  Supabase,
  Cloudflare,
  RadixUI,
  ReactQuery,
  Clerk,
  Cloudinary,
  Postman,
  ViteJS,
  Render,
  Linux,
} from "developer-icons";

import {
  Langchain,
  Ollama,
  Html5,
  Css3,
  Websocket,
  PineconeIcon,
  N8nIcon,
} from "@dev.icons/react";

export const skillStacks = [
  {
    category: "Design Engineering",
    skills: [
      { name: "React", icon: React },
      { name: "Next.js", icon: NextJs },
      { name: "TypeScript", icon: TypeScript },
      { name: "JavaScript", icon: JavaScript },
      { name: "HTML5", icon: Html5 },
      { name: "CSS3", icon: Css3 },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "shadcn/ui", icon: ShadcnUI },
      { name: "Radix UI", icon: RadixUI },
      { name: "Motion", icon: FramerLight },
      { name: "Figma", icon: Figma },
      { name: "Vite", icon: ViteJS },
      { name: "Web Audio API", icon: null },
      { name: "Canvas API", icon: null },
    ],
  },

  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: NodeJs },
      { name: "Express.js", icon: ExpressJsLight },
      { name: "REST APIs", icon: null },
      { name: "WebSockets", icon: Websocket },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "MongoDB", icon: MongoDB },
      { name: "Redis", icon: Redis },
      { name: "Prisma ORM", icon: Prisma },
      { name: "Supabase", icon: Supabase },
      { name: "Clerk", icon: Clerk },
    ],
  },
  {
    category: "AI & LLM Engineering",
    skills: [
      { name: "N8N", icon: N8nIcon },
      { name: "OpenAI API", icon: OpenAI },
      { name: "LangChain", icon: Langchain },
      { name: "Ollama", icon: Ollama },
      { name: "RAG", icon: null },
      { name: "AI Agents", icon: null },
      { name: "Vector Databases", icon: null },
      { name: "Qdrant", icon: null },
      { name: "Pinecone", icon: PineconeIcon },
    ],
  },
  {
    category: "Infrastructure & Developer Tools",
    skills: [
      { name: "Docker", icon: Docker },
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHubLight },
      { name: "Vercel", icon: VercelLight },
      { name: "Cloudflare", icon: Cloudflare },
      { name: "Cloudinary", icon: Cloudinary },
      { name: "Render", icon: Render },
      { name: "Postman", icon: Postman },
      { name: "Linux", icon: Linux },
    ],
  },
];

export const skillMap = Object.fromEntries(
  skillStacks
    .flatMap((stack) => stack.skills)
    .map((skill) => [skill.name, skill.icon]),
);
