import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bichitrabehera.dev"),

  title: {
    default: "Bichitra Behera | Full-Stack Developer & AI Builder",
    template: "%s | Bichitra Behera",
  },

  description:
    "Full-stack developer and AI builder. Creator of AudioLab, a browser-based audio effects studio, and Tixly, an AI bug-to-ticket tool. Recently shipped a full client e-commerce platform with live payments. Experienced with React, Next.js, Node.js, TypeScript, PostgreSQL, Redis, Docker, and modern AI tooling.",

  keywords: [
    "Bichitra Behera",
    "Bichitra",
    "Full Stack Developer",
    "Software Engineer",
    "AI Engineer",
    "Founding Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "OpenAI",
    "LLM",
    "Generative AI",
    "Tixly",
    "AudioLab",
    "Nature Foods Origin",
    "Web Development",
    "Portfolio",
  ],

  authors: [{ name: "Bichitra Behera" }],
  creator: "Bichitra Behera",
  publisher: "Bichitra Behera",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://bichitrabehera.dev",
  },

  openGraph: {
    title: "Bichitra Behera | Full-Stack Developer & AI Builder",
    description:
      "Creator of AudioLab and Tixly, and the developer behind a live client e-commerce platform. Full-stack developer building AI-powered products, scalable systems, and developer tools.",
    url: "https://bichitrabehera.dev",
    siteName: "Bichitra Behera",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bichitra Behera | Full-Stack Developer & AI Builder",
    description:
      "Building AI products, developer tools, and scalable web applications with Next.js, TypeScript, Node.js, and modern cloud infrastructure.",
    creator: "@bichitradotdev",
  },

  category: "Technology",
};
