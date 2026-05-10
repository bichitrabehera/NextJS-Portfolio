export interface Project {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  slug?: string;
}

export const projects: Record<string, Project> = {
  tixlyAI: {
    name: "TixlyAI",
    description:
      "An AI-powered developer tool that converts screenshots of bugs and UI issues into structured, ready-to-use tickets. Built for speed and simplicity, it extracts context using OCR and LLMs, then formats output with title, steps, and expected vs actual behavior. Features Slack integration for instant sharing, with upcoming support for Jira, authentication, and team workflows.",
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
  },
  githubContributionsUI: {
    name: "GitHub Contributions UI",
    description:
      "A lightweight open-source React component for rendering GitHub contribution heatmaps in portfolios and dashboards. Built with TypeScript and Tailwind CSS, featuring plug-and-play integration, theme customization, and npm distribution for easy developer adoption.",
    image: "/assets/githubui.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "npm"],
    link: "https://github-contributions-ui.vercel.app/",
  },
  sheBuildsBLR: {
    name: "SheBuilds BLR",
    description:
      "Official platform for the SheBuilds Bangalore community, built to showcase events, updates, and initiatives in one place. I led the web team, built most of the frontend, and integrated Cloudinary uploads for managing media content.",
    image: "/assets/shebuildsblr.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary",
      "Vercel",
    ],
    link: "https://shebuildsblr.vercel.app/",
  },
  readmeAI: {
    name: "README.AI",
    description:
      "README.AI is an AI-powered web application that helps developers generate clean, professional, and resume-ready README files for their GitHub repositories. Users can log in using GitHub, select any repository, and instantly generate a well-structured README based on repository metadata, file structure, and configuration files.",
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
    slug: "readmeAI",
  },
  devarena: {
    name: "DevArena",
    description:
      "DevArena is a full-stack hackathon discovery platform designed to help students and developers find upcoming hackathons in one place. The frontend provides a clean and distraction-free interface for browsing hackathons, while the backend continuously aggregates events from multiple platforms using automated scraping and scheduled updates.",
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
    slug: "devarena",
  },
  dataverse: {
    name: "DataVerse",
    description:
      "DataVerse is a full-featured website developed for the Department of Data Science and Engineering at AMC Engineering College. The platform serves as a central hub for department-related activities, including event announcements, registrations, and information sharing.",
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
    slug: "dataverse",
  },
  "expense-tracker": {
    name: "Expense Tracker",
    description:
      "The Expense Tracker App is a cross-platform mobile application built using React Native, designed to help users securely manage their personal finances. It allows users to track income and expenses in real time, view spending analytics through an interactive dashboard.",
    image: "/assets/clearspend.png",
    techStack: ["React Native", "Node.js", "Express", "Redis", "Clerk"],
    link: "https://github.com/bichitrabehera/expense-tracker",
    slug: "expense-tracker",
  },
};
