export type ProjectType = "personal" | "client" | "open-source";

export interface Project {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  linkUrl: string;
  github?: string;
  slug?: string;
  type?: ProjectType;
  client?: string;
  role?: string;
  featured?: boolean;
}
export const projects: Record<string, Project> = {
  audiolab: {
    name: "AudioLab",
    description:
      "Browser-based audio studio with a 9-band EQ, 8D stereo effects, real-time visualization.",
    image: "/assets/audiolab.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Web Audio API",
      "Canvas API",
      "Tailwind CSS",
      "Cloudflare",
    ],
    link: "https://soundlab.bichitra.workers.dev/",
    linkUrl: "soundlab.bichitra.workers.dev",
    github: "https://github.com/bichitrabehera/audiolab",
    slug: "audiolab",
    type: "personal",
    featured: true,
  },
  natureFoodsOrigin: {
    name: "Nature Foods Origin",
    description:
      "Full-stack e-commerce platform for Nature Foods Origin, featuring a premium responsive UI, online ordering and payments, product management, cart and checkout workflows, and a dedicated admin dashboard for managing products, orders, and store operations.",
    image: "/assets/naturefoodsorigin.png",
    techStack: ["Next.js", "Tailwind CSS"],
    link: "https://naturefoodsorigin.in/",
    linkUrl: "naturefoodsorigin.in",
    type: "client",
    featured: false,
  },
  tixlyAI: {
    name: "Tixly",
    description:
      "AI tool that turns bug screenshots into structured tickets using OCR, LLMs, and Slack integration.",
    image: "/assets/tixlyai.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Tesseract.js",
      "OpenAI",
      "Vercel",
    ],
    link: "https://tixly.bichitrabehera.dev/",
    linkUrl: "tixly.bichitrabehera.dev",
    type: "personal",
    featured: true,
  },
  iconora: {
    name: "Iconora",
    description: "A collection of open-source icons for developers.",
    image: "/assets/iconor.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Motion"],
    link: "https://iconora.vercel.app/",
    linkUrl: "iconora.vercel.app",
    type: "open-source",
    featured: true,
  },
  readmeAI: {
    name: "README.AI",
    description:
      "AI-powered tool that generates professional READMEs from GitHub repositories.",
    image: "/assets/readme.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "GitHub API",
      "Local LLM (Docker / Ollama)",
    ],
    link: "https://readme-ai-bichitra.vercel.app/",
    linkUrl: "readme-ai-bichitra.vercel.app",
    slug: "readmeAI",
    type: "personal",
    featured: true,
  },
};
