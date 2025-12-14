import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Bichitra Behera | Full Stack Developer",
    template: "%s | Bichitra Behera",
  },
  description:
    "Data Science Student (3rd Year) | MERN Stack & Generative AI Enthusiast | Skilled in JavaScript, React, Node.js, Express & MongoDB | Exploring LLMs & Prompt Engineering | Open to Internships",
  keywords: [
    "Bichitra Behera",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Generative AI",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: "Bichitra Behera" }],
  creator: "Bichitra Behera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
