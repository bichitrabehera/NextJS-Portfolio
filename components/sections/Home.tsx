"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SOCIAL_LINKS = [
  {
    id: "github",
    icon: FaGithub,
    url: "https://github.com/bichitrabehera",
    label: "GitHub",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/bichitra-behera-99b189291",
    label: "LinkedIn",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/imdaakuu",
    label: "Instagram",
  },
  {
    id: "discord",
    icon: FaDiscord,
    url: "https://discord.com/users/1192891032220733510",
    label: "Discord",
  },
  {
    id: "email",
    icon: MdEmail,
    url: "mailto:bichitrabehera.345@gmail.com",
    label: "Email",
  },
];

function Home() {
  const age = (() => {
    const b = new Date(2005, 3, 6);
    const t = new Date();
    return (
      t.getFullYear() -
      b.getFullYear() -
      +(t < new Date(t.getFullYear(), b.getMonth(), b.getDate()))
    );
  })();

  return (
    <section
      id="home"
      className="
        max-w-2xl mx-auto
        px-6 py-12
        text-foreground bg-background
      "
    >
      <div className="relative mb-12">
        <div className="relative h-50 overflow-hidden opacity-70">
          <Image
            src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute -bottom-6 left-0">
          <Image
            src="/assets/me.jpg"
            alt="Bichitra Behera"
            width={150}
            height={150}
            className="rounded-2xl  object-cover "
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <div className="space-y-1">
          <h1 className="text-2xl font py-4 opacity-90 tracking-wide">
            Bichitra Behera
          </h1>

          <p className="text font tracking-wide py-2 opacity90">
            {age} , Product-focused Software Engineer
          </p>
        </div>

        <div className="space-y-4 max-w-xl">
          <p className="text font tracking-wide leading-relaxed">
            I’m a{" "}
            <span className="text-blue-500 font-semibold">
              Full-Stack Developer
            </span>{" "}
            who builds <span className="text-blue-500 font-semibold">fast</span>
            , <span className="text-blue-500 font-semibold">reliable</span>, and{" "}
            <span className="text-blue-500 font-semibold">user-centric</span>{" "}
            products across{" "}
            <span className="text-blue-500 font-semibold">web</span> and{" "}
            <span className="text-blue-500 font-semibold">mobile</span>.
          </p>

          <p className="text font tracking-wide leading-relaxed">
            I care deeply about{" "}
            <span className="text-blue-500 font-semibold">
              clean architecture
            </span>
            ,{" "}
            <span className="text-blue-500 font-semibold">
              thoughtful UI/UX
            </span>
            , and{" "}
            <span className="text-blue-500 font-semibold">
              scalable systems
            </span>{" "}
            that are easy to maintain and extend.
          </p>

          <p className="text font tracking-wide leading-relaxed">
            My work focuses on building{" "}
            <span className="text-blue-500 font-semibold">
              high-performance
            </span>{" "}
            applications, writing{" "}
            <span className="text-blue-500 font-semibold">
              robust backend APIs
            </span>
            , and designing{" "}
            <span className="text-blue-500 font-semibold">
              production-ready
            </span>{" "}
            solutions that stay stable as products grow.
          </p>

          <p className="text font tracking-wide leading-relaxed">
            I’m also exploring{" "}
            <span className="text-blue-500 font-semibold">GenAI + LLMs</span> to
            create smarter user experiences, and I enjoy learning modern tools
            like <span className="text-blue-500 font-semibold">Docker</span> and{" "}
            <span className="text-blue-500 font-semibold">
              cloud deployment
            </span>{" "}
            to ship projects end-to-end.
          </p>
        </div>

        <div className="flex items-center gap-6 pt-4 text-[20px]">
          {SOCIAL_LINKS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="relative group">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="
                    text-foreground opacity-70
                    transition
                    hover:opacity-100
                  "
                >
                  <Icon />
                </a>

                <span
                  className="
                    absolute -top-8 left-1/2 -translate-x-1/2
                    px-2 py-1 text-xs
                    rounded bg-foreground text-background
                    opacity-0 group-hover:opacity-100
                    transition pointer-events-none
                    whitespace-nowrap
                  "
                >
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
