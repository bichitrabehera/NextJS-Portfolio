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
  Linux,
  TypeScript,
  JavaScript,
  Supabase,
  Cloudflare,
} from "developer-icons";

export const skillStacks = [
  // Design Engineering — Primary
  {
    category: "Design Engineering",
    skills: [
      { name: "React", icon: React },
      { name: "Next.js", icon: NextJs },
      { name: "TypeScript", icon: TypeScript },
      { name: "JavaScript", icon: JavaScript },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "Motion", icon: FramerLight },
      { name: "shadcn/ui", icon: ShadcnUI },
      { name: "Figma", icon: Figma },
    ],
  },

  // Backend
  {
    category: "Backend Engineering",
    skills: [
      { name: "Node.js", icon: NodeJs },
      { name: "Express", icon: ExpressJsLight },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "MongoDB", icon: MongoDB },
      { name: "Redis", icon: Redis },
      { name: "Prisma", icon: Prisma },
      { name: "Supabase", icon: Supabase },
    ],
  },

  // AI
  {
    category: "AI Engineering",
    skills: [{ name: "OpenAI", icon: OpenAI }],
  },

  // Infrastructure
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker", icon: Docker },
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHubLight },
      { name: "Vercel", icon: VercelLight },
      { name: "Cloudflare", icon: Cloudflare },
      { name: "Linux", icon: Linux },
    ],
  },
];

export const skillMap = Object.fromEntries(
  skillStacks
    .flatMap((stack) => stack.skills)
    .map((skill) => [skill.name, skill.icon]),
);
