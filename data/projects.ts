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
    featured: true,
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
    featured: true,
  },
};
