import Image from "next/image";
import Link from "next/link";

const projects = {
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
      "Helps developers generate clean, professional README files instantly by analyzing GitHub repositories. Useful for students and devs who struggle with writing structured documentation.",
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
      "A hackathon discovery platform that collects and organizes upcoming hackathons from multiple sources, saving students time and keeping listings fresh and searchable.",
    image: "/assets/devarena.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Vercel"],
    link: "https://dev-arena-nine.vercel.app/",
  },

  dataverse: {
    name: "DataVerse",
    description:
      "A department website for Data Science & Engineering that centralizes event updates, registrations, and announcements, reducing manual work through an admin panel.",
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
  },

  // synapse: {
  //   name: "Synapse",
  //   description:
  //     "A landing page for a digital identity product that lets users share multiple links using one dynamic QR code. Built for fast performance and clear product communication.",
  //   image: "/assets/synapse.jpg",
  //   techStack: ["React", "JavaScript", "Tailwind CSS"],
  //   link: "https://synapseeee.vercel.app",
  // },

  "expense-tracker": {
    name: "Expense Tracker",
    description:
      "A mobile app to track income and expenses with secure login, analytics, and a scalable backend. Helps users manage spending and stay financially aware.",
    image: "/assets/clearspend.png",
    techStack: ["React Native", "Node.js", "Express", "Redis", "Clerk"],
    link: "https://github.com/bichitrabehera/expense-tracker",
  },
};

export default async function Projects() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-6 py-6 mb-30">
        <Link
          href="/"
          className="inline-flex items-center text-sm px-4 py-2 border border-border rounded-full hover:bg-foreground hover:text-background"
        >
          ← return
        </Link>

        <div className="py-10 ">
          <h1 className="text-2xl font-bold">My Projects</h1>
        </div>

        <div className="max-w-3xl mx-auto space-y-20">
          {projects &&
            Object.entries(projects).map(([key, project]) => (
              <div key={key} className="space-y-6">
                <div className=" border border-dashed rounded-full border-foreground/40">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    width={800}
                    height={400}
                    className=" border border-border/60 rounded-2xl"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-bold tracking-tight">
                    {project.name}
                  </h2>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
              text-sm font-medium
              px-4 py-2
              border border-border/60
              rounded-full
              bg-white/5
              transition
              hover:bg-foreground hover:text-background
            "
                  >
                    Visit ↗
                  </a>
                </div>

                <p className="text-foreground/70 leading-relaxed text-[15px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                px-3 py-1
                text-xs sm:text-sm
                rounded
                border border-border/60
                bg-white/5
                text-foreground/70
              "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
