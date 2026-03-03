"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/data/social";

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
        <div className="">
          <Image
            src="/assets/mee.jpeg"
            alt="Bichitra Behera"
            width={220}
            height={250}
            className="rounded object-cover "
            loading="eager"
          />
        </div>

        <div className="flex items-center gap-4 pt-10 text-[20px]">
          {SOCIAL_LINKS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="relative group border border-white/30 hover:border-blue-500 bg-black p-2 rounded-full"
              >
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="
                    text-white
                    transition
                    opacity-100
                    text 
                  "
                >
                  <Icon style={{ color: s.color }} />
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

        <div className="space-y-4 text-white/50">
          <p className="text font tracking-wide leading-relaxed">
            I’m a{" "}
            <span className="text-neutral-100 font-semibold">
              Full-Stack Developer
            </span>{" "}
            who builds{" "}
            <span className="text-neutral-100 font-semibold">fast</span>,{" "}
            <span className="text-neutral-100 font-semibold">reliable</span>,
            and{" "}
            <span className="text-neutral-100 font-semibold">user-centric</span>{" "}
            products across{" "}
            <span className="text-neutral-100 font-semibold">web</span> and{" "}
            <span className="text-neutral-100 font-semibold">mobile</span>.
          </p>

          <p className="text font tracking-wide leading-relaxed">
            I care deeply about{" "}
            <span className="text-neutral-100 font-semibold">
              clean architecture
            </span>
            ,{" "}
            <span className="text-neutral-100 font-semibold">
              thoughtful UI/UX
            </span>
            , and{" "}
            <span className="text-neutral-100 font-semibold">
              scalable systems
            </span>{" "}
            that are easy to maintain and extend.
          </p>

          <p className="text font tracking-wide leading-relaxed">
            My work focuses on building{" "}
            <span className="text-neutral-100 font-semibold">
              high-performance
            </span>{" "}
            applications, writing{" "}
            <span className="text-neutral-100 font-semibold">
              robust backend APIs
            </span>
            , and designing{" "}
            <span className="text-neutral-100 font-semibold">
              production-ready
            </span>{" "}
            solutions that stay stable as products grow.
          </p>

          
        </div>
      </motion.div>
    </section>
  );
}

export default memo(Home);
