import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

const projects = {
  dataverse: {
    name: "DataVerse",
    description:
      "DataVerse is a full-featured website developed for the Department of Data Science and Engineering at AMC Engineering College. The platform serves as a central hub for department-related activities, including event announcements, registrations, and information sharing. It features a modern, fully responsive user interface designed for accessibility across devices. An integrated admin panel allows authorized users to manage events, registrations, and content efficiently, reducing manual work and improving operational workflow for the department.",
    image: "/assets/dataverse.jpg",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    link: "https://dataverseamcec.vercel.app/",
  },

  synapse: {
    name: "Synapse Landing Page",
    description:
      "The Synapse Landing Page is a modern and visually engaging website built to introduce and promote Synapse, a digital identity platform. The project focuses on clean design, performance, and clear communication of the product’s value. It allows users to understand how Synapse enables sharing multiple online profiles and important links through a single dynamic QR code. The landing page emphasizes conversion, responsiveness, and smooth user experience, making it suitable for marketing and early user acquisition.",
    image: "/assets/synapse.jpg",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://synapseeee.vercel.app",
  },

  "expense-tracker": {
    name: "Expense Tracker App",
    description:
      "The Expense Tracker App is a cross-platform mobile application built using React Native, designed to help users securely manage their personal finances. It allows users to track income and expenses in real time, view spending analytics through an interactive dashboard, and gain better financial awareness. The application includes email-verified authentication powered by Clerk and a scalable backend built with Node.js and Express. Redis is used to optimize performance and improve data retrieval speed, ensuring a smooth and responsive user experience.",
    image: "/assets/clearspend.png",
    techStack: ["React Native", "Node.js", "Express", "Redis", "Clerk"],
    link: "https://github.com/bichitrabehera/expense-tracker",
  },
};


export default async function ProjectPage({ params }) {
  // `params` can be a Promise in the App Router; unwrap it.
  const resolvedParams = await params;
  // normalize slug (handle possible array from catch-all)
  const slug = Array.isArray(resolvedParams?.slug)
    ? resolvedParams.slug[0]
    : resolvedParams?.slug;
  console.log("ProjectPage received slug:", slug);
  const project = projects[slug];

  if (!project) {
    console.warn("Project not found for slug:", slug);
    return notFound();
  }

  return (

    <>
      <section className="max-w-3xl mx-auto px-6 py-6">
        <Link href="/#projects" className="inline-flex items-center mb-6 text-sm px-4 py-2 border border-border rounded-lg hover:bg-foreground hover:text-background">
          ← Go Back
        </Link>
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={400}
          className="rounded-xl mb-8"
        />

        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
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

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-block px-6 py-2
          border border-border rounded-lg
          transition hover:bg-foreground hover:text-background
        "
        >
          Visit Project
        </a>
      </section>
    </>
  );
}
