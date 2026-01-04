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
    url: "mailto:bichitrabehera.amcec@gmail.com",
    label: "Email",
  },
];

function Home() {
  const date = Date.now()
  return (
    <section
      id="home"
      className="max-w-2xl mx-auto text-foreground bg-background"
    >
      <div className="relative min-h-48 mt-5 w-full px-6">
        <div className="relative h-40 overflow-hidden opacity-70 md:h-50">
          <Image
            src="https://images.unsplash.com/photo-1766585605985-997ac7e3d6a5?w=500&auto=format&fit=crop&q=60"
            alt="Banner"
            fill
            className="object-cover object-center"
            priority
            quality={75}
            sizes="100vw"
          />
        </div>

        <div className="absolute -bottom-5 left-6">
          <div className="relative">
            <Image
              src="/assets/me.jpg"
              alt="profile"
              width={90}
              height={90}
              quality={75}
              className="rounded-[25] border-2 object-cover"
            />

            <div className="relative group">
              <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-background" />

              <div
                className="absolute bottom-6 -right-10 hidden group-hover:flex 
                  bg-black text-white text-xs px-2 py-1 rounded"
              >
                Online
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="px-6 flex flex-col gap-6"
      >
        <div className="space-y-2 font-mono">
          <h1 className="text-3xl mt-6 leading-tight font">
            <span className="text-lime-400  decoration-wavy font-space">
              <span className="text-foreground">Bichitra Behera</span>
            </span>
            <br />
            <span className="text-foreground/70 text-lg py-3 font-[Cursor]">
              A Full Stack web developer.
            </span>
          </h1>

          <p className="text-foreground/70 md:text-lg py-3 leading-relaxed max-w-2xl">
            I build modern digital experiences across{" "}
            <span className="font-semibold  text-blue-400">web</span> and{" "}
            <span className="font-semibold  text-blue-400">mobile</span>, and I
            experiment with{" "}
            <span className="font-semibold  text-blue-400">AI agents</span> and
            automation systems.
            <br />
            With a focus on{" "}
            <span className="font-semibold  text-blue-400">
              clean UI
            </span>,{" "}
            <span className="font-semibold  text-blue-400">
              smooth interactions
            </span>
            , and{" "}
            <span className="font-semibold text-blue-400">
              high-performance engineering
            </span>
            .
          </p>
        </div>
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
