import {
  JavaScript,
  TypeScript,
  React,
  NextJs,
  TailwindCSS,
  FramerLight,
  NodeJs,
  ExpressJsLight,
  MongoDB,
  Redis,
  Docker,
  Git,
  GitHubLight,
  Linux,
  Bash,
  OpenAI,
  VercelLight,
  Render,
  NPM,

  // Add these if available
  Python,
  Firebase,
  PostgreSQL,
  MySQL,
  Prisma,
  Supabase,
  Figma,
  AWS,
  Postman,
} from "developer-icons";
export const skills = [
  // Frontend
  { name: "JavaScript", icon: JavaScript },
  { name: "TypeScript", icon: TypeScript },
  { name: "React", icon: React },
  { name: "Next.js", icon: NextJs },
  { name: "Tailwind CSS", icon: TailwindCSS },
  { name: "Framer Motion", icon: FramerLight },

  // Backend
  { name: "Node.js", icon: NodeJs },
  { name: "Express.js", icon: ExpressJsLight },

  // Databases
  { name: "MongoDB", icon: MongoDB },
  { name: "PostgreSQL", icon: PostgreSQL },
  { name: "MySQL", icon: MySQL },
  { name: "Redis", icon: Redis },
  { name: "Prisma", icon: Prisma },
  { name: "Supabase", icon: Supabase },

  // AI & Research
  { name: "OpenAI", icon: OpenAI },

  // IoT

  // DevOps
  { name: "Docker", icon: Docker },
  { name: "Vercel", icon: VercelLight },
  { name: "Render", icon: Render },

  // Tools
  { name: "Git", icon: Git },
  { name: "GitHub", icon: GitHubLight },
  { name: "Postman", icon: Postman },
  { name: "Figma", icon: Figma },
  { name: "Linux", icon: Linux },
  { name: "Bash", icon: Bash },
  { name: "npm", icon: NPM },
];

// Convenient lookup by name
export const skillMap = Object.fromEntries(
  skills.map((skill) => [skill.name, skill.icon]),
);
