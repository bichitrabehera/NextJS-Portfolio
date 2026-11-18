export type ProjectType = "personal" | "client" | "open-source";

export interface Project {
  name: string;
  description: string;
  caseStudy?: string;

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
  worksy: {
    name: "Worksy",

    description:
      "AI-powered job discovery platform for students and freshers, featuring personalized job recommendations, profile-based onboarding, saved jobs, and application tracking.",

    caseStudy:
      "I built Worksy to simplify job discovery for students and freshers by connecting their skills, preferences, and career goals with relevant opportunities. The platform features profile-based onboarding, personalized job listings, bookmarking, and application tracking, with direct links to external application pages. I focused on creating a streamlined experience with a responsive interface and reusable components.",

    image: "/assets/worksy.png",

    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Clerk",
      "PostgreSQL",
    ],

    link: "https://worksy.bichitrabehera.dev/",
    linkUrl: "worksy.bichitrabehera.dev",

    github: "",

    slug: "worksy",
    type: "personal",
    featured: true,
  },
  audiolab: {
    name: "AudioLab",

    description:
      "Browser-based audio studio with a 9-band EQ, 8D stereo effects, and real-time visualization.",

    caseStudy:
      "I built AudioLab to make real-time audio experimentation accessible directly in the browser without requiring desktop software. The audio processing runs through the Web Audio API, while Canvas handles real-time visualization and Next.js provides the interface. Keeping the processing client-side made the experience immediate and avoided introducing a backend for the core audio workflow.",

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

  tixlyAI: {
    name: "Tixly",

    description:
      "AI tool that turns bug screenshots into structured tickets using OCR, LLMs, and Slack integration.",

    caseStudy:
      "I built Tixly to reduce the friction between discovering a bug in a screenshot and turning it into a useful engineering ticket. OCR extracts information from the image, an LLM interprets it into structured ticket content, and Slack provides a natural place to share the result. Keeping these steps separate made the workflow easier to reason about while allowing image extraction and AI interpretation to evolve independently.",

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
    slug: "tixly",
    type: "personal",
    featured: true,
  },

  natureFoodsOrigin: {
    name: "Nature Foods Origin",

    description:
      "Full-stack e-commerce platform for Nature Foods Origin, featuring a premium responsive UI, online ordering and payments, product management, cart and checkout workflows, and a dedicated admin dashboard for managing products, orders, and store operations.",

    caseStudy:
      "I built Nature Foods Origin as a complete e-commerce system rather than a simple storefront. The customer experience covers product discovery, cart, checkout, payments, and ordering, while a separate admin workflow handles products and orders. Next.js provides the application foundation, while Tailwind CSS keeps the storefront responsive and consistent across the experience.",

    image: "/assets/naturefoodsorigin.png",

    techStack: ["Next.js", "Tailwind CSS"],

    link: "https://naturefoodsorigin.in/",
    linkUrl: "naturefoodsorigin.in",
    slug: "nature-foods-origin",
    type: "client",
    featured: false,
  },

  iconora: {
    name: "Iconora",

    description: "A collection of open-source icons for developers.",

    image: "/assets/iconor.png",

    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Motion"],

    link: "https://iconora.vercel.app/",
    linkUrl: "iconora.vercel.app",
    slug: "iconora",
    type: "open-source",
    featured: false,
  },

  readmeAI: {
    name: "README.AI",

    description:
      "Repository analysis tool that scans a GitHub repo, detects its language, framework, and package manager, and generates a structured README with a live Markdown preview.",

    caseStudy:
      "I built README.AI to remove the blank-page problem of documenting a project. After a read-only GitHub sign-in, the app analyzes the repository file tree to detect the language, framework, and package manager before any text is written, so the generated README reflects the real project instead of generic filler. The result is shown in a GitHub Flavored Markdown preview and can be copied in one click.",

    image: "/assets/readmeai.png",

    techStack: ["Next.js", "GitHub OAuth", "OpenAI"],

    link: "https://readme-ai-bichitra.vercel.app/",
    linkUrl: "readme-ai-bichitra.vercel.app",
    github: "",
    slug: "readme-ai",
    type: "personal",
    featured: false,
  },

  locationAgent: {
    name: "AI Location Agent",

    description:
      "AI agent that takes a natural-language request for a place and returns a ranked list of results.",

    // TODO: add a case study once the repo details are confirmed.

    image: "/assets/location-agent.png",

    // TODO: fill in the real stack from the repo.
    techStack: [],

    link: "https://github.com/bichitrabehera/location-agent",
    linkUrl: "github.com/bichitrabehera/location-agent",
    github: "https://github.com/bichitrabehera/location-agent",
    slug: "location-agent",
    type: "personal",
    featured: false,
  },

  ragLangchain: {
    name: "RAG LangChain",

    description:
      "Retrieval-augmented generation pipeline built with LangChain.",

    // TODO: add a case study once the repo details are confirmed.

    image: "/assets/rag-langchain.png",

    // TODO: confirm the full stack (vector store, LLM, language).
    techStack: ["LangChain"],

    link: "https://github.com/bichitrabehera/rag-langchain",
    linkUrl: "github.com/bichitrabehera/rag-langchain",
    github: "https://github.com/bichitrabehera/rag-langchain",
    slug: "rag-langchain",
    type: "personal",
    featured: false,
  },

  devArena: {
    name: "DevArena",

    description:
      "Curated hackathon hub that gathers events from top platforms across Web, AI, Blockchain, and Open Source, with deadlines, prizes, and platforms in one feed.",

    caseStudy:
      "I built DevArena because hackathons are scattered across many platforms and are easy to miss. It brings them into a single browsable list covering Web, AI, Blockchain, and Open Source events, with the deadline, prize, and host platform visible for each one so people can decide quickly what is worth entering.",

    image: "/assets/devarena.png",

    techStack: ["Next.js", "Vercel"],

    link: "https://dev-arena-nine.vercel.app/",
    linkUrl: "dev-arena-nine.vercel.app",
    github: "",
    slug: "devarena",
    type: "personal",
    featured: false,
  },

  kinetiq: {
    name: "Kinetiq",

    description:
      "Collection of shadcn components enhanced with sound, motion, and haptic feedback, installable through the shadcn registry.",

    caseStudy:
      "I built Kinetiq to make interface interactions feel more physical. Sound is synthesized with the Web Audio API so no audio files are needed, motion uses spring presets from Motion for React, and haptics use the Vibration API and quietly do nothing where it is unsupported. The components install through the shadcn registry and are copied into the project, so developers own and can customize the code. A playground lets you tune all three feedback types together and copy the result.",

    image: "/assets/kinetiq.png",

    techStack: [
      "Next.js",
      "shadcn/ui",
      "Motion",
      "Web Audio API",
      "Vibration API",
      "Vercel",
    ],

    link: "https://kinetiq-five-sigma.vercel.app/",
    linkUrl: "kinetiq-five-sigma.vercel.app",
    github: "",
    slug: "kinetiq",
    type: "open-source",
    featured: false,
  },

  lumora: {
    name: "Lumora",

    description:
      "Template-based builder for personalized celebration pages: pick a template, add photos, messages, and audio, then share the result as a single mobile-first link.",

    caseStudy:
      "I built Lumora so anyone can turn a birthday, anniversary, or apology into a polished one-page website without writing code. Users choose a template, swap in their own photos, words, dates, and a song, preview it on desktop and phone, and share it by link or QR card. The project includes a template gallery, an editor, and sign-in for saving pages.",

    image: "/assets/lumora.png",

    techStack: ["Next.js", "Vercel"],

    link: "https://lumora-opal-six.vercel.app/",
    linkUrl: "lumora-opal-six.vercel.app",
    github: "",
    slug: "lumora",
    type: "personal",
    featured: false,
  },

  githubContributionsUI: {
    name: "GitHub Contributions UI",

    description:
      "Zero-dependency React component that renders a GitHub-style contribution calendar with four themes, published on npm.",

    caseStudy:
      "I built GitHub Contributions UI so developers can add a contribution graph to a portfolio or dashboard without wiring up API keys or extra libraries. It is a single React and TypeScript component styled with Tailwind CSS, available as an npm package, with light, dark, blue, and purple themes and a live demo that works with any GitHub username.",

    image: "/assets/github-contributions-ui.png",

    techStack: ["React", "TypeScript", "Tailwind CSS", "npm"],

    link: "https://github-contributions-ui.vercel.app/",
    linkUrl: "github-contributions-ui.vercel.app",
    github: "https://github.com/bichitrabehera/github-contributions-ui",
    slug: "github-contributions-ui",
    type: "open-source",
    featured: false,
  },
};