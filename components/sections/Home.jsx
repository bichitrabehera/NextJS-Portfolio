"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import TimeLocation from "../TimeLocation";

const SOCIAL_LINKS = [
  { id: "github", icon: FaGithub, url: "https://github.com/bichitrabehera", label: "GitHub" },
  { id: "linkedin", icon: FaLinkedin, url: "https://www.linkedin.com/in/bichitra-behera-99b189291", label: "LinkedIn" },
  { id: "instagram", icon: FaInstagram, url: "https://www.instagram.com/imdaakuu", label: "Instagram" },
  { id: "discord", icon: FaDiscord, url: "https://discord.com/users/1192891032220733510", label: "Discord" },
  { id: "email", icon: MdEmail, url: "mailto:bichitrabehera.amcec@gmail.com", label: "Email" },
];

function Home() {
  return (
    <section
      id="home"
      className="pt-32 max-w-4xl px-6 mx-auto text-foreground"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-10"
      >
        {/* Profile */}
        <div className="relative shrink-0 group w-fit">
          <Image
            src="/assets/me.jpg"
            alt="profile"
            width={112}
            height={112}
            className="rounded-full shadow-lg object-cover"
            priority
          />

          {/* Online Dot */}
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-4 border-background" />

          {/* Tooltip */}
          <span className="absolute bottom-12 -right-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-foreground/10 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded-md border border-foreground/20 pointer-events-none">
            Online
          </span>
        </div>

        <TimeLocation />

        {/* Text */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Hi, I&apos;m <span className="text-foreground/90">Bichitra Behera</span>
            <br />
            <span className="text-foreground/70 font-[Cursor]">
              A Full Stack web developer.
            </span>
          </h1>

          <p className="text-foreground/70 md:text-lg leading-relaxed max-w-2xl">
            I build modern digital experiences across{" "}
            <span className="font-semibold text-foreground">web</span> and{" "}
            <span className="font-semibold text-foreground">mobile</span>, and I experiment with{" "}
            <span className="font-semibold text-foreground">AI agents</span> and automation systems.
            <br />
            With a focus on{" "}
            <span className="font-semibold text-foreground">clean UI</span>,{" "}
            <span className="font-semibold text-foreground">smooth interactions</span>, and{" "}
            <span className="font-semibold text-foreground">high-performance engineering</span>.
          </p>

          {/* Socials */}
          <div className="flex gap-6 pt-4 text-[22px]">
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

          {/* Contact Scroll */}
          <div className="mt-8">
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="btn cursor-pointer px-3"
            >
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default memo(Home);
