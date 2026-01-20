import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

const projects = {
  readmeAI: {
    name: "README.AI",
    description:
      "README.AI is an AI-powered web application that helps developers generate clean, professional, and resume-ready README files for their GitHub repositories. Users can log in using GitHub, select any repository, and instantly generate a well-structured README based on repository metadata, file structure, and configuration files. The platform focuses on clarity, minimal design, and real-world usability, making it especially helpful for students and early-stage developers who struggle with writing effective documentation.",
    image: "/assets/readmeai.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "GitHub API",
      "Local LLM (Docker / Ollama)",
    ],
    link: "https://readme-ai-sand.vercel.app/",
  },
  devarena: {
    name: "DevArena",
    description:
      "DevArena is a full-stack hackathon discovery platform designed to help students and developers find upcoming hackathons in one place. The frontend provides a clean and distraction-free interface for browsing hackathons, while the backend continuously aggregates events from multiple platforms using automated scraping and scheduled updates. Together, the system simplifies hackathon discovery by centralizing data, eliminating duplicates, and keeping listings fresh and accessible.",
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
  },

  dataverse: {
    name: "DataVerse",
    description:
      "DataVerse is a full-featured website developed for the Department of Data Science and Engineering at AMC Engineering College. The platform serves as a central hub for department-related activities, including event announcements, registrations, and information sharing. It features a modern, fully responsive user interface designed for accessibility across devices. An integrated admin panel allows authorized users to manage events, registrations, and content efficiently, reducing manual work and improving operational workflow for the department.",
    image: "/assets/dataverse.jpg",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    link: "https://dataverseamcec.vercel.app/",
  },

  synapse: {
    name: "Synapse",
    description:
      "The Synapse Landing Page is a modern and visually engaging website built to introduce and promote Synapse, a digital identity platform. The project focuses on clean design, performance, and clear communication of the product’s value. It allows users to understand how Synapse enables sharing multiple online profiles and important links through a single dynamic QR code. The landing page emphasizes conversion, responsiveness, and smooth user experience, making it suitable for marketing and early user acquisition.",
    image: "/assets/synapse.jpg",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://synapseeee.vercel.app",
  },

  "expense-tracker": {
    name: "Expense Tracker",
    description:
      "The Expense Tracker App is a cross-platform mobile application built using React Native, designed to help users securely manage their personal finances. It allows users to track income and expenses in real time, view spending analytics through an interactive dashboard, and gain better financial awareness. The application includes email-verified authentication powered by Clerk and a scalable backend built with Node.js and Express. Redis is used to optimize performance and improve data retrieval speed, ensuring a smooth and responsive user experience.",
    image: "/assets/clearspend.png",
    techStack: ["React Native", "Node.js", "Express", "Redis", "Clerk"],
    link: "https://github.com/bichitrabehera/expense-tracker",
  },
};

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams?.slug)
    ? resolvedParams.slug[0]
    : resolvedParams?.slug;
  // console.log("ProjectPage received slug:", slug);
  const project = projects[slug];

  if (!project) {
    console.warn("Project not found for slug:", slug);
    return notFound();
  }

  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-6">
        <Link
          href="/#projects"
          className="inline-flex items-center mb-6 text-sm px-4 py-2 border border-border rounded-lg hover:bg-foreground hover:text-background"
        >
          ← return
        </Link>
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={400}
          className="rounded-xl mb-8 border"
          loading="eager"
        />

        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            {project.name}
          </h1>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
      text-sm px-4 py-2
      border border-border rounded-md
      transition
      hover:bg-foreground hover:text-background
    "
          >
            Visit ↗
          </a>
        </div>

        <p className="text-foreground/70 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm border border-border rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
