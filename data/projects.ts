export interface Project {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  linkUrl: string;
  slug?: string;
}

export const projects: Record<string, Project> = {
  tixlyAI: {
    name: "Tixly",
    description:
      "AI-powered tool that converts bug screenshots into structured tickets using OCR and LLMs, with Slack integration and support for modern developer workflows.",
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
  },

  githubContributionsUI: {
    name: "GitHub Contributions UI",
    description:
      "Open-source React component for displaying GitHub contribution heatmaps with easy integration, theming, and TypeScript support.",
    image: "/assets/githubui.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "npm"],
    link: "https://github-contributions-ui.vercel.app/",
    linkUrl: "github-contributions-ui.vercel.app",
  },

  sheBuildsBLR: {
    name: "SheBuilds BLR",
    description:
      "Official website for the SheBuilds Bangalore community, showcasing events, updates, and media through a modern interface.",
    image: "/assets/shebuildsblr.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary",
      "Vercel",
    ],
    link: "https://shebuildsblr.vercel.app/",
    linkUrl: "shebuildsblr.vercel.app",
  },

  readmeAI: {
    name: "README.AI",
    description:
      "AI-powered application that generates clean, professional README files by analyzing GitHub repositories and project metadata.",
    image: "/assets/readme.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "GitHub API",
      "Local LLM (Docker / Ollama)",
    ],
    link: "https://readme-ai-sand.vercel.app/",
    linkUrl: "readme-ai-sand.vercel.app",

    slug: "readmeAI",
  },

  devarena: {
    name: "DevArena",
    description:
      "Hackathon discovery platform that aggregates events from multiple sources using automated scraping and scheduled updates.",
    image: "/assets/devarena.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Playwright",
      "BeautifulSoup",
      "APScheduler",
      "Vercel",
      "Render",
    ],
    link: "https://dev-arena-nine.vercel.app/",
    linkUrl: "dev-arena-nine.vercel.app",

    slug: "devarena",
  },

  dataverse: {
    name: "DataVerse",
    description:
      "Comprehensive department website for AMC Engineering College supporting event management, registrations, and information sharing.",
    image: "/assets/dataverse.jpg",
    techStack: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Vercel",
      "Cloudinary",
    ],
    link: "https://dataverseamcec.vercel.app/",
    linkUrl: "dataverseamcec.vercel.app",

    slug: "dataverse",
  },
};
