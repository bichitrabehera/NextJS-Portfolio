"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  XIcon,
  ArrowUpRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

function Home() {
  return (
    <section id="home" className=" mx-auto py-8 flex-col md:flex-row">
      <div className="relative mb-8">
        <div className="rounded-2xl border border-white/10 w-fit">
          <Image
            src="/assets/me.jpg"
            alt="Bichitra Behera"
            width={120}
            height={120}
            className="rounded object-cover"
            priority
          />
        </div>
      </div>

      <div className="space-y-6 text-white/60 leading-relaxed">
        <p className="text-white mb-8">
          Building{" "}
          <a
            href="https://tixly.bichitrabehera.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Tixly
          </a>{" "}
          &{" "}
          <a
            href="https://costapi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            CostAPI
          </a>
        </p>
        <p>
          Hi, I'm <span className="text-white font-semibold">Bichitra</span> — a
          full-stack developer building modern web products. I focus on fast,
          reliable systems, clean architecture, and thoughtful developer
          experience.
        </p>

        <p>
          I build cool stuff with tech I love, always shipping{" "}
          <span className="inline-flex flex-wrap gap-2 items-center">
            <InlineChip
              href="https://github.com/bichitrabehera"
              icon={GithubIcon}
            >
              GitHub
            </InlineChip>
            <InlineChip href="https://x.com/bichitradotdev" icon={XIcon}>
              Twitter
            </InlineChip>
            <InlineChip
              href="https://www.linkedin.com/in/bichitrabehera"
              icon={LinkedinIcon}
            >
              LinkedIn
            </InlineChip>
          </span>
        </p>

        <p>
          Got an idea worth building?{" "}
          <span className="text-white">let's chat</span>{" "}
          <span className="inline-flex flex-wrap gap-2 items-center">
            <InlineChip href="https://x.com/bichitradotdev" icon={XIcon}>
              Twitter DM
            </InlineChip>
            <span className="text-white/35 text-xs">or</span>
            <InlineChip
              href="mailto:bichitrabehera.345@gmail.com"
              icon={MailIcon}
            >
              Email me
            </InlineChip>
          </span>
        </p>
      </div>
    </section>
  );
}

export default memo(Home);

function InlineChip({
  href,
  children,
}: {
  href: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 underline decoration-dotted italic"
      style={{ wordSpacing: 0, letterSpacing: "0.01em" }}
    >
      {children}
    </a>
  );
}
