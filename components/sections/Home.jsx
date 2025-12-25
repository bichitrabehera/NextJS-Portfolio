"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SOCIAL_LINKS = [
  { id: "github", icon: FaGithub, url: "https://github.com/bichitrabehera", label: "GitHub" },
  { id: "linkedin", icon: FaLinkedin, url: "https://www.linkedin.com/in/bichitra-behera-99b189291", label: "LinkedIn" },
  { id: "instagram", icon: FaInstagram, url: "https://www.instagram.com/imdaakuu", label: "Instagram" },
  { id: "discord", icon: FaDiscord, url: "https://discord.com/users/1192891032220733510", label: "Discord" },
  { id: "email", icon: MdEmail, url: "mailto:bichitrabehera.amcec@gmail.com", label: "Email" },
];

function Home() {
  return (
    <section id="home" className="max-w-3xl mx-auto text-foreground">
      {/* ===== Banner ===== */}
      <div className="relative min-h-48 mt-10 w-full px-6">
        <div className="relative h-48 rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1766585605985-997ac7e3d6a5?w=500&auto=format&fit=crop&q=60"
            alt="Banner"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>

        {/* Profile image */}
        <div className="absolute -bottom-12 left-6">
          <div className="relative">
            <Image
              src="/assets/me.jpg"
              alt="profile"
              width={112}
              height={112}
              quality={100}
              className="rounded-full border-2 object-cover"
            />

            {/* Online */}
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
          </div>
        </div>
      </div>

      {/* ===== Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="px-6 pt-16 pb-10 flex flex-col gap-6"
      >
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-border w-fit">
            <span className="w-2 h-2 bg-lime-400 rounded-full" />
            Open to internships & collaborations
          </span>

          <h1 className="text-3xl md:text-5xl leading-tight font-semibold">
            Hi, I&apos;m{" "}
            <span className="text-lime-400 underline decoration-wavy font-space">
              <span className="text-foreground/90">Bichitra Behera</span>
            </span>
            <br />
            <span className="text-foreground/70 font-[Cursor]">
              A Full Stack web developer.
            </span>
          </h1>

          <p className="text-foreground/70 md:text-lg leading-relaxed max-w-2xl">
            I build modern digital experiences across{" "}
            <span className="font-semibold text-foreground">web</span> and{" "}
            <span className="font-semibold text-foreground">mobile</span>, and I
            experiment with{" "}
            <span className="font-semibold text-foreground">AI agents</span> and
            automation systems.
            <br />
            With a focus on{" "}
            <span className="font-semibold text-foreground">clean UI</span>,{" "}
            <span className="font-semibold text-foreground">
              smooth interactions
            </span>
            , and{" "}
            <span className="font-semibold text-foreground">
              high-performance engineering
            </span>
            .
          </p>
        </div>

        {/* Quick highlights */}
        <div className="flex flex-wrap gap-x-2 gap-y-3 pt-2 text">
          {[
            "React & Next.js",
            "Node.js & APIs",
            "UI/UX Focused",
            "AI Experiments",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-foreground/80"
            >
              <span className="w-2 h-2 rounded-full bg-lime-400" />
              {item}
            </span>
          ))}
        </div>


        {/* Socials */}
        <div className="flex items-center gap-6 pt-2 text-[22px]">
          {SOCIAL_LINKS.map((s) => {
            const IconComponent = s.icon;
            return (
              <div key={s.id} className="relative group">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-foreground/50 transition hover:text-foreground hover:scale-110"
                >
                  <IconComponent />
                </a>

                <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 px-2 py-1 text-xs rounded bg-foreground text-background transition pointer-events-none whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default memo(Home);
